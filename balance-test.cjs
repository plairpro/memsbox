const fs=require('fs'),vm=require('vm'),assert=require('assert');
let code=fs.readFileSync(__dirname+'/index.html','utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(code);
code=code.slice(0,code.indexOf('save();\ntry{window.claude'))+`render=()=>{};renderLayer=()=>{};showAnim=()=>{};save=()=>settleSeason();revealAnim=()=>{};globalThis.g={reset(){P={col:{},copium:0,season:1,scraps:0};S=freshSeason()},P:()=>P,S:()=>S,drawCard,pre,handCards,activeSets,odds,openBox,processDrop,place,newSeason,craftCard,buyOpen,settleSeason,addScrap,CARDS,close(){S.anim=null}};})();`;
let seed=42;const math=Object.create(Math);math.random=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
const box={Math:math,document:{addEventListener(){}},localStorage:{getItem(){return null}},setTimeout(){},clearTimeout(){},navigator:{},window:{}};vm.createContext(box);vm.runInContext(code,box);const g=box.g;
const base=()=>({add:{c:0,r:0,e:0,l:0,m:0},mul:{c:1,r:1,e:1,l:1,m:1},tag:{B:1,S:1,D:1,A:1,I:1,R:1},newMul:1,dupeBias:0,forced:1,dbl:0,trip:0,multiMul:1,empty:0,forcedEmpty:false,forceNew:false,minR:null,onlyCommon:false,burn:0,refund:0,noDecay:false,copMul:1,live:[],sets:[],trace:[],wrappers:0});
g.reset();Object.assign(g.P().col,{8:1,12:1,19:1});let counts={new:0,dupe:0,wrapper:0,empty:0};for(let i=0;i<30000;i++){const c=base(),card=g.drawCard(c,false);counts[card?(g.P().col[card.id]?'dupe':'new'):c.trace.some(t=>t.title==='Обрывок печати')?'empty':'wrapper']++}for(const[k,p]of Object.entries({new:.28,dupe:.42,wrapper:.25,empty:.05}))assert(Math.abs(counts[k]/30000-p)<.012,k);console.log('30k draws',counts);
g.reset();assert.equal(Object.keys(g.P().col).length,0);g.S().hand=[{id:8,stars:1},{id:12,stars:1},null];assert(g.activeSets(g.handCards()).includes('A'));
g.reset();let c=base();for(let i=0;i<4;i++)g.addScrap(c);assert.equal(g.S().opens,31);assert.equal(g.P().scraps,0);
g.reset();g.S().sinceNew=7;g.P().col[3]=1;g.S().hand=[{id:3,stars:1},null,null];g.S().openIdx=9;g.openBox();assert(g.S().last.some(d=>d.isNew),'pity overrides empty debuff');
g.reset();g.S().over=true;g.settleSeason();assert.equal(Object.keys(g.P().col).length,1);g.settleSeason();assert.equal(Object.keys(g.P().col).length,1,'reward exactly once');
g.reset();g.P().copium=24;g.craftCard();assert.equal(Object.keys(g.P().col).length,1);assert.equal(g.P().copium,0);
for(const card of g.CARDS)for(let stars=1;stars<=3;stars++){g.reset();g.P().col[card.id]=1;g.S().hand[0]={id:card.id,stars};for(let i=0;i<12&&!g.S().over;i++){g.close();g.openBox();assert(g.S().opens>=0);assert(g.P().copium>=0)}}
console.log('Assertions: all cards/levels, pity, empty start, pair sets, scraps, craft, once-only reward OK');
function score(ids){
 const old=g.S().hand;g.S().hand=ids.map(id=>id?{id,stars:old.find(h=>h&&h.id===id)?.stars||1}:null);
 const live=g.handCards().filter(h=>!h.off),sets=g.activeSets(live),has=id=>live.find(h=>h.c.id===id),v=id=>{let h=has(id);return h?h.c.v[h.lv]*h.pow:0};
 let n=Math.min(.8,.28*(1+v(19)/100)*(sets.includes('A')?1.45:1)),d=.42*(has(12)?1.1:1),count=1,cost=1+(has(19)?.25:0),penalty=1;
 if(has(20)){n=Math.min(.8,n*(1+v(20)/100));cost++;if(!g.CARDS.some(c=>!g.P().col[c.id]&&['e','l','m'].includes(c.r)))n=0;}
 if(has(17)){count=2;penalty*=.9;}if(has(3)){count+=.33;penalty*=.9;}if(has(35)){count+=2/v(35);penalty*=.95;}
 count+=v(27)/100*2+(has(18)?.10:0);if(sets.includes('S'))count=1+(count-1)*2;if(has(7))count=1+(count-1)*.5;
 // Conversions need an uncollected card of the same rarity (owl can use any).
 const commonMissing=g.CARDS.some(c=>c.r==='c'&&!g.P().col[c.id]);
 n+=(Math.min(d,.95-n))*((v(8)/100)*(commonMissing?.8:.25)+v(31)/100+v(16)/100*.75*.28);
 if(has(8))n*=.95;
 if(has(32))n=Math.max(n,1/v(32));
 const refund=Math.min(.85,d*count*((sets.includes('D')?.5:0)+v(13)/100));
 cost-=refund;cost-=.30/4;cost-=d*count*(has(12)?v(12):1)*(sets.includes('R')?3:1)/24;
 const ans=count*penalty*n/Math.max(.3,cost);g.S().hand=old;return ans;
}
function equip(mode){
 const ids=Object.keys(g.P().col).map(Number),old=g.S().hand.map(h=>h?.id||null);if(!ids.length)return;
 let chosen;
 if(mode==='random'){chosen=ids.map(id=>[id,math.random()]).sort((a,b)=>a[1]-b[1]).slice(0,3).map(x=>x[0]);}
 else{
  const shortlist=ids.filter(id=>id!==36&&id!==22&&id!==4&&id!==23).sort((a,b)=>score([b,null,null])-score([a,null,null])).slice(0,12);
  while(shortlist.length<3)shortlist.push(null);let best=-1;chosen=old;
  for(let a=0;a<shortlist.length;a++)for(let b=a+1;b<shortlist.length;b++)for(let c=b+1;c<shortlist.length;c++){
   const combo=[shortlist[a],shortlist[b],shortlist[c]];if(old.includes(36))combo[0]=36;
   const val=score(combo);if(val>best){best=val;chosen=combo;}
  }
  if(score(old)>best*.90&&old.filter(Boolean).length===3)return;
 }
 // Keep unchanged cards in their slots; actual place() pays the real swap cost.
 const keep=new Set(chosen.filter(Boolean));const pending=chosen.filter(id=>id&&!old.includes(id));
 for(let slot=0;slot<3&&pending.length;slot++){if(!keep.has(old[slot])&&old[slot]!==36)g.place(pending.shift(),slot);}
}
for(const mode of ['empty','random','planned']){
 let seasons=[],first=[],opens=[],incomplete=0;
 for(let trial=0;trial<40;trial++){
  seed=trial*7919+101;g.reset();let turns=0;
  for(let season=1;season<=8;season++){
   let previous=-1;
   while(!g.S().over&&Object.keys(g.P().col).length<36&&turns<700){
    g.close();let owned=Object.keys(g.P().col).length;
    if(mode!=='empty'&&(mode==='random'?g.S().hand.filter(h=>h&&h.id).length<Math.min(3,owned):(previous!==owned||g.S().openIdx%8===0))){equip(mode);previous=owned;}
    if(g.S().over)break;
    while(g.P().copium>=24&&Object.keys(g.P().col).length<36){g.craftCard();g.close();}
    if(Object.keys(g.P().col).length>=36)break;
    g.openBox();turns++;g.close();
   }
   if(season===1)first.push(Object.keys(g.P().col).length);
   if(Object.keys(g.P().col).length>=36){seasons.push(season);opens.push(turns);break;}
   if(season===8||turns>=700){incomplete++;break;}g.newSeason();
  }
 }
 const mean=a=>+(a.reduce((x,y)=>x+y,0)/a.length).toFixed(2);
 console.log(JSON.stringify({mode,firstSeason:mean(first),seasons:mean(seasons),opens:mean(opens),incomplete}));
}
