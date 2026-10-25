'use strict';
const projectStore = (() => {
 const key='dohyun-projects-v1';
 function list(){
  const raw=localStorage.getItem(key);if(raw===null)return [];
  const data=JSON.parse(raw);
  if(!Array.isArray(data)||!data.every(p=>p&&typeof p.id==='string'&&typeof p.title==='string'&&typeof p.content==='string'&&p.inputs&&typeof p.inputs==='object'&&!Array.isArray(p.inputs)&&typeof p.updatedAt==='string'&&Number.isFinite(Date.parse(p.updatedAt))))throw Error('Invalid project storage');
  return data;
 }
 function save(project,expectedRevision){
  const all=list();const i=all.findIndex(p=>p.id===project.id);
  if(expectedRevision!==undefined&&(i<0||all[i].revision!==expectedRevision))throw Error('Project conflict');
  const next={...project,updatedAt:new Date().toISOString(),revision:crypto.randomUUID()};
  if(i<0)all.push(next);else all[i]=next;
  localStorage.setItem(key,JSON.stringify(all));return next;
 }
 function remove(id){localStorage.setItem(key,JSON.stringify(list().filter(p=>p.id!==id)));}
 function imageSource(value){
  if(typeof value!=='string'||!value.trim())return '';
  if(/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(value))return value;
  try{const url=new URL(value,location.href);return ['https:','http:'].includes(url.protocol)?url.href:'';}catch{return '';}
 }
 return {key,list,save,remove,imageSource};
})();
