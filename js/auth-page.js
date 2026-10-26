// Supabase is only enabled once public project config is supplied.
// PIN this dependency when upgrading; browser code never receives elevated keys.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0';
const config = window.PORTFOLIO_SUPABASE;
const message = document.getElementById('auth-message');
const form = document.getElementById('login-form');
const toggle = document.getElementById('toggle-auth');
const nameWrap = document.getElementById('name-wrap');
const submit = document.getElementById('submit-auth');
const google = document.getElementById('google-login');
let register = false;
const ready = Boolean(config?.url && config?.publishableKey);
const client = ready ? createClient(config.url, config.publishableKey) : null;
if (!client) {
  message.textContent = '데이터베이스 연결 준비 중입니다.';
  submit.disabled = google.disabled = true;
}
toggle.addEventListener('click', () => {
  register = !register;
  nameWrap.hidden = !register;
  submit.textContent = register ? '회원가입' : '로그인';
  toggle.textContent = register ? '이미 계정이 있나요? 로그인' : '계정이 없나요? 회원가입';
  document.getElementById('password').autocomplete = register ? 'new-password' : 'current-password';
  message.textContent = '';
});
const redirect = new URLSearchParams(location.search).get('next');
const safeNext = redirect && /^(?:index|projects|planner|admin|mypage)\.html(?:\?.*)?$/.test(redirect) ? redirect : 'mypage.html';
async function enter() {
  const { data: { user }, error } = await client.auth.getUser();
  if (error || !user) return;
  location.assign(safeNext);
}
if (client) enter().catch(() => {});
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!client) return;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  submit.disabled = true;
  message.textContent = '확인 중입니다…';
  try {
    if (register) {
      const display_name = document.getElementById('display-name').value.trim();
      const { data, error } = await client.auth.signUp({
        email, password,
        options: { data: { display_name }, emailRedirectTo: new URL('login.html', location.href).href }
      });
      if (error) throw error;
      if (data.session) await enter();
      else message.textContent = '가입 요청을 접수했습니다. 인증 이메일을 확인해 주세요.';
    } else {
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await enter();
    }
  } catch (error) {
    message.textContent = error?.message || '인증 중 문제가 발생했습니다.';
  } finally { submit.disabled = false; }
});
google.addEventListener('click', async () => {
  if (!client) return;
  google.disabled = true;
  message.textContent = 'Google 로그인으로 이동합니다…';
  const { error } = await client.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: new URL('login.html?next=' + encodeURIComponent(safeNext), location.href).href }
  });
  if (error) { message.textContent = error.message; google.disabled = false; }
});
