import * as THREE from './vendor/three.module.min.js';
import { OrbitControls } from './vendor/OrbitControls.js';

const $ = id => document.getElementById(id);
const names = ['Thumb', 'Index', 'Middle', 'Ring', 'Little', 'Palm'];
const colors = ['#f87171','#fbbf24','#34d399','#22d3ee','#818cf8','#d8b4fe'];
const state = { samples: [], filtered: [], index: 0, sample: null, selectedSensor: -1, layer: 'depth', angle: 0, playing: false, loadToken: 0, drawToken: 0, images: new Map(), canonical: false };
const stage = $('pointcloud');
let renderer, scene, camera, controls, cloud, model, specimen, sensorMeshes = [], sensorAxes = [], labelElements = [], rawPoints, center;
let manifest;
const fmt = n => Number(n).toLocaleString('en-US');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
const safePath = s => s && !/^(?:[a-z]+:|\/\/)/i.test(s) ? s : null;

function init3D() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#132338');
  renderer = new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  stage.prepend(renderer.domElement);
  camera = new THREE.PerspectiveCamera(33, 1, .1, 3000);
  camera.position.set(105, 70, 305);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = .09;
  controls.minDistance = 45;
  controls.maxDistance = 1100;
  controls.enablePan = true;
  controls.maxPolarAngle = Math.PI;
  specimen = new THREE.Group();
  model = new THREE.Group();
  specimen.add(model);
  scene.add(specimen);
  const grid = new THREE.GridHelper(360, 18, '#3d526c', '#223750');
  grid.rotation.x = Math.PI / 2;
  grid.position.z = -95;
  grid.material.transparent = true;
  grid.material.opacity = .4;
  scene.add(grid);
  const dots = [];
  for(let x=-180;x<=180;x+=20) for(let y=-180;y<=180;y+=20) dots.push(x,y,-94.9);
  const dotsGeometry = new THREE.BufferGeometry();
  dotsGeometry.setAttribute('position',new THREE.Float32BufferAttribute(dots,3));
  scene.add(new THREE.Points(dotsGeometry,new THREE.PointsMaterial({color:'#566d89',size:1.2,sizeAttenuation:false,transparent:true,opacity:.35})));
  new ResizeObserver(() => { const {width,height}=stage.getBoundingClientRect(); renderer.setSize(width,height);camera.aspect=width/Math.max(height,1);camera.updateProjectionMatrix(); }).observe(stage);
  const tick=()=> { requestAnimationFrame(tick);controls.update();renderer.render(scene,camera); updateLabels(); };
  tick();
}

function disposeModel() {
  if(!model) return;
  for(const obj of [...model.children]) { model.remove(obj); obj.traverse(child=> {child.geometry?.dispose(); if(Array.isArray(child.material))child.material.forEach(m=>m.dispose());else child.material?.dispose();}); }
  sensorMeshes=[];sensorAxes=[];
  $('sceneLabels').replaceChildren();labelElements=[];
}

