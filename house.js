/* 3D AI Lab walkthrough: loader -> entrance facade -> corner diorama room.
   Falls back to the carousel when WebGL or three.js is unavailable. */
(function(){
"use strict";
function webglOK(){try{const c=document.createElement("canvas");return !!(window.WebGLRenderingContext&&(c.getContext("webgl")||c.getContext("experimental-webgl")))}catch(e){return false}}
if(!window.THREE||!webglOK())return;
const T=THREE,$=id=>document.getElementById(id);
document.body.classList.add("house");

const track=$("track"),slides=[...track.querySelectorAll(".slide")];
const slideById=id=>slides.find(s=>s.dataset.id===id);

/* ---------------- stations ---------------- */
const ST=[ // order = experiment number. Front row (floor, nearest the viewer) holds the most direct AI-agent applications.
  {id:"report",label:"月會報告",nav:"報告",kind:"floor",signY:4.3,pos:[3.2,0,8.0],labelAt:[4.6,0.02,9.3],labelR:2.6,hot:true},
  {id:"manual",label:"升級手冊",nav:"文件",kind:"floor",signY:3.45,pos:[3.9,0,4.4],labelAt:[5.0,0.02,5.9],labelR:2.6},
  {id:"kb",label:"知識庫",nav:"知識庫",kind:"floor",signY:4.05,pos:[7.4,0,3.0],labelAt:[7.6,0.02,5.0],labelR:3.2},
  {id:"maint",label:"保養紀錄",nav:"紀錄",kind:"wallA",pos:[0,0,8.6],labelAt:[0.03,4.55,8.6]},
  {id:"cases",label:"案件學習",nav:"案件",kind:"wallA",pos:[0,0,5.6],labelAt:[0.03,4.35,5.6]},
  {id:"gov",label:"資料治理",nav:"治理",kind:"wallA",pos:[0,0,2.4],labelAt:[0.03,4.55,2.4]},
  {id:"build",label:"AI 協作",nav:"作品",kind:"wallB",pos:[2.1,0,0],labelAt:[2.1,4.55,0.03]},
  {id:"ocr",label:"OCR 辨識",nav:"OCR",kind:"wallB",pos:[5.6,0,0],labelAt:[5.6,4.75,0.03]},
  {id:"site",label:"作品集網站",nav:"網站",kind:"floor",signY:2.75,pos:[8.9,0,6.7],labelAt:[9.4,0.02,7.6],labelR:1.6},
  {id:"demos",label:"AI 檢測 DEMO",nav:"AI Demo",kind:"wallB",pos:[8.6,0,0],labelAt:[8.6,4.55,0.03]}
];
const tt=(k,v)=>window.I18N?I18N.t(k,v):k;
ST.forEach(s=>{const nm=window.I18N&&I18N.station(s.id);if(nm){s.label=nm[0];s.nav=nm[1]}const LIST=(typeof EXPS!=="undefined")?EXPS:[];const x=LIST.find(e=>e.id===s.id);s.title=x?x.title:tt("demo1.t");s.no=x?"EXP-"+String(LIST.indexOf(x)+1).padStart(2,"0"):"DEMO";s.facet=x?x.facet:tt("demos.eyebrow")});

/* ---------------- renderer ---------------- */
const stage=$("stage"),renderer=new T.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
renderer.outputEncoding=T.sRGBEncoding;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
stage.appendChild(renderer.domElement);
const cv=renderer.domElement;
const scene=new T.Scene();scene.background=new T.Color(0x0B0C0E);scene.fog=new T.Fog(0x0B0C0E,22,48);
const cam=new T.PerspectiveCamera(34,1,.1,200);

/* ---------------- helpers ---------------- */
const M=(c,o={})=>new T.MeshStandardMaterial(Object.assign({color:c,roughness:.75,metalness:.05},o));
function add(parent,geo,mat,p,r,shadow=true){const m=new T.Mesh(geo,mat);if(p)m.position.set(...p);if(r)m.rotation.set(...r);m.castShadow=shadow;m.receiveShadow=true;parent.add(m);return m}
const box=(par,w,h,d,mat,p,r)=>add(par,new T.BoxGeometry(w,h,d),mat,p,r);
function tex(w,h,draw){const c=document.createElement("canvas");c.width=w;c.height=h;draw(c.getContext("2d"),w,h);const t=new T.CanvasTexture(c);t.encoding=T.sRGBEncoding;t.anisotropy=renderer.capabilities.getMaxAnisotropy();return t}
const glow=c=>new T.MeshBasicMaterial({color:c});

/* curved label made of per-character planes (like the reference's arched words) */
function arcText(str,{size=.62,radius=4,color="#F3ECDF",bend=1}={}){
  const g=new T.Group(),chars=(window.Intl&&Intl.Segmenter)?[...new Intl.Segmenter(undefined,{granularity:"grapheme"}).segment(str)].map(x=>x.segment):str.match(/.[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]*/gu)||[...str];
  const vis=chars.filter(c=>c!==" ").length;if(vis>7)size=size*Math.max(.62,7/vis);
  const n=chars.length,stepW=size*.98;
  const isThai=ch=>/[\u0E00-\u0E7F]/.test(ch);
  const widths=chars.map(ch=>ch===" "?stepW*.45:(/[\x00-\x7F]/.test(ch)?stepW*.72:isThai(ch)?stepW*.62:stepW));
  const total=widths.reduce((a,b)=>a+b,0);let acc=-total/2;
  chars.forEach((ch,i)=>{
    const w=widths[i],mid=acc+w/2;acc+=w;if(ch===" ")return;
    const t=tex(160,160,(x)=>{x.fillStyle=color;x.font=`${/[\x00-\x7F]/.test(ch)?"400 120px Jost":isThai(ch)?"500 112px 'Noto Sans Thai'":"500 118px Jost,'Noto Sans TC'"},sans-serif`;x.textAlign="center";x.textBaseline="middle";x.fillText(ch,80,86)});
    const p=new T.Mesh(new T.PlaneGeometry(size,size),new T.MeshBasicMaterial({map:t,transparent:true,depthWrite:false,color:0xffffff}));
    const a=mid/radius*bend;p.position.set(Math.sin(a)*radius,(Math.cos(a)-1)*radius,0);p.rotation.z=-a;g.add(p);
  });
  return g;
}

/* ================= ENTRANCE (facade) ================= */
const E=new T.Group();E.position.set(-60,0,0);scene.add(E);
const facadeTex=tex(2048,1024,(x,w,h)=>{
  // exposed concrete with formwork panels and tie holes
  x.fillStyle="#3B3F44";x.fillRect(0,0,w,h);
  for(let i=0;i<26000;i++){const v=Math.random();x.fillStyle=`rgba(${v>.5?255:0},${v>.5?255:0},${v>.5?255:0},${Math.random()*.05})`;x.fillRect(Math.random()*w,Math.random()*h,2,2)}
  x.strokeStyle="rgba(30,34,38,.35)";x.lineWidth=3;for(let px=0;px<=w;px+=256){x.beginPath();x.moveTo(px,0);x.lineTo(px,h);x.stroke()}for(let py=0;py<=h;py+=256){x.beginPath();x.moveTo(0,py);x.lineTo(w,py);x.stroke()}
  x.fillStyle="rgba(25,28,31,.55)";for(let px=128;px<w;px+=256)for(let py=64;py<h;py+=128){x.beginPath();x.arc(px,py,6,0,7);x.fill()}
  // light wash: warm cone pools from fixtures above the rack, door and arm; dark ceiling edge and sides
  [[w*.29,.55],[w*.5,.9],[w*.71,.55]].forEach(([cx,a])=>{const g=x.createRadialGradient(cx,h*.28,10,cx,h*.62,h*.62);g.addColorStop(0,`rgba(255,226,186,${.20*a})`);g.addColorStop(1,"rgba(255,226,186,0)");x.fillStyle=g;x.fillRect(0,0,w,h)});
  let g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,"rgba(5,6,8,.75)");g.addColorStop(.35,"rgba(5,6,8,0)");g.addColorStop(1,"rgba(5,6,8,.15)");x.fillStyle=g;x.fillRect(0,0,w,h);
  g=x.createLinearGradient(0,0,w,0);g.addColorStop(0,"rgba(5,6,8,.7)");g.addColorStop(.22,"rgba(5,6,8,0)");g.addColorStop(.78,"rgba(5,6,8,0)");g.addColorStop(1,"rgba(5,6,8,.7)");x.fillStyle=g;x.fillRect(0,0,w,h);
});
add(E,new T.PlaneGeometry(26,13),new T.MeshStandardMaterial({map:facadeTex,roughness:.95}),[0,6.5,0],null,false).receiveShadow=true;
const tileTex=tex(1024,1024,(x,w)=>{x.fillStyle="#24272B";x.fillRect(0,0,w,w);for(let i=0;i<9000;i++){x.fillStyle=`rgba(255,255,255,${Math.random()*.03})`;x.fillRect(Math.random()*w,Math.random()*w,2,2)}x.strokeStyle="rgba(10,12,14,.45)";x.lineWidth=3;for(let i=0;i<=w;i+=256){x.beginPath();x.moveTo(i,0);x.lineTo(i,w);x.stroke();x.beginPath();x.moveTo(0,i);x.lineTo(w,i);x.stroke()}});
tileTex.wrapS=tileTex.wrapT=T.RepeatWrapping;tileTex.repeat.set(5,3);
add(E,new T.PlaneGeometry(26,14),new T.MeshStandardMaterial({map:tileTex,roughness:.45,metalness:.1}),[0,0,7],[-Math.PI/2,0,0],false);
// safety line in front of the entrance
const hz=tex(512,32,(x,w,h)=>{for(let i=-2;i<w/24+2;i++){x.fillStyle=i%2?"#E2B33B":"#1B1D20";x.beginPath();x.moveTo(i*24,0);x.lineTo(i*24+24,0);x.lineTo(i*24+8,h);x.lineTo(i*24-16,h);x.fill()}});
add(E,new T.PlaneGeometry(6.2,.22),new T.MeshStandardMaterial({map:hz,roughness:.6}),[0,.012,2.1],[-Math.PI/2,0,0],false);
// steel portal + glass sliding doors
const steel=M(0x2A2E33,{metalness:.7,roughness:.35});
box(E,.3,5.4,.5,steel,[-1.9,2.7,.25]);box(E,.3,5.4,.5,steel,[1.9,2.7,.25]);box(E,4.1,.4,.5,steel,[0,5.3,.25]);
const strip=glow(0xF0A060);box(E,3.5,.04,.04,strip,[0,5.08,.52]);
const glassMat=new T.MeshStandardMaterial({color:0x8FA7B3,metalness:.2,roughness:.1,transparent:true,opacity:.42});
const doorL=new T.Group(),doorR=new T.Group();E.add(doorL,doorR);
// sliding leaves run on two tracks so the overlapping glass never z-fights at the centre seam
glassMat.depthWrite=false;
add(E,new T.PlaneGeometry(3.5,5.0),new T.MeshBasicMaterial({map:tex(256,512,(x,w,h)=>{const g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,"#1A1B1C");g.addColorStop(.35,"#6E6152");g.addColorStop(.8,"#C9A983");g.addColorStop(1,"#E9CFA6");x.fillStyle=g;x.fillRect(0,0,w,h);
  x.fillStyle="rgba(255,240,215,.9)";for(let i=0;i<3;i++)x.fillRect(30+i*80,40,46,5);x.fillStyle="rgba(20,18,16,.55)";x.fillRect(20,300,70,212);x.fillRect(170,330,66,182);x.fillStyle="rgba(240,160,96,.35)";x.fillRect(0,h-10,w,10)})}),[0,2.5,.02],null,false);
{const pool=new T.Mesh(new T.PlaneGeometry(5,3.2),new T.MeshBasicMaterial({map:tex(256,256,(x,w,h)=>{const g=x.createRadialGradient(w/2,0,4,w/2,0,h);g.addColorStop(0,"rgba(255,214,160,.55)");g.addColorStop(1,"rgba(255,214,160,0)");x.fillStyle=g;x.fillRect(0,0,w,h)}),transparent:true,depthWrite:false,blending:T.AdditiveBlending}));pool.rotation.x=-Math.PI/2;pool.position.set(0,.015,1.6);E.add(pool)}
// each leaf is exactly 1.66 wide and sits at ±0.83, so the two panes meet at the centre without overlapping
[[doorL,-.88],[doorR,.88]].forEach(([d,x0])=>{box(d,1.66,5.0,.05,glassMat,[0,2.5,0]);box(d,1.66,.08,.08,steel,[0,4.96,0]);box(d,1.66,.08,.08,steel,[0,.04,0]);box(d,.07,5.0,.08,steel,[x0>0?.795:-.795,2.5,0]);box(d,.035,5.0,.08,steel,[x0>0?-.8125:.8125,2.5,0]);box(d,.05,1.1,.1,M(0xB9C0C6,{metalness:.8,roughness:.25}),[x0>0?-.72:.72,2.4,.08]);d.position.set(x0,0,.32)});
// access-control reader beside the door
box(E,.32,.5,.08,M(0x1B1F23,{metalness:.5,roughness:.4}),[2.35,2.3,.06]);box(E,.18,.06,.02,glow(0x5CC58C),[2.35,2.45,.11]);
function drawLabSign(x,w,h){x.fillStyle="#16191C";x.fillRect(0,0,w,h);x.fillStyle="#F1ECE3";x.font="600 120px Jost, sans-serif";x.textAlign="center";x.textBaseline="middle";x.fillText("AI Lab",w/2,h/2+4);x.fillStyle="#F0A060";x.fillRect(w/2-60,h-34,120,4)}
const signTex=tex(1024,256,drawLabSign);
add(E,new T.PlaneGeometry(3.2,.8),new T.MeshBasicMaterial({map:signTex}),[0,6.15,.06],null,false);
// equipment beside the entrance: server rack (left), cobot arm (right)
const rack=new T.Group();rack.position.set(-5.4,0,1.2);E.add(rack);box(rack,1.3,3.2,1,M(0x1D2124,{metalness:.5,roughness:.4}),[0,1.6,0]);
for(let i=0;i<7;i++){box(rack,1.1,.26,.05,M(0x2B3035,{metalness:.5,roughness:.4}),[0,.55+i*.38,.51]);box(rack,.05,.05,.05,glow(i%3?0x5CC58C:0xF0A060),[.42,.55+i*.38,.55])}
box(E,1.6,.9,.9,M(0x2F3439,{metalness:.5,roughness:.5}),[-3.4,.45,1.0]);box(E,1.5,.05,.85,M(0xE2B33B),[-3.4,.92,1.0]);
const arm=new T.Group();arm.position.set(5.4,0,1.4);E.add(arm);add(arm,new T.CylinderGeometry(.55,.65,.35,24),M(0x2A2E33,{metalness:.6,roughness:.4}),[0,.18,0]);
const armMat=M(0xC9CDD1,{metalness:.4,roughness:.35});
box(arm,.3,2.1,.3,armMat,[0,1.3,0]);add(arm,new T.CylinderGeometry(.24,.24,.4,20),M(0x2A2E33,{metalness:.6}),[0,2.35,0],[Math.PI/2,0,0]);
const a2=box(arm,.26,1.6,.26,armMat,[.55,2.85,0],[0,0,-.9]);add(arm,new T.CylinderGeometry(.14,.18,.35,20),M(0xD9773F,{metalness:.3,roughness:.4}),[1.2,3.25,0],[0,0,-2.4]);
[[-65.4,1.2],[-54.6,1.4]].forEach(([x0,z0])=>{const s=new T.SpotLight(0xffd9a8,1.6,12,.42,.7,1.4);s.position.set(x0,8.5,z0+1.8);s.target.position.set(x0,0,z0);scene.add(s,s.target)});
{const d=new T.PointLight(0xffc98e,1.1,7,2);d.position.set(-60,2.4,1.2);scene.add(d)}
const eLight=new T.SpotLight(0xfff0e0,.55,30,.5,.6);eLight.position.set(-60,12,14);eLight.target.position.set(-60,2,0);eLight.castShadow=true;eLight.shadow.mapSize.set(1024,1024);scene.add(eLight,eLight.target);

