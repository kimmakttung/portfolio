import {installLaboAudio} from './conect-audio.js?v=event-client-1';
import {clientCopy, clientScenes} from './client-copy.js?v=event-client-1';

const byId = id => document.getElementById(id);
const stage = byId('room');
const world = byId('room-world');
const art = byId('room-art');
const dialogue = byId('room-dialogue');
const mobile = matchMedia('(max-width:600px)');
const compact = matchMedia('(max-width:1000px)');
const reduced = matchMedia('(prefers-reduced-motion:reduce)');
const markers = [...document.querySelectorAll('.room-hotspot')];
const sceneLinks = [...document.querySelectorAll('[data-scene]')];
const views = {archive:.22, hub:.5, exhibit:.84};
const backgroundUI = ['client-hud','room-world','client-camera-controls','client-minimap','dialogue-reopen'];
const sound = installLaboAudio(byId('sound-toggle'), markers);
let language = 'ko';
try { language = localStorage.getItem('dohyun-language') || 'ko'; } catch {}
if (!clientCopy[language]) language = 'ko';
let selected = null;
let opener = null;
let overview = !mobile.matches;
let camera = .5;
let dimensions = {width:0,height:0,worldWidth:0,worldHeight:0,top:0,offset:0};
let typingFrame = 0;
let fullText = '';
let signedIn = false;
let navigating = false;
let drag = null;
let dragFrame = 0;
const copy = () => clientCopy[language];

