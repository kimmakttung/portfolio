'use strict';
const galleryShell=document.getElementById('project-gallery');
const galleryStage=galleryShell.querySelector('.gallery-stage');
const galleryFrames=document.getElementById('gallery-frames');
const galleryEmpty=document.getElementById('gallery-empty');
const galleryCounter=document.getElementById('gallery-counter');
const galleryPrevious=document.getElementById('gallery-prev');
const galleryNext=document.getElementById('gallery-next');
const galleryReduced=matchMedia('(prefers-reduced-motion: reduce)');
const galleryPhone=matchMedia('(max-width: 760px)');
const galleryLandscape=matchMedia('(max-width: 950px) and (max-height: 520px) and (orientation: landscape)');
let galleryPerStep=galleryPhone.matches?1:2;
let exhibits=[],galleryPairs=0,activePair=-1,galleryFrame=0,galleryLayoutReady=false;
const requestedExhibitId=new URLSearchParams(location.search).get('project');
let requestedExhibitShown=false;
function galleryNode(tag,text,className){const element=document.createElement(tag);if(text!==undefined)element.textContent=text;if(className)element.className=className;return element;}
function updateGallery(){
 galleryFrame=0;
 if(!exhibits.length)return;
 const bounds=galleryShell.getBoundingClientRect();if(galleryLayoutReady&&(bounds.bottom<0||bounds.top>innerHeight+100))return;galleryLayoutReady=true;const distance=Math.max(1,galleryShell.offsetHeight-galleryStage.offsetHeight);
 const progress=Math.max(0,Math.min(1,-bounds.top/distance));const travel=progress*Math.max(0,galleryPairs-1);
 galleryShell.style.setProperty('--journey',String(progress));
 const current=Math.min(galleryPairs-1,Math.max(0,Math.round(travel)));
 if(current!==activePair){activePair=current;galleryCounter.textContent=String(current+1).padStart(2,'0')+' / '+String(galleryPairs).padStart(2,'0');}
 galleryPrevious.disabled=current===0;galleryNext.disabled=current===galleryPairs-1;
 const width=galleryStage.clientWidth;
 exhibits.forEach(({element},index)=>{
  if(galleryReduced.matches||galleryLandscape.matches){element.removeAttribute('style');element.tabIndex=0;element.removeAttribute('aria-hidden');return;}
  const offset=Math.floor(index/galleryPerStep)-travel;const side=index%2===0?-1:1;
  const scale=offset>=0?1/(1+offset*.82):1-offset*.7;
  const x=galleryPerStep===1?(offset>=0?width*.45*(1-scale):width*offset*1.65):side*width*.31*(offset>=0?scale:1-offset*1.6);
  const y=offset>=0?-offset*18:offset*22;
  const opacity=Math.max(0,Math.min(1,offset<0?1+offset*2:1));
  const visible=offset>-.55&&offset<3.5;
  if(!visible){element.style.visibility='hidden';element.style.opacity='0';element.style.pointerEvents='none';element.tabIndex=-1;element.setAttribute('aria-hidden','true');return;}
  element.style.transform=`translate(-50%,-50%) translate3d(${x}px,${y}px,0) scale(${scale}) rotateY(${side*-14}deg)`;
  element.style.filter=`brightness(${Math.max(.35,1-Math.max(0,offset)*.2)})`;element.style.opacity=visible?String(opacity):'0';element.style.visibility=visible?'visible':'hidden';element.style.zIndex=String(100-Math.round(offset*10));
  const clickable=visible&&Math.abs(offset)<.6;
  element.style.pointerEvents=clickable?'auto':'none';element.tabIndex=clickable?0:-1;element.setAttribute('aria-hidden',clickable?'false':'true');
 });
}
function scheduleGallery(){if(document.hidden)return;if(!galleryFrame)galleryFrame=requestAnimationFrame(updateGallery);}
function goToGalleryPair(index,behavior=galleryReduced.matches?'instant':'smooth'){
 const next=Math.max(0,Math.min(galleryPairs-1,index));
 const start=scrollY+galleryShell.getBoundingClientRect().top;const distance=galleryShell.offsetHeight-galleryStage.offsetHeight;
 scrollTo({top:start+(galleryPairs>1?next/(galleryPairs-1):0)*distance,behavior});
}
function showRequestedExhibit(){
 if(!requestedExhibitId||requestedExhibitShown)return;
 requestAnimationFrame(()=>{
  if(requestedExhibitShown)return;
  const index=exhibits.findIndex(item=>item.project.id===requestedExhibitId);
  if(index<0)return;
  requestedExhibitShown=true;
  const element=exhibits[index].element;
  if(galleryReduced.matches||galleryLandscape.matches)element.scrollIntoView({behavior:'instant',block:'center'});
  else goToGalleryPair(Math.floor(index/galleryPerStep),'instant');
  updateGallery();
  element.focus({preventScroll:true});
 });
}
galleryPrevious.addEventListener('click',()=>goToGalleryPair(activePair-1));galleryNext.addEventListener('click',()=>goToGalleryPair(activePair+1));
function renderGallery(){
 galleryFrames.replaceChildren();exhibits=[];activePair=-1;galleryLayoutReady=false;
 let projects;
 try{const merged=new Map(projectStore.list().map(project=>[project.id,project]));for(const cloud of (window.portfolioCloudPublished||[]))merged.set(cloud.id,cloud);projects=[...merged.values()];}catch{galleryEmpty.hidden=false;galleryEmpty.querySelector('h3').textContent=t('갤러리를 불러오지 못했습니다. 저장된 프로젝트는 변경하지 않았습니다.');galleryEmpty.querySelector('p').textContent='';galleryCounter.textContent='00 / 00';galleryPairs=0;galleryPrevious.disabled=galleryNext.disabled=true;galleryShell.style.setProperty('--gallery-height','130svh');return;}
 projects.sort((a,b)=>Number(Boolean(b.pinned))-Number(Boolean(a.pinned))||b.updatedAt.localeCompare(a.updatedAt));
 galleryPerStep=galleryPhone.matches?1:2;galleryPairs=Math.ceil(projects.length/galleryPerStep);galleryEmpty.hidden=projects.length>0;
 galleryShell.style.setProperty('--gallery-height',(galleryPairs>1?100+(galleryPairs-1)*(galleryPerStep===1?65:85):130)+'svh');
 if(!projects.length){galleryEmpty.querySelector('h3').textContent=t('첫 번째 작품을 기다립니다.');galleryEmpty.querySelector('p').textContent=t('기획서를 만들고 프로젝트에서 대표 이미지를 추가해 보세요.');galleryCounter.textContent='00 / 00';galleryPrevious.disabled=galleryNext.disabled=true;}
 projects.forEach((project,index)=>{
  const frame=galleryNode('a',undefined,'gallery-frame');frame.href=(project.cloud?'exhibit.html?project=':'projects.html?project=')+encodeURIComponent(project.id);frame.dataset.projectId=project.id;
  if(project.id===requestedExhibitId)frame.classList.add('is-gallery-selection');
  const artwork=galleryNode('div',undefined,'gallery-artwork');const cover=galleryNode('div',undefined,'gallery-cover');const image=projectStore.imageSource(project.coverImage);
  if(image){const img=galleryNode('img');img.src=image;img.alt='';img.loading=index<4?'eager':'lazy';img.decoding='async';img.addEventListener('error',()=>{img.remove();cover.classList.add('gallery-cover-placeholder');cover.append(galleryNode('span',project.title,'gallery-type-cover'));},{once:true});cover.append(img);}
  else{cover.classList.add('gallery-cover-placeholder');cover.append(galleryNode('span',String(index+1).padStart(2,'0'),'gallery-cover-number'),galleryNode('span',project.title,'gallery-type-cover'),galleryNode('small',t('대표 이미지 추가')));}
  const label=galleryNode('div',undefined,'gallery-label');label.append(galleryNode('span',String(index+1).padStart(2,'0')+' / '+t(project.pinned?'고정됨':'최근 저장')),galleryNode('h3',project.title));
  artwork.append(cover,label);frame.append(artwork);galleryFrames.append(frame);exhibits.push({element:frame,project});
  frame.addEventListener('pointermove',event=>{if(galleryReduced.matches||event.pointerType==='touch')return;const r=frame.getBoundingClientRect();artwork.style.setProperty('--hover-x',((event.clientX-r.left)/r.width-.5)*8+'deg');artwork.style.setProperty('--hover-y',-((event.clientY-r.top)/r.height-.5)*6+'deg');});
  frame.addEventListener('pointerleave',()=>{artwork.style.removeProperty('--hover-x');artwork.style.removeProperty('--hover-y');});
 });
 updateGallery();
 showRequestedExhibit();
}
addEventListener('scroll',scheduleGallery,{passive:true});addEventListener('resize',scheduleGallery);galleryReduced.addEventListener('change',()=>{activePair=-1;scheduleGallery();});galleryPhone.addEventListener('change',renderGallery);galleryLandscape.addEventListener('change',()=>{activePair=-1;scheduleGallery();});
addEventListener('storage',event=>{if(event.key===projectStore.key||event.key===null)renderGallery();});
addEventListener('pageshow',event=>{if(event.persisted)renderGallery();});document.addEventListener('languagechange',renderGallery);document.addEventListener('portfolio-cloud-updated',renderGallery);renderGallery();
