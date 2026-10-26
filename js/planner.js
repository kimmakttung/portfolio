'use strict';
function generatePlan(data) {
  const locale = planLocales[currentLanguage];
  const type = ['marketing','event','service'].includes(data.type) ? data.type : 'marketing';
  const typeLabel = t({marketing:'마케팅 캠페인',event:'행사 · 이벤트',service:'서비스 · 콘텐츠'}[type]);
  const bullets = items => items.map(item => '- ' + item).join('\n');
  const sections = [
    data.background, data.goal, data.target + '\n' + locale.audience, data.idea,
    locale.steps[type].map((step,index) => locale.stages[index] + ': ' + step).join('\n') + '\n' + locale.stages[3] + ': ' + locale.review,
    (data.schedule || locale.noSchedule) + '\n' + locale.schedule,
    (data.budget || locale.noBudget) + '\n' + locale.budget,
    (data.kpi || locale.metrics[type]) + '\n' + locale.measure,
    bullets(locale.risks), bullets(locale.checklist)
  ];
  return '# ' + data.title + '\n\n' + t('기획 유형') + ': ' + typeLabel + '\n' + locale.state + '\n\n' + sections.map((body,index) => (index + 1) + '. ' + locale.headings[index] + '\n' + body).join('\n\n') + '\n';
}
let activeProject = null;
let pendingProjectSave=0;
const form = document.getElementById('planner-form');
const output = document.getElementById('plan-output');
const status = document.getElementById('plan-status');
const copy = document.getElementById('copy-plan');
const download = document.getElementById('download-plan');
const downloadPDF = document.getElementById('download-plan-pdf');
const saveChanges = document.getElementById('save-project-changes');
function collectInputs(){return Object.fromEntries([...new FormData(form)].map(([key,value])=>[key,value.trim()]));}
function validInputs(data,focus=false){
 for(const name of ['title','background','goal','target','idea'])if(!data[name]){
  if(focus)form.elements[name].focus();status.textContent=t('필수 항목에 내용을 입력해 주세요.');return false;
 }
 return true;
}
function syncActions() {
 copy.disabled = download.disabled = !output.value.trim();
 if(downloadPDF&&!downloadPDF.hasAttribute('aria-busy'))downloadPDF.disabled=!output.value.trim();
 if(saveChanges){saveChanges.hidden=!activeProject;saveChanges.disabled=!output.value.trim();}
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (output.value.trim() && !window.confirm(t('현재 초안을 새로 작성할까요? 직접 수정한 내용도 바뀝니다.'))) return;
  const data = collectInputs();
  if(!validInputs(data,true))return;
  clearTimeout(pendingProjectSave);pendingProjectSave=0;
  output.value = generatePlan(data);
  syncActions(); persistProject(data); output.focus();
});
function saveEditedDraft(){const inputs=collectInputs();if(activeProject&&validInputs(inputs))persistProject(inputs);}
function flushProjectEdits(){if(pendingProjectSave){clearTimeout(pendingProjectSave);pendingProjectSave=0;saveEditedDraft();}}
output.addEventListener('input',()=>{syncActions();status.textContent=t('초안 편집 중');clearTimeout(pendingProjectSave);if(activeProject)pendingProjectSave=setTimeout(()=>{pendingProjectSave=0;saveEditedDraft();},300);});
output.addEventListener('blur',flushProjectEdits);addEventListener('pagehide',flushProjectEdits);
saveChanges?.addEventListener('click',()=>{
 const inputs=collectInputs();if(!activeProject||!validInputs(inputs,true))return;
 if(!form.reportValidity())return;
 clearTimeout(pendingProjectSave);pendingProjectSave=0;
 persistProject(inputs);
});
copy.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(output.value); status.textContent = t('복사했습니다.'); }
  catch { output.focus(); output.select(); status.textContent = t('복사 권한을 사용할 수 없습니다. 선택된 내용을 Ctrl+C 또는 ⌘C로 복사해 주세요.'); }
});
download.addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob(['\ufeff' + output.value], {type: 'text/plain;charset=utf-8'}));
  const link = document.createElement('a'); link.href = url; link.download = planLocales[currentLanguage].filename;
  document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = t('다운로드를 요청했습니다.');
});
downloadPDF?.addEventListener('click',async()=>{
 if(downloadPDF.disabled||!output.value.trim())return;
 downloadPDF.disabled=true;downloadPDF.setAttribute('aria-busy','true');status.textContent=t('PDF를 만드는 중입니다.');
 try{await proposalPDF.download({title:form.elements.title.value.trim()||t('기획서 초안'),content:output.value,language:currentLanguage});status.textContent=t('PDF 다운로드를 시작했습니다.');}
 catch{status.textContent=t('PDF를 만들지 못했습니다. 다시 시도해 주세요.');}
 finally{downloadPDF.removeAttribute('aria-busy');syncActions();}
});

function persistProject(inputs) {
 try {
  const existing=activeProject;
  const project={...existing,id:existing?.id||crypto.randomUUID(),title:inputs.title,inputs:{...inputs},content:output.value,language:currentLanguage,createdAt:existing?.createdAt||new Date().toISOString()};
  activeProject=projectStore.save(project,existing?.revision);
  syncActions();
  status.textContent=t(existing?'프로젝트 수정 내용을 저장했습니다.':'프로젝트에 저장했습니다.');
 } catch(error) {
  status.textContent=t(error.message==='Project conflict'?'이 프로젝트는 다른 페이지에서 변경되었거나 삭제되어 저장할 수 없습니다. 현재 초안을 다운로드해 주세요.':'저장하지 못했습니다. 현재 초안을 다운로드해 보관해 주세요.');
 }
}
document.addEventListener('languagechange',()=>{
 if(!activeProject||activeProject.contentEdited||activeProject.source!=='mindmap')return;
 // Preserve any in-progress edits when the interface language changes.
 const inputs=collectInputs();
 if(output.value!==activeProject.content||Object.keys(inputs).some(name=>inputs[name]!==activeProject.inputs[name]))return;
 try{
  const translated=projectStore.list().find(project=>project.id===activeProject.id);
  if(!translated)return;
  activeProject=translated;
  for(const [name,value]of Object.entries(translated.inputs))if(form.elements.namedItem(name)&&typeof value==='string')form.elements.namedItem(name).value=value;
  output.value=translated.content;syncActions();
 }catch{status.textContent=t('저장된 프로젝트를 읽을 수 없습니다. 브라우저 저장 공간 설정을 확인해 주세요. 기존 데이터는 덮어쓰지 않았습니다.');}
});
const requestedProject=new URLSearchParams(location.search).get('project');
if(requestedProject){
 try{
  activeProject=projectStore.list().find(project=>project.id===requestedProject)||null;
  if(activeProject){
   for(const [key,value] of Object.entries(activeProject.inputs))if(form.elements.namedItem(key)&&typeof value==='string')form.elements.namedItem(key).value=value;
   output.value=activeProject.content;syncActions();status.textContent=t('프로젝트를 불러왔습니다. 초안을 수정하거나 새로 생성할 수 있습니다.');
  }else status.textContent=t('프로젝트를 찾을 수 없습니다. 같은 브라우저에서 프로젝트 목록을 확인해 주세요.');
 }catch{status.textContent=t('저장된 프로젝트를 읽을 수 없습니다. 브라우저 저장 공간 설정을 확인해 주세요. 기존 데이터는 덮어쓰지 않았습니다.');}
}
