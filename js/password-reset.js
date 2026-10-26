import {supabase} from './cloud-api.js';
const form=document.getElementById('reset-form');
const status=document.getElementById('reset-status');
const save=document.getElementById('reset-save');
const recoveryLink=location.hash.includes('type=recovery')||new URLSearchParams(location.search).get('type')==='recovery';
if(!supabase) status.textContent='인증 서비스에 연결할 수 없습니다.';
else {
  supabase.auth.onAuthStateChange((event,session)=>{
    if(event==='PASSWORD_RECOVERY' && session) {
      form.hidden=false;
      status.textContent='본인 확인이 완료됐어요. 새 비밀번호를 설정하세요.';
    }
    if(event==='INITIAL_SESSION' && session && recoveryLink) {
      form.hidden=false;
      status.textContent='새 비밀번호를 설정하세요.';
    }
  });
  supabase.auth.getSession().then(({data})=>{
    if(data?.session && recoveryLink) {
      form.hidden=false;
      status.textContent='새 비밀번호를 설정하세요.';
    } else if(!recoveryLink){
      status.textContent='이메일로 받은 비밀번호 재설정 링크로 접속해 주세요.';
    }
  }).catch(error=>{status.textContent=error.message;});
}
form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(!supabase)return;
  const a=document.getElementById('new-password');
  const b=document.getElementById('repeat-password');
  if(a.value!==b.value){status.textContent='새 비밀번호가 일치하지 않습니다.';return;}
  if(a.value.length<12){status.textContent='12자 이상으로 설정해 주세요.';return;}
  save.disabled=true;
  try {
    const {error}=await supabase.auth.updateUser({password:a.value});
    if(error)throw error;
    a.value=b.value='';
    form.hidden=true;
    await supabase.auth.signOut({scope:'local'});
    status.textContent='비밀번호가 변경됐습니다. 로그인 페이지에서 다시 로그인하세요.';
  }catch(error){status.textContent='변경 실패: '+error.message;}
  finally{save.disabled=false;}
});