function buildCloud(points, sample) {
  if(!renderer) return;
  disposeModel();rawPoints=points;
  const transformed = new Float32Array(points.length);
  const bounds = new THREE.Box3();
  for(let i=0;i<points.length;i+=3){transformed[i]=points[i];transformed[i+1]=-points[i+1];transformed[i+2]=-points[i+2];bounds.expandByPoint(new THREE.Vector3(transformed[i],transformed[i+1],transformed[i+2]));}
  for(const s of sample.sensors || []) bounds.expandByPoint(new THREE.Vector3(s.x,-s.y,-s.z));
  center=bounds.getCenter(new THREE.Vector3());
  const geometry = new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(transformed,3));
  cloud=new THREE.Points(geometry,new THREE.PointsMaterial({size:Number($('pointSize').value),vertexColors:true,sizeAttenuation:false,transparent:true,opacity:.95}));
  model.add(cloud);colorCloud();
  (sample.sensors || []).forEach((sensor,i)=> {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(2.1,14,10),new THREE.MeshBasicMaterial({color:colors[i]}));
    mesh.position.set(sensor.x,-sensor.y,-sensor.z);model.add(mesh);sensorMeshes.push(mesh);
    const halo = new THREE.Mesh(new THREE.SphereGeometry(3.2,14,10),new THREE.MeshBasicMaterial({color:colors[i],transparent:true,opacity:.13,wireframe:true}));halo.position.copy(mesh.position);model.add(halo);
    const axisGroup = new THREE.Group();axisGroup.position.copy(mesh.position);
    const r=sensor.rotation;
    if(r?.length===9) for(let a=0;a<3;a++) {
      const direction = new THREE.Vector3(r[a],-r[3+a],-r[6+a]).normalize();
      const arrow = new THREE.ArrowHelper(direction,new THREE.Vector3(),13,[0xe98971,0x9cc67e,0x74a7dd][a],3,1.7);axisGroup.add(arrow);
    }
    axisGroup.visible=$('showAxes').checked;model.add(axisGroup);sensorAxes.push(axisGroup);
    const el=document.createElement('span');el.className='scene-label';el.style.setProperty('--sensor-color',colors[i]);el.textContent=sensor.name || names[i];$('sceneLabels').append(el);labelElements.push(el);
  });
  applyRotation();resetView(bounds.getSize(new THREE.Vector3()));updateSensorSelection();
}

function colorCloud() {
  if(!cloud || !rawPoints) return;
  const mode=$('colorMode').value, c=new THREE.Color(), out=new Float32Array(rawPoints.length);
  const values=[];for(let i=0;i<rawPoints.length;i+=3)values.push(mode==='height'?-rawPoints[i+1]:rawPoints[i+2]);
  const min=Math.min(...values),max=Math.max(...values),range=max-min||1;
  const stops=mode==='height'?['#bcdef0','#70baa3','#d4e7a8','#f4c993']:['#f8c9a0','#d4d99d','#8ec29c','#4c9f8b','#2d6763'];
  const palette=stops.map(s=>new THREE.Color(s));
  for(let j=0;j<values.length;j++){
    if(mode==='mono')c.set('#d0ddca');else{const t=Math.max(0,Math.min(.999,(values[j]-min)/range))*(palette.length-1),idx=Math.floor(t);c.copy(palette[idx]).lerp(palette[Math.min(idx+1,palette.length-1)],t-idx);}
    out[j*3]=c.r;out[j*3+1]=c.g;out[j*3+2]=c.b;
  }
  cloud.geometry.setAttribute('color',new THREE.BufferAttribute(out,3));
}

function resetView(size) {
  if(!controls) return;
  const extent=size?Math.max(size.x,size.y,size.z,130):180;
  camera.position.set(extent*.42,extent*.25,extent*2.05);
  controls.target.set(0,0,0);controls.update();
}

function updateLabels() {
  if(!renderer || !camera || !sensorMeshes.length)return;
  const w=stage.clientWidth,h=stage.clientHeight;
  sensorMeshes.forEach((mesh,i)=>{const p=mesh.getWorldPosition(new THREE.Vector3()).project(camera),el=labelElements[i];el.style.left=`${(p.x*.5+.5)*w}px`;el.style.top=`${(-p.y*.5+.5)*h}px`;el.style.display=p.z>1||p.z<0||Math.abs(p.x)>1.1||Math.abs(p.y)>1.1?'none':'';});
}

function applyRotation() {
  const rad=-state.angle*Math.PI/180;
  if(model && center){model.rotation.z=rad;const centered=center.clone().applyAxisAngle(new THREE.Vector3(0,0,1),rad);specimen.position.copy(centered).multiplyScalar(-1);}
  $('rotation').value=state.angle;$('rotationValue').textContent=`${state.angle>0?'+':''}${Math.round(state.angle)}°`;
  $('rotationDisclaimer').textContent=state.canonical?`Ground-truth demonstration: ${state.angle.toFixed(1)}° from the measured palm frame, following the original derotate.m convention. No learned prediction is run.`:'This geometric demonstration uses measured palm orientation. It does not run the paper’s learned network.';
  drawCamera();drawMethodPreview();updateSensorReadout();
}

