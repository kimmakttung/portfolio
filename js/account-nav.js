import {supabase} from './cloud-api.js';

const nav=document.getElementById('site-navigation');
if(nav){
  let link=[...nav.querySelectorAll('a')].find(a=>a.pathname.endsWith('/login.html')||a.pathname.endsWith('/mypage.html'));
  if(!link){
    link=document.createElement('a');
    link.href='login.html';
    nav.append(link);
  }
  link.classList.add('account-nav-link');
  const labels={
    ko:['로그인','내 계정'],
    ja:['ログイン','マイページ'],
    en:['Log in','My account'],
    vi:['Đăng nhập','Tài khoản'],
    'zh-CN':['登录','我的账户']
  };
  let loggedIn=false;
  function updateLabel(){
    const language=document.documentElement.lang;
    link.textContent=(labels[language]||labels.ko)[loggedIn?1:0];
    link.href=loggedIn?'mypage.html':'login.html';
  }
  updateLabel();
  document.addEventListener('languagechange',updateLabel);
  if(supabase){
    supabase.auth.getUser().then(({data,error})=>{
      loggedIn=!error && Boolean(data?.user);
      updateLabel();
    }).catch(()=>{loggedIn=false;updateLabel();});
    supabase.auth.onAuthStateChange((event,session)=>{
      loggedIn=Boolean(session?.user);
      updateLabel();
    });
  }
}