/* ================= ROOM (corner diorama) ================= */
const Rg=new T.Group();scene.add(Rg);
const L=10.5,H=6.4;
const wallTex=tex(1024,1024,(x,w,h)=>{x.fillStyle="#33373C";x.fillRect(0,0,w,h);
  for(let i=0;i<20000;i++){const v=Math.random()>.5;x.fillStyle=`rgba(${v?255:0},${v?255:0},${v?255:0},${Math.random()*.045})`;x.fillRect(Math.random()*w,Math.random()*h,2,2)}
  x.strokeStyle="rgba(20,23,26,.4)";x.lineWidth=3;for(let p=0;p<=w;p+=341){x.beginPath();x.moveTo(p,0);x.lineTo(p,h);x.stroke()}x.beginPath();x.moveTo(0,h*.5);x.lineTo(w,h*.5);x.stroke();
  x.fillStyle="rgba(20,23,26,.5)";for(let p=170;p<w;p+=341)for(let q=128;q<h;q+=256){x.beginPath();x.arc(p,q,5,0,7);x.fill()}});
const wallMat=new T.MeshStandardMaterial({map:wallTex,roughness:.95});
add(Rg,new T.PlaneGeometry(L,H),wallMat,[L/2,H/2,0],null,false);                 // wall B (back), faces +z
add(Rg,new T.PlaneGeometry(L,H),wallMat,[0,H/2,L/2],[0,Math.PI/2,0],false);      // wall A (left), faces +x
const floorTex=tex(1024,1024,(x,w,h)=>{x.fillStyle="#202327";x.fillRect(0,0,w,h);for(let i=0;i<12000;i++){x.fillStyle=`rgba(255,255,255,${Math.random()*.035})`;x.fillRect(Math.random()*w,Math.random()*h,2,2)}
  x.strokeStyle="rgba(0,0,0,.35)";x.lineWidth=2;for(let p=0;p<=w;p+=128){x.beginPath();x.moveTo(p,0);x.lineTo(p,h);x.stroke();x.beginPath();x.moveTo(0,p);x.lineTo(w,p);x.stroke()}});
