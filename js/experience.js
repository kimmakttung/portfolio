'use strict';
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
const stage=document.querySelector('.connection-stage');
const word=document.querySelector('.connection-word');
if(stage&&word&&window.matchMedia('(hover: hover) and (pointer: fine)').matches){
 let frame=0;
 stage.addEventListener('pointermove',event=>{
  if(motionPreference.matches)return;
  const box=stage.getBoundingClientRect();const x=(event.clientX-box.left)/box.width-.5;const y=(event.clientY-box.top)/box.height-.5;
  cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{word.style.transform=`rotateX(${12-y*9}deg) rotateY(${-13+x*16}deg) rotateZ(${-5+x*4}deg)`;});
 });
 stage.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);word.style.removeProperty('transform');});
 motionPreference.addEventListener('change',()=>{cancelAnimationFrame(frame);word.style.removeProperty('transform');});
}
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(!entry.isIntersecting)return;if(!motionPreference.matches)entry.target.classList.add('is-entering');observer.unobserve(entry.target);});
 },{threshold:.08});
 document.querySelectorAll('.journey-card,.interest-card,.memory-section>h2,.journey-panel>h2,.plan-result,.planner-form,.social-card').forEach(element=>observer.observe(element));
}

const homeTransition=document.querySelector('.home-transition');
if(homeTransition){
 let transitionFrame=0;
 function renderHomeTransition(){
  transitionFrame=0;const box=homeTransition.getBoundingClientRect();
  const progress=Math.max(0,Math.min(1,(innerHeight-box.top)/(innerHeight+box.height)));
  homeTransition.style.setProperty('--transition-progress',String(progress));
 }
 function scheduleHomeTransition(){if(!transitionFrame)transitionFrame=requestAnimationFrame(renderHomeTransition);}
 addEventListener('scroll',scheduleHomeTransition,{passive:true});addEventListener('resize',scheduleHomeTransition);renderHomeTransition();
}
