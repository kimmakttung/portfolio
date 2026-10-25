'use strict';
const projectList=document.getElementById('project-list');
const projectStatus=document.getElementById('project-status');
function node(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el;}
function renderProjects(){
 projectList.replaceChildren();
 let projects;
 try{projects=projectStore.list();}catch{projectStatus.textContent=t('저장된 프로젝트를 읽을 수 없습니다. 브라우저 저장 공간 설정을 확인해 주세요. 기존 데이터는 덮어쓰지 않았습니다.');return;}
 if(!projects.length){const empty=node('div',undefined,'project-empty');empty.append(node('h2',t('아직 저장된 프로젝트가 없습니다.')),node('p',t('기획서 작성 툴에서 초안을 만들면 제목과 입력 내용, 기획서가 여기에 자동으로 저장됩니다.')));projectList.append(empty);return;}
 projects.sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt)).forEach(project=>{
  const card=node('article',undefined,'saved-project');
  const heading=node('div',undefined,'saved-project-heading');const title=node('h2',project.title);
  const typeLabel={marketing:'마케팅 캠페인',event:'행사 · 이벤트',service:'서비스 · 콘텐츠'}[project.inputs.type]||'마케팅 캠페인';
  heading.append(title,node('span',t(typeLabel),'status'));
  const updated=node('p',t('마지막 저장')+': '+new Intl.DateTimeFormat(currentLanguage,{dateStyle:'medium',timeStyle:'short'}).format(new Date(project.updatedAt)),'muted');
  const details=node('details');details.append(node('summary',t('프로젝트 상세 보기')));
  const fields=node('dl',undefined,'saved-project-fields');
  for(const [key,label] of [['title','기획 주제'],['type','기획 유형'],['background','배경과 해결할 문제'],['goal','달성 목표'],['target','대상'],['idea','핵심 아이디어 · 실행 내용'],['budget','예산'],['schedule','기간'],['kpi','성과 측정 지표']]){
   const row=node('div');const value=key==='type'?t(typeLabel):project.inputs[key];row.append(node('dt',t(label)),node('dd',typeof value==='string'&&value?value:t('미입력')));fields.append(row);
  }
  details.append(fields,node('h3',t('기획서 초안')),node('pre',project.content,'saved-project-content'));
  const actions=node('div',undefined,'result-actions');const edit=node('a',t('수정하기'),'button');edit.href='planner.html?project='+encodeURIComponent(project.id);
  const download=node('button',t('텍스트 다운로드 ↓'));download.type='button';download.addEventListener('click',()=>{
   const url=URL.createObjectURL(new Blob(['\ufeff'+project.content],{type:'text/plain;charset=utf-8'}));const a=node('a');a.href=url;a.download='project-'+project.id+'.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  const remove=node('button',t('삭제'));remove.type='button';remove.addEventListener('click',()=>{
   if(!confirm(t('이 프로젝트를 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.')))return;
   try{projectStore.remove(project.id);renderProjects();projectStatus.textContent=t('프로젝트를 삭제했습니다.');}catch{projectStatus.textContent=t('삭제하지 못했습니다. 브라우저 저장 공간을 확인해 주세요.');}
  });
  actions.append(edit,download,remove);card.append(heading,updated,details,actions);projectList.append(card);
 });
}
document.addEventListener('languagechange',()=>{projectStatus.textContent='';renderProjects();});
window.addEventListener('storage',event=>{if(event.key===projectStore.key||event.key===null)renderProjects();});
renderProjects();