add(Rg,new T.PlaneGeometry(L,L),new T.MeshStandardMaterial({map:floorTex,roughness:.35,metalness:.15}),[L/2,0,L/2],[-Math.PI/2,0,0],false).receiveShadow=true;
// yellow walkway lines on the floor
const lineMat=new T.MeshBasicMaterial({color:0xC9A23A});
add(Rg,new T.PlaneGeometry(.08,L-2.4),lineMat,[5.85,.011,L/2+.6],[-Math.PI/2,0,0],false);add(Rg,new T.PlaneGeometry(L-2.4,.08),lineMat,[L/2+.6,.011,5.85],[-Math.PI/2,0,0],false);
// skirting + cable tray along the top of both walls
box(Rg,L,.14,.05,M(0x1E2226),[L/2,.07,.03]);box(Rg,.05,.14,L,M(0x1E2226),[.03,.07,L/2]);
const tray=M(0x8A9096,{metalness:.7,roughness:.35});box(Rg,L,.12,.35,tray,[L/2,H-.5,.2]);box(Rg,.35,.12,L,tray,[.2,H-.5,L/2]);
// linear LED fixtures hanging from the ceiling
const ledMat=new T.MeshStandardMaterial({color:0x2A2E33,metalness:.6,roughness:.4});
[[4.0,5.4],[7.2,5.4]].forEach(([x0,z0])=>{const f=new T.Group();f.position.set(x0,H-1.15,z0);Rg.add(f);box(f,.12,.08,3.6,ledMat,[0,0,0]);add(f,new T.PlaneGeometry(.1,3.5),glow(0xF6F2EA),[0,-.045,0],[Math.PI/2,0,0],false);box(f,.01,1.1,.01,M(0x111111),[0,.6,-1.5]);box(f,.01,1.1,.01,M(0x111111),[0,.6,1.5])});
const bulb=new T.PointLight(0xfff6ea,.55,14,1.6);bulb.position.set(5.6,H-1.6,5.4);Rg.add(bulb);

const stationGroups={},pickables=[],labelMeshes={};
/* station signage: flat industrial sign plates (readable from the overview camera) */
function fitFont(x,text,weight,size,maxW,family){let f=size;do{x.font=`${weight} ${f}px ${family}`;if(x.measureText(text).width<=maxW)break;f-=4}while(f>28);return f}
function signTexture(s){
  const W=1200,H=360,fam="Jost,'Noto Sans TC','Noto Sans Thai',sans-serif";
  return tex(W,H,(x)=>{
    x.fillStyle="#13171B";x.fillRect(0,0,W,H);x.strokeStyle="#2F363C";x.lineWidth=8;x.strokeRect(4,4,W-8,H-8);
    const acc=s.hot?"#F0A060":"#E2B33B";x.fillStyle=acc;x.fillRect(0,0,14,H);x.fillStyle="#2A3036";x.fillRect(280,40,3,H-80);
    const num=s.no==="DEMO"?"DEMO":s.no.replace("EXP-","");
    x.fillStyle=acc;x.textAlign="center";x.textBaseline="middle";
    x.font=`500 34px ${fam}`;x.globalAlpha=.7;x.fillText(s.no==="DEMO"?"AI":"EXP",147,92);x.globalAlpha=1;
    fitFont(x,num,300,s.no==="DEMO"?84:140,230,fam);x.fillText(num,147,210);
    x.textAlign="left";x.fillStyle="#F4F6F8";fitFont(x,s.label,600,108,860,fam);x.fillText(s.label,320,150);
    x.fillStyle="#AEB7BF";let sub=s.title;fitFont(x,sub,500,48,860,fam);
    if(x.measureText(sub).width>860){while(sub.length>4&&x.measureText(sub+"…").width>860)sub=sub.slice(0,-1);sub+="…"}
    x.fillText(sub,320,268);
  });
}
function makeSign(s){
  const g=new T.Group(),floor=s.kind==="floor",w=floor?2.5:2.7,h=w*0.3;
  const frame=new T.Mesh(new T.PlaneGeometry(w+.12,h+.12),new T.MeshBasicMaterial({color:0xF0A060,transparent:true,opacity:0}));frame.position.z=-.005;g.add(frame);
  const plate=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:signTexture(s)}));g.add(plate);
  const back=new T.Mesh(new T.BoxGeometry(w,h,.04),M(0x1B1F23,{metalness:.5}));back.position.z=-.03;g.add(back);
  if(floor){[-w*.38,w*.38].forEach(dx=>{const c=new T.Mesh(new T.BoxGeometry(.015,H-1.0-s.signY,.015),M(0x15181B));c.position.set(dx,(H-1.0-s.signY)/2+h/2,-.03);g.add(c)})}
  if(s.kind==="wallB")g.position.set(s.pos[0],4.45,.06);
  else if(s.kind==="wallA"){g.position.set(.06,4.45,s.pos[2]);g.rotation.y=Math.PI/2}
  else{g.position.set(s.pos[0],s.signY,s.pos[2]);g.rotation.y=Math.PI/4}
  g.userData.frame=frame;plate.userData.station=s.id;back.userData.station=s.id;frame.userData.station=s.id;
  return g;
}

function stationGroup(s){const g=new T.Group();g.position.set(...s.pos);if(s.kind==="wallA")g.rotation.y=Math.PI/2;Rg.add(g);g.userData.station=s.id;stationGroups[s.id]=g;return g}
function screenTex(draw){return tex(512,320,(x,w,h)=>{x.fillStyle="#0E1A22";x.fillRect(0,0,w,h);draw(x,w,h)})}

