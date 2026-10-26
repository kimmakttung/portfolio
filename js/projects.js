'use strict';
const projectList=document.getElementById('project-list');
const projectStatus=document.getElementById('project-status');
function node(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el;}
let projectRevealDone=false;
const galleryRequestedProject=new URLSearchParams(location.search).get('project');
function saveProjectAppearance(project,changes){
 try{projectStore.save({...project,...changes},project.revision);renderProjects();projectStatus.textContent=t('이미지와 고정 설정을 저장했습니다.');}
 catch{projectStatus.textContent=t('저장하지 못했습니다. 저장 공간이나 다른 페이지의 변경 사항을 확인해 주세요.');}
}
function appearanceControls(project){
 const section=node('section',undefined,'project-appearance');
 const image=projectStore.imageSource(project.coverImage);
 if(image){const preview=node('img',undefined,'project-cover-preview');preview.src=image;preview.alt=project.title;section.append(preview);}
 else section.append(node('div',t('대표 이미지 추가'),'project-cover-empty'));
 const controls=node('div',undefined,'project-appearance-controls');
 const pin=node('button',t(project.pinned?'고정 해제':'갤러리에 고정'),'project-pin');pin.type='button';pin.setAttribute('aria-pressed',String(Boolean(project.pinned)));pin.addEventListener('click',()=>saveProjectAppearance(project,{pinned:!project.pinned}));
 const fileLabel=node('label',t('이미지 파일 올리기'));const input=node('input');input.type='file';input.accept='image/jpeg,image/png,image/webp';fileLabel.append(input);
 input.addEventListener('change',()=>{
  const file=input.files[0];if(!file)return;
  if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>1024*1024){projectStatus.textContent=t('1MB 이하의 JPG·PNG·WebP 이미지를 선택해 주세요. 큰 이미지는 GitHub에 올린 뒤 이미지 주소로 연결할 수 있습니다.');input.value='';return;}
  const reader=new FileReader();reader.onload=()=>saveProjectAppearance(project,{coverImage:reader.result});reader.onerror=()=>{projectStatus.textContent=t('저장하지 못했습니다. 저장 공간이나 다른 페이지의 변경 사항을 확인해 주세요.');};reader.readAsDataURL(file);
 });
 const urlLabel=node('label',t('이미지 주소'));const url=node('input');url.type='url';url.placeholder='https://...';url.value=image.startsWith('data:')?'':image;urlLabel.append(url);
 const actions=node('div',undefined,'project-image-actions');const save=node('button',t('이미지 주소 저장'));save.type='button';save.addEventListener('click',()=>{const safe=projectStore.imageSource(url.value);if(!url.value.trim()||!safe){projectStatus.textContent=t('사용할 수 있는 이미지 주소를 입력해 주세요.');return;}saveProjectAppearance(project,{coverImage:safe});});actions.append(save);
 if(image){const remove=node('button',t('이미지 삭제'));remove.type='button';remove.addEventListener('click',()=>saveProjectAppearance(project,{coverImage:''}));actions.append(remove);}
 controls.append(pin,fileLabel,urlLabel,actions,node('p',t('1MB 이하의 JPG·PNG·WebP 이미지를 선택해 주세요. 큰 이미지는 GitHub에 올린 뒤 이미지 주소로 연결할 수 있습니다.'),'project-appearance-help'));section.append(controls);return section;
}
function renderProjects(){
 projectList.replaceChildren();
 let projects;
 try{projects=projectStore.list();}catch{projectStatus.textContent=t('저장된 프로젝트를 읽을 수 없습니다. 브라우저 저장 공간 설정을 확인해 주세요. 기존 데이터는 덮어쓰지 않았습니다.');return;}
 if(!projects.length){const empty=node('div',undefined,'project-empty');empty.append(node('h2',t('아직 저장된 프로젝트가 없습니다.')),node('p',t('기획서 작성 툴에서 초안을 만들면 제목과 입력 내용, 기획서가 여기에 자동으로 저장됩니다.')));projectList.append(empty);return;}
 projects.sort((a,b)=>Number(Boolean(b.pinned))-Number(Boolean(a.pinned))||b.updatedAt.localeCompare(a.updatedAt)).forEach(project=>{
  const card=node('article',undefined,'saved-project');card.id='project-'+project.id;card.dataset.projectId=project.id;
  const heading=node('div',undefined,'saved-project-heading');const title=node('h2',project.title);
  const typeLabel={marketing:'마케팅 캠페인',event:'행사 · 이벤트',service:'서비스 · 콘텐츠'}[project.inputs.type]||'마케팅 캠페인';
  const badges=node('div',undefined,'saved-project-badges');badges.append(node('span',t(typeLabel),'status'));
  if(project.source==='mindmap')badges.append(node('span',t(project.contentEdited?'유학 경험 · 내 수정본':'유학 경험 · 마인드맵 기반'),'status'));
  heading.append(title,badges);
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
  const pdf=node('button',t('PDF 다운로드 ↓'),'project-pdf');pdf.type='button';
  pdf.addEventListener('click',async()=>{
   if(pdf.disabled)return;
   pdf.disabled=true;pdf.setAttribute('aria-busy','true');projectStatus.textContent=t('PDF를 만드는 중입니다.');
   try{await proposalPDF.download({title:project.title,content:project.content,language:currentLanguage});projectStatus.textContent=t('PDF 다운로드를 시작했습니다.');}
   catch{projectStatus.textContent=t('PDF를 만들지 못했습니다. 다시 시도해 주세요.');}
   finally{pdf.disabled=false;pdf.removeAttribute('aria-busy');}
  });
  const remove=node('button',t('삭제'));remove.type='button';remove.addEventListener('click',()=>{
   if(!confirm(t('이 프로젝트를 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.')))return;
   try{projectStore.remove(project.id);renderProjects();projectStatus.textContent=t('프로젝트를 삭제했습니다.');}catch{projectStatus.textContent=t('삭제하지 못했습니다. 브라우저 저장 공간을 확인해 주세요.');}
  });
  actions.append(edit,pdf,download,remove);card.append(heading,updated,appearanceControls(project),details,actions);projectList.append(card);
  if(project.id===galleryRequestedProject){details.open=true;card.classList.add('is-gallery-selection');if(!projectRevealDone){projectRevealDone=true;requestAnimationFrame(()=>card.scrollIntoView({behavior:'auto',block:'start'}));}}
 });
}
document.addEventListener('languagechange',()=>{projectStatus.textContent='';renderProjects();});
window.addEventListener('storage',event=>{if(event.key===projectStore.key||event.key===null)renderProjects();});
renderProjects();
