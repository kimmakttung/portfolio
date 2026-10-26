'use strict';
const projectStore = (() => {
 const key='dohyun-projects-v1';
 function seeds(){return typeof studyProjectSeeds!=='undefined'&&Array.isArray(studyProjectSeeds)?studyProjectSeeds:[];}
 function readStored(){
  const raw=localStorage.getItem(key);if(raw===null)return [];
  const data=JSON.parse(raw);
  if(!Array.isArray(data)||!data.every(p=>p&&typeof p.id==='string'&&typeof p.title==='string'&&typeof p.content==='string'&&p.inputs&&typeof p.inputs==='object'&&!Array.isArray(p.inputs)&&typeof p.updatedAt==='string'&&Number.isFinite(Date.parse(p.updatedAt))))throw Error('Invalid project storage');
  return data;
 }
 function localized(project){
  const language=document.documentElement.lang;
  const locale=project.localizations?.[language];
  return {...project,...locale,inputs:{...(locale?.inputs||project.inputs)}};
 }
 function merge(stored){
  const result=new Map(seeds().map(project=>[project.id,localized(project)]));
  stored.forEach(project=>{
   if(project.deleted){result.delete(project.id);return;}
   const original=seeds().find(seed=>seed.id===project.id);
   if(original&&!project.contentEdited){
    const translated=localized(original);
    result.set(project.id,{...translated,...project,title:translated.title,inputs:translated.inputs,content:translated.content});
   }else result.set(project.id,project);
  });
  return [...result.values()];
 }
 function list(){return merge(readStored());}
 function save(project,expectedRevision){
  const stored=readStored();const current=merge(stored).find(item=>item.id===project.id);
  if(expectedRevision!==undefined&&(!current||current.revision!==expectedRevision))throw Error('Project conflict');
  const original=seeds().find(seed=>seed.id===project.id);
  const inputsChanged=current&&[...new Set([...Object.keys(project.inputs),...Object.keys(current.inputs)])].some(name=>project.inputs[name]!==current.inputs[name]);
  const changed=Boolean(project.contentEdited||(original&&current&&(project.title!==current.title||project.content!==current.content||inputsChanged)));
  const next={...project,updatedAt:new Date().toISOString(),revision:crypto.randomUUID()};
  delete next.localizations;delete next.deleted;
  if(original)next.contentEdited=changed;
  const index=stored.findIndex(item=>item.id===project.id);
  if(index<0)stored.push(next);else stored[index]=next;
  localStorage.setItem(key,JSON.stringify(stored));return next;
 }
 function remove(id){
  const stored=readStored();const remaining=stored.filter(project=>project.id!==id);
  const original=seeds().find(seed=>seed.id===id);
  if(original){const tombstone={...original,deleted:true,updatedAt:new Date().toISOString(),revision:crypto.randomUUID()};delete tombstone.localizations;remaining.push(tombstone);}
  localStorage.setItem(key,JSON.stringify(remaining));
 }
 function imageSource(value){
  if(typeof value!=='string'||!value.trim())return '';
  if(/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(value))return value;
  try{const url=new URL(value,location.href);return ['https:','http:'].includes(url.protocol)?url.href:'';}catch{return '';}
 }
 return {key,list,save,remove,imageSource};
})();