/* --- props per station --- */
const P={};
P.manual=g=>{ // steel workbench + monitor showing a manual page
  const top=M(0x6B7177,{metalness:.6,roughness:.35});box(g,2.6,.08,1.1,top,[0,1.1,.7]);[[-1.2,.25],[1.2,.25],[-1.2,1.15],[1.2,1.15]].forEach(([x,z])=>box(g,.07,1.1,.07,M(0x2A2E33,{metalness:.6}),[x,.55,z]));
  box(g,2.4,.5,.04,M(0x23272B,{metalness:.5}),[0,.55,.2]);
  box(g,.1,.45,.1,M(0x2A2E33),[0,1.4,.45]);box(g,1.5,.92,.06,M(0x15181B),[0,2.08,.42]);
  add(g,new T.PlaneGeometry(1.4,.82),new T.MeshBasicMaterial({map:screenTex((x,w,h)=>{x.fillStyle="#EDEFF1";x.fillRect(30,24,w-60,h-48);x.fillStyle="#1F2A33";x.fillRect(30,24,w-60,40);x.fillStyle="#F0A060";x.font="500 22px Jost";x.fillText("UPGRADE RECORD",44,52);x.fillStyle="#9AA6AE";for(let i=0;i<6;i++)x.fillRect(50,90+i*26,(w-140)*(.5+((i*37)%50)/100),10);x.fillStyle="#5CC58C";x.fillRect(w-130,h-80,70,26)})}),[0,2.08,.455],null,false);
  for(let i=0;i<4;i++)box(g,.7,.035,.5,M(i%2?0xE9EBED:0xD5D9DD),[-.85,1.16+i*.04,.85],[0,i*.06,0]);
  box(g,.45,.03,.3,M(0x1B1E21),[.75,1.155,.95]);
};
P.report=g=>{ // wall-mounted display with chart
  box(g,2.7,1.6,.08,M(0x15181B,{metalness:.5,roughness:.3}),[0,2.75,.06]);
  add(g,new T.PlaneGeometry(2.56,1.46),new T.MeshBasicMaterial({map:tex(800,460,(x,w,h)=>{x.fillStyle="#12171C";x.fillRect(0,0,w,h);x.fillStyle="#DCE1E5";x.font="500 34px Jost";x.fillText("MONTHLY REVIEW · 17 P",40,58);x.strokeStyle="rgba(255,255,255,.08)";for(let i=0;i<5;i++){x.beginPath();x.moveTo(40,120+i*60);x.lineTo(w-30,120+i*60);x.stroke()}const v=[.45,.62,.38,.8,.7,.92];v.forEach((a,i)=>{x.fillStyle=i===5?"#F0A060":"#6F8796";x.fillRect(60+i*115,h-40-a*280,62,a*280)})})}),[0,2.75,.105],null,false);
  box(g,.5,.08,.08,M(0x2A2E33),[0,1.9,.06]);
  box(g,.9,1.0,.6,M(0x2F3439,{metalness:.5,roughness:.45}),[.9,.5,.6]);box(g,.86,.04,.56,M(0x6B7177,{metalness:.6}),[.9,1.02,.6]);
};
P.maint=g=>{ // server rack with blinking LEDs + toolbox
  box(g,1.2,2.9,1.0,M(0x1D262E),[0,1.45,.6]);g.userData.leds=[];
  for(let i=0;i<8;i++){box(g,1.0,.24,.05,M(0x2B3640),[0,.45+i*.32,1.11]);const l=box(g,.07,.07,.05,glow(0x5CC58C),[.38,.45+i*.32,1.14]);g.userData.leds.push(l)}
  const tb=new T.Group();tb.position.set(-1.2,0,1.3);g.add(tb);box(tb,.8,.4,.42,M(0xA8582F,{roughness:.5}),[0,.2,0]);box(tb,.5,.06,.06,M(0x14181F),[0,.5,0]);box(tb,.06,.14,.06,M(0x14181F),[-.22,.44,0]);box(tb,.06,.14,.06,M(0x14181F),[.22,.44,0]);
  add(g,new T.TorusGeometry(.16,.05,8,20),M(0xC9CFD4,{metalness:.6,roughness:.3}),[-1.5,.05,2.0],[Math.PI/2,0,0]);
};
P.kb=g=>{ // steel shelving with document binders
  const frame=M(0x5E646A,{metalness:.7,roughness:.35});const W=2.2,Hh=3.2,D=.55;
  [[-W/2,0],[W/2,0],[-W/2,D],[W/2,D]].forEach(([x,z])=>box(g,.05,Hh,.05,frame,[x,Hh/2,z]));
  const cols=[0x2F3E4C,0x3D4651,0x8A9096,0x1F2428,0x5A6A78,0xB9BEC3];
  for(let r=0;r<4;r++){box(g,W,.04,D,frame,[0,.8*r+.06,D/2]);let x=-W/2+.1;let k=r*3;while(x<W/2-.16){const bw=.11,bh=.55;box(g,bw,bh,.4,M(cols[k%cols.length],{roughness:.7}),[x+bw/2,.8*r+.09+bh/2,D/2]);box(g,.07,.12,.01,M(0xEDEFF1),[x+bw/2,.8*r+.45,D/2+.205]);x+=bw+.012;k++}}
  box(g,W,.04,D,frame,[0,Hh,D/2]);
};
P.cases=g=>{ // steel filing cabinet + pinned incident sheets
  box(g,1.0,1.9,.8,M(0x8A9096,{metalness:.55,roughness:.4}),[0,.95,.42]);
  for(let i=0;i<3;i++){box(g,.9,.5,.04,M(0x9DA3A9,{metalness:.55,roughness:.35}),[0,.4+i*.6,.83]);box(g,.3,.04,.05,M(0x2A2E33),[0,.55+i*.6,.86]);box(g,.18,.08,.01,M(0xEDEFF1),[0,.42+i*.6,.86])}
  [0x3D4651,0x5A6A78,0x2F3E4C].forEach((c,i)=>box(g,.75,.05,.55,M(c),[0,1.94+i*.06,.42],[0,i*.15-.12,0]));
  const pin=new T.Group();pin.position.set(0,3.1,.03);g.add(pin);box(pin,1.6,1.0,.03,M(0x2A2E33,{metalness:.4}),[0,0,0]);
  [[-.5,.2],[.1,.22],[.5,-.15],[-.2,-.25]].forEach(([x,y],i)=>box(pin,.36,.3,.01,M(i===1?0xF0A060:0xE6E9EC),[x,y,.03]));
};
P.site=g=>{ // kiosk showing this portfolio: pedestal + angled touch screen
  const st=M(0x2A2E33,{metalness:.6,roughness:.4});
  box(g,.9,.06,.9,st,[0,.03,0]);box(g,.16,1.05,.16,st,[0,.56,0]);
  const head=new T.Group();head.position.set(0,1.18,0);head.rotation.x=-.55;g.add(head);
  box(head,1.25,.82,.07,M(0x15181B),[0,0,0]);
  add(head,new T.PlaneGeometry(1.17,.74),new T.MeshBasicMaterial({map:screenTex((x,w,h)=>{x.fillStyle="#0B0C0E";x.fillRect(0,0,w,h);
    x.fillStyle="#3B3F44";x.fillRect(34,70,170,210);x.fillStyle="#E9CFA6";x.fillRect(80,140,78,140);
    x.fillStyle="#F7F8F9";x.font="600 46px Jost";x.fillText("HB",240,140);x.font="600 34px Jost";x.fillText("AI Lab",240,190);
    x.fillStyle="#F0A060";x.fillRect(240,214,110,5);x.fillStyle="#9AA6AE";x.font="22px Jost";x.fillText("中文 · EN · ไทย",240,258)})}),[0,0,.04],null,false);
};
P.ocr=g=>{ // PC + monitor running the OCR item finder
  const desk=M(0x6B7177,{metalness:.6,roughness:.35});box(g,1.5,.07,.9,desk,[0,1.0,.55]);[[-.68,.15],[.68,.15],[-.68,.95],[.68,.95]].forEach(([x,z])=>box(g,.06,1.0,.06,M(0x2A2E33,{metalness:.6}),[x,.5,z]));
  box(g,.38,.9,.8,M(0x1B1E21,{metalness:.5,roughness:.4}),[.45,.45,.55]);box(g,.02,.6,.02,glow(0x7FD3FF),[.45,.55,.96]);
  box(g,.08,.4,.08,M(0x2A2E33),[0,1.23,.3]);box(g,1.1,.66,.05,M(0x15181B),[0,1.72,.3]);
  add(g,new T.PlaneGeometry(1.02,.6),new T.MeshBasicMaterial({map:screenTex((x,w,h)=>{x.fillStyle="#7FD3FF";x.font="500 30px Jost,monospace";x.fillText("+7Siiver Sword",30,70);x.fillStyle="#9AA6AE";x.font="22px Jost";x.fillText("fuzzy match 92%",30,115);x.fillStyle="#E8EAEC";x.font="700 70px Jost,'Noto Sans TC'";x.fillText("銀劍",30,215);x.fillStyle="#F0A060";x.fillRect(30,250,300,8)})}),[0,1.72,.33],null,false);
  box(g,.7,.03,.22,M(0x23272B),[0,1.05,.85]);
};
P.gov=g=>{ // secure data gateway appliance on a plinth
  box(g,1.2,.9,1.2,M(0x2F3439,{metalness:.5,roughness:.45}),[0,.45,0]);box(g,1.24,.06,1.24,M(0xC9A23A),[0,.93,0]);
  const unit=new T.Group();unit.position.set(0,1.6,0);g.add(unit);
  box(unit,1.0,1.2,.8,M(0x1B1E21,{metalness:.6,roughness:.3}),[0,0,0]);
  box(unit,.9,.06,.02,glow(0xF0A060),[0,.45,.41]);
  for(let i=0;i<4;i++)box(unit,.8,.14,.02,M(0x2A2E33,{metalness:.6}),[0,.15-i*.2,.41]);
  add(unit,new T.PlaneGeometry(.5,.3),new T.MeshBasicMaterial({map:screenTex((x,w,h)=>{x.fillStyle="#5CC58C";x.font="600 64px Jost";x.fillText("MASKED",40,130);x.fillStyle="#E8EAEC";x.font="500 46px Jost";x.fillText("RAW OUT 0",40,230)})}),[0,-.38,.415],null,false);
  const ring=add(g,new T.TorusGeometry(1.0,.012,6,64),glow(0xF0A060),[0,1.6,0],[Math.PI/2,0,0],false);
  g.userData.spin=[];g.userData.ring=ring;
};
P.demos=g=>{ // inspection table: PCB + camera on tripod + ring light
  box(g,2.6,.08,1.6,M(0x8A9096,{metalness:.6,roughness:.3}),[0,1.0,0]);[[-1.2,-.7],[1.2,-.7],[-1.2,.7],[1.2,.7]].forEach(([x,z])=>box(g,.08,1,.08,M(0x2A2F36),[x,.5,z]));
  const pcb=tex(512,340,(x,w,h)=>{x.fillStyle="#24603F";x.fillRect(0,0,w,h);x.strokeStyle="#3E8A57";x.lineWidth=8;x.lineCap="round";[[[20,60],[300,60],[300,180]],[[20,120],[200,120],[200,300],[480,300]],[[360,30],[490,30],[490,220]],[[90,320],[90,200],[160,200]]].forEach(t=>{x.beginPath();t.forEach(([a,b],i)=>i?x.lineTo(a,b):x.moveTo(a,b));x.stroke()});x.fillStyle="#D2A64C";[[300,180],[480,300],[160,200],[490,220],[20,60],[20,120]].forEach(([a,b])=>{x.beginPath();x.arc(a,b,14,0,7);x.fill();x.fillStyle="#0B0F0D";x.beginPath();x.arc(a,b,5,0,7);x.fill();x.fillStyle="#D2A64C"});x.fillStyle="#D2A64C";for(let i=0;i<6;i++)x.fillRect(60+i*24,220,12,26);x.strokeStyle="#F2614E";x.lineWidth=5;x.strokeRect(225,95,60,50)});
  add(g,new T.BoxGeometry(1.5,.05,1.0),[M(0x24603F),M(0x24603F),new T.MeshStandardMaterial({map:pcb,roughness:.5}),M(0x24603F),M(0x24603F),M(0x24603F)],[-.15,1.08,.05]);
  const tri=new T.Group();tri.position.set(.95,1.05,-.45);g.add(tri);box(tri,.06,1.5,.06,M(0x14181F),[0,.75,0]);box(tri,.06,.06,.9,M(0x14181F),[0,1.5,.4]);
  const camG=new T.Group();camG.position.set(0,1.38,.85);tri.add(camG);box(camG,.42,.3,.32,M(0x14181F),[0,0,0]);add(camG,new T.CylinderGeometry(.11,.13,.22,20),M(0x2A2F36),[0,-.24,0]);
  add(camG,new T.TorusGeometry(.24,.035,10,32),glow(0xF3ECDF),[0,-.37,0],[Math.PI/2,0,0],false);
  const spot=new T.SpotLight(0xfff3e0,.8,4,.7,.5);spot.position.set(.95,2.3,.4);spot.target.position.set(-.15,1.1,.05);g.add(spot,spot.target);
  const mon=new T.Group();mon.position.set(-1.0,1.05,-.55);g.add(mon);box(mon,.05,.4,.05,M(0x2A2F36),[0,.2,0]);box(mon,.9,.58,.05,M(0x14181F),[0,.6,0],[0,.35,0]);
  add(mon,new T.PlaneGeometry(.82,.5),new T.MeshBasicMaterial({map:screenTex((x,w,h)=>{x.fillStyle="#F2614E";x.font="700 64px Jost";x.fillText("NG",30,90);x.fillStyle="#F3ECDF";x.font="500 34px Jost";x.fillText("score 1.69",30,150);x.fillStyle="#5CC58C";x.fillText("recall 100%",30,205)})}),[.01,.6,.03],[0,.35,0],false);
};
P.build=g=>{ // developer workstation: dual monitors + tower
  const desk=M(0x6B7177,{metalness:.6,roughness:.35});box(g,2.4,.07,1.1,desk,[0,1.0,0]);[[-1.1,-.45],[1.1,-.45],[-1.1,.45],[1.1,.45]].forEach(([x,z])=>box(g,.06,1.0,.06,M(0x2A2E33,{metalness:.6}),[x,.5,z]));
  const scr=(c)=>screenTex((x,w,h)=>{x.font="24px Jost";c.forEach((l,i)=>{x.fillStyle=l[1];x.fillText(l[0],26,50+i*40)})});
  [[-.55,.28,[["> git push origin main","#9AA6AE"],["✓ deployed to Pages","#5CC58C"],["> build 3D lab","#9AA6AE"],["  three.js r128","#7FD3FF"]]],[.55,-.28,[["agent: plan → build","#E8EAEC"],["  1. scene  ✓","#5CC58C"],["  2. i18n   ✓","#5CC58C"],["  3. deploy …","#F0A060"]]]].forEach(([x0,ry,lines])=>{const m=new T.Group();m.position.set(x0,1.0,-.2);m.rotation.y=ry;g.add(m);box(m,.08,.38,.08,M(0x2A2E33),[0,.2,0]);box(m,1.0,.6,.05,M(0x15181B),[0,.62,0]);add(m,new T.PlaneGeometry(.94,.54),new T.MeshBasicMaterial({map:scr(lines)}),[0,.62,.03],null,false)});
  box(g,.7,.03,.22,M(0x23272B),[0,1.05,.3]);
  box(g,.32,.85,.75,M(0x1B1E21,{metalness:.5}),[1.45,.43,0]);box(g,.02,.5,.02,glow(0x5CC58C),[1.62,.6,.2]);
  g.userData.bob=new T.Group();g.userData.head=new T.Group();
};