function setMenu(open) {
  const expanded = compact.matches && open;
  byId('menu-toggle').setAttribute('aria-expanded', String(expanded));
  byId('client-menu').hidden = compact.matches && !expanded;
}
function lockBackground(locked) {
  backgroundUI.forEach(id => { byId(id).inert = locked; });
}
function syncMarkers() {
  const {width,height,worldWidth,worldHeight,top,offset} = dimensions;
  markers.forEach(marker => {
    const item = clientScenes[marker.dataset.room];
    const x = offset + worldWidth * item.x / 100;
    const y = top + worldHeight * item.y / 100;
    const visible = x > 24 && x < width - 24 && y > 78 && y < height - 52 && !(overview && mobile.matches);
    marker.style.visibility = visible ? 'visible' : 'hidden';
    marker.tabIndex = visible ? 0 : -1;
    marker.setAttribute('aria-hidden', String(!visible));
    marker.classList.toggle('is-selected', selected === marker.dataset.room);
  });
}
function renderCamera(instant = false) {
  const width = stage.clientWidth;
  const height = stage.clientHeight;
  const ratio = art.naturalWidth && art.naturalHeight ? art.naturalWidth / art.naturalHeight : 1550 / 419;
  const worldWidth = overview ? width : Math.max(width, height * ratio);
  const worldHeight = overview ? width / ratio : height;
  const top = overview ? (height - worldHeight) / 2 : 0;
  const offset = overview ? 0 : Math.max(width - worldWidth, Math.min(0, width / 2 - worldWidth * camera));
  dimensions = {width,height,worldWidth,worldHeight,top,offset};
  if (instant) world.style.transition = 'none';
  world.style.setProperty('--world-width', worldWidth + 'px');
  world.style.setProperty('--world-height', worldHeight + 'px');
  world.style.setProperty('--world-top', top + 'px');
  world.style.setProperty('--camera-x', offset + 'px');
  if (instant) {
    world.getBoundingClientRect();
    requestAnimationFrame(() => { world.style.removeProperty('transition'); });
  }
  const windowIndicator = byId('camera-window');
  windowIndicator.style.left = (-offset / worldWidth * 100) + '%';
  windowIndicator.style.width = Math.min(100, width / worldWidth * 100) + '%';
  const nearest = Object.keys(views).sort((a,b) => Math.abs(views[a] - camera) - Math.abs(views[b] - camera))[0];
  document.querySelectorAll('#client-camera-controls [data-view]').forEach(button => {
    button.setAttribute('aria-pressed', String(overview ? button.dataset.view === 'overview' : button.dataset.view === nearest));
  });
  stage.dataset.view = overview ? 'overview' : nearest;
  syncMarkers();
}
function setView(view) {
  if (selected || navigating) return;
  overview = view === 'overview';
  if (!overview) camera = views[view] ?? .5;
  sound.click();
  renderCamera(reduced.matches);
}
function finishTyping() {
  cancelAnimationFrame(typingFrame);
  typingFrame = 0;
  byId('dialogue-typed').textContent = fullText;
  dialogue.dataset.typing = 'false';
  byId('dialogue-skip').hidden = true;
}
function typeText(text, animate = true) {
  finishTyping();
  fullText = text;
  byId('dialogue-full').textContent = text;
  byId('dialogue-typed').textContent = '';
  if (reduced.matches || !animate) { finishTyping(); return; }
  const characters = typeof Intl.Segmenter === 'function'
    ? [...new Intl.Segmenter(language,{granularity:'grapheme'}).segment(text)].map(item => item.segment)
    : Array.from(text);
  dialogue.dataset.typing = 'true';
  byId('dialogue-skip').hidden = false;
  let started;
  function tick(time) {
    if (started === undefined) started = time;
    const count = Math.min(characters.length, Math.floor((time - started) / 14) + 1);
    byId('dialogue-typed').textContent = characters.slice(0,count).join('');
    if (count < characters.length) typingFrame = requestAnimationFrame(tick);
    else finishTyping();
  }
  typingFrame = requestAnimationFrame(tick);
}
function fillDialogue(animate = true) {
  const ui = copy();
  const item = selected ? clientScenes[selected].copy[language] : null;
  byId('dialogue-tag').textContent = item?.speaker || ui.guideSpeaker;
  byId('dialogue-title').textContent = item?.title || ui.guideTitle;
  byId('dialogue-quote').textContent = item?.quote || '';
  byId('dialogue-quote').hidden = !item?.quote;
  byId('dialogue-back').textContent = selected ? ui.back : ui.fold;
  byId('dialogue-go').textContent = (item?.action || ui.guideAction) + '  ↗';
  byId('dialogue-go').href = selected ? clientScenes[selected].url : 'gallery.html';
  typeText(item?.description || ui.guideText, animate);
}
function openScene(key, source) {
  if (!clientScenes[key] || selected || navigating) return;
  setMenu(false);
  sound.click();
  opener = source;
  selected = key;
  overview = false;
  camera = clientScenes[key].x / 100;
  stage.classList.add('is-inspecting');
  sceneLinks.forEach(link => link.classList.toggle('is-selected',link.dataset.scene === selected));
  renderCamera(reduced.matches);
  dialogue.hidden = false;
  byId('dialogue-reopen').hidden = true;
  dialogue.setAttribute('role','dialog');
  dialogue.setAttribute('aria-modal','true');
  lockBackground(true);
  fillDialogue();
  byId('client-announcement').textContent = clientScenes[key].copy[language].title;
  byId('dialogue-back').focus({preventScroll:true});
}
function closeDialogue() {
  finishTyping();
  const returnTo = opener;
  const wasSelected = Boolean(selected);
  selected = null;
  opener = null;
  dialogue.hidden = true;
  dialogue.setAttribute('role','region');
  dialogue.removeAttribute('aria-modal');
  stage.classList.remove('is-inspecting');
  sceneLinks.forEach(link => link.classList.remove('is-selected'));
  lockBackground(false);
  byId('dialogue-reopen').hidden = false;
  syncMarkers();
  if (wasSelected && returnTo?.getClientRects().length && getComputedStyle(returnTo).visibility !== 'hidden') returnTo.focus({preventScroll:true});
  else byId('dialogue-reopen').focus({preventScroll:true});
}
function showGuide() {
  if (selected || navigating) return;
  dialogue.hidden = false;
  byId('dialogue-reopen').hidden = true;
  fillDialogue();
  byId('dialogue-back').focus({preventScroll:true});
}
function soundLabel() {
  const active = byId('sound-toggle').getAttribute('aria-pressed') === 'true';
  const text = active ? copy().soundOff : copy().soundOn;
  byId('sound-toggle').setAttribute('aria-label',text);
  byId('sound-text').textContent = text;
}
function setLanguage(code, animate = false) {
  language = clientCopy[code] ? code : 'ko';
  const ui = copy();
  document.documentElement.lang = language;
  document.title = 'conect labo · ' + ui.home;
  byId('room-heading').textContent = 'conect labo · ' + ui.home;
  byId('room-language').value = language;
  byId('room-language').setAttribute('aria-label',ui.language);
  byId('room-art').alt = ui.image;
  byId('client-minimap').setAttribute('aria-label',ui.map);
  byId('menu-toggle').setAttribute('aria-label',ui.menu);
  byId('client-menu').setAttribute('aria-label',ui.navTitle);
  byId('client-camera-controls').setAttribute('aria-label',ui.sceneLabel);
  byId('camera-hint').textContent = ui.cameraHint;
  byId('lab-account').textContent = signedIn ? ui.account : ui.login;
  byId('client-hud').querySelector('.client-logo small').textContent = ui.tag;
  byId('dialogue-close').setAttribute('aria-label',ui.close);
  byId('dialogue-skip').textContent = ui.skip;
  byId('dialogue-reopen').textContent = ui.reopen + '  ◇';
  byId('transition-text').textContent = ui.transition;
  document.querySelectorAll('#client-camera-controls [data-view]').forEach(button => { button.querySelector('span').textContent = ui[button.dataset.view]; });
  markers.forEach(marker => {
    const scene = clientScenes[marker.dataset.room].copy[language];
    marker.querySelector('.spot-name').textContent = scene.title;
    marker.setAttribute('aria-label',scene.title);
  });
  sceneLinks.forEach(link => { link.textContent = clientScenes[link.dataset.scene].copy[language].title; });
  soundLabel();
  if (!dialogue.hidden) fillDialogue(animate);
  try { localStorage.setItem('dohyun-language',language); } catch {}
}