async function drawMethodPreview(){
  const sample=state.sample;if(!sample)return;
  const angle=state.angle,img=await imageFor(sample.depth.path);
  if(!img||sample!==state.sample||angle!==state.angle)return;
  const K=manifest.dataset.cameraIntrinsics||{},w=sample.depth.width,h=sample.depth.height;
  ['rotationOriginal','rotationCurrent'].forEach((id,index)=>{const canvas=$(id),ctx=canvas.getContext('2d');canvas.width=w;canvas.height=h;ctx.fillStyle='#152a29';ctx.fillRect(0,0,w,h);ctx.save();if(index){ctx.translate(K.cx??w/2,K.cy??h/2);ctx.rotate(angle*Math.PI/180);ctx.translate(-(K.cx??w/2),-(K.cy??h/2));}ctx.imageSmoothingEnabled=false;ctx.drawImage(img,0,0,w,h);ctx.restore();});
}

function imageFor(path) {
  if(!safePath(path))return Promise.resolve(null);
  if(state.images.has(path))return state.images.get(path);
  const task=new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=path;});state.images.set(path,task);return task;
}

async function drawCamera() {
  const s=state.sample;if(!s)return;
  const token=++state.drawToken;
  const selected=state.selectedSensor<0?0:state.selectedSensor;
  const path=state.layer==='heatmap'?s.heatmaps?.[selected]?.path:s[state.layer]?.path;
  const img=await imageFor(path);
  if(s!==state.sample||token!==state.drawToken)return;
  const canvas=$('depthCanvas'),ctx=canvas.getContext('2d');
  const w=s.depth?.width||320,h=s.depth?.height||240,scale=2;canvas.width=w*scale;canvas.height=h*scale;
  ctx.fillStyle='#080d16';ctx.fillRect(0,0,canvas.width,canvas.height);$('depthEmpty').hidden=Boolean(img);
  if(!img)return;
  const K=manifest.dataset.cameraIntrinsics||{},cx=(K.cx??w/2)*scale,cy=(K.cy??h/2)*scale;
  ctx.save();ctx.translate(cx,cy);ctx.rotate(state.angle*Math.PI/180);ctx.translate(-cx,-cy);ctx.imageSmoothingEnabled=false;ctx.drawImage(img,0,0,w*scale,h*scale);
  if($('projectedLabels').checked){
    (s.sensors || []).forEach((sensor,i)=>{
      if(state.selectedSensor!==-1&&i!==state.selectedSensor)return;
      const u=sensor.u??sensor.projectedU,v=sensor.v??sensor.projectedV;
      if(!Number.isFinite(u)||!Number.isFinite(v))return;
      ctx.beginPath();ctx.arc(u*scale,v*scale,6,0,Math.PI*2);ctx.fillStyle=colors[i];ctx.fill();ctx.lineWidth=2;ctx.strokeStyle='#142a24';ctx.stroke();
      ctx.save();ctx.translate(u*scale+9,v*scale-8);ctx.rotate(-state.angle*Math.PI/180);ctx.font='bold 12px Arial';ctx.lineWidth=3;ctx.strokeStyle='#152a29';ctx.strokeText(names[i],0,0);ctx.fillStyle=colors[i];ctx.fillText(names[i],0,0);ctx.restore();
    });
  }
  ctx.restore();
  $('depthNear').textContent=state.layer==='depth'?`${Math.round(s.depth.rangeMin)} mm`:'LOW';
  $('depthFar').textContent=state.layer==='depth'?`${Math.round(s.depth.rangeMax)} mm`:'HIGH';
  const gradient=document.querySelector('.depth-gradient');
  gradient.style.background=state.layer==='depth'?'linear-gradient(90deg,#f7f4b7,#8ee7bc,#1cb4b5,#337ec2,#5643b6,#351966)':state.layer==='ir'?'linear-gradient(90deg,#080d16,#fff)':state.layer==='labels'?'linear-gradient(90deg,#080d16 12.5%,#f87171 12.5% 25%,#fbbf24 25% 37.5%,#34d399 37.5% 50%,#22d3ee 50% 62.5%,#818cf8 62.5% 75%,#d8b4fe 75% 87.5%,#f472b6 87.5%)':'linear-gradient(90deg,#000,#fff)';
  if(state.layer==='labels'){$('depthNear').textContent='LABEL ID';$('depthFar').textContent='';}
  if(state.layer==='heatmap'){$('depthNear').textContent='0';$('depthFar').textContent='1';}
  const descriptions={depth:'Distance from the camera, colored per frame. Markers show the annotation heatmap peaks; 3D spheres show measured sensor positions.',ir:'The original infrared image. IR supplies visual context and was not used for the paper’s fingertip classification.',labels:'Original per-pixel part labels, generated by raycasting the oriented sensor ellipsoids. These are sparse annotations, not full hand segmentation.',heatmap:`Original ${names[selected].toLowerCase()} annotation heatmap, normalized on the source 0–1 scale. Select a sensor below to change channels.`};
  $('layerDescription').textContent=descriptions[state.layer];
}