ST.forEach(s=>{
  const g=stationGroup(s);
  // build the prop at the origin, then fit it to its slot: centred on the floor, or backed against the wall
  const tmp=new T.Group();P[s.id](tmp);
  if(s.kind==="floor"&&s.id==="report"){const st=M(0x2A2E33,{metalness:.6});[-1.1,1.1].forEach(x=>{box(tmp,.07,2.0,.07,st,[x,1.0,.0]);box(tmp,.12,.04,.7,st,[x,.02,.1])})}
  tmp.updateMatrixWorld(true);const bb=new T.Box3().setFromObject(tmp);
  const dz=s.kind==="floor"?-(bb.min.z+bb.max.z)/2:.06-bb.min.z;
  tmp.children.slice().forEach(c=>{c.position.z+=dz;g.add(c)});Object.keys(tmp.userData).forEach(k=>g.userData[k]=tmp.userData[k]);
  g.traverse(o=>{if(o.isMesh){o.userData.station=s.id;pickables.push(o)}});
  const lab=makeSign(s);Rg.add(lab);labelMeshes[s.id]=lab;lab.children.forEach(c=>pickables.push(c));
});

// lights
scene.add(new T.HemisphereLight(0xe8eef4,0x1a1d20,.32));
const sun=new T.DirectionalLight(0xffe6c8,.9);sun.position.set(14,16,10);sun.target.position.set(4,0,4);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
Object.assign(sun.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:50});sun.shadow.bias=-.0005;scene.add(sun,sun.target);
const fill=new T.PointLight(0x8fb6ff,.18,30);fill.position.set(9,5,9);scene.add(fill);

/* ================= camera & views ================= */
const narrow=()=>innerWidth/innerHeight<.85;
const views={
  entrance:()=>({pos:new T.Vector3(narrow()?-60:-63.6,3.0,narrow()?24:17.5),look:new T.Vector3(narrow()?-60:-63.6,3.0,0),fov:narrow()?52:38}),
  room:()=>({pos:narrow()?new T.Vector3(24,13,24):new T.Vector3(15.5,8.6,15.5),look:narrow()?new T.Vector3(4.6,1.2,4.6):new T.Vector3(4.4,1.9,4.4),fov:narrow()?50:34})
};

/* signs and props that sit between the camera and the focused station fade out, so the target is never blocked */
const _seg=new T.Line3(),_p=new T.Vector3(),_bc=new T.Vector3();
function fadeOccluders(id,v){
  const from=v?v.pos:null,to=v?v.look:null;if(v)_seg.set(from,to);
  ST.forEach(s=>{if(!stationGroups[s.id])return;[labelMeshes[s.id],stationGroups[s.id]].forEach(g=>{if(!g)return;
    let fade=false;
    if(v&&s.id!==id){new T.Box3().setFromObject(g).getCenter(_bc);_seg.closestPointToPoint(_bc,true,_p);
      const t=_p.distanceTo(from)/from.distanceTo(to);fade=_p.distanceTo(_bc)<1.9&&t>.05&&t<.92}
    g.traverse(o=>{if(!o.material)return;(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>{
      if(m.userData.op0===undefined){m.userData.op0=m.opacity;m.userData.tr0=m.transparent}
      m.userData.fadeTo=fade?.12:m.userData.op0})})})});
}
function tickFade(dt){ST.forEach(s=>[labelMeshes[s.id],stationGroups[s.id]].forEach(g=>g&&g.traverse(o=>{if(!o.material)return;(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>{
  const t=m.userData.fadeTo;if(t===undefined)return;m.opacity+=(t-m.opacity)*Math.min(1,dt*7);m.transparent=m.userData.tr0||m.opacity<.99;m.depthWrite=m.opacity>.5})})))}
function stationView(id,centered){
  const s=ST.find(x=>x.id===id),c=new T.Vector3(),g=stationGroups[id];
  new T.Box3().setFromObject(g).getCenter(c);
  if(centered){
    // caption-bar focus: frame the prop AND its sign in the middle of the screen (no panel on the left)
    const sg=labelMeshes[id],sc=new T.Vector3();if(sg)sg.getWorldPosition(sc);else sc.copy(c);
    const mid=c.clone().lerp(sc,.45);
    const n=s.kind==="wallB"?new T.Vector3(0,0,1):s.kind==="wallA"?new T.Vector3(1,0,0):new T.Vector3(1,0,1).normalize();
    const side=s.kind==="floor"?new T.Vector3(0,0,0):new T.Vector3(n.z,0,n.x);
    const pos=mid.clone().addScaledVector(n,s.kind==="floor"?7.2:8.2).addScaledVector(side,2.2).add(new T.Vector3(0,2.4,0));
    return{pos,look:mid,fov:narrow()?54:40};
  }
  let n=s.kind==="wallB"?new T.Vector3(0,0,1):s.kind==="wallA"?new T.Vector3(1,0,0):new T.Vector3(1,0,1).normalize();
  const d=s.kind==="floor"?6.2:7.0,up=s.kind==="floor"?3.4:2.9;
  const pos=c.clone().addScaledVector(n,d).add(new T.Vector3(0,up,0));
  if(s.kind!=="floor"){pos.addScaledVector(new T.Vector3(n.z,0,n.x),3.0)}
  const look=c.clone();const dir=look.clone().sub(pos).normalize(),right=new T.Vector3().crossVectors(dir,new T.Vector3(0,1,0)).normalize();
  if(narrow())look.y-=1.3;else look.addScaledVector(right,-2.3);
  return{pos,look,fov:narrow()?50:36};
}
let camFrom=null,camTo=views.entrance(),camT=1,look=camTo.look.clone();
cam.position.copy(camTo.pos);cam.fov=camTo.fov;
let camStart=0;function flyTo(v,dur=1.25){camFrom={pos:cam.position.clone(),look:look.clone(),fov:cam.fov};camTo=v;camT=0;camDur=dur;camStart=performance.now()}
let camDur=1.25;
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;

