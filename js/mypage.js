import {supabase,currentUser,currentRole} from './cloud-api.js';

const status = document.getElementById('my-status');
const email = document.getElementById('my-email');
const role = document.getElementById('my-role');
const admin = document.getElementById('admin-link');
const form = document.getElementById('profile-form');
const input = document.getElementById('display-name');
const save = document.getElementById('save-name');
const passwordForm = document.getElementById('password-form');
const passwordButton = document.getElementById('save-password');
const T = {
 ko:{back:'← Gallery',heading:'내 계정',checking:'로그인 확인 중…',name:'표시 이름',save:'이름 저장',password:'비밀번호 변경','new-password':'새 비밀번호 (12자 이상)','confirm-password':'새 비밀번호 확인','change-password':'비밀번호 변경',admin:'관리자 작품 관리실 열기 →',logout:'로그아웃',myemail:'이메일: ',myrole:'계정 유형: ',administrator:'관리자',member:'일반 회원',ready:'로그인되어 있습니다.',saved:'이름을 저장했어요.',mismatch:'새 비밀번호가 일치하지 않습니다.',changed:'비밀번호를 변경했어요.',error:'오류: '},
 ja:{back:'← ギャラリー',heading:'マイアカウント',checking:'ログイン確認中…',name:'表示名',save:'名前を保存',password:'パスワード変更','new-password':'新しいパスワード（12文字以上）','confirm-password':'新しいパスワードを確認','change-password':'パスワード変更',admin:'管理室を開く →',logout:'ログアウト',myemail:'メール: ',myrole:'権限: ',administrator:'管理者',member:'一般会員',ready:'ログインしています。',saved:'名前を保存しました。',mismatch:'パスワードが一致しません。',changed:'変更しました。',error:'エラー: '},
 en:{back:'← Gallery',heading:'My Account',checking:'Checking session…',name:'Display name',save:'Save name',password:'Change password','new-password':'New password (12+ characters)','confirm-password':'Confirm new password','change-password':'Change password',admin:'Open curator dashboard →',logout:'Log out',myemail:'Email: ',myrole:'Role: ',administrator:'Administrator',member:'Member',ready:'Signed in.',saved:'Name saved.',mismatch:'Passwords do not match.',changed:'Password changed.',error:'Error: '},
 vi:{back:'← Phòng trưng bày',heading:'Tài khoản của tôi',checking:'Đang kiểm tra đăng nhập…',name:'Tên hiển thị',save:'Lưu tên',password:'Đổi mật khẩu','new-password':'Mật khẩu mới (ít nhất 12 ký tự)','confirm-password':'Xác nhận mật khẩu','change-password':'Đổi mật khẩu',admin:'Mở trang quản trị →',logout:'Đăng xuất',myemail:'Email: ',myrole:'Vai trò: ',administrator:'Quản trị viên',member:'Thành viên',ready:'Đã đăng nhập.',saved:'Đã lưu tên.',mismatch:'Mật khẩu không khớp.',changed:'Đã đổi mật khẩu.',error:'Lỗi: '},
 'zh-CN':{back:'← 展厅',heading:'我的账户',checking:'正在检查登录状态…',name:'显示名称',save:'保存名称',password:'修改密码','new-password':'新密码（至少12位）','confirm-password':'确认新密码','change-password':'修改密码',admin:'打开管理后台 →',logout:'退出登录',myemail:'邮箱：',myrole:'角色：',administrator:'管理员',member:'普通会员',ready:'已登录。',saved:'名称已保存。',mismatch:'密码不一致。',changed:'密码已修改。',error:'错误：'}
};
let activeRole='member', activeEmail='', lang='ko';
function setLanguage(){
 try{lang=localStorage.getItem('dohyun-language')||'ko';}catch{lang='ko';}
 if(!T[lang])lang='ko';
 document.documentElement.lang=lang;
 for(const el of document.querySelectorAll('[data-t]'))el.textContent=T[lang][el.dataset.t]||T.ko[el.dataset.t];
 renderIdentity();
}
function tx(k){return T[lang][k]||T.ko[k]||k;}
function renderIdentity(){
 if(!activeEmail)return;
 email.textContent=tx('myemail')+activeEmail;
 role.textContent=tx('myrole')+tx(activeRole==='admin'?'administrator':'member');
}
setLanguage();
(async()=>{
 try{
  const user=await currentUser();
  if(!user){location.replace('login.html?next=mypage.html');return;}
  activeRole=await currentRole();
  activeEmail=user.email||'';
  const {data, error}=await supabase.from('profiles').select('display_name')
    .eq('id',user.id).single();
  if(error) throw error;
  input.value=data?.display_name||'';
  form.hidden=false;
  admin.hidden=activeRole!=='admin';
  renderIdentity();
  status.textContent=tx('ready');
 }catch(error){status.textContent=tx('error')+error.message;}
})();
form.addEventListener('submit',async e=>{
 e.preventDefault();if(!supabase)return;
 const value=input.value.trim();
 save.disabled=true;
 try{
  const user=await currentUser();
  if(!user)throw Error('Session expired');
  const {error}=await supabase.from('profiles')
    .update({display_name:value||null})
    .eq('id',user.id);
  if(error)throw error;
  status.textContent=tx('saved');
 }catch(error){status.textContent=tx('error')+error.message;}
 finally{save.disabled=false;}
});
passwordForm.addEventListener('submit',async e=>{
 e.preventDefault();if(!supabase)return;
 const pw=document.getElementById('new-password');
 const confirm=document.getElementById('confirm-password');
 if(pw.value!==confirm.value){status.textContent=tx('mismatch');return;}
 passwordButton.disabled=true;
 try{
  const {error}=await supabase.auth.updateUser({password:pw.value});
  if(error)throw error;
  pw.value='';confirm.value='';
  status.textContent=tx('changed');
  document.getElementById('password-details').open=false;
 }catch(error){status.textContent=tx('error')+error.message;}
 finally{passwordButton.disabled=false;}
});
document.getElementById('signout').addEventListener('click',async()=>{
 try{if(supabase)await supabase.auth.signOut({scope:'local'});location.replace('login.html');}
 catch(error){status.textContent=tx('error')+error.message;}
});
