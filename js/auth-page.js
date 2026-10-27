import {supabase} from './cloud-api.js';
const config = window.PORTFOLIO_SUPABASE || {};
const el = id => document.getElementById(id);
const message=el('auth-message'), form=el('login-form'),submit=el('submit-auth');
const toggle=el('toggle-auth'),forgot=el('forgot-password'),back=el('back-login');
const nameWrap=el('name-wrap'),pwWrap=el('password-wrap'),googleSection=el('google-section');
let mode='login', busy=false;
const dictionaries={
ko:{description:'관리자 로그인 · 회원 서비스는 순차적으로 개방합니다.',email:'이메일',password:'비밀번호',name:'이름',
login:'로그인',signup:'회원가입',request:'재설정 이메일 보내기',register:'계정이 없나요? 회원가입',
existing:'이미 계정이 있나요? 로그인',forgot:'비밀번호를 잊으셨나요?',back:'로그인으로 돌아가기',
google:'Google 계정으로 계속하기',or:'또는',googleDescription:'Google 계정으로 간편하게 로그인하거나 새로 가입할 수 있어요.',googleReady:'이메일 비밀번호 회원가입과 재설정 기능은 추후 제공됩니다.',foot:'일반 회원가입과 Google 로그인은 인증 서비스 설정 후 활성화됩니다.',
wait:'처리 중…',confirmation:'가입 신청을 접수했습니다. 메일함에서 인증 링크를 확인해 주세요.',
resetSent:'비밀번호 재설정 메일을 요청했어요. 메일함을 확인해 주세요.',notready:'아직 로그인 서비스를 준비하는 중입니다.',error:'오류: '},
ja:{description:'管理者ログイン · 会員登録は順次公開します。',email:'メール',password:'パスワード',name:'名前',
login:'ログイン',signup:'新規登録',request:'再設定メールを送信',register:'新規登録はこちら',existing:'ログインはこちら',
forgot:'パスワードをお忘れですか？',back:'ログインに戻る',google:'Googleで続行',or:'または',googleDescription:'Googleアカウントでログイン・新規登録できます。',googleReady:'メールアドレスとパスワードでの新規登録・再設定は準備中です。',
foot:'新規登録とGoogleログインは認証設定が完了次第公開されます。',wait:'処理中…',
confirmation:'認証メールをご確認ください。',resetSent:'再設定メールをご確認ください。',notready:'ログイン準備中です。',error:'エラー: '},
en:{description:'Administrator sign-in · Member registration opens soon.',email:'Email',password:'Password',name:'Name',
login:'Log in',signup:'Sign up',request:'Send reset email',register:'New here? Create account',
existing:'Already registered? Log in',forgot:'Forgot password?',back:'Back to login',
google:'Continue with Google',or:'or',googleDescription:'Use your Google account to sign in or join the gallery.',googleReady:'Email-password signup and email recovery will be available later.',foot:'Visitor registration opens once authentication providers are configured.',
wait:'Working…',confirmation:'Check your email to verify your account.',resetSent:'Check your email for reset instructions.',notready:'Login setup in progress.',error:'Error: '},
vi:{description:'Đăng nhập quản trị · Đăng ký thành viên sắp mở.',email:'Email',password:'Mật khẩu',name:'Tên',
login:'Đăng nhập',signup:'Đăng ký',request:'Gửi email đặt lại',register:'Chưa có tài khoản? Đăng ký',
existing:'Đã có tài khoản? Đăng nhập',forgot:'Quên mật khẩu?',back:'Quay lại đăng nhập',
google:'Tiếp tục bằng Google',or:'hoặc',googleDescription:'Đăng nhập hoặc đăng ký bằng tài khoản Google.',googleReady:'Đăng ký qua email và khôi phục mật khẩu sẽ sớm ra mắt.',foot:'Đăng ký sẽ mở sau khi hoàn tất cấu hình xác thực.',wait:'Đang xử lý…',
confirmation:'Vui lòng kiểm tra email xác minh.',resetSent:'Kiểm tra email đặt lại mật khẩu.',notready:'Đang thiết lập đăng nhập.',error:'Lỗi: '},
'zh-CN':{description:'管理员登录 · 会员注册即将开放。',email:'邮箱',password:'密码',name:'姓名',
login:'登录',signup:'注册',request:'发送重置邮件',register:'没有账户？注册',existing:'已有账户？登录',
forgot:'忘记密码？',back:'返回登录',google:'使用 Google 继续',or:'或',googleDescription:'使用 Google 账户登录或注册。',googleReady:'邮箱密码注册与邮件找回功能稍后推出。',
foot:'认证服务配置完成后开放注册。',wait:'处理中…',confirmation:'请检查验证邮件。',
resetSent:'请检查密码重置邮件。',notready:'登录服务配置中。',error:'错误：'}
};
let lang='ko';
try{lang=localStorage.getItem('dohyun-language')||'ko';}catch{}
if(!dictionaries[lang])lang='ko';
document.documentElement.lang=lang;
function t(key){return dictionaries[lang][key]||dictionaries.ko[key];}
const safeNext=(()=>{
  const raw=new URLSearchParams(location.search).get('next')||'mypage.html';
  // Restrict redirects to known, same-origin routes to avoid open redirects.
  return /^(?:index|projects|planner|admin|mypage)\.html(?:\?[^#]*)?$/.test(raw)?raw:'mypage.html';
})();
function paint(){
  el('auth-description').textContent=config.allowGoogleLogin ? t('googleDescription') : t('description');
  el('email-label').textContent=t('email');
  el('password-label').textContent=t('password');
  nameWrap.firstChild.textContent=t('name');
  toggle.textContent=t(mode==='register'?'existing':'register');
  forgot.textContent=t('forgot');
  back.textContent=t('back');
  el('google-login').textContent=t('google');
  googleSection.querySelector('.divider').textContent=t('or');
  el('auth-footnote').textContent=config.allowGoogleLogin ? t('googleReady') : t('foot');
  submit.textContent=t(mode==='register'?'signup':mode==='forgot'?'request':'login');
  toggle.hidden=mode==='forgot'||!config.allowEmailSignup;
  forgot.hidden=mode!=='login'||!config.allowPasswordReset;
  back.hidden=mode!=='forgot';
  googleSection.hidden=mode==='forgot'||!config.allowGoogleLogin;
  nameWrap.hidden=mode!=='register';
  pwWrap.hidden=mode==='forgot';
  el('password').required=mode!=='forgot';
  el('password').minLength=mode==='register'?8:0;
  el('password').autocomplete=mode==='register'?'new-password':'current-password';
  el('display-name').required=mode==='register';
  submit.disabled=!supabase||busy;
  message.textContent='';
}
paint();
if(!supabase)message.textContent=t('notready');
toggle.addEventListener('click',()=>{mode=mode==='register'?'login':'register';paint();});
forgot.addEventListener('click',()=>{mode='forgot';paint();});
back.addEventListener('click',()=>{mode='login';paint();});
async function enter(){
  const {data,error}=await supabase.auth.getUser();
  if(error||!data?.user)return false;
  location.replace(safeNext);
  return true;
}
if(supabase)enter().catch(()=>{});
form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(!supabase||busy)return;
  if(mode==='register'&&!config.allowEmailSignup)return;
  if(mode==='forgot'&&!config.allowPasswordReset)return;
  const email=el('email').value.trim(),password=el('password').value;
  busy=true;submit.disabled=true;message.textContent=t('wait');
  try {
    if(mode==='register'){
      const {data,error}=await supabase.auth.signUp({
        email,password,options:{
          data:{display_name:el('display-name').value.trim()},
          emailRedirectTo:new URL('login.html?next='+encodeURIComponent(safeNext),location.href).href
        }
      });
      if(error)throw error;
      if(data.session) await enter();
      else message.textContent=t('confirmation');
    }else if(mode==='forgot'){
      const {error}=await supabase.auth.resetPasswordForEmail(email,{
        redirectTo:new URL('password-reset.html',location.href).href
      });
      if(error)throw error;
      message.textContent=t('resetSent');
    }else{
      const {error}=await supabase.auth.signInWithPassword({email,password});
      if(error)throw error;
      await enter();
    }
  }catch(error){message.textContent=t('error')+(error?.message||'Unknown error');}
  finally{busy=false;submit.disabled=false;}
});
el('google-login').addEventListener('click',async()=>{
  if(!supabase||!config.allowGoogleLogin||busy)return;
  busy=true;el('google-login').disabled=true;
  message.textContent=t('wait');
  try{
    const {error}=await supabase.auth.signInWithOAuth({provider:'google',options:{
      redirectTo:new URL('login.html?next='+encodeURIComponent(safeNext),location.href).href
    }});
    if(error)throw error;
  }catch(error){message.textContent=t('error')+(error?.message||'Unknown error');busy=false;el('google-login').disabled=false;}
});