/* ================= state & UI ================= */
let mode="loading",active=null,focus=0,yaw=0,pitch=0,yawT=0,pitchT=0;
const panel=$("panel"),pbody=$("pbody"),veil=$("veil");
let openSlide=null,openHome=null;
function setNav(id){document.querySelectorAll("#hdr nav button").forEach(b=>b.setAttribute("aria-current",b.dataset.id===id))}
function showCap(i){focus=(i+ST.length)%ST.length;const s=ST[focus];$("capN").textContent=`${String(focus+1).padStart(2,"0")}/${String(ST.length).padStart(2,"0")} · ${s.no}`;$("capT").textContent=s.title;}
/* every case opens at its first block (01), whatever was scrolled or jumped to before */
function toTop(){const reset=()=>{pbody.scrollTop=0;pbody.querySelectorAll(".wrap,.slide,.bench").forEach(n=>{n.scrollTop=0})};reset();requestAnimationFrame(reset);setTimeout(reset,120);setTimeout(reset,700)}
function openStation(id,{fly=true}={}){
  fadeOccluders(null,null);
  if(mode==="entrance"){$("entryUI").classList.add("hide")}
  const idx=ST.findIndex(s=>s.id===id);if(idx>=0)showCap(idx);
  closePanel(false);active=id;setNav(id);
  if(fly&&idx>=0)flyTo(stationView(id));
  const sl=slideById(id);if(!sl)return;
  openHome=sl.nextSibling;openSlide=sl;pbody.appendChild(sl);toTop();
  const s=ST[idx];$("pk").textContent=s?`${s.no} · ${s.facet}`:tt("panel.about");
  setTimeout(()=>{if(openSlide===sl){panel.classList.add("on");sfx("open");setStage();toTop();$("pclose").focus({preventScroll:true})}},fly&&idx>=0?650:0);
  $("cap").classList.add("hide");document.body.classList.add("popen");
  try{history.replaceState(null,"","#"+id)}catch(e){}
}
function closePanel(back=true){
  if(openSlide){track.insertBefore(openSlide,openHome);openSlide=null}
  panel.classList.remove("on");document.body.classList.remove("popen");setTimeout(setStage,0);
  if(back&&active){active=null;setNav(null);flyTo(views.room());fadeOccluders(null,null);$("cap").classList.remove("hide");try{history.replaceState(null,"","#room")}catch(e){}}
}
function enterRoom(fast){
  if(mode==="room"||finishing)return;
  if(!fast&&mode==="entrance"&&!reduce){enterPT=1;sfx("open");return}
  mode="toRoom";
  $("entryUI").classList.add("hide");
  doorOpen=1;flyTo({pos:new T.Vector3(-60,2.6,2.2),look:new T.Vector3(-60,2.6,-4),fov:40},1.1);
  setTimeout(()=>veil.classList.add("on"),650);
  setTimeout(()=>{const v=views.room();cam.position.copy(v.pos);look.copy(v.look);cam.fov=v.fov;camT=1;camTo=v;mode="room";$("roomUI").classList.remove("hide");setStage();veil.classList.remove("on");try{history.replaceState(null,"","#room")}catch(e){}
    {const pd=pending;pending=null;if(pd&&ST.some(s=>s.id===pd))setTimeout(()=>openStation(pd),500)}},1250);
}
function toEntrance(){closePanel(false);active=null;setNav(null);veil.classList.add("on");setTimeout(()=>{doorOpen=0;enterP=enterPT=0;namePlane.material.opacity=1;const ui=$("entryUI");ui.style.opacity="";ui.style.transform="";ui.style.filter="";const v=views.entrance();cam.position.copy(v.pos);look.copy(v.look);cam.fov=v.fov;camT=1;camTo=v;mode="entrance";$("roomUI").classList.add("hide");$("entryUI").classList.remove("hide");veil.classList.remove("on");try{history.replaceState(null,"",location.pathname)}catch(e){}},600)}

$("pclose").addEventListener("click",()=>closePanel(true));
$("enterBtn2").addEventListener("click",enterRoom);
$("doorBadge").addEventListener("click",enterRoom);

$("logo").addEventListener("click",()=>{if(mode==="room")closePanel(true)});
showCap(0);
$("capPrev").addEventListener("click",()=>{showCap(focus-1);{const v=stationView(ST[focus].id,true);fadeOccluders(ST[focus].id,v);flyTo(v,.9)}});
$("capNext").addEventListener("click",()=>{showCap(focus+1);{const v=stationView(ST[focus].id,true);fadeOccluders(ST[focus].id,v);flyTo(v,.9)}});
$("capGo").addEventListener("click",()=>openStation(ST[focus].id,{fly:false}));
$("hintX").addEventListener("click",()=>$("hint").remove());
/* drag the Tips card anywhere; it stays inside the window */
(()=>{const h=$("hint");if(!h)return;let sx=0,sy=0,ox=0,oy=0,on=false;
  const clamp=()=>{if(!h.isConnected||!h.classList.contains("moved"))return;const r=h.getBoundingClientRect();
    h.style.left=Math.max(8,Math.min(innerWidth-r.width-8,r.left))+"px";h.style.top=Math.max(8,Math.min(innerHeight-r.height-8,r.top))+"px"};
  h.addEventListener("pointerdown",e=>{if(e.target.closest("button"))return;e.stopPropagation();e.preventDefault();const r=h.getBoundingClientRect();
    h.classList.add("moved","dragging");h.style.left=r.left+"px";h.style.top=r.top+"px";sx=e.clientX;sy=e.clientY;ox=r.left;oy=r.top;on=true;try{h.setPointerCapture(e.pointerId)}catch(_){}});
  h.addEventListener("pointermove",e=>{if(!on)return;e.stopPropagation();h.style.left=(ox+e.clientX-sx)+"px";h.style.top=(oy+e.clientY-sy)+"px";clamp()});
  const end=e=>{if(!on)return;on=false;h.classList.remove("dragging");clamp()};
  h.addEventListener("pointerup",end);h.addEventListener("pointercancel",end);
  h.addEventListener("click",e=>{if(!e.target.closest("button"))e.stopPropagation()});addEventListener("resize",clamp)})();
// nav + menu
const nav=$("hdrNav");
nav.innerHTML=ST.map(s=>`<button type="button" data-id="${s.id}">${s.nav}</button>`).join("")+`<button type="button" data-id="home">${tt("menu.about")}</button>`;
nav.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;go(b.dataset.id)});
function go(id){if(mode!=="room"){pending=id;enterRoom();return}id==="home"?openStation("home",{fly:false}):openStation(id)}
let pending=null;
$("menuList").innerHTML=ST.map((s,i)=>`<li><button type="button" data-id="${s.id}"><span>${String(i+1).padStart(2,"0")}</span><div><b>${s.label}</b><small>${s.no} · ${s.title}</small></div></button></li>`).join("")+`<li><button type="button" data-id="home"><span>00</span><div><b>${tt("menu.about")}</b><small>${tt("menu.aboutSub")}</small></div></button></li><li><button type="button" data-id="door"><span>←</span><div><b>${tt("menu.door")}</b><small>${tt("menu.doorSub")}</small></div></button></li>`;
$("menuBtn").addEventListener("click",()=>$("menuOv").classList.add("on"));
$("menuX").addEventListener("click",()=>$("menuOv").classList.remove("on"));
$("menuList").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;$("menuOv").classList.remove("on");b.dataset.id==="door"?toEntrance():go(b.dataset.id)});
// index tiles inside the "about" slide jump to stations
document.getElementById("index").addEventListener("click",e=>{const a=e.target.closest("a.tile");if(!a)return;e.preventDefault();e.stopImmediatePropagation();openStation(a.getAttribute("href").slice(1))},true);
// keyboard
document.addEventListener("keydown",e=>{
  if($("menuOv").classList.contains("on")){if(e.key==="Escape")$("menuOv").classList.remove("on");return}
  if(e.target.closest&&e.target.closest("input,textarea,select"))return;
  if(e.key==="Escape"){if(openSlide||active){closePanel(true);e.preventDefault()}return}
  if(mode==="entrance"&&(e.key==="Enter"||e.key==="ArrowRight")){enterRoom();return}
  if(mode!=="room"||openSlide)return;
  if(e.key==="ArrowRight"){showCap(focus+1);{const v=stationView(ST[focus].id,true);fadeOccluders(ST[focus].id,v);flyTo(v,.9)};e.stopImmediatePropagation()}
  else if(e.key==="ArrowLeft"){showCap(focus-1);{const v=stationView(ST[focus].id,true);fadeOccluders(ST[focus].id,v);flyTo(v,.9)};e.stopImmediatePropagation()}
  else if(e.key==="Enter"&&!(e.target.closest&&e.target.closest("button,a"))){openStation(ST[focus].id,{fly:false})}
  else if(/^[1-9]$/.test(e.key)){openStation(ST[+e.key-1].id)}
},true);

/* pointer: hover, click, drag-to-look */
const ray=new T.Raycaster(),ndc=new T.Vector2(),tip=$("tip");let hover=null,down=null,dragged=0;
function pick(e){const r=cv.getBoundingClientRect();ndc.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(ndc,cam);
  if(mode==="entrance"){const h=ray.intersectObjects([...doorL.children,...doorR.children],false)[0];return h?"door":null}
  if(mode!=="room")return null;const h=ray.intersectObjects(pickables,false)[0];return h?h.object.userData.station:null}
cv.addEventListener("pointermove",e=>{
  const nx=e.clientX/innerWidth-.5,ny=e.clientY/innerHeight-.5;
  if(down){const dx=e.clientX-down.x,dy=e.clientY-down.y;dragged=Math.max(dragged,Math.hypot(dx,dy));if(dragged>5){yawT=Math.max(-.55,Math.min(.55,down.yaw-dx/innerWidth*1.6));pitchT=Math.max(-.12,Math.min(.18,down.pitch+dy/innerHeight*.5));cv.style.cursor="grabbing"}return}
  const id=pick(e);hover=id;cv.style.cursor=id?"pointer":"grab";
  if(id&&id!=="door"&&!active){const s=ST.find(x=>x.id===id);tip.textContent=`${s.no} · ${s.title}`;tip.style.display="block";tip.style.left=e.clientX+"px";tip.style.top=e.clientY+"px"}else tip.style.display="none";
  parallax.x=nx;parallax.y=ny;
});
const parallax={x:0,y:0};
cv.addEventListener("pointerdown",e=>{down={x:e.clientX,y:e.clientY,yaw:yawT,pitch:pitchT};dragged=0;try{cv.setPointerCapture(e.pointerId)}catch(_){}});
cv.addEventListener("pointerup",e=>{
  const wasDrag=dragged>6;down=null;cv.style.cursor="grab";
  if(wasDrag)return;
  const id=pick(e);
  if(mode==="entrance"&&id==="door"){enterRoom();return}
  if(mode==="room"){if(id){if(active===id&&openSlide)return;openStation(id)}else if(openSlide)closePanel(true)}
});
cv.addEventListener("pointerleave",()=>{tip.style.display="none"});

