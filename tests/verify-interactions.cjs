'use strict';
const fs=require('fs'),assert=require('assert/strict'),vm=require('vm'),crypto=require('crypto');
const C=require('../assets/js/art-explorer-core.js');
process.chdir(require('path').join(__dirname,'..'));
const html=fs.readFileSync('index.html','utf8');const sandbox={window:{}};vm.runInNewContext(fs.readFileSync('assets/js/data.js','utf8'),sandbox);const DATA=JSON.parse(JSON.stringify(sandbox.window.DATA));
const base={dataset:'games',x:'form',y:'era',reverseX:false,reverseY:false,labels:'all',query:'',group:'',zoom:1,selected:'g-89',fullscreen:true};
let layoutChecks=0;const metrics=[];
function checkScene(s,count){assert.equal(s.labels.length,count);assert.equal(new Set(s.labels.map(l=>l.item.key)).size,count);assert.equal(s.overflow,false);for(const p of s.labels){assert(p.lx-p.w/2>=0&&p.lx+p.w/2<=s.w);assert(p.ly-p.h/2>=0&&p.ly+p.h/2<=s.h);for(const q of s.labels){if(p===q)continue;assert(Math.abs(p.lx-q.lx)>=(p.w+q.w)/2-.01||Math.abs(p.ly-q.ly)>=(p.h+q.h)/2-.01,'Overlapping labels '+p.item.name+' / '+q.item.name);}for(const q of s.points)assert(Math.abs(p.lx-q.px)>=p.w/2+4||Math.abs(p.ly-q.py)>=p.h/2+4,'Point obscures label '+p.item.name);}}
for(const [key,d]of Object.entries(DATA.datasets))for(const x of d.axes)for(const y of d.axes){if(x===y)continue;for(const [width,height]of [[1920,900],[1366,595],[1280,547]]){const state={...base,dataset:key,x,y,selected:d.items[0].key};const s=C.makeScene(d.items,state,{width,height},DATA.axes);checkScene(s,d.items.length);assert.equal(s.h,height,'Desktop fullscreen requires scrolling: '+key+' '+x+'/'+y+' '+width+'x'+height);layoutChecks++;metrics.push({dataset:key,x,y,width,font:s.font});}}
const gameScene=C.makeScene(DATA.datasets.games.items,base,{width:1920,height:900},DATA.axes);const point=id=>gameScene.points.find(p=>p.item.key===id);
assert(point('g-89').px>point('g-97').px);assert.equal(point('g-89').py,point('g-97').py);assert(point('g-29').py<point('g-14').py);
const rev=C.makeScene(DATA.datasets.games.items,{...base,reverseX:true,reverseY:true},{width:1920,height:900},DATA.axes);assert(rev.points.find(p=>p.item.key==='g-89').px<rev.points.find(p=>p.item.key==='g-97').px);assert(rev.points.find(p=>p.item.key==='g-29').py>rev.points.find(p=>p.item.key==='g-14').py);
const zoom=C.makeScene(DATA.datasets.games.items,{...base,zoom:4},{width:1366,height:595},DATA.axes);assert(zoom.points.length<100&&zoom.points.some(p=>p.item.key==='g-89'));
const expressionScene=C.makeScene(DATA.datasets.games.items,{...base,y:'expression'},{width:1366,height:595},DATA.axes);
const casualScene=C.makeScene(DATA.datasets.casual.items,{...base,dataset:'casual',y:'expression',selected:'a-1'},{width:1366,height:595},DATA.axes);
// Account for the additional slider strip at compact fullscreen sizes.
for(const key of ['games','casual'])for(const n of [10,30,37,100]){
 const d=DATA.datasets[key],s=C.makeScene(d.items.slice(0,n),{...base,dataset:key,y:'expression',selected:d.items[0].key},{width:1280,height:503},DATA.axes);
 checkScene(s,n);assert(s.h<=550,'Compact layout grows excessively');layoutChecks++;
}
// Minimal DOM model to exercise the actual page controller. No browser layout claim.
for(const key of ['games','casual','styles'])for(const y of DATA.datasets[key].axes.filter(a=>a!=='form')){
 const d=DATA.datasets[key],s=C.makeScene(d.items,{...base,dataset:key,y,labels:'none'},{width:1280,height:503},DATA.axes);
 assert.equal(s.labels.length,0);assert.equal(s.badges.length,d.items.length);checkScene({...s,labels:s.badges},d.items.length);
 const svg=C.renderSvg(s);assert.equal((svg.match(/data-number=/g)||[]).length,d.items.length);layoutChecks++;
}
class Element{
 constructor(tag='div'){this.tag=tag;this.attributes={};this.children=[];this.listeners={};this.dataset={};this.value='';this.textContent='';this.disabled=false;this.hidden=false;this.open=false;this._html='';this._classes=new Set();this.classList={add:c=>this._classes.add(c),remove:c=>this._classes.delete(c),contains:c=>this._classes.has(c),toggle:(c,on)=>{const v=on??!this._classes.has(c);v?this._classes.add(c):this._classes.delete(c);return v;}};}
 setAttribute(k,v){this.attributes[k]=String(v);if(k.startsWith('data-'))this.dataset[k.slice(5).replace(/-([a-z])/g,(_,x)=>x.toUpperCase())]=String(v);}
 get innerHTML(){return this._html;}set innerHTML(v){this._html=v;this.children=[];for(const m of v.matchAll(/<(button|g|img)\b([^>]*)(?:>([\s\S]*?)<\/\1>|\/?>)/g)){const n=new Element(m[1]);for(const a of m[2].matchAll(/([\w-]+)="([^"]*)"/g))n.setAttribute(a[1],a[2]);n.textContent=m[3]||'';if(m[1]==='button'&&/data-image/.test(m[2]))n.children.push(new Element('img'));this.children.push(n);}}
 querySelectorAll(s){const attr=s.slice(1,-1);return this.children.filter(n=>n.attributes[attr]!==undefined);}querySelector(s){return this.children.find(n=>n.tag===s);}
 style={};addEventListener(k,f){this.listeners[k]=f;}getBoundingClientRect(){return{left:100,top:100,right:1466,bottom:695,width:1366,height:595};}scrollIntoView(){}showModal(){this.open=true;}close(){this.open=false;}click(){return this.listeners.click?.({target:this});}
}
async function interactions(){
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]),el=Object.fromEntries(ids.map(id=>[id,new Element()]));
 const ds=['games','styles','casual'].map(k=>{const b=new Element('button');b.setAttribute('data-dataset',k);return b;}),presets=['form,era','form,expression','form,complexity'].map(k=>{const b=new Element('button');b.setAttribute('data-preset',k);return b;});
 const events={},document={fullscreenElement:null,getElementById:id=>{assert(el[id],'Missing '+id);return el[id];},createElement:tag=>new Element(tag),querySelectorAll:s=>s==='[data-dataset]'?ds:s==='[data-preset]'?presets:[],addEventListener:(k,f)=>events[k]=f};
 const store=new Map();const localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
 const urls=[];const Url={createObjectURL:blob=>{urls.push(blob);return'blob:mock';},revokeObjectURL(){}};
 vm.runInNewContext(fs.readFileSync('assets/js/art-explorer-ui.js','utf8'),{DATA,ArtExplorer:C,document,window:{addEventListener(){}},localStorage,requestAnimationFrame:f=>{f();return 1;},cancelAnimationFrame(){},Blob,URL:Url,setTimeout:f=>f(),clearTimeout(){}});
 const fire=(id,type='click',extra={})=>el[id].listeners[type]({target:el[id],...extra});
 assert.match(el.status.textContent,/30 \/ 100/);assert.match(el.status.textContent,/30 个名称已显示/);assert.equal(el['limit-controls'].hidden,false);
 const limit=n=>{el['game-limit'].value=String(n);fire('game-limit','input');};
 limit(100);assert.match(el.status.textContent,/100 \/ 100/);assert.match(el.status.textContent,/100 个名称已显示/);
 el['axis-y'].value='expression';fire('axis-y','change');assert.match(el['axis-summary'].innerHTML,/表现风格化/);assert.equal(el['axis-x'].value,'form');
 el['axis-x'].value='expression';fire('axis-x','change');assert.equal(el['axis-y'].value,'form');
 fire('swap');assert.equal(el['axis-x'].value,'form');assert.equal(el['axis-y'].value,'expression');fire('reverse-x');assert.equal(el['reverse-x'].attributes['aria-pressed'],'true');
 el.search.value='星露谷物语';fire('search','input');assert.match(el.status.textContent,/1 \/ 100/);assert.match(el.detail.innerHTML,/星露谷物语/);
 el.search.value='NO_SUCH_TITLE_ZZZ';fire('search','input');assert.equal(el.empty.hidden,false);assert.match(el.detail.innerHTML,/没有匹配/);
 fire('reset');ds[1].click();assert.match(el.status.textContent,/40 \/ 40/);assert.match(el.detail.innerHTML,/布偶与手工拼接/);
 assert.equal(el['limit-controls'].hidden,true);assert.equal(el['style-count-note'].hidden,false);
 const member=el.detail.querySelectorAll('[data-member]').find(b=>b.dataset.member==='g-89');assert(member);member.click();assert.match(el.detail.innerHTML,/双人成行/);assert.equal(Number(el['game-limit'].value),89);limit(100);
 ds[2].click();assert.match(el.status.textContent,/100 \/ 100/);assert.equal(el['axis-y'].value,'expression');assert.match(el['axis-y'].innerHTML,/disabled>世界年代 · 未评估/);assert.match(el.detail.innerHTML,/Meowdoku/);
 el.detail.querySelectorAll('[data-image]')[0].click();assert(el['image-viewer'].open);fire('close-viewer');assert(!el['image-viewer'].open);
 presets[0].click();assert.equal(el['axis-y'].value,'era');assert.match(el['dataset-note'].textContent,/原100款/);
 el.labels.value='selected';fire('labels','change');assert.match(el.status.textContent,/1 个名称已显示/);
 await fire('fullscreen');assert(el.explorer.classList.contains('focus-view'));assert.equal(el.labels.value,'all');assert.match(el.status.textContent,/100 个名称已显示/);
 fire('toggle-detail');assert(el.explorer.classList.contains('detail-open'));fire('toggle-detail');assert(!el.explorer.classList.contains('detail-open'));
 events.keydown({key:'Escape',preventDefault(){}});assert(!el.explorer.classList.contains('focus-view'));
 fire('zoom-in');assert.equal(el['zoom-level'].textContent,'2×');fire('zoom-in');assert.equal(el['zoom-level'].textContent,'4×');fire('fit');assert.equal(el['zoom-level'].textContent,'1×');
 fire('export-svg');fire('export-data');assert.equal(urls.length,2);assert.match(await urls[0].text(),/svg xmlns/);const exported=JSON.parse(await urls[1].text());assert.equal(exported.samples.length,100);assert(!exported.samples[0].images);
 for(const [index,key]of [[0,'games'],[2,'casual']]){
  ds[index].click();assert.equal(el['limit-controls'].hidden,false);
  for(const n of [10,37,100]){
   limit(n);assert.match(el.status.textContent,new RegExp(`${n} / 100`));assert.match(el.status.textContent,new RegExp(`${n} 个名称已显示`));
   assert.equal(el['table-count'].textContent,n+' 个样本');assert.equal(el['table-body'].querySelectorAll('[data-row]').length,n);
   fire('export-data');const out=JSON.parse(await urls.at(-1).text());assert.deepEqual(out.samples.map(g=>g.key),DATA.datasets[key].items.slice(0,n).map(g=>g.key));
   assert.equal(JSON.parse(store.get('art-explorer-v1')).limit,n);
  }
  limit(10);assert.match(el.detail.innerHTML,new RegExp(DATA.datasets[key].items[0].code.replace('#','\\#')));
  el.search.value=DATA.datasets[key].items[99].code;fire('search','input');assert.equal(el['table-count'].textContent,'0 个样本');
  el.search.value=DATA.datasets[key].items[0].code;fire('search','input');assert.equal(el['table-count'].textContent,'1 个样本');
  el.search.value='';fire('search','input');fire('swap');assert.equal(Number(el['game-limit'].value),10);
  await fire('fullscreen');assert.match(el.status.textContent,/10 个名称已显示/);limit(37);assert.match(el.status.textContent,/37 个名称已显示/);events.keydown({key:'Escape',preventDefault(){}});
 }
 limit(10);ds[1].click();assert.match(el.status.textContent,/40 \/ 40/);assert(el['limit-controls'].hidden);ds[0].click();assert.match(el.status.textContent,/10 \/ 100/);
 limit(0);assert.equal(Number(el['game-limit'].value),10);limit(200);assert.equal(Number(el['game-limit'].value),100);limit('bad');assert.equal(Number(el['game-limit'].value),30);
 for(const [index,key]of [[0,'games'],[2,'casual']]){
  ds[index].click();limit(10);fire('toggle-names');assert.equal(el.labels.value,'none');assert.equal(el['toggle-names'].textContent,'显示游戏名字');
  assert.match(el.status.textContent,/0 个名称已显示/);let badges=el['plot-wrap'].querySelectorAll('[data-number]');assert.equal(badges.length,10);
  badges[0].listeners.mouseenter();assert.equal(el['game-preview'].hidden,false);assert(el['game-preview'].innerHTML.includes(C.esc(DATA.datasets[key].items[0].name)));assert(el['game-preview'].innerHTML.includes(C.esc(DATA.datasets[key].items[0].description)));
  badges[0].listeners.mouseleave();assert(el['game-preview'].hidden);badges[0].listeners.focus();assert(!el['game-preview'].hidden);events.keydown({key:'Escape'});assert(el['game-preview'].hidden);
  await fire('fullscreen');assert.equal(el.labels.value,'none');limit(37);assert.equal(el['plot-wrap'].querySelectorAll('[data-number]').length,37);assert(el['game-preview'].hidden);
  fire('toggle-names');assert.equal(el.labels.value,'all');assert.match(el.status.textContent,/37 个名称已显示/);assert.equal(el['plot-wrap'].querySelectorAll('[data-number]').length,0);
  events.keydown({key:'Escape',preventDefault(){}});
 }
 return ['axis switching and swap','axis reversal','dataset switch and disabled unevaluated axes','search and empty state','style member navigation expands limit','image lightbox','fullscreen fallback and Esc','all names on fullscreen entry','fullscreen detail toggle','zoom and reset','SVG and JSON export','10/37/100 slider on both game lists','ordered prefix before search','slider persists and clamps','fullscreen slider updates','style view keeps 40 directions','name toggle and individual numbered badges','hover and keyboard focus show correct description','tooltip dismissal','fullscreen preserves hidden names'];
}
interactions().then(behavior=>console.log(JSON.stringify({layoutChecks,behavior,browserVerification:'DOM行为模型与坐标布局检查，非真实浏览器测试。'},null,2))).catch(e=>{console.error(e);process.exit(1)});
