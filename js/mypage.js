import {supabase,currentUser,currentRole} from './cloud-api.js';
const status=document.getElementById('my-status');
const email=document.getElementById('my-email');
const role=document.getElementById('my-role');
const admin=document.getElementById('admin-link');
(async()=>{
  try {
    const user=await currentUser();
    if(!user){location.replace('login.html?next=mypage.html');return;}
    const kind=await currentRole();
    email.textContent='이메일: '+(user.email||'');
    role.textContent='계정 유형: '+(kind==='admin'?'관리자':'일반 회원');
    admin.hidden=kind!=='admin';
    status.textContent='로그인되어 있습니다.';
  } catch(error) {status.textContent='계정을 불러오지 못했습니다: '+error.message;}
})();
document.getElementById('signout').addEventListener('click',async()=>{
  try {await supabase.auth.signOut({scope:'local'});location.replace('login.html');}
  catch(error){status.textContent='로그아웃에 실패했습니다: '+error.message;}
});