/* resize */
function resize(){const w=innerWidth,h=innerHeight;renderer.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();if(camT>=1){const v=mode==="entrance"||mode==="loading"?views.entrance():active?stationView(active):views.room();cam.position.copy(v.pos);look.copy(v.look);cam.fov=v.fov;camTo=v}}
addEventListener("resize",resize);

/* clock */
function tick(){const d=new Date(),t=new Intl.DateTimeFormat("zh-TW",{hour:"2-digit",minute:"2-digit",hour12:false,timeZone:"Asia/Taipei"}).format(d);$("clockT").textContent=t}
tick();setInterval(tick,20000);

/* door badge follows the door on screen */
function placeBadge(){const p=new T.Vector3(-60,2.5,.4).project(cam);const b=$("doorBadge");b.style.left=((p.x+1)/2*innerWidth)+"px";b.style.top=((1-p.y)/2*innerHeight)+"px"}

/* ================= loop ================= */
let doorOpen=0,doorAmt=0,last=performance.now(),tm=0;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function frame(now){
  const dt=Math.min(.05,(now-last)/1000);last=now;tm+=dt;
  entranceScrub(dt);
  if(camT<1&&camFrom){camT=reduce?1:Math.max(0,Math.min(1,(now-camStart)/(camDur*1000)));const k=ease(camT);cam.position.lerpVectors(camFrom.pos,camTo.pos,k);look.lerpVectors(camFrom.look,camTo.look,k);cam.fov=camFrom.fov+(camTo.fov-camFrom.fov)*k}
  // gentle look-around: drag offsets + pointer parallax
  yaw+=(yawT-yaw)*Math.min(1,dt*5);pitch+=(pitchT-pitch)*Math.min(1,dt*5);
  if(!down){yawT*=active?.9:.995;pitchT*=active?.9:.995}
  const base=cam.position.clone(),off=base.clone().sub(look);
  const rot=new T.Matrix4().makeRotationY(yaw);off.applyMatrix4(rot);off.y+=pitch*off.length();
  const px=reduce?0:parallax.x*.35,py=reduce?0:parallax.y*.2;
  const camPos=look.clone().add(off);
  const right=new T.Vector3().crossVectors(off.clone().normalize(),new T.Vector3(0,1,0)).normalize();
  camPos.addScaledVector(right,-px);camPos.y+=py;
  const realPos=cam.position.clone();cam.position.copy(camPos);cam.lookAt(look);cam.updateProjectionMatrix();
  // door
  doorAmt+=((mode==="entrance"&&hover==="door"?.18:0)+doorOpen*1.5-doorAmt)*Math.min(1,dt*4);
  doorL.position.x=-.83-doorAmt;doorR.position.x=.83+doorAmt;
  // ambient motion
  if(!reduce){const gv=stationGroups.gov;if(gv){gv.userData.spin.forEach(o=>o.rotation.y=Math.sin(tm*.9)*.5);gv.userData.ring.rotation.z=tm*.8}
    const b=stationGroups.build;if(b){b.userData.bob.position.y=Math.abs(Math.sin(tm*2))*.08;b.userData.head.rotation.y=Math.sin(tm*.8)*.4}
    const m=stationGroups.maint;if(m)m.userData.leds.forEach((l,i)=>l.material.color.setHex(Math.sin(tm*4+i*1.7)>.2?0x5CC58C:(i%3?0x1C3A2A:0xF2B76A)));
    a2.rotation.z=-.9+Math.sin(tm*.7)*.15}
  // hover highlight on labels
  for(const id in labelMeshes){const on=hover===id||active===id,f=labelMeshes[id].userData.frame;f.material.opacity+=((on?1:0)-f.material.opacity)*Math.min(1,dt*10)}
  if(mode==="entrance"||mode==="loading")placeBadge();
  motionPost(dt);
  tickFade(dt);
  renderer.render(scene,cam);cam.position.copy(realPos);
  requestAnimationFrame(frame);
}


/* ================= MOTION LAYER ================= */
// 1) giant outline name painted on the facade, between wall and door (so the door/equipment overlap it)
const NAME="HB";
const nameCv=document.createElement("canvas");nameCv.width=2048;nameCv.height=560;const nameX=nameCv.getContext("2d");
const nameTex=new T.CanvasTexture(nameCv);nameTex.encoding=T.sRGBEncoding;
const namePlane=new T.Mesh(new T.PlaneGeometry(8.2,2.25),new T.MeshBasicMaterial({map:nameTex,transparent:true,depthWrite:false}));
namePlane.position.set(-65.55,3.5,.03);scene.add(namePlane);
let nameDraw=0,nameDrawT=0,nameT0=0;
function placeName(){if(narrow()){namePlane.position.set(-60,7.7,.03);namePlane.scale.setScalar(.74)}else{namePlane.position.set(-63.96,6.3,.03);namePlane.scale.setScalar(.49)}}placeName();addEventListener("resize",placeName);
function paintName(p){
  nameX.clearRect(0,0,2048,560);let fs=430;const F=f=>`600 ${f}px Jost, sans-serif`;nameX.font=F(fs);
  const w=nameX.measureText(NAME).width;if(w>1990){fs*=1990/w;nameX.font=F(fs)}
  nameX.save();nameX.beginPath();nameX.rect(0,0,2048*p,560);nameX.clip();
  nameX.fillStyle="rgba(241,236,227,.94)";nameX.textBaseline="alphabetic";nameX.textAlign="right";nameX.fillText(NAME,2028,490);nameX.textAlign="left";
  nameX.restore();
  if(p<1){nameX.fillStyle="rgba(240,160,96,.95)";nameX.fillRect(2048*p-3,40,6,500)}
  nameTex.needsUpdate=true;
}
// 2) scroll / swipe / key-scrubbed entrance timeline
let enterP=0,enterPT=0,finishing=false;
const doorView={pos:new T.Vector3(-60,2.7,1.6),look:new T.Vector3(-60,2.6,-6),fov:44};
function scrubEnter(d){if(mode!=="entrance"||finishing)return;enterPT=Math.max(0,Math.min(1,enterPT+d))}
addEventListener("wheel",e=>{if(mode!=="entrance")return;if(e.target.closest&&e.target.closest("#menuOv,#panel"))return;e.preventDefault();scrubEnter(e.deltaY/1400)},{passive:false});
let ty=null;addEventListener("touchstart",e=>{if(mode==="entrance")ty=e.touches[0].clientY},{passive:true});
addEventListener("touchmove",e=>{if(mode!=="entrance"||ty===null)return;const y=e.touches[0].clientY;scrubEnter((ty-y)/900);ty=y},{passive:true});
addEventListener("touchend",()=>{ty=null},{passive:true});
addEventListener("keydown",e=>{if(mode==="entrance"&&(e.key==="ArrowDown"||e.key===" "||e.key==="PageDown")){e.preventDefault();scrubEnter(.18)}});
function finishEnter(){
  if(finishing)return;finishing=true;mode="toRoom";veil.classList.add("on");sfx("whoosh");
  setTimeout(()=>{const v=views.room();
    cam.position.copy(v.pos.clone().multiplyScalar(1.22).add(new T.Vector3(0,3.5,0)));look.copy(v.look);cam.fov=v.fov+6;camT=1;
    flyTo(v,1.8);mode="room";$("roomUI").classList.remove("hide");veil.classList.remove("on");setStage();
    try{history.replaceState(null,"","#room")}catch(e){}
    {const pd=pending;pending=null;if(pd&&ST.some(s=>s.id===pd))setTimeout(()=>openStation(pd),900)}finishing=false;enterP=enterPT=0},560);
}
function entranceScrub(dt){
  if(mode!=="entrance")return;
  enterP+=(enterPT-enterP)*Math.min(1,dt*(reduce?30:4.5));
  if(enterPT>0&&!down)enterPT=Math.max(enterPT>.55?enterPT:0,enterPT-dt*.04); // gentle spring back if user stops early
  if(enterP>.002||enterPT>0){
    const k=ease(Math.min(1,enterP)),v=views.entrance();
    cam.position.lerpVectors(v.pos,doorView.pos,k);look.lerpVectors(v.look,doorView.look,k);cam.fov=v.fov+(doorView.fov-v.fov)*k;camT=1;
  }
  doorOpen=Math.max(0,Math.min(1,(enterP-.3)/.45));
  namePlane.material.opacity=Math.max(0,1-enterP*1.8);
  const ui=$("entryUI");ui.style.opacity=String(Math.max(0,1-enterP*2.4));ui.style.transform=`translateY(${-enterP*40}px)`;ui.style.filter=enterP>.01?`blur(${(enterP*14).toFixed(1)}px)`:"";
  const bar=$("scrollFill");if(bar)bar.style.height=(enterP*100)+"%";
  if(enterP>.965)finishEnter();
}
// 3) dust motes drifting in the light
function dust(n,box,color){const g=new T.BufferGeometry(),p=new Float32Array(n*3),sd=new Float32Array(n);for(let i=0;i<n;i++){p[i*3]=box[0]+Math.random()*box[3];p[i*3+1]=box[1]+Math.random()*box[4];p[i*3+2]=box[2]+Math.random()*box[5];sd[i]=Math.random()*6.28}
  g.setAttribute("position",new T.BufferAttribute(p,3));const m=new T.Points(g,new T.PointsMaterial({color,size:.028,transparent:true,opacity:.32,depthWrite:false,blending:T.AdditiveBlending}));m.userData={box,sd};scene.add(m);return m}
