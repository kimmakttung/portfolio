'use strict';
const journeyTabs = [...document.querySelectorAll('.journey-tabs button')];
const journeyPanels = [...document.querySelectorAll('.journey-panel')];
document.querySelector('.journey-tabs').setAttribute('role','tablist');
journeyTabs.forEach(tab => {tab.setAttribute('role','tab');tab.setAttribute('aria-controls',tab.dataset.panel);});
journeyPanels.forEach(panel => panel.setAttribute('role','tabpanel'));
function showJourney(id, focus = false) {
 if (!journeyPanels.some(p => p.id === id)) id = 'past';
 journeyTabs.forEach(tab => {const active=tab.dataset.panel===id;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;if(active&&focus)tab.focus();});
 journeyPanels.forEach(panel=>{panel.hidden=panel.id!==id;});
}
journeyTabs.forEach((tab,i)=>{
 tab.addEventListener('click',()=>{showJourney(tab.dataset.panel);history.replaceState(null,'','#'+tab.dataset.panel);});
 tab.addEventListener('keydown',event=>{
  let next;
  if(event.key==='ArrowRight')next=(i+1)%journeyTabs.length;
  if(event.key==='ArrowLeft')next=(i+journeyTabs.length-1)%journeyTabs.length;
  if(event.key==='Home')next=0;
  if(event.key==='End')next=journeyTabs.length-1;
  if(next!==undefined){event.preventDefault();journeyTabs[next].click();journeyTabs[next].focus();}
 });
});
showJourney(location.hash.slice(1));
window.addEventListener('hashchange',()=>{if(journeyPanels.some(p=>'#'+p.id===location.hash))showJourney(location.hash.slice(1));});

document.querySelectorAll('[data-expand]').forEach(button=>{
 button.addEventListener('click',()=>{
  const expanded=button.dataset.expand==='true';
  button.closest('.journey-panel').querySelectorAll('details').forEach(details=>{details.open=expanded;});
 });
});
function localizeNoteLabels(){document.querySelectorAll('[data-note-label]').forEach(label=>{label.textContent=t('원문 메모 · 작성 안내 포함');});}
document.addEventListener('languagechange',localizeNoteLabels);

const originalToggle=document.getElementById('mind-original-toggle');
const mindmapEntries=[...document.querySelectorAll('[data-source-topic],[data-source-note]')].map(node=>({node,original:node.textContent}));
const mindmapKeys=Object.keys(mindmapKorean);
const mindmapIndexes=new Map(mindmapKeys.map((key,index)=>[key,index]));
const mindmapLocaleCache=new Map();
let mindmapLanguageRequest=0;
const mindmapTranslationStatus=document.getElementById('mind-translation-status');
async function loadMindmapLanguage(language){
 if(!mindmapLocaleCache.has(language)){
  const loading=fetch('data/mindmap/'+encodeURIComponent(language)+'.json?v=1').then(response=>{
   if(!response.ok)throw Error('HTTP '+response.status);return response.json();
  }).then(values=>{if(!Array.isArray(values)||values.length!==mindmapKeys.length||!values.every(value=>typeof value==='string'&&value.length))throw Error('Incomplete translation');return values;}).catch(error=>{mindmapLocaleCache.delete(language);throw error;});
  mindmapLocaleCache.set(language,loading);
 }
 return mindmapLocaleCache.get(language);
}
async function renderMindmapLanguage(){
 const request=++mindmapLanguageRequest;const language=currentLanguage;const originalView=originalToggle.checked;
 let values=null;
 if(!originalView&&language!=='ko'){
  mindmapTranslationStatus.textContent=t('마인드맵 번역을 불러오는 중입니다.');
  try{values=await loadMindmapLanguage(language);}
  catch{if(request!==mindmapLanguageRequest)return;mindmapTranslationStatus.textContent=t('번역을 불러오지 못해 원문을 표시합니다. 언어를 다시 선택하면 재시도합니다.');mindmapEntries.forEach(({node,original})=>{node.textContent=original;});document.querySelectorAll('[data-mind-source]').forEach(node=>node.removeAttribute('lang'));document.body.dataset.mindLanguage='original';return;}
 }
 if(request!==mindmapLanguageRequest)return;
 mindmapEntries.forEach(({node,original})=>{
  node.textContent=originalView?original:language==='ko'?(mindmapKorean[original]??original):(values[mindmapIndexes.get(original)]??original);
 });
 document.querySelectorAll('[data-mind-source]').forEach(node=>{if(originalView)node.removeAttribute('lang');else node.setAttribute('lang',language);});
 document.body.dataset.mindLanguage=originalView?'original':language;mindmapTranslationStatus.textContent='';
}
originalToggle.addEventListener('change',renderMindmapLanguage);
document.addEventListener('languagechange',renderMindmapLanguage);