function updateSensorSelection(){
  document.querySelectorAll('#sensorLegend button').forEach((el,i)=>el.setAttribute('aria-pressed',String(i-1===state.selectedSensor)));
  sensorMeshes.forEach((mesh,i)=>{mesh.material.opacity=state.selectedSensor===-1||i===state.selectedSensor?1:.2;mesh.material.transparent=true;mesh.scale.setScalar(i===state.selectedSensor?1.5:1);});
  labelElements.forEach((el,i)=>el.classList.toggle('dimmed',state.selectedSensor!==-1&&i!==state.selectedSensor));
  document.querySelectorAll('#measurementTable tr').forEach((row,i)=>row.classList.toggle('selected',i===state.selectedSensor));
  sensorAxes.forEach((axis,i)=>axis.visible=$('showAxes').checked&&(state.selectedSensor===-1||i===state.selectedSensor));
  updateSensorReadout();drawCamera();
}

function updateSensorReadout(){
  if(state.selectedSensor<0){$('sensorReadoutName').textContent='ALL SIX SENSORS';$('sensorReadoutValue').textContent='Select a fingertip below to inspect its coordinates.';return;}
  const s=state.sample?.sensors[state.selectedSensor];if(!s)return;
  const theta=state.angle*Math.PI/180,x=s.x*Math.cos(theta)-s.y*Math.sin(theta),y=s.x*Math.sin(theta)+s.y*Math.cos(theta);
  $('sensorReadoutName').textContent=`${s.name.toUpperCase()} · ${state.angle?'ROTATED':'SOURCE'} CAMERA XYZ`;
  $('sensorReadoutValue').textContent=`X ${x.toFixed(1)}  Y ${y.toFixed(1)}  Z ${s.z.toFixed(1)} mm`;
}

function renderMeasurements(sample){
  const table=$('measurementTable');
  if(table)table.innerHTML=(sample.sensors||[]).map((s,i)=>`<tr class="${i===state.selectedSensor?'selected':''}"><td><button data-sensor="${i}" aria-label="Select ${esc(s.name)}"><span class="sensor-dot" style="--sensor-color:${colors[i]}"></span>${esc(s.name)}</button></td><td>${Number(s.x).toFixed(1)}</td><td>${Number(s.y).toFixed(1)}</td><td>${Number(s.z).toFixed(1)}</td><td>${esc(s.u??'—')}</td><td>${esc(s.v??'—')}</td></tr>`).join('');
  const source=sample.source||{};
  const rows=[['Archive',source.archive],['Member',source.member],['Session',source.session],['Indices',`idx ${source.idx??'—'} · gidx ${source.gidx??'—'}`],['Variant',`${capitalize(sample.variant)}${sample.variant!=='original'?` · ${Number(sample.rotationDegrees).toFixed(2)}° recorded rotation`:''}`],['MAT SHA-256',source.matSha256]];
  if($('provenanceFields'))$('provenanceFields').innerHTML=rows.map(([name,value])=>`<div class="${name==='MAT SHA-256'?'hash-row':''}"><dt>${esc(name)}</dt><dd>${esc(value??'—')}</dd></div>`).join('');
}

