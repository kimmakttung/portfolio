import {supabase,currentUser,currentRole,adminProjects,saveCloudProject,deleteCloudProject,uploadCover} from './cloud-api.js';

const status = document.getElementById('admin-status');
const area = document.getElementById('admin-area');
const form = document.getElementById('project-form');
const list = document.getElementById('cloud-list');
const listStatus = document.getElementById('list-status');
const saveButton = document.getElementById('save-project');
const localSelect = document.getElementById('local-projects');
let editingId = null;
let editingPayload = null;
let cloudRows = [];
let localRows = [];

const field = id => document.getElementById(id);
function setStatus(text) { status.textContent = text; }
function setForm(project, row) {
  editingId = row ? row.id : null;
  editingPayload = row ? {...row.payload} : null;
  field('p-title').value = project.title || '';
  field('p-type').value = ['marketing','event','service'].includes(project.inputs?.type) ? project.inputs.type : 'marketing';
  field('p-description').value = project.inputs?.background || project.description || '';
  field('p-content').value = project.content || '';
  field('p-cover').value = project.coverImage && /^https?:\/\//.test(project.coverImage) ? project.coverImage : '';
  field('p-cover-file').value = '';
  field('p-published').checked = Boolean(row && row.is_published);
  field('p-pinned').checked = Boolean(row ? row.is_pinned : project.pinned);
  saveButton.textContent = editingId ? '변경 저장하기' : '새 프로젝트 저장';
}
function resetForm() { form.reset(); setForm({title:'',inputs:{}},null); }
function button(text, onClick, className='') {
  const b = document.createElement('button'); b.type='button';b.textContent=text;
  if(className)b.className=className;
  b.addEventListener('click',onClick);return b;
}
function showList() {
  list.replaceChildren();
  if(!cloudRows.length) {listStatus.textContent='등록된 프로젝트가 없습니다.'; return;}
  listStatus.textContent=cloudRows.length+'개의 프로젝트';
  for(const row of cloudRows) {
    const item=document.createElement('article');item.className='cloud-item';
    const title=document.createElement('h3');title.textContent=row.payload.title||'제목 없음';
    const badge=document.createElement('span');
    badge.className='status-badge '+(row.is_published?'status-pub':'status-draft');
    badge.textContent=row.is_published?'공개':'비공개';
    const actions=document.createElement('div'); actions.className='cloud-actions';
    actions.append(
      button('편집',()=>{setForm(row.payload,row);form.scrollIntoView({behavior:'smooth',block:'start'});}),
      button(row.is_published?'공개 해제':'공개하기',async()=>{
        try {setStatus('공개 상태 변경 중…');await saveCloudProject(row.payload,{published:!row.is_published,pinned:row.is_pinned});await reload();setStatus('공개 설정을 변경했습니다.');}
        catch(error){setStatus('공개 설정 실패: '+error.message);}
      }),
      button('삭제',async()=>{
        if(!confirm('정말 삭제할까요? 클라우드에서 삭제되며 되돌릴 수 없습니다.'))return;
        try{setStatus('삭제 중…');await deleteCloudProject(row.id);if(editingId===row.id)resetForm();await reload();setStatus('삭제했습니다.');}
        catch(error){setStatus('삭제 실패: '+error.message);}
      },'danger')
    );
    item.append(title,badge,actions);list.append(item);
  }
}
async function reload() {cloudRows=await adminProjects();showList();}
function loadLocal() {
  try {
    const stored=JSON.parse(localStorage.getItem('dohyun-projects-v1')||'[]');
    localRows=Array.isArray(stored)?stored.filter(p=>p&&!p.deleted&&typeof p.id==='string'&&typeof p.title==='string'&&typeof p.content==='string'&&p.inputs&&typeof p.inputs==='object'):[];
  } catch {localRows=[];}
  localSelect.replaceChildren(new Option('선택하세요',''));
  for(const p of localRows) localSelect.add(new Option(p.title,p.id));
}
form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(!supabase||!form.reportValidity())return;
  saveButton.disabled=true;setStatus('프로젝트 저장 중…');
  try {
    let image = field('p-cover').value.trim();
    const file = field('p-cover-file').files[0];
    if (file) image=await uploadCover(file);
    const title=field('p-title').value.trim();
    if(!title) throw new Error('제목을 입력해 주세요.');
    const existing=editingPayload||{};
    const inputs={...(existing.inputs||{}),
      title,type:field('p-type').value,background:field('p-description').value.trim()};
    const payload={...existing,id:editingId||crypto.randomUUID(),title,
      inputs,content:field('p-content').value,coverImage:image,
      pinned:field('p-pinned').checked,
      createdAt:existing.createdAt||new Date().toISOString()};
    await saveCloudProject(payload,{
      published:field('p-published').checked,
      pinned:field('p-pinned').checked
    });
    await reload();
    resetForm();setStatus('클라우드에 저장했습니다.');
  } catch(error) {setStatus('저장 실패: '+(error.message||'알 수 없는 오류'));}
  finally {saveButton.disabled=false;}
});
field('new-project').addEventListener('click',()=>{resetForm();setStatus('새 프로젝트 입력 중');});
field('import-project').addEventListener('click',async()=>{
  const selected=localRows.find(p=>p.id===localSelect.value);
  if(!selected)return setStatus('가져올 프로젝트를 선택해 주세요.');
  if(cloudRows.some(row=>row.id===selected.id))return setStatus('같은 ID가 이미 클라우드에 있습니다. 가져오기를 취소했어요.');
  try{
    setStatus('기존 초안을 비공개로 복사 중…');
    const project={...selected};
    if(/^data:image\//.test(project.coverImage||'')) project.coverImage='';
    await saveCloudProject(project,{published:false,pinned:Boolean(project.pinned)});
    await reload();setStatus('가져오기 완료. 원본 브라우저 자료는 그대로 유지돼요. 대표 이미지가 필요하면 파일을 다시 올려주세요.');
  } catch(error){setStatus('가져오기 실패: '+error.message);}
});
field('logout').addEventListener('click',async()=>{
  if(supabase) await supabase.auth.signOut({scope:'local'});
  location.replace('login.html?next=admin.html');
});
(async()=>{
  try {
    if(!supabase) throw new Error('Supabase 연결 설정이 없습니다.');
    const user=await currentUser();
    if(!user) { location.replace('login.html?next=admin.html');return; }
    const role=await currentRole();
    if(role!=='admin') {
      setStatus('관리자 전용 페이지입니다. 일반 회원은 프로젝트를 수정할 수 없습니다.');
      return;
    }
    area.hidden=false;
    resetForm();
    await reload();
    loadLocal();
    setStatus('관리자 로그인 완료 · '+user.email);
  }catch(error){setStatus('관리자 페이지를 불러오지 못했습니다: '+error.message);}
})();
