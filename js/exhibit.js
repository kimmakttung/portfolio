import {getPublishedProject} from './cloud-api.js';
const title=document.getElementById('work-title');
const status=document.getElementById('exhibit-status');
const image=document.getElementById('work-image');
const details=document.getElementById('work-details');
const content=document.getElementById('work-content');
const id=new URLSearchParams(location.search).get('project');
(async()=>{
  try {
    if(!id || id.length>200) throw new Error('유효하지 않은 프로젝트 주소입니다.');
    const row=await getPublishedProject(id);
    if(!row){title.textContent='전시 중인 작품이 아닙니다.';status.textContent='해당 작품이 없거나 비공개 상태입니다.';return;}
    const p=row.payload||{};
    title.textContent=p.title||'프로젝트';
    document.title=title.textContent+' — Gallery';
    if(p.coverImage) {
      const url=new URL(p.coverImage,location.href);
      if(['http:','https:'].includes(url.protocol)){image.src=url.href;image.alt=p.title||'프로젝트 이미지';image.hidden=false;}
    }
    const fields=[['기획 유형',p.inputs?.type],['배경과 문제',p.inputs?.background],['목표',p.inputs?.goal],['대상',p.inputs?.target],['핵심 아이디어',p.inputs?.idea],['예산',p.inputs?.budget],['기간',p.inputs?.schedule],['성과 지표',p.inputs?.kpi]];
    for(const [name,value] of fields) {
      if(typeof value!=='string'||!value.trim())continue;
      const dt=document.createElement('dt');dt.textContent=name;
      const dd=document.createElement('dd');dd.textContent=value;
      details.append(dt,dd);
    }
    content.textContent=typeof p.content==='string'?p.content:'';
    document.getElementById('content-heading').hidden=!content.textContent;
    status.textContent='';
  } catch(error){title.textContent='프로젝트를 표시할 수 없습니다.';status.textContent=error.message;}
})();