const dustRoom=dust(110,[.3,.2,.3,10,5.6,10],0xFFE7C8),dustDoor=dust(60,[-69,.2,.5,18,9,9],0xFFF1DE);
function driftDust(d,dt){const a=d.geometry.attributes.position,b=d.userData.box,sd=d.userData.sd;for(let i=0;i<a.count;i++){let y=a.getY(i)+dt*.08,x=a.getX(i)+Math.sin(tm*.3+sd[i])*dt*.05;if(y>b[1]+b[4])y=b[1];a.setXY(i,x,y)}a.needsUpdate=true}
// 4) signs lift toward the viewer on hover
const NORM={wallB:new T.Vector3(0,0,1),wallA:new T.Vector3(1,0,0),floor:new T.Vector3(.7071,0,.7071)};
function liftSigns(dt){for(const id in labelMeshes){const g=labelMeshes[id],s=ST.find(x=>x.id===id);if(!g.userData.base)g.userData.base=g.position.clone();g.userData.l=(g.userData.l||0)+(((hover===id||active===id)?.16:0)-(g.userData.l||0))*Math.min(1,dt*8);g.position.copy(g.userData.base).addScaledVector(NORM[s.kind],g.userData.l);
  if(s.kind==="floor"&&!reduce)g.rotation.z=Math.sin(tm*.9+g.userData.base.x)*.012}}
// 5) custom cursor with contextual labels
const cur=document.createElement("div");cur.id="cursor";cur.innerHTML="<i></i><span></span>";document.body.appendChild(cur);
const fine=matchMedia("(pointer:fine)").matches;if(!fine)cur.style.display="none";
let cx=innerWidth/2,cy=innerHeight/2,tx=cx,ty2=cy,curLabel="";
let overCv=false;addEventListener("pointermove",e=>{tx=e.clientX;ty2=e.clientY;overCv=e.target===cv;const el=e.target;const ui=el.closest&&el.closest("a,button,input,textarea,select,label,summary");cur.classList.toggle("ui",!!ui);if(el!==cv)setCur("")});
function setCur(t){if(t===curLabel)return;curLabel=t;cur.querySelector("span").textContent=t;cur.classList.toggle("lbl",!!t)}
function moveCursor(dt){cx+=(tx-cx)*Math.min(1,dt*14);cy+=(ty2-cy)*Math.min(1,dt*14);cur.style.transform=`translate(${cx}px,${cy}px)`}
// 6) optional sound: synthesized room tone + soft UI clicks (no audio files)
let actx=null,master=null,soundOn=false;
function audioInit(){if(actx)return;try{actx=new (window.AudioContext||window.webkitAudioContext)();master=actx.createGain();master.gain.value=0;master.connect(actx.destination);
  const lp=actx.createBiquadFilter();lp.type="lowpass";lp.frequency.value=420;lp.connect(master);
  [55,82.4,110.2].forEach((f,i)=>{const o=actx.createOscillator();o.type=i?"sine":"triangle";o.frequency.value=f;const g=actx.createGain();g.gain.value=[.05,.03,.015][i];const l=actx.createOscillator();l.frequency.value=.07+i*.03;const lg=actx.createGain();lg.gain.value=.012;l.connect(lg);lg.connect(g.gain);o.connect(g);g.connect(lp);o.start();l.start()});
  const nb=actx.createBuffer(1,actx.sampleRate*2,actx.sampleRate),d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*.5;const ns=actx.createBufferSource();ns.buffer=nb;ns.loop=true;const nf=actx.createBiquadFilter();nf.type="bandpass";nf.frequency.value=900;nf.Q.value=.6;const ng=actx.createGain();ng.gain.value=.012;ns.connect(nf);nf.connect(ng);ng.connect(master);ns.start();
 }catch(e){actx=null}}
function sfx(kind){if(!soundOn||!actx)return;const t=actx.currentTime,o=actx.createOscillator(),g=actx.createGain();o.connect(g);g.connect(actx.destination);
  if(kind==="hover"){o.frequency.setValueAtTime(880,t);o.frequency.exponentialRampToValueAtTime(1320,t+.05);g.gain.setValueAtTime(.025,t);g.gain.exponentialRampToValueAtTime(.0001,t+.09)}
  else if(kind==="open"){o.type="triangle";o.frequency.setValueAtTime(440,t);o.frequency.exponentialRampToValueAtTime(660,t+.12);g.gain.setValueAtTime(.05,t);g.gain.exponentialRampToValueAtTime(.0001,t+.25)}
  else{o.type="sine";o.frequency.setValueAtTime(120,t);o.frequency.exponentialRampToValueAtTime(40,t+.6);g.gain.setValueAtTime(.08,t);g.gain.exponentialRampToValueAtTime(.0001,t+.7)}
  o.start(t);o.stop(t+.75)}
function toggleSound(){soundOn=!soundOn;audioInit();if(actx){actx.resume&&actx.resume();master.gain.cancelScheduledValues(actx.currentTime);master.gain.linearRampToValueAtTime(soundOn?1:0,actx.currentTime+.6)}
  const b=$("soundBtn");b.setAttribute("aria-pressed",soundOn);b.querySelector("span").textContent=soundOn?"SOUND ON":"SOUND OFF";if(soundOn)sfx("open")}
$("soundBtn").addEventListener("click",toggleSound);
// 7) stage counter (01 entrance / 02 lab / 03 topic)
function setStage(){document.body.classList.toggle("at-entrance",mode==="entrance"||mode==="loading");const el=$("stageNo");if(!el)return;const st=mode==="entrance"||mode==="loading"?["01","ENTRANCE"]:active?["03",(ST.find(s=>s.id===active)||{no:"ABOUT"}).no]:["02","LAB"];el.innerHTML=`<div><b>${st[0]}</b><i></i><b>03</b></div><small>${st[1]}</small>`}
let lastHover=null;
function motionPost(dt){
  if(!reduce){driftDust(dustRoom,dt);driftDust(dustDoor,dt)}
  liftSigns(dt);moveCursor(dt);
  if(hover!==lastHover){if(hover&&hover!=="door")sfx("hover");lastHover=hover}
  if(nameDrawT&&nameDraw<1){if(!nameT0)nameT0=performance.now();nameDraw=reduce?1:Math.min(1,(performance.now()-nameT0)/2400);paintName(ease(nameDraw))}
  const want=mode==="room"?(hover?"OPEN":(down&&dragged>6?"DRAG":"")):(mode==="entrance"?(hover==="door"?"ENTER":"SCROLL"):"");
  if(fine&&cur.matches(":not(.ui)"))setCur(overCv?want:"");
}

/* ================= boot ================= */
const startHash=(window.__startHash||location.hash||"").slice(1);
resize();
let pct=0;const lt=$("loadPct");
const fontsReady=(document.fonts&&document.fonts.ready)?document.fonts.ready:Promise.resolve();
const quick=!!(window.I18N&&I18N.skipIntro);
const timer=setInterval(()=>{pct=Math.min(pct+Math.ceil(Math.random()*9),96);lt.textContent=pct+"%"},90);
fontsReady.then(()=>new Promise(r=>setTimeout(r,quick?100:900))).then(()=>{
  {const c=signTex.image;drawLabSign(c.getContext("2d"),c.width,c.height);signTex.needsUpdate=true;if(nameDraw>=1)paintName(1)}
  // rebuild labels now that fonts are loaded
  for(const id in labelMeshes){const old=labelMeshes[id];const st=ST.find(x=>x.id===id);const lab=makeSign(st);Rg.remove(old);old.children.forEach(c=>{const k=pickables.indexOf(c);if(k>=0)pickables.splice(k,1)});lab.children.forEach(c=>pickables.push(c));Rg.add(lab);labelMeshes[id]=lab}
  clearInterval(timer);lt.textContent="100%";$("loadMsg").textContent=tt("ld.done");
  setTimeout(()=>{$("loader").classList.add("hide");mode="entrance";$("entryUI").classList.remove("hide");setStage();nameDrawT=1;document.body.classList.add("focus-in");setTimeout(()=>document.body.classList.add("focused"),60);if(!reduce){const v=views.entrance();cam.position.copy(v.pos.clone().add(new T.Vector3(1.5,2.2,10)));look.copy(v.look);cam.fov=v.fov+8;camT=1;flyTo(v,2.6)}
    if(startHash&&startHash!=="room"){pending=startHash;}
    // never auto-enter: a topic in the URL is only remembered, the visitor still opens the door themselves
    try{history.replaceState(null,"",location.pathname+location.search)}catch(e){}
  },500);
  requestAnimationFrame(frame);
});
window.__lab={openStation,enterRoom,ST,cam,stationView,get camT(){return camT},get mode(){return mode}};
})();
