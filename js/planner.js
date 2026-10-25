'use strict';
const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(tab, focus = false) {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); activateTab(tabs[next], true); }
  });
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (target && document.getElementById('intro-panel').contains(target)) activateTab(tabs[0]);
  });
});
function generatePlan(data) {
  const locale = planLocales[currentLanguage];
  const type = ['marketing','event','service'].includes(data.type) ? data.type : 'marketing';
  const typeLabel = t({marketing:'마케팅 캠페인',event:'행사 · 이벤트',service:'서비스 · 콘텐츠'}[type]);
  const bullets = items => items.map(item => '- ' + item).join('\n');
  const sections = [
    data.background, data.goal, data.target + '\n' + locale.audience, data.idea,
    locale.steps[type].map((step,index) => locale.stages[index] + ': ' + step).join('\n') + '\n' + locale.stages[3] + ': ' + locale.review,
    (data.schedule || locale.noSchedule) + '\n' + locale.schedule,
    (data.budget || locale.noBudget) + '\n' + locale.budget,
    (data.kpi || locale.metrics[type]) + '\n' + locale.measure,
    bullets(locale.risks), bullets(locale.checklist)
  ];
  return '# ' + data.title + '\n\n' + t('기획 유형') + ': ' + typeLabel + '\n' + locale.state + '\n\n' + sections.map((body,index) => (index + 1) + '. ' + locale.headings[index] + '\n' + body).join('\n\n') + '\n';
}
const form = document.getElementById('planner-form');
const output = document.getElementById('plan-output');
const status = document.getElementById('plan-status');
const copy = document.getElementById('copy-plan');
const download = document.getElementById('download-plan');
function syncActions() { copy.disabled = download.disabled = !output.value.trim(); }
form.addEventListener('submit', event => {
  event.preventDefault();
  if (output.value.trim() && !window.confirm(t('현재 초안을 새로 작성할까요? 직접 수정한 내용도 바뀝니다.'))) return;
  const data = Object.fromEntries([...new FormData(form)].map(([key,value]) => [key,value.trim()]));
  for (const name of ['title','background','goal','target','idea']) {
    if (!data[name]) { form.elements[name].focus(); status.textContent = t('필수 항목에 내용을 입력해 주세요.'); return; }
  }
  output.value = generatePlan(data);
  syncActions(); status.textContent = t('초안 생성 완료'); output.focus();
});
output.addEventListener('input', () => { syncActions(); status.textContent = t('초안 편집 중'); });
copy.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(output.value); status.textContent = t('복사했습니다.'); }
  catch { output.focus(); output.select(); status.textContent = t('복사 권한을 사용할 수 없습니다. 선택된 내용을 Ctrl+C 또는 ⌘C로 복사해 주세요.'); }
});
download.addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob(['\ufeff' + output.value], {type: 'text/plain;charset=utf-8'}));
  const link = document.createElement('a'); link.href = url; link.download = planLocales[currentLanguage].filename;
  document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = t('다운로드를 요청했습니다.');
});
