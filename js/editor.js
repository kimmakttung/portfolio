'use strict';
const editableSelector='h1,h2,h3,h4,p,a,button,label,dt,dd,[data-source-topic],[data-source-note],img';
const draftKey='dohyun-page-editor-v1';
const allowedPages=['index.html','about.html','interests.html','projects.html','planner.html','contact.html'];
const pageSelect=document.getElementById('edit-page');
const sourceInput=document.getElementById('page-source');
const preview=document.getElementById('edit-preview');
const editorStatus=document.getElementById('editor-status');
const fields=document.getElementById('element-fields');
const textInput=document.getElementById('element-text');
const imageUrl=document.getElementById('image-url');
const imageAlt=document.getElementById('image-alt');
const linkInput=document.getElementById('element-link');
const colorInput=document.getElementById('element-color');
const sizeInput=document.getElementById('element-size');
const alignInput=document.getElementById('element-align');
let currentFile='index.html',model=null,modelNodes=[],selectedIndex=-1,dirty=false,loading=false,lastStatus='';
function announce(key){lastStatus=key;editorStatus.textContent=t(key);}
function readDrafts(){
 const raw=localStorage.getItem(draftKey);if(raw===null)return {};
 const drafts=JSON.parse(raw);
 if(!drafts||Array.isArray(drafts)||typeof drafts!=='object'||!Object.entries(drafts).every(([file,draft])=>allowedPages.includes(file)&&draft&&typeof draft.html==='string'))throw Error('Invalid drafts');
 return drafts;
}
function serialize(){return '<!doctype html>\n'+model.documentElement.outerHTML+'\n';}
function clearSelection(){selectedIndex=-1;fields.disabled=true;document.getElementById('image-controls').hidden=true;document.getElementById('link-controls').hidden=true;document.getElementById('selection-help').textContent=t('미리보기에서 문구나 이미지를 선택하세요.');}
function selectElement(index){
 const element=modelNodes[index];if(!element)return;selectedIndex=index;fields.disabled=false;
 const image=element.tagName==='IMG';document.getElementById('image-controls').hidden=!image;document.getElementById('link-controls').hidden=element.tagName!=='A';
 textInput.disabled=image;textInput.value=image?'':element.textContent;imageUrl.value=element.getAttribute('src')||'';imageAlt.value=element.getAttribute('alt')||'';linkInput.value=element.getAttribute('href')||'';
 colorInput.value=element.style.color;sizeInput.value=element.style.fontSize.endsWith('px')?parseFloat(element.style.fontSize):'';alignInput.value=['left','center','right'].includes(element.style.textAlign)?element.style.textAlign:'';
 document.getElementById('selection-help').textContent=element.tagName+(element.id?' / #'+element.id:'');
 preview.contentDocument.querySelectorAll('[data-editor-selected]').forEach(node=>node.removeAttribute('data-editor-selected'));
 preview.contentDocument.querySelector('[data-editor-key="'+index+'"]')?.setAttribute('data-editor-selected','');
}
function renderPreview(){
 model=new DOMParser().parseFromString(sourceInput.value,'text/html');modelNodes=[...model.querySelectorAll(editableSelector)];
 const copy=new DOMParser().parseFromString(sourceInput.value,'text/html');
 [...copy.querySelectorAll(editableSelector)].forEach((element,index)=>element.setAttribute('data-editor-key',String(index)));
 copy.querySelectorAll('script,base,meta[http-equiv="refresh"]').forEach(node=>node.remove());
 const base=copy.createElement('base');base.href=new URL('.',location.href).href;copy.head.prepend(base);
 const style=copy.createElement('style');style.textContent='[data-editor-key]{cursor:crosshair!important}[data-editor-key]:hover{outline:1px dashed #e4a07d;outline-offset:3px}[data-editor-selected]{outline:2px solid #f2b48b!important;outline-offset:4px}*{animation:none!important;transition:none!important}';copy.head.append(style);
 preview.onload=()=>{
  const doc=preview.contentDocument;if(!doc)return;
  doc.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();const element=event.target.closest('[data-editor-key]');if(element)selectElement(Number(element.dataset.editorKey));},true);
  doc.addEventListener('submit',event=>event.preventDefault());
  if(selectedIndex>=0&&modelNodes[selectedIndex])selectElement(selectedIndex);
 };
 preview.srcdoc='<!doctype html>\n'+copy.documentElement.outerHTML;
}
async function loadPage(file,{original=false}={}){
 if(!allowedPages.includes(file)||loading)return;loading=true;fields.disabled=true;announce('읽는 중입니다.');
 try{
  let html,storageFailed=false;
  if(!original){try{html=readDrafts()[file]?.html;}catch{storageFailed=true;}}
  const hasDraft=typeof html==='string';
  if(!hasDraft){const response=await fetch(file,{cache:'no-store'});if(!response.ok)throw Error('HTTP '+response.status);html=await response.text();}
  if(original){const drafts=readDrafts();delete drafts[file];localStorage.setItem(draftKey,JSON.stringify(drafts));}
  currentFile=file;pageSelect.value=file;sourceInput.value=html;dirty=false;clearSelection();renderPreview();
  document.getElementById('github-edit').href='https://github.com/kimmakttung/portfolio/edit/main/'+file;
  announce(storageFailed?'저장 공간을 읽을 수 없어 원본을 불러왔습니다. 기존 저장 내용은 덮어쓰지 않았습니다.':hasDraft?'저장된 초안을 불러왔습니다.':'페이지를 불러왔습니다.');
 }catch{pageSelect.value=currentFile;announce('페이지를 불러오지 못했습니다. 다시 시도해 주세요.');}finally{loading=false;}
}
pageSelect.addEventListener('change',()=>{
 const next=pageSelect.value;
 if(dirty&&!confirm(t('저장하지 않은 변경 사항이 있습니다. 다른 페이지로 이동할까요?'))){pageSelect.value=currentFile;return;}
 loadPage(next);
});
sourceInput.addEventListener('input',()=>{dirty=true;clearSelection();});
document.getElementById('apply-source').addEventListener('click',()=>{renderPreview();announce('미리보기를 갱신했습니다.');});
document.getElementById('element-form').addEventListener('submit',event=>{
 event.preventDefault();const element=modelNodes[selectedIndex];if(!element||loading)return;
 const color=colorInput.value.trim();const size=sizeInput.value;
 if((color&&!CSS.supports('color',color))||(size&&(Number(size)<8||Number(size)>400))){announce('색상 또는 글자 크기를 확인해 주세요.');return;}
 if(element.tagName==='IMG'){element.setAttribute('src',imageUrl.value.trim());element.setAttribute('alt',imageAlt.value);}
 else element.textContent=textInput.value;
 if(element.tagName==='A')element.setAttribute('href',linkInput.value.trim());
 if(color)element.style.color=color;if(size)element.style.fontSize=Number(size)+'px';if(alignInput.value)element.style.textAlign=alignInput.value;
 sourceInput.value=serialize();dirty=true;renderPreview();announce('수정 내용을 적용했습니다. 임시 저장하거나 HTML을 다운로드해 주세요.');
});
document.getElementById('image-file').addEventListener('change',event=>{
 const file=event.target.files[0];if(!file)return;
 if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>2*1024*1024){announce('이미지는 2MB 이하의 JPG·PNG·WebP 파일을 선택해 주세요.');event.target.value='';return;}
 const reader=new FileReader();reader.onload=()=>{imageUrl.value=reader.result;};reader.readAsDataURL(file);event.target.value='';
});
document.getElementById('save-draft').addEventListener('click',()=>{
 if(loading)return;
 try{const drafts=readDrafts();drafts[currentFile]={html:sourceInput.value,savedAt:new Date().toISOString()};localStorage.setItem(draftKey,JSON.stringify(drafts));dirty=false;announce('브라우저에 임시 저장했습니다. 공개 사이트는 변경되지 않았습니다.');}
 catch{announce('임시 저장하지 못했습니다. HTML을 다운로드해 보관해 주세요.');}
});
document.getElementById('download-page').addEventListener('click',()=>{
 if(loading)return;const url=URL.createObjectURL(new Blob(['\ufeff'+sourceInput.value],{type:'text/html;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download=currentFile;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
document.getElementById('reload-original').addEventListener('click',()=>{
 if(confirm(t('변경 내용을 버리고 GitHub에 있는 원본을 다시 불러올까요?')))loadPage(currentFile,{original:true});
});
window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
document.addEventListener('languagechange',()=>{if(lastStatus)editorStatus.textContent=t(lastStatus);if(selectedIndex<0)document.getElementById('selection-help').textContent=t('미리보기에서 문구나 이미지를 선택하세요.');});
loadPage(currentFile);
