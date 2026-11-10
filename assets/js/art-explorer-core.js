(function(root){
'use strict';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function textWidth(s,font){let units=0;for(const c of s)units+=c.charCodeAt(0)>255?1:/[MW@%]/.test(c)?.9:/[ilI., !:;|]/.test(c)?.34:.62;return units*font;}
// Minimum-cost matching assigns each label to one non-overlapping grid slot.
// Only text moves: data points always retain their original coordinates.
function match(cost){
 const n=cost.length;if(!n)return[];const m=cost[0].length;if(m<n)throw Error('Not enough label slots');
 const u=new Float64Array(n+1),v=new Float64Array(m+1),p=new Int32Array(m+1),way=new Int32Array(m+1);
 for(let i=1;i<=n;i++){p[0]=i;let j0=0;const min=new Float64Array(m+1).fill(Infinity),used=new Uint8Array(m+1);
  do{used[j0]=1;const i0=p[j0];let delta=Infinity,j1=0;for(let j=1;j<=m;j++)if(!used[j]){const cur=cost[i0-1][j-1]-u[i0]-v[j];if(cur<min[j]){min[j]=cur;way[j]=j0;}if(min[j]<delta){delta=min[j];j1=j;}}for(let j=0;j<=m;j++)if(used[j]){u[p[j]]+=delta;v[j]-=delta;}else min[j]-=delta;j0=j1;}while(p[j0]!==0);
  do{const j1=way[j0];p[j0]=p[j1];j0=j1;}while(j0);
 }
 const out=new Array(n);for(let j=1;j<=m;j++)if(p[j])out[p[j]-1]=j-1;return out;
}
function layoutLabels(points,box,measure=textWidth,maxFont=12.5,textOf=item=>item.name){
 if(!points.length)return{labels:[],font:maxFont,expanded:false};
 let font=maxFont,extraRows=0;
 for(;;){
  const widths=points.map(p=>measure(textOf(p.item),font)+16),cellW=Math.max(...widths)+8,cols=Math.max(1,Math.floor(box.w/cellW));
  const rows=Math.max(Math.ceil(points.length/cols),Math.floor(box.h/(font+9)))+extraRows,neededH=Math.max(box.h,rows*(font+(extraRows?7:9)));
  if(neededH>box.h&&font>9.5){font-=.5;continue;}
  const slotW=box.w/cols,slotH=neededH/rows,slots=[];
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++)slots.push({x:box.x+(x+.5)*slotW,y:box.y+(y+.5)*slotH});
  const targets=points.map((p,i)=>slots.map(s=>{
   const minX=s.x-slotW/2+widths[i]/2+1,maxX=s.x+slotW/2-widths[i]/2-1,slackY=Math.max(0,(slotH-font-6)/2-1);
   let best={x:s.x,y:s.y,cost:1e12,blocked:true};
   for(const y of [s.y,s.y-slackY,s.y+slackY]){
    const near=points.filter(q=>Math.abs(q.py-y)<(font+6)/2+8);
    const candidates=[clamp(p.px,minX,maxX),s.x,minX,maxX];
    for(const q of near)candidates.push(q.px-widths[i]/2-8.1,q.px+widths[i]/2+8.1);
    for(const x of candidates){if(x<minX||x>maxX)continue;const blocked=near.some(q=>Math.abs(q.px-x)<widths[i]/2+8);const cost=(p.px-x)**2+(p.py-y)**2*1.3+(blocked?1e10:0);if(cost<best.cost)best={x,y,cost,blocked};}
   }
   return best;
  }));
  const cost=targets.map((row,i)=>row.map((s,j)=>s.cost+j*.00001*(i+1)));
  const assignments=match(cost),collisions=assignments.filter((j,i)=>targets[i][j].blocked).length;
  if(collisions&&font>9.5){font-=.5;continue;}
  if(collisions&&extraRows<12){extraRows++;continue;}
  return{font,expanded:neededH>box.h,neededH,collisions,labels:points.map((p,i)=>({...p,lx:targets[i][assignments[i]].x,ly:targets[i][assignments[i]].y,w:widths[i],h:font+6,font}))};
 }
}
function makeScene(items,state,size,axes,measure=textWidth){
 const w=Math.max(820,size.width),h=Math.max(480,size.height),xkey=state.x,ykey=state.y;
 const pending=items.filter(g=>g.values[xkey]===null||g.values[ykey]===null),selected=items.find(g=>g.key===state.selected);
 const zoom=state.zoom||1,span=100/zoom,start=v=>clamp((v??50)-span/2,0,100-span);
 const x0=zoom===1?0:start(selected?.values[xkey]),y0=zoom===1?0:start(selected?.values[ykey]);
 const box={l:pending.some(g=>g.values[xkey]===null)?132:106,r:w-32,t:52,b:h-(pending.length?168:76)};
 const X=v=>box.l+(state.reverseX?1-(v-x0)/span:(v-x0)/span)*(box.r-box.l);
 const Y=v=>box.b-(state.reverseY?1-(v-y0)/span:(v-y0)/span)*(box.b-box.t);
 const points=items.map(item=>{const x=item.values[xkey],y=item.values[ykey],unknown=x===null||y===null;return{item,x,y,unknown,px:x===null?box.l-57:X(x),py:y===null?box.b+71:Y(y)};});
 const visible=points.filter(p=>(p.x===null||p.x>=x0&&p.x<=x0+span)&&(p.y===null||p.y>=y0&&p.y<=y0+span));
 const known=visible.filter(p=>!p.unknown),unknown=visible.filter(p=>p.unknown);
 const numbered=state.labels==='none',textOf=item=>numbered?item.code:item.name;
 const need=state.labels==='all'||numbered?known:state.labels==='selected'?known.filter(p=>p.item.key===state.selected):[];
 const planned=layoutLabels(need,{x:box.l+5,y:box.t+10,w:box.r-box.l-10,h:box.b-box.t-20},measure,numbered?11:state.fullscreen?12.5:12,textOf);
 if(planned.expanded)return makeScene(items,state,{width:w,height:h+planned.neededH-(box.b-box.t-20)+12},axes,measure);
 const labels=[...planned.labels];
 const pendingNames=state.labels==='all'||numbered?unknown:state.labels==='selected'?unknown.filter(p=>p.item.key===state.selected):[];
 if(pendingNames.length){const p=layoutLabels(pendingNames,{x:box.l+3,y:box.b+85,w:box.r-box.l-6,h:64},measure,11.5,textOf);labels.push(...p.labels);}
 const groups=new Map();for(const p of visible){const k=p.px+','+p.py;if(!groups.has(k))groups.set(k,[]);groups.get(k).push(p);}
 return{w,h,box,x0,y0,span,X,Y,points:visible,groups:[...groups.values()],labels:numbered?[]:labels,badges:numbered?labels:[],font:planned.font,overflow:planned.expanded,unknown,items,axes,state};
}
function renderSvg(s){
 const {w,h,box:b,state,axes}=s;const ax=axes[state.x],ay=axes[state.y];
 const theme={grid:'#dce5df',ink:'#263e45',muted:'#6d8386'};
 const tickValues=(key,start,span)=>key==='era'&&span===100?[0,10,20,30,40,50,60,70,85,100]:Array.from({length:6},(_,i)=>start+span*i/5);
 const eraText={0:'远古',10:'早期文明',20:'古典',30:'中古',40:'19世纪',50:'现代',60:'22–23世纪',70:'星际',85:'远未来',100:'遥远未来'};
 let out=`<svg xmlns="http://www.w3.org/2000/svg" id="scatter-svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="group" aria-label="${esc(ax.name)}与${esc(ay.name)}的游戏分布图" font-family="Segoe UI,Microsoft YaHei,sans-serif"><style>.label-box{fill:#fff;fill-opacity:.96;stroke:#d8e2db;stroke-width:.6}.name-text{fill:#264149;font-weight:500}.leader{fill:none;stroke-width:.85;opacity:.25}.hover-leader{opacity:0}.name-node{cursor:pointer}.name-node:hover .label-box,.name-node.active .label-box{fill:#e9f4ee;stroke:#24675c;stroke-width:1.3}.name-node:hover .leader,.name-node.active .leader{opacity:1;stroke-width:2}.name-node:focus{outline:none}.name-node:focus .label-box{stroke:#c48a2d;stroke-width:2}.axis-label{fill:#24464c;font-size:13px;font-weight:600}.point{cursor:pointer}.point:hover circle{stroke:#1e363e;stroke-width:2.2}</style><rect width="${w}" height="${h}" fill="#fafcf9"/><rect x="${b.l}" y="${b.t}" width="${b.r-b.l}" height="${b.b-b.t}" rx="2" fill="#f1f5f1" stroke="#cdd9d1"/>`;
 const midY=s.Y(50),midX=s.X(50);
 if(midY>b.t&&midY<b.b)out+=`<rect x="${b.l}" y="${b.t}" width="${b.r-b.l}" height="${midY-b.t}" fill="#eff2f7"/>`;
 for(const val of tickValues(state.x,s.x0,s.span)){const x=s.X(val);out+=`<path d="M${x} ${b.t}V${b.b}" stroke="${theme.grid}"/><text x="${x}" y="${b.b+23}" text-anchor="middle" fill="${theme.muted}" font-size="11">${state.x==='era'?esc(eraText[val]||Math.round(val)):Math.round(val)}</text>`;}
 for(const val of tickValues(state.y,s.y0,s.span)){const y=s.Y(val);out+=`<path d="M${b.l} ${y}H${b.r}" stroke="${theme.grid}"/><text x="${b.l-15}" y="${y+4}" text-anchor="end" fill="${theme.muted}" font-size="11">${state.y==='era'?val+' · '+esc(eraText[val]||''):Math.round(val)}</text>`;}
 if(midY>=b.t&&midY<=b.b)out+=`<path d="M${b.l} ${midY}H${b.r}" stroke="#9db6b2" stroke-dasharray="4 5"/>`;
 if(midX>=b.l&&midX<=b.r)out+=`<path d="M${midX} ${b.t}V${b.b}" stroke="#b2c3be" stroke-dasharray="4 5"/>`;
 const xlow=state.reverseX?ax.high:ax.low,xhigh=state.reverseX?ax.low:ax.high,ytop=state.reverseY?ay.low:ay.high;
 out+=`<text x="${b.l}" y="27" class="axis-label">Y · ${esc(ay.name)}　↑ ${esc(ytop)}</text><text x="${b.r}" y="27" text-anchor="end" fill="#718587" font-size="11">${s.points.length} 个样本 / ${s.labels.length} 个完整名称 · ${state.zoom}×</text><text x="${b.l}" y="${b.b+48}" class="axis-label">${esc(xlow)}</text><text x="${(b.l+b.r)/2}" y="${b.b+48}" text-anchor="middle" class="axis-label">X · ${esc(ax.name)} →</text><text x="${b.r}" y="${b.b+48}" text-anchor="end" class="axis-label">${esc(xhigh)}</text>`;
 if(s.unknown.length){if(s.unknown.some(p=>p.x===null))out+=`<rect x="${b.l-74}" y="${b.t-8}" width="34" height="${b.b-b.t+16}" rx="7" fill="#eeefec" stroke="#c8d2cc" stroke-dasharray="3 3"/><text x="${b.l-56}" y="${b.t-17}" text-anchor="middle" fill="#74817a" font-size="10">X待定</text>`;
 if(s.unknown.some(p=>p.y===null))out+=`<path d="M${b.l} ${b.b+71}H${b.r}" stroke="#bdc9c2" stroke-dasharray="3 3"/><text x="${b.l-13}" y="${b.b+75}" text-anchor="end" fill="#74817a" font-size="11">Y待定</text>`;
 out+=`<text x="${b.l-13}" y="${b.b+114}" text-anchor="end" fill="#74817a" font-size="10">待定样本</text>`;}
 // Quiet leaders sit beneath every label; a hovered label draws one emphasized path.
 for(const p of [...s.labels,...s.badges]){const ex=clamp(p.px,p.lx-p.w/2,p.lx+p.w/2),ey=clamp(p.py,p.ly-p.h/2,p.ly+p.h/2);out+=`<path class="leader" stroke="${p.item.color}" d="M${p.px} ${p.py}L${ex} ${ey}"/>`;}
 for(const p of s.badges){out+=`<g class="name-node number-node${p.item.key===state.selected?' active':''}" tabindex="0" role="button" data-key="${esc(p.item.key)}" data-number="${esc(p.item.code)}" aria-label="${esc(p.item.code+' '+p.item.name)}"><rect class="label-box" x="${p.lx-p.w/2}" y="${p.ly-p.h/2}" width="${p.w}" height="${p.h}" rx="4"/><text x="${p.lx}" y="${p.ly+3.8}" text-anchor="middle" fill="${p.item.color}" font-size="${p.font}" font-weight="650">${esc(p.item.code)}</text></g>`;}
 for(const p of s.labels){const key=esc(p.item.key),active=p.item.key===state.selected;const ex=clamp(p.px,p.lx-p.w/2,p.lx+p.w/2),ey=clamp(p.py,p.ly-p.h/2,p.ly+p.h/2);out+=`<g class="name-node${active?' active':''}" tabindex="0" role="button" data-key="${key}" aria-label="${esc(p.item.name)}，${p.x===null?'X待定':'X '+p.x}，${p.y===null?'Y待定':'Y '+p.y}"><title>${esc(p.item.name)} · ${p.x??'待定'}, ${p.y??'待定'}</title><path class="leader hover-leader" stroke="${p.item.color}" d="M${p.px} ${p.py}L${ex} ${ey}"/><rect class="label-box" x="${p.lx-p.w/2}" y="${p.ly-p.h/2}" width="${p.w}" height="${p.h}" rx="3"/><circle cx="${p.lx-p.w/2+5}" cy="${p.ly}" r="2" fill="${p.item.color}"/><text class="name-text" x="${p.lx+2}" y="${p.ly+3.8}" text-anchor="middle" font-size="${p.font}">${esc(p.item.name)}</text></g>`;}
 for(const peers of s.groups){const p=peers.find(p=>p.item.key===state.selected)||peers[0],selected=peers.some(p=>p.item.key===state.selected),r=peers.length>1?7:4.2;out+=`<g class="point" data-key="${esc(p.item.key)}" tabindex="0" role="button" aria-label="${esc(peers.map(p=>p.item.name).join('、'))}"><title>${esc(peers.map(p=>p.item.name).join('、'))}</title>${selected?`<circle cx="${p.px}" cy="${p.py}" r="${r+4}" fill="none" stroke="#193f46" stroke-width="1.5"/>`:''}<circle cx="${p.px}" cy="${p.py}" r="${r}" fill="${p.unknown?'#fff':p.item.color}" stroke="${p.unknown?p.item.color:'#fff'}" stroke-width="1.3"/>${peers.length>1?`<text x="${p.px}" y="${p.py+2.6}" text-anchor="middle" fill="${p.unknown?p.item.color:'#fff'}" font-size="8" pointer-events="none">${peers.length}</text>`:''}</g>`;}
 return out+'</svg>';
}
const API={esc,clamp,textWidth,match,layoutLabels,makeScene,renderSvg};if(typeof module!=='undefined'&&module.exports)module.exports=API;root.ArtExplorer=API;
})(typeof globalThis!=='undefined'?globalThis:this);
