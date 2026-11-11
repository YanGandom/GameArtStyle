'use strict';
const fs=require('fs'),path=require('path'),assert=require('assert/strict'),vm=require('vm');
const root=path.join(__dirname,'..');process.chdir(root);
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name==='releases'||e.name==='.git'?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(root),htmls=files.filter(f=>f.endsWith('.html'));
let links=0;
for(const file of htmls){
 const html=fs.readFileSync(file,'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,m=>m.includes(' src=')?m.replace(/>[\s\S]*/,'>'):'');
 for(const m of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)){
  const url=m[1];if(/^(?:https?:|data:|mailto:|javascript:)/.test(url)||url.includes('${'))continue;
  const [pathname,fragment]=url.split('#'),clean=pathname.split('?')[0];
  const target=clean?path.resolve(path.dirname(file),decodeURIComponent(clean)):file;
  assert(target.startsWith(root+path.sep),'Link escapes repository: '+url);assert(fs.existsSync(target),'Missing '+url+' in '+file);links++;
  if(fragment&&target.endsWith('.html')&&!fragment.includes('?')){
   const content=fs.readFileSync(target,'utf8');assert(content.includes('id="'+fragment+'"')||content.includes("id='"+fragment+"'"),'Missing anchor '+url);
  }
 }
}
const context={window:{}};vm.runInNewContext(fs.readFileSync('assets/js/data.js','utf8'),context);const data=context.window.DATA;
assert.equal(data.datasets.games.items.length,100);assert.equal(data.datasets.casual.items.length,101);assert.equal(data.datasets.styles.items.length,40);
let images=0;
for(const ds of Object.values(data.datasets))for(const item of ds.items){
 for(const im of item.images||[]){assert(!im.file,'Local source path leaked');if(!/^https?:/.test(im.src)){assert(fs.existsSync(im.src),'Missing image '+im.src);images++;}}
 for(const s of item.sources||[])if(!/^https?:/.test(s.url))assert(fs.existsSync(s.url.split(/[?#]/)[0]),'Missing source '+s.url);
}
assert.equal(images,412);
for(const file of files.filter(f=>/\.(html|js|css|json)$/.test(f))){const text=fs.readFileSync(file,'utf8');assert(!/file:\/\/\/|[A-Za-z]:[\\/](?:Users|Documents)[\\/]/i.test(text),'Machine-specific path in '+file);}
console.log(JSON.stringify({pages:htmls.length,localLinks:links,packagedImages:images,externalOriginalGameImages:0,entry:'index.html',portable:true}));
