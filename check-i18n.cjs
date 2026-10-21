const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync(__dirname+'/index.html','utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\}\)\(\);\s*$/, 'globalThis.test={uiText,uiHTML,CARDS,effText,render,renderLayer,showAnim,revealAnim,openArtbook,openArtwork,craftCard,newSeason,save,getS:()=>S,getP:()=>P};})();');
function boot(lang,saved={}){
 const elements={};const make=id=>elements[id]||(elements[id]={innerHTML:'',classList:{toggle(){}},after(e){elements.guide=e},appendChild(){},setAttribute(){},addEventListener(){},showModal(){},getBoundingClientRect(){return {}}});
 const storage=new Map(Object.entries(saved));const document={documentElement:{},body:{classList:{toggle(){}},appendChild(){}},getElementById:make,querySelector:make,createElement:()=>({innerHTML:''}),addEventListener(){}};
 const sandbox={document,navigator:lang,localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},window:{},setTimeout:()=>1,clearTimeout(){},setInterval:()=>1,clearInterval(){},matchMedia:()=>({matches:true}),console,Math};vm.createContext(sandbox);vm.runInContext(code,sandbox);return {t:sandbox.test,document,elements,storage};
}
for(const [nav,expected] of [[{languages:['ru-RU','en-US']},'ru'],[{languages:['en-US','ru']},'en'],[{languages:['de-DE']},'en'],[{language:'ru'},'ru'],[{},'en']]){
 const b=boot(nav);assert.equal(b.document.documentElement.lang,expected);assert(b.elements.app.innerHTML.includes(expected==='ru'?'Открыть':'Open'));assert.equal(b.t.getP().season,1);
}
const en=boot({languages:['en-US']});const t=en.t;
const residues=[];function check(name,text){const stripped=text.replace(/<[^>]*>/g,'');if(/[А-Яа-яЁё]/.test(stripped))residues.push([name,stripped.match(/.{0,40}[А-Яа-яЁё].{0,60}/g)]);}
check('home',en.elements.app.innerHTML);check('guide',en.elements.guide.innerHTML);
for(const c of t.CARDS){check(c.name,t.uiText(c.name+' '+c.anti+' '+c.flavor));for(let l=0;l<3;l++)check(c.name+' '+l,t.uiText(t.effText(c,l)));}
t.openArtbook();check('archive',en.elements.artbook.innerHTML);
const s=t.getS(),p=t.getP();p.col[8]=2;s.hand[0]={id:8,stars:2};s.last=[{c:t.CARDS[7],isNew:true}];s.lastTrace=[{title:'Гарантия новой карты',text:'После 7 открытий без новой карты или по эффекту руки.'}];t.render();check('hand',en.elements.app.innerHTML);
s.anim={drops:s.last,trace:s.lastTrace,empty:false,wrappers:0};t.showAnim();check('animation',en.elements.anim.innerHTML);t.revealAnim();check('result',en.elements.anim.innerHTML);s.anim=null;s.over=true;t.save();t.renderLayer();check('season',en.elements.layer.innerHTML);
const old=Object.fromEntries(en.storage);const ru=boot({languages:['ru-RU']},old);assert.equal(ru.t.getP().col[8],2);assert.equal(ru.t.getS().hand[0].stars,2);assert(ru.elements.app.innerHTML.includes('Му Денг'));
if(residues.length){console.log(JSON.stringify(residues,null,2));process.exitCode=1}else console.log('PASS: browser language, all 36 cards at 3 levels, home, hand, animation, result, season, and shared save');
fs.writeFileSync(__dirname+'/english-sample.txt',t.CARDS.map(c=>[t.uiText(c.name),t.uiText(t.effText(c,0)),t.uiText(c.anti)].join('\n')).join('\n\n'));