function rebuildFilter(keepId) {
  const value=$('splitSelect').value;
  state.filtered=state.samples.filter(s=>value==='all'||`${s.split}|${s.variant}`===value);
  $('sampleSelect').innerHTML=state.filtered.map(s=>`<option value="${esc(s.id)}">${esc(s.title||s.id)}</option>`).join('');
  const index=state.filtered.findIndex(s=>s.id===keepId);state.index=Math.max(0,index);loadSample(state.index);
}

async function loadSample(index) {
  if(!state.filtered.length)return;
  state.index=(index+state.filtered.length)%state.filtered.length;
  const s=state.filtered[state.index],token=++state.loadToken;state.sample=s;state.angle=0;state.canonical=false;
  $('sampleSelect').value=s.id;$('sampleCounter').textContent=`${state.index+1} / ${state.filtered.length}`;
  $('loadingState').hidden=false;$('loadingState').querySelector('strong').textContent='Reading depth & geometry';$('loadingState').querySelector('span:last-child').textContent=s.title||s.id;
  $('pointCount').textContent=`${fmt(s.pointCount)} POINTS · 6 SENSORS`;
  $('depthDimensions').textContent=`${s.depth.width} × ${s.depth.height}`;
  $('frameSource').textContent=s.source?.member||s.id;
  $('frameDescription').textContent=`${s.source?.session||'Session'} · ${capitalize(s.variant)}${s.variant!=='original'?` · archive rotation ${Number(s.rotationDegrees).toFixed(1)}°`:''}`;
  renderMeasurements(s);
  $('frameFileLink').href=`https://huggingface.co/datasets/twerdster/HandNet/blob/main/archives/${encodeURIComponent(s.source.archive)}`;
  const paired=state.samples.filter(p=>p.pairKey===s.pairKey&&p.id!==s.id);const button=$('comparePair');button.hidden=!paired.length;button.textContent=paired.length?`Compare ${capitalize(paired[0].variant)} ⇄`:'';button.dataset.target=paired[0]?.id||'';
  $('applyCanonical').disabled=!s.sensors?.[5]?.rotation;
  document.querySelector('[data-layer="heatmap"]').hidden=!s.heatmaps?.length;
  if(state.layer==='heatmap'&&!s.heatmaps?.length)selectLayer('depth');
  renderGallery();applyRotation();
  try{
    const response=await fetch(s.points);if(!response.ok)throw new Error(`Geometry unavailable (${response.status})`);
    const buffer=await response.arrayBuffer();if(token!==state.loadToken)return;
    buildCloud(new Float32Array(buffer),s);
    if(renderer){$('loadingState').hidden=true;}else{
      $('loadingState').hidden=false;$('loadingState').querySelector('.loader').hidden=true;
      $('loadingState').querySelector('strong').textContent='3D is unavailable in this browser';
      $('loadingState').querySelector('span:last-child').textContent='The original camera images and sensor coordinates remain available. Enable WebGL to inspect the surface.';
    }
  }catch(error){if(token!==state.loadToken)return;$('loadingState').querySelector('strong').textContent='Geometry could not load';$('loadingState').querySelector('span:last-child').textContent=error.message;$('loadingState').querySelector('.loader').hidden=true;}
}

function renderGallery(){
  const list=state.filtered, count=Math.min(8,list.length);let start=Math.max(0,Math.min(state.index-3,list.length-count));
  $('sampleGallery').innerHTML=list.slice(start,start+count).map(s=>`<button class="sample-tile ${s.id===state.sample.id?'active':''}" data-sample="${esc(s.id)}" aria-label="Open ${esc(s.title)}"><img src="${esc(s.depth.path)}" alt="Depth image: ${esc(s.title)}" loading="lazy"><span>${esc(s.title)}</span></button>`).join('');
}

