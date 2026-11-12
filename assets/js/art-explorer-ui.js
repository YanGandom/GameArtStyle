(() => {
'use strict';
const $=id=>document.getElementById(id),C=ArtExplorer,esc=C.esc;
const defaults={dataset:'games',x:'form',y:'era',reverseX:false,reverseY:false,labels:'all',query:'',group:'',limit:30,zoom:1,selected:'g-1',fullscreen:false};
const state={...defaults},stage=$('explorer');let scene=null,frame=0;
const canvas=document.createElement('canvas'),ctx=canvas.getContext?.('2d');
const measure=(s,font)=>{if(!ctx)return C.textWidth(s,font);ctx.font=`500 ${font}px "Segoe UI","Microsoft YaHei",sans-serif`;return ctx.measureText(s).width;};
const dataset=()=>DATA.datasets[state.dataset],allItems=()=>dataset().items;
const limited=()=>state.dataset==='styles'?allItems():allItems().slice(0,state.limit);
const filtered=()=>limited().filter(g=>(!state.group||g.family===state.group)&&(!state.query||[g.name,g.code,g.style,g.family,g.scope,g.description,g.eraLabel].join(' ').toLowerCase().includes(state.query)));
const get=key=>Object.values(DATA.datasets).flatMap(d=>d.items).find(g=>g.key===key);
function save(){try{localStorage.setItem('art-explorer-v1',JSON.stringify({...state,fullscreen:false,zoom:1}));}catch{}}
try{const old=JSON.parse(localStorage.getItem('art-explorer-v1'));if(old&&DATA.datasets[old.dataset])Object.assign(state,old,{fullscreen:false,zoom:1});}catch{}
const limitMax=()=>state.dataset==='styles'?Math.max(100,DATA.datasets.casual.items.length):allItems().length;
const normalizeLimit=value=>Number.isFinite(Number(value))?Math.max(10,Math.min(limitMax(),Math.round(Number(value)))):defaults.limit;
state.limit=normalizeLimit(state.limit);
function syncLimit(){
 $('toggle-names').textContent=state.labels==='none'?'显示游戏名字':'隐藏游戏名字';$('toggle-names').setAttribute('aria-pressed',String(state.labels==='none'));
 const styles=state.dataset==='styles';$('limit-controls').hidden=styles;$('style-count-note').hidden=!styles;
 $('game-limit').max=limitMax();$('limit-max').textContent=limitMax();$('game-limit').value=state.limit;$('limit-value').textContent=state.limit+' 款';
 const supplement=limited().filter(g=>g.entryType==='supplement').length;
 const scope=state.dataset==='casual'?`补充 ${supplement} 款 + 原榜 ${state.limit-supplement} 款（保留原名次）`:`案例编号 1–${state.limit} · 非排名`;
 const names={games:'全品类案例',casual:'休闲榜',styles:'风格方向'};
 document.querySelectorAll('[data-dataset]').forEach(b=>{const key=b.dataset.dataset,d=DATA.datasets[key];b.innerHTML=`${names[key]} <span class="dataset-count">${d.items.length}</span>`;b.setAttribute('aria-label',`${names[key]}，${d.items.length}个样本`);});
 $('sample-totals').textContent=DATA.datasets.games.items.length+DATA.datasets.casual.items.length;
 $('collection-note').textContent=state.dataset==='casual'?'美国 iPhone · 2026.11.05 快照 + 补充项':state.dataset==='games'?'跨品类案例集 · 非排名':'40 个设计方向 · 点击查看代表游戏';
 $('game-limit').setAttribute('aria-valuetext',`${state.limit} 款；${scope}`);$('limit-hint').textContent=scope+' · 搜索限于当前浏览范围';
 document.querySelectorAll('[data-preset]').forEach(b=>{const [x,y]=b.dataset.preset.split(',');b.disabled=!dataset().axes.includes(x)||!dataset().axes.includes(y);b.setAttribute('aria-pressed',String(!b.disabled&&state.x===x&&state.y===y&&!state.reverseX&&!state.reverseY));b.setAttribute('title',b.disabled?'本集合尚未评估该维度':`切换为${DATA.axes[x].name}与${DATA.axes[y].name}`);});
 $('preset-note').textContent=state.dataset==='casual'?'年代、复杂度尚未评估':'';
 $('filter-summary').hidden=!state.query&&!state.group;
 $('filter-description').textContent=[state.query?`关键词：${state.query}`:'',state.group?`类别：${state.group}`:''].filter(Boolean).join(' · ');
}
function ensureAxes(){
 const valid=dataset().axes.filter(k=>k!=='form');
 // Migrate an old swapped view while keeping its non-form dimension where possible.
 if(state.y==='form'&&valid.includes(state.x))state.y=state.x;
 state.x='form';state.reverseX=false;state.reverseY=false;
 if(!valid.includes(state.y))state.y=valid[0];
}
function syncControls(){
 ensureAxes();
 $('axis-y').innerHTML=Object.entries(DATA.axes).filter(([key])=>key!=='form').map(([key,a])=>`<option value="${key}" ${dataset().axes.includes(key)?'':'disabled'}>${esc(a.name)}${dataset().axes.includes(key)?'':' · 未评估'}</option>`).join('');
 $('axis-y').value=state.y;$('search').value=state.query;$('labels').value=state.labels;
 $('axis-help-button').setAttribute('aria-label','查看'+DATA.axes[state.y].name+'的指标详情');
 if($('axis-help').open)renderAxisHelp();
 document.querySelectorAll('[data-dataset]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.dataset===state.dataset)));
}
function renderAxisHelp(){
 $('axis-help-title').textContent=DATA.axes[state.y].name;
 for(const key of ['expression','complexity','era'])$('guide-'+key).hidden=key!==state.y;
 const examples={expression:['最后生还者 Part II','双人成行','守望先锋','星露谷物语','极乐迪斯科'],complexity:['茶杯头','最后生还者 Part II','双人成行','守望先锋']};
 for(const [key,names]of Object.entries(examples))$(key+'-examples').innerHTML=names.map(name=>DATA.datasets.games.items.find(g=>g.name===name)).filter(Boolean).map(g=>`<tr><td>${esc(g.name)}<small>${esc(g.scope)}</small></td><td>${g.values[key]??'待定'}</td><td>${esc(key==='expression'?g.formReason:g.complexityReason)}</td></tr>`).join('');
}
function openAxisHelp(){hidePreview();renderAxisHelp();if(!$('axis-help').open)$('axis-help').showModal();}
function closeAxisHelp(){$('axis-help').close();$('axis-help-button').focus?.({preventScroll:true});}
function renderLegend(){const colors=dataset().colors;$('legend').innerHTML=`<button data-family="" aria-pressed="${!state.group}">全部类别</button>`+Object.entries(colors).map(([name,color])=>`<button data-family="${esc(name)}" aria-pressed="${state.group===name}"><i style="background:${color}"></i>${esc(name)}</button>`).join('');$('legend').querySelectorAll('[data-family]').forEach(b=>b.addEventListener('click',()=>{state.group=state.group===b.dataset.family?'':b.dataset.family;state.zoom=1;render();}));}
function svgOnly(){
 hidePreview();
 const focusedKey=document.activeElement?.dataset?.key;
 const box=$('plot-wrap').getBoundingClientRect(),items=filtered();
 scene=C.makeScene(items,state,{width:Math.floor(box.width)||1000,height:Math.floor(box.height)||760},DATA.axes,measure);
 $('plot-wrap').innerHTML=C.renderSvg(scene);
 $('plot-wrap').querySelectorAll('[data-key]').forEach(n=>{const choose=()=>select(n.dataset.key);n.addEventListener('click',choose);n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose();}});});
 if(state.labels==='none')$('plot-wrap').querySelectorAll('[data-key]').forEach(n=>{n.addEventListener('mouseenter',()=>showPreview(n));n.addEventListener('mouseleave',deferPreviewHide);n.addEventListener('focus',()=>showPreview(n));n.addEventListener('blur',hidePreview);});
 if(focusedKey)[...$('plot-wrap').querySelectorAll('[data-key]')].find(n=>n.dataset.key===focusedKey)?.focus?.({preventScroll:true});
 const pending=items.filter(g=>g.values[state.x]===null||g.values[state.y]===null).length;
 $('status').textContent=`${items.length} / ${allItems().length} 个样本 · ${pending} 个待定 · ${scene.labels.length} 个名称已显示`+(state.zoom>1?` · 窗口内 ${scene.points.length} 个`:'');
 $('zoom-level').textContent=state.zoom+'×';$('zoom-in').disabled=state.zoom===4;$('zoom-out').disabled=state.zoom===1;
 $('export-svg').disabled=!items.length;
 $('export-data').disabled=!items.length;
 $('chart-empty').hidden=!!items.length;
 $('show-all').hidden=state.dataset==='styles'||state.limit>=allItems().length;
}
let previewTimer=null,previewAnchor=null;
function hidePreview(){clearTimeout(previewTimer);$('game-preview').hidden=true;if(previewAnchor)previewAnchor.setAttribute('aria-describedby','');previewAnchor=null;}
function deferPreviewHide(){clearTimeout(previewTimer);previewTimer=setTimeout(hidePreview,140);}
function showPreview(node){
 const g=get(node.dataset.key);if(!g)return;hidePreview();previewAnchor=node;
 const tip=$('game-preview');tip.innerHTML=`<span class="eyebrow">${esc(C.numberText(g))} · ${esc(g.style||g.family)}</span><h3>${esc(g.name)}</h3><p>${esc(g.description||g.formReason||g.scope||'暂无简介')}</p><div class="preview-meta">${['x','y'].map(a=>`${a.toUpperCase()} ${esc(DATA.axes[state[a]].name)}：${g.values[state[a]]??'待定'}`).join(' · ')}</div><small>点击编号查看完整分析与配图</small>`;
 tip.hidden=false;node.setAttribute('aria-describedby','game-preview');
 const r=node.getBoundingClientRect(),t=tip.getBoundingClientRect(),vw=window.innerWidth||1366,vh=window.innerHeight||768;
 const left=Math.max(8,Math.min(r.left,vw-t.width-8));let top=r.bottom+10;if(top+t.height>vh-8)top=r.top-t.height-10;
 tip.style.left=left+'px';tip.style.top=Math.max(8,Math.min(top,vh-t.height-8))+'px';
}
function schedule(){if(frame)cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{frame=0;svgOnly();});}
function setYAxis(value){if(value==='form'||!dataset().axes.includes(value))return;state.y=value;state.zoom=1;render();}
function select(key){state.selected=key;render();if(state.fullscreen){stage.classList.add('detail-open');$('toggle-detail').setAttribute('aria-pressed','true');}}
function paletteDetail(g){const p=g.labelPalette;if(!p)return'';if(p.status!=='sampled')return'<p class="subtle">底板颜色：参考图待核验，暂用中性色。</p>';return`<details><summary>参考色与取色依据 <span style="display:inline-block;width:12px;height:12px;border:1px solid #789;background:${esc(p.hex)}"></span> ${esc(p.hex)}</summary><p>${esc(p.note)}</p><p class="subtle">采用 ${p.sources.length} 张参考图；文字对比度 ${C.labelColors(g).contrast.toFixed(1)}:1。</p><div class="links">${p.sources.map((s,i)=>`<a href="${esc(s.image)}" target="_blank" rel="noopener">取色图 ${i+1} ↗</a><a href="${esc(s.page||s.url)}" target="_blank" rel="noopener">来源页 ↗</a>`).join('')}</div></details>`;}
function detail(){const g=get(state.selected);if(!g){$('detail').innerHTML='<div class="detail-kicker"><b>样本观察</b></div><p class="empty">没有匹配样本。清除筛选或扩大浏览范围后，点击图中标注查看分析。</p>';return;}
 const ds=dataset(),peers=filtered().filter(p=>p.values[state.x]===g.values[state.x]&&p.values[state.y]===g.values[state.y]);
 const metrics=Object.entries(DATA.axes).map(([k,a])=>`<div class="metric${[state.x,state.y].includes(k)?' active-axis':''}"><span>${esc(a.name)}${k===state.x?' · X':k===state.y?' · Y':''}</span><b>${g.values[k]===null?'—':g.values[k]}</b> <small>${g.values[k]===null?(ds.axes.includes(k)?'待定':'未评估'):'/ 100'}</small></div>`).join('');
 const reasoning=[['form','形体与表现依据',g.formReason],['complexity','造型装饰复杂度依据',g.complexityReason],['era','世界年代依据',g.eraReason]].filter(([, ,r])=>r);
 const sources=(g.sources||[]).map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join('');
 let gallery='';if(g.images?.length){gallery=`<h3>视觉参考</h3><p class="subtle">${esc(g.imageNote||'原站图片需联网加载；可通过来源页查看。')}</p><div class="gallery${g.images.length===1?' single':''}">${g.images.map((im,i)=>`<button data-image="${i}" aria-label="放大${esc(g.name)}参考图${i+1}"><img src="${esc(im.src)}" referrerpolicy="no-referrer" alt="${esc(g.name)} · 参考图${i+1}"><span class="image-failed">图片暂时无法显示，可打开下方来源页。</span><span>${im.width?im.width+' × '+im.height:'原站参考'} · ${i+1}</span></button>`).join('')}</div>`;}
 $('detail').innerHTML=`<div class="detail-kicker"><b>样本观察</b><span>点击图中标注切换</span></div><span class="eyebrow">${esc(g.code)} · ${esc({games:'全品类案例',casual:'休闲榜',styles:'风格方向'}[state.dataset])}</span><h2>${esc(g.name)}</h2><span class="tag" style="border-left:3px solid ${g.color}">${esc(g.style||g.family)}</span><p class="scope">${esc(g.scope)}</p>${gallery}<div class="metrics">${metrics}</div>${g.description?`<h3>设计特征</h3><p>${esc(g.description)}</p>`:''}${g.eraLabel?`<p class="subtle"><b>${esc(g.eraLabel)}</b>${g.eraRange?' · 参考跨度 '+g.eraRange.join('–'):''}</p>`:''}${g.comparison?`<p class="subtle">观察重点：${esc(g.comparison)}</p>`:''}${reasoning.map(([k,title,r])=>`<details><summary>${title}</summary><p>${esc(r)}</p>${k==='era'&&g.evidence?`<p class="subtle">${esc(g.evidence)}</p>`:''}</details>`).join('')}${peers.length>1?`<h3>同一位置 · ${peers.length} 个样本</h3><div class="peers">${peers.map(p=>`<button data-peer="${p.key}" aria-pressed="${p.key===g.key}">${esc(p.name)}</button>`).join('')}</div>`:''}${g.members?.length?`<h3>这个方向包含的游戏</h3><div class="peers">${g.members.map(key=>`<button data-member="${key}">${esc(get(key).name)}</button>`).join('')}</div>`:''}${paletteDetail(g)}<div class="links">${sources}</div>${g.warning?`<p class="subtle">${esc(g.warning)}</p>`:''}`;
 $('detail').querySelectorAll('[data-peer]').forEach(b=>b.addEventListener('click',()=>select(b.dataset.peer)));
 $('detail').querySelectorAll('[data-member]').forEach(b=>b.addEventListener('click',()=>{state.dataset='games';state.group='';state.query='';state.zoom=1;state.selected=b.dataset.member;state.limit=Math.max(state.limit,allItems().findIndex(g=>g.key===state.selected)+1);render();}));
 $('detail').querySelectorAll('[data-image]').forEach(b=>{const im=b.querySelector('img');im?.addEventListener('error',()=>b.classList.add('failed'));b.addEventListener('click',()=>{if(b.classList.contains('failed'))return;$('large-image').src=g.images[Number(b.dataset.image)].src;$('large-image').alt=g.name;$('image-caption').textContent=g.name+' · 参考图 '+(Number(b.dataset.image)+1);$('image-viewer').showModal();});});
}
function table(items){$('table-count').textContent=items.length+' 个样本';$('empty').hidden=!!items.length;$('table-body').innerHTML=items.map(g=>`<tr class="${g.key===state.selected?'selected':''}"><td><span class="sample-code">${esc(g.code)}</span>${g.labelPalette?.status==='sampled'?`<span class="sample-swatch" role="img" aria-label="${esc(g.name)}参考色 ${C.labelColors(g).fill}" title="参考色 ${C.labelColors(g).fill}" style="background-color:${C.labelColors(g).fill}"></span>`:''}</td><td><button data-row="${g.key}">${esc(g.name)}</button><small>${esc(g.scope)}</small></td><td>${esc(g.style||g.family)}</td>${['form','expression','complexity','era'].map(k=>`<td>${g.values[k]===null?(dataset().axes.includes(k)?'待定':'未评估'):g.values[k]}</td>`).join('')}<td>${esc(g.eraLabel||g.imageNote||g.description||'')}</td></tr>`).join('');$('table-body').querySelectorAll('[data-row]').forEach(b=>b.addEventListener('click',()=>{select(b.dataset.row);stage.scrollIntoView({behavior:'smooth',block:'start'});}));}
function render(){ensureAxes();state.limit=normalizeLimit(state.limit);const items=filtered();if(!items.some(g=>g.key===state.selected))state.selected=items[0]?.key??null;syncControls();syncLimit();renderLegend();svgOnly();detail();table(items);$('dataset-note').textContent=dataset().note;$('axis-summary').innerHTML=['x','y'].map(a=>{const d=DATA.axes[state[a]],reverse=state[a==='x'?'reverseX':'reverseY'];return`<article><h3>${a.toUpperCase()} · ${esc(d.name)}　${esc(reverse?d.high:d.low)} → ${esc(reverse?d.low:d.high)}</h3><p>${esc(d.description)}</p></article>`;}).join('');save();}
function fullLayout(on){state.fullscreen=on;stage.classList.toggle('focus-view',on&&!document.fullscreenElement);if(on){if(state.labels!=='none')state.labels='all';state.zoom=1;stage.classList.remove('detail-open');}$('fullscreen').textContent=on?'退出全屏':'全屏探索';$('toggle-detail').setAttribute('aria-pressed',String(stage.classList.contains('detail-open')));render();schedule();}
async function fullscreen(){if(state.fullscreen){if(document.fullscreenElement){try{await document.exitFullscreen();}catch{fullLayout(false);}}else fullLayout(false);return;}fullLayout(true);if(stage.requestFullscreen){try{await stage.requestFullscreen();stage.classList.remove('focus-view');schedule();}catch{/* Keep the complete in-page focus view when native fullscreen is unavailable. */}}}
function download(name,body,type){const blob=new Blob([body],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
document.querySelectorAll('[data-dataset]').forEach(b=>b.addEventListener('click',()=>{state.dataset=b.dataset.dataset;state.group='';state.query='';state.zoom=1;state.selected=state.dataset==='games'?'g-89':state.dataset==='styles'?'s-25':allItems()[0]?.key;render();}));
document.querySelectorAll('[data-preset]').forEach(b=>b.addEventListener('click',()=>{const [x,y]=b.dataset.preset.split(',');if(!dataset().axes.includes(x)||!dataset().axes.includes(y))return;Object.assign(state,{x,y,reverseX:false,reverseY:false,zoom:1});render();}));
$('axis-y').addEventListener('change',()=>setYAxis($('axis-y').value));
 $('axis-help-button').addEventListener('click',openAxisHelp);
 $('close-axis-help').addEventListener('click',closeAxisHelp);
 $('axis-help').addEventListener('cancel',e=>{e.preventDefault();closeAxisHelp();});
 $('axis-help').addEventListener('click',e=>{if(e.target===$('axis-help'))closeAxisHelp();});
 $('search').addEventListener('input',()=>{state.query=$('search').value.trim().toLowerCase();state.zoom=1;render();});
 function clearFilters(){state.query='';state.group='';state.zoom=1;render();}
 $('clear-filters').addEventListener('click',clearFilters);$('empty-clear').addEventListener('click',clearFilters);
 $('show-all').addEventListener('click',()=>{state.limit=allItems().length;state.group='';state.zoom=1;render();});
 $('labels').addEventListener('change',()=>{state.labels=$('labels').value;render();});
 $('toggle-names').addEventListener('click',()=>{state.labels=state.labels==='none'?'all':'none';render();});
 $('game-preview').addEventListener('mouseenter',()=>clearTimeout(previewTimer));$('game-preview').addEventListener('mouseleave',hidePreview);
 $('plot-wrap').addEventListener('scroll',hidePreview);
 $('game-limit').addEventListener('input',()=>{state.limit=normalizeLimit($('game-limit').value);state.zoom=1;render();});
 $('reset').addEventListener('click',()=>{const fs=state.fullscreen;Object.assign(state,defaults,{fullscreen:fs});render();});
 $('zoom-in').addEventListener('click',()=>{state.zoom=Math.min(4,state.zoom*2);svgOnly();});$('zoom-out').addEventListener('click',()=>{state.zoom=Math.max(1,state.zoom/2);svgOnly();});$('fit').addEventListener('click',()=>{state.zoom=1;svgOnly();});
 $('fullscreen').addEventListener('click',fullscreen);$('toggle-detail').addEventListener('click',()=>{stage.classList.toggle('detail-open');$('toggle-detail').setAttribute('aria-pressed',String(stage.classList.contains('detail-open')));});
 document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&state.fullscreen)fullLayout(false);else if(document.fullscreenElement===stage){state.fullscreen=true;stage.classList.remove('focus-view');schedule();}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('axis-help').open){e.preventDefault();closeAxisHelp();return;}if(!$('game-preview').hidden){hidePreview();return;}if(state.fullscreen&&!document.fullscreenElement){e.preventDefault();fullLayout(false);}}});
 $('export-svg').addEventListener('click',()=>download('game-art-'+state.dataset+'-'+state.x+'-'+state.y+'.svg',C.renderSvg(scene),'image/svg+xml;charset=utf-8'));
 $('export-data').addEventListener('click',()=>download('game-art-coordinates.json',JSON.stringify({axes:DATA.axes,state:{...state,fullscreen:false},samples:filtered().map(({images,...g})=>g)},null,2),'application/json;charset=utf-8'));
 $('close-viewer').addEventListener('click',()=>$('image-viewer').close());$('image-viewer').addEventListener('click',e=>{if(e.target===$('image-viewer'))$('image-viewer').close();});
 window.addEventListener('resize',schedule);if(typeof ResizeObserver!=='undefined')new ResizeObserver(schedule).observe($('plot-wrap'));
 render();
})();
