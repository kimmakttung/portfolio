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