function selectLayer(layer){state.layer=layer;document.querySelectorAll('[data-layer]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.layer===layer)));drawCamera();}
function setPlaying(playing){state.playing=playing;$('play').textContent=playing?'Ⅱ':'▶';$('play').setAttribute('aria-label',playing?'Pause samples':'Play samples');$('play').title=playing?'Pause samples':'Play samples';clearInterval(state.timer);if(playing)state.timer=setInterval(()=>loadSample(state.index+1),2200);}
function canonicalAngle(){
  const r=state.sample?.sensors?.[5]?.rotation;if(!r?.length)return null;
  const abs=[Math.abs(r[6]),Math.abs(r[7]),Math.abs(r[8])],align=abs.indexOf(Math.max(...abs));
  let alpha=align===1?Math.atan2(r[2],r[5])*180/Math.PI+90+(r[7]<0?180:0):Math.atan2(r[1],r[4])*180/Math.PI+90;
  return ((alpha+180)%360+360)%360-180;
}

function bindEvents(){
  $('splitSelect').addEventListener('change',()=>{setPlaying(false);rebuildFilter();});
  $('sampleSelect').addEventListener('change',e=>loadSample(state.filtered.findIndex(s=>s.id===e.target.value)));
  $('previous').onclick=()=>loadSample(state.index-1);$('next').onclick=()=>loadSample(state.index+1);$('shuffle').onclick=()=>loadSample(Math.floor(Math.random()*state.filtered.length));$('play').onclick=()=>setPlaying(!state.playing);
  $('resetView').onclick=()=>resetView();$('colorMode').onchange=colorCloud;$('pointSize').oninput=e=>{if(cloud)cloud.material.size=Number(e.target.value);};$('showAxes').onchange=updateSensorSelection;
  $('projectedLabels').onchange=drawCamera;
  document.querySelectorAll('[data-layer]').forEach(b=>b.onclick=()=>selectLayer(b.dataset.layer));
  $('sensorLegend').innerHTML=`<button aria-pressed="true" data-sensor="-1" style="--sensor-color:#486e52">All</button>`+names.map((name,i)=>`<button aria-pressed="false" data-sensor="${i}" style="--sensor-color:${colors[i]}">${name}</button>`).join('');
  $('sensorLegend').onclick=e=>{const b=e.target.closest('[data-sensor]');if(b){state.selectedSensor=Number(b.dataset.sensor);updateSensorSelection();}};
  if($('measurementTable'))$('measurementTable').onclick=e=>{const b=e.target.closest('[data-sensor]');if(b){state.selectedSensor=Number(b.dataset.sensor);updateSensorSelection();}};
  $('sampleGallery').onclick=e=>{const b=e.target.closest('[data-sample]');if(b)loadSample(state.filtered.findIndex(s=>s.id===b.dataset.sample));};
  $('rotation').oninput=e=>{state.angle=Number(e.target.value);state.canonical=false;applyRotation();};
  $('resetRotation').onclick=()=>{state.angle=0;state.canonical=false;applyRotation();};
  $('applyCanonical').onclick=()=>{const a=canonicalAngle();if(a===null)return;state.angle=a;state.canonical=true;applyRotation();};
  $('comparePair').onclick=e=>{const target=state.samples.find(s=>s.id===e.currentTarget.dataset.target);if(!target)return;setPlaying(false);$('splitSelect').value='all';rebuildFilter(target.id);};
  $('copyCitation').onclick=async()=>{const text='@inproceedings{wetzler2015rule,\n  title={Rule of Thumb: Deep Derotation for Improved Fingertip Detection},\n  author={Wetzler, Aaron and Slossberg, Ron and Kimmel, Ron},\n  booktitle={British Machine Vision Conference},\n  year={2015}\n}';try{await navigator.clipboard.writeText(text);$('copyCitation').textContent='Copied ✓';setTimeout(()=>$('copyCitation').innerHTML='Copy BibTeX <span>⧉</span>',2000);}catch{$('copyCitation').textContent='Select BibTeX text alongside';}};
  document.addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||e.metaKey||e.ctrlKey||e.altKey)return;if(e.key==='ArrowRight'){e.preventDefault();loadSample(state.index+1);}if(e.key==='ArrowLeft'){e.preventDefault();loadSample(state.index-1);}if(e.key===' '){e.preventDefault();setPlaying(!state.playing);}if(e.key.toLowerCase()==='r')resetView();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)setPlaying(false);});
}

