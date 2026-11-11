const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
process.chdir(path.join(__dirname,'..'));const C=require('../assets/js/art-explorer-core.js'),box={window:{}};
vm.runInNewContext(fs.readFileSync('assets/js/data.js','utf8'),box);const d=box.window.DATA,items=d.datasets.casual.items;
const ranked=items.filter(g=>g.entryType==='ranking'),extra=items.filter(g=>g.entryType==='supplement');
assert.equal(ranked.length,100);assert.equal(extra.length,1);assert.equal(extra[0].name,'MONOPOLY GO!');assert.equal(extra[0].originalRank,null);
ranked.forEach((g,i)=>{assert.equal(g.key,'a-'+(i+1));assert.equal(g.originalRank,i+1);assert.equal(g.code,'#'+String(i+1).padStart(3,'0'));});
const all=[...d.datasets.games.items,...items];
assert.equal(all.length,201);
for(const g of all){const p=g.labelPalette,c=C.labelColors(g);assert.equal(p.status,'sampled');assert.match(p.hex,/^#[0-9a-f]{6}$/);assert.equal(c.fill,p.hex);assert(c.contrast>=4.5,g.name);assert.equal(c.ink,p.text);assert(p.sources.length>=1);
 for(const s of p.sources)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(s.image)).digest('hex'),s.sha256);
 const state={x:'form',y:'expression',labels:'all',zoom:1,selected:g.key},scene=C.makeScene([g],state,{width:1000,height:700},d.axes);assert(C.renderSvg(scene).includes('fill:'+p.hex+';fill-opacity:1'));assert(C.renderSvg(scene).includes('fill:'+c.ink));
}
console.log(JSON.stringify({sampledPalettes:all.length,minimumTextContrast:Math.min(...all.map(g=>C.labelColors(g).contrast)),originalRanksPreserved:true,sourceHashesVerified:true}));