markers.forEach(marker => marker.addEventListener('click',() => openScene(marker.dataset.room,marker)));
sceneLinks.forEach(link => link.addEventListener('click',event => { event.preventDefault();openScene(link.dataset.scene,link); }));
byId('dialogue-close').addEventListener('click',closeDialogue);
byId('dialogue-back').addEventListener('click',closeDialogue);
byId('dialogue-reopen').addEventListener('click',showGuide);
byId('dialogue-skip').addEventListener('click',finishTyping);
byId('dialogue-go').addEventListener('click',event => {
  event.preventDefault();
  if (navigating) return;
  navigating = true;
  finishTyping();
  sound.transition();
  document.body.classList.add('is-navigating');
  const destination = selected ? clientScenes[selected].url : 'gallery.html';
  setTimeout(() => location.assign(destination),reduced.matches ? 0 : 400);
});
byId('room-language').addEventListener('change',event => setLanguage(event.target.value));
byId('menu-toggle').addEventListener('click',() => setMenu(byId('menu-toggle').getAttribute('aria-expanded') !== 'true'));
document.querySelectorAll('#client-camera-controls [data-view]').forEach(button => button.addEventListener('click',() => setView(button.dataset.view)));
byId('client-minimap').addEventListener('click',event => {
  if (selected || navigating) return;
  const rect = event.currentTarget.getBoundingClientRect();
  camera = event.detail ? Math.max(0,Math.min(1,(event.clientX - rect.left) / rect.width)) : .5;
  overview = false;
  sound.click();
  renderCamera(reduced.matches);
});
byId('client-minimap').addEventListener('keydown',event => {
  if (!['ArrowLeft','ArrowRight'].includes(event.key) || selected) return;
  event.preventDefault();
  overview = false;
  camera = Math.max(0,Math.min(1,camera + (event.key === 'ArrowLeft' ? -.1 : .1)));
  renderCamera(reduced.matches);
});

world.addEventListener('pointerdown',event => {
  if (selected || overview || event.button !== 0 || event.target.closest('.room-hotspot')) return;
  drag = {id:event.pointerId,x:event.clientX,offset:dimensions.offset,moved:false};
});
world.addEventListener('pointermove',event => {
  if (!drag || drag.id !== event.pointerId) return;
  const delta = event.clientX - drag.x;
  if (!drag.moved && Math.abs(delta) < 7) return;
  if (!drag.moved) {
    drag.moved = true;
    world.setPointerCapture(event.pointerId);
    stage.classList.add('is-dragging');
  }
  const offset = Math.max(dimensions.width - dimensions.worldWidth,Math.min(0,drag.offset + delta));
  camera = (dimensions.width / 2 - offset) / dimensions.worldWidth;
  if (!dragFrame) dragFrame = requestAnimationFrame(() => { dragFrame = 0;renderCamera(); });
});
function stopDrag() { drag = null;stage.classList.remove('is-dragging'); }
world.addEventListener('pointerup',stopDrag);
world.addEventListener('pointercancel',stopDrag);
world.addEventListener('lostpointercapture',stopDrag);

document.addEventListener('keydown',event => {
  if (event.key === 'Escape') {
    if (selected) {event.preventDefault();closeDialogue();}
    else if (byId('menu-toggle').getAttribute('aria-expanded') === 'true') {event.preventDefault();setMenu(false);byId('menu-toggle').focus();}
    else if (!dialogue.hidden) {event.preventDefault();closeDialogue();}
    return;
  }
  if (selected && event.key === 'Enter' && dialogue.dataset.typing === 'true') { event.preventDefault();finishTyping();return; }
  if (selected && event.key === 'Tab') {
    const focusable = [...dialogue.querySelectorAll('button,a[href]')].filter(node => !node.hidden && node.getClientRects().length);
    const first = focusable[0],last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {event.preventDefault();last.focus();}
    else if (!event.shiftKey && document.activeElement === last) {event.preventDefault();first.focus();}
  }
});
compact.addEventListener('change',() => setMenu(false));
reduced.addEventListener('change',() => { if (reduced.matches) finishTyping();renderCamera(true); });
addEventListener('resize',() => renderCamera(true));
addEventListener('pageshow',event => {
  if (!event.persisted) return;
  navigating = false;
  document.body.classList.remove('is-navigating');
  renderCamera(true);
});
art.addEventListener('load',() => renderCamera(true));
new MutationObserver(soundLabel).observe(byId('sound-toggle'),{attributes:true,attributeFilter:['aria-pressed']});
setMenu(false);
renderCamera(true);
setLanguage(language,true);
stage.dataset.ready = 'true';

// Authentication only updates the account shortcut; scene interaction works offline.
import('./cloud-api.js').then(async ({supabase}) => {
  if (!supabase) return;
  const {data,error} = await supabase.auth.getUser();
  if (!error && data?.user) {
    signedIn = true;
    byId('lab-account').href = 'mypage.html';
    setLanguage(language);
  }
}).catch(() => {});