async function archiveList(){
  try{
    const response=await fetch('data/archive-manifest.json');if(!response.ok)return;
    const release=await response.json();
    const notes={'TrainData.rar':'Training · 202,198 frames','TestData.zip':'Test · 10,000 frames','ValidationData.zip':'Validation · 2,773 frames','TrainData_DerotGT.zip':'Training · ground-truth derotation','ValidationData_DerotGT.zip':'Validation · ground-truth derotation','TestData_Perturbed.zip':'Test · rotation perturbed','ValidationData_Perturbed.zip':'Validation · rotation perturbed'};
    $('archiveList').innerHTML=release.archives.map(a=>{const size=a.bytes>=1073741824?`${(a.bytes/1073741824).toFixed(2)} GiB`:`${(a.bytes/1048576).toFixed(1)} MiB`;return `<a href="https://huggingface.co/datasets/twerdster/HandNet/resolve/main/${esc(a.path)}?download=true" target="_blank" rel="noreferrer" title="${esc(a.bytes)} bytes · SHA-256 ${esc(a.sha256)}"><span class="archive-name">${esc(a.filename)}<small>${esc(notes[a.filename]||'Original archive')}</small></span><span class="archive-size">${size}</span><span class="arrow">↓</span></a>`;}).join('');
  }catch(error){console.warn('Archive metadata unavailable:',error);}
}

async function init(){
  bindEvents();archiveList();
  try{init3D();}catch(error){console.warn('3D renderer unavailable:',error);document.body.classList.add('webgl-unavailable');$('loadingState').querySelector('strong').textContent='3D is unavailable in this browser';$('loadingState').querySelector('span:last-child').textContent='The original camera images and sensor coordinates remain available. Enable WebGL to inspect the surface.';}
  try{
    const response=await fetch('data/samples.json');if(!response.ok)throw new Error(`Sample manifest unavailable (${response.status})`);manifest=await response.json();state.samples=manifest.samples;if(!state.samples?.length)throw new Error('No samples found in the manifest.');
    const groups=[...new Set(state.samples.map(s=>`${s.split}|${s.variant}`))];$('splitSelect').innerHTML='<option value="all">All samples</option>'+groups.map(g=>`<option value="${g}">${g.split('|').map(capitalize).join(' · ')}</option>`).join('');
    $('sampleTotal').textContent=`${state.samples.length} stored source frames`;
    const K=manifest.dataset.cameraIntrinsics;if(K&&$('calibrationValues'))$('calibrationValues').textContent=`fₓ = ${K.fx} · fᵧ = ${K.fy}\ncₓ = ${K.cx} · cᵧ = ${K.cy}`;
    rebuildFilter('test-original-0008694');
  }catch(error){$('loadingState').hidden=false;$('loadingState').querySelector('strong').textContent='Samples could not be loaded';$('loadingState').querySelector('span:last-child').textContent=`${error.message}. The complete original archives remain available below.`;$('loadingState').querySelector('.loader').hidden=true;}
}
function initEmbeddedSizing(){
  if(document.documentElement.dataset.embedded!=='true'||window.parent===window)return;
  let previous=0,scheduled=false;
  const report=()=>{scheduled=false;const explorer=$('explore');if(!explorer)return;const height=Math.ceil(explorer.getBoundingClientRect().bottom+window.scrollY);if(Math.abs(height-previous)>1){previous=height;window.parent.postMessage({type:'handnet-explorer-height',height},window.location.origin);}};
  const schedule=()=>{if(!scheduled){scheduled=true;requestAnimationFrame(report);}};
  new ResizeObserver(schedule).observe(document.querySelector('main'));
  window.addEventListener('load',schedule);window.addEventListener('resize',schedule);schedule();
}
initEmbeddedSizing();
init();
