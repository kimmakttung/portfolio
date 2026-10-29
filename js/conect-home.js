import {installLaboAudio} from './conect-audio.js';
const stage = document.getElementById('room');
let activeArtwork = null;
let activePane = null;
let signedIn = false;
const dialogue = document.getElementById('room-dialogue');
const sound = installLaboAudio(document.getElementById('sound-toggle'), [...document.querySelectorAll('.room-hotspot')]);
const sceneInfo = {
  about:{tag:'PERSON · ABOUT',url:'about.html',
    ko:['기획자 이야기','연구실 책장에는 사람과 문화의 만남을 기록한 경험이 쌓여 있습니다. 일본에서의 문화교류와 기획을 통해 무엇을 배웠는지 살펴보세요.','“기획은 사람을 이해하는 것에서 시작됩니다.”'],
    en:['Meet the Researcher','Browse the experiences behind a portfolio built around people, culture, and new connections.','“Every idea begins with understanding people.”'],
    ja:['企画者について','人と文化のつながりを研究する企画者の経験を紹介します。','「企画は人を理解することから始まります。」']},
  curator:{tag:'CURATOR · FEATURED',url:'curator.html',
    ko:['큐레이터 추천','교류 행사와 문화 수업, 서비스 검증까지. 실제 경험에서 출발한 기획 세 가지를 선별해 소개합니다.','“많은 기록보다 한 가지 구체적인 경험이 더 많은 것을 말해 줍니다.”'],
    en:["Curator's Picks",'Explore three selected projects rooted in intercultural events, education and service feedback.','“A good project starts with a real experience.”'],
    ja:['キュレーターのおすすめ','文化交流イベントや教育活動など、選りすぐりの三つの活動を紹介します。','「企画には、その人ならではの経験があります。」']},
  gallery:{tag:'PUBLIC · GALLERY',url:'gallery.html',
    ko:['공개 갤러리','완성된 기획과 경험을 하나씩 살펴볼 수 있는 전시 공간입니다. 액자를 누르면 각 프로젝트의 이야기가 열립니다.','“누군가에게 보여 줄 수 있는 생각은 하나의 작품이 됩니다.”'],
    en:['Public Gallery','A gallery of finished projects and documented experiences. Open each frame to explore the story.','“Thoughts become works when we share them.”'],
    ja:['公開ギャラリー','完成した企画と経験を展示しています。作品を選んで詳しく見てみましょう。','「共有することで、アイデアは作品になります。」']},
  workroom:{tag:'PRIVATE · WORKROOM',url:'login.html?next=admin.html',
    ko:['비공개 작업실','공개 전의 기획안과 편집 중인 작품을 정리하는 곳입니다. 현재는 관리자만 입장할 수 있습니다.','“모든 아이디어에는 안전한 준비 시간이 필요합니다.”'],
    en:['Private Workroom','An administrator-only space for ideas in progress and unpublished projects.','“Not every idea is ready to be on display.”'],
    ja:['非公開の作業室','制作中の企画を保管する管理者専用の作業室です。','「アイデアには、育てる時間も必要です。」']},
  brand:{tag:'BRAND · EXPERIMENT',url:'brand-lab.html',
    ko:['브랜드 실험실','나라와 고객, 문화의 키워드를 연결해 새로운 브랜드 기획을 가볍게 실험하는 공간입니다.','“다른 것을 연결하면, 없던 가능성이 나타납니다.”'],
    en:['Brand Lab','Combine cultures, audiences and ideas to try an experimental brand concept.','“New possibilities emerge when ideas meet.”'],
    ja:['ブランド実験室','文化・ターゲット・課題を組み合わせ、ブランドのアイデアを試す空間です。','「異なるものをつなぎ、新しい可能性へ。」']},
  contact:{tag:'LETTER · CONTACT',url:'contact.html',
    ko:['새로운 연결','연구실에 남겨진 편지를 펼치듯, 궁금한 점과 새로운 협업에 대해 이야기할 수 있습니다.','“다음 실험은 당신의 한마디에서 시작될지도 모릅니다.”'],
    en:['Start a Conversation','Open a letter to get in touch about collaborations and new ideas.','“Our next project might start with a message.”'],
    ja:['新しいつながり','研究室に届いた手紙を開くように、お問い合わせや新たな提案をどうぞ。','「次の企画は、一通のメッセージから。」']}
};
const other = {
  vi:{headline:'Nơi những ý tưởng khác nhau gặp nhau, kế hoạch mới bắt đầu.',intro:'Nhấn vào các đồ vật phát sáng để khám phá phòng nghiên cứu.',instruction:'Hãy khám phá những vật dụng phát sáng.',go:'Bước vào không gian ↗',back:'← Trở lại phòng',login:'Đăng nhập'},
  'zh-CN':{headline:'不同想法相遇的地方，新的企划由此开始。',intro:'点击发光的物品，探索研究室。',instruction:'请选择研究室中发光的物品。',go:'进入空间 ↗',back:'← 返回研究室',login:'登录'},
  ja:{headline:'異なる思いが出会い、新しい企画が始まる場所。',intro:'光るオブジェを選んで研究室を探検しましょう。',instruction:'光るオブジェを選んでください。',go:'この部屋に入る ↗',back:'← 研究室に戻る',login:'ログイン'},
  en:{headline:'Where different ideas meet, a new project begins.',intro:'Explore the room by selecting illuminated objects.',instruction:'Select a glowing object to explore.',go:'Enter this space ↗',back:'← Back to the room',login:'Log in'},
  ko:{headline:'다른 생각이 만나 새로운 기획이 시작되는 곳.',intro:'책장과 핀보드, 실험 장치를 눌러 연구실의 이야기를 발견해 보세요.',instruction:'연구실 속 빛나는 사물을 선택해 보세요.',go:'공간으로 들어가기 ↗',back:'← 연구실로 돌아가기',login:'로그인'}
};
let language='ko', currentScene=null, lastFocus=null, sceneTimer=0;
try{language=localStorage.getItem('dohyun-language')||'ko';}catch{}
if(!other[language])language='ko';
const byId=id=>document.getElementById(id);
const sceneNames={
  ko:['기획자 이야기','큐레이터 추천','공개 갤러리','비공개 작업실','브랜드 실험실','연락하기'],
  en:['About','Curator Picks','Gallery','Workroom','Brand Lab','Contact'],
  ja:['企画者','おすすめ','ギャラリー','作業室','ブランド実験室','連絡先'],
  vi:['Giới thiệu','Đề xuất','Triển lãm','Phòng làm việc','Thử nghiệm','Liên hệ'],
  'zh-CN':['关于','精选','展览馆','工作室','品牌实验室','联系']
};
function label(key){
  const keys=['about','curator','gallery','workroom','brand','contact'];
  return sceneNames[language][keys.indexOf(key)];
}
function translate(){
  document.documentElement.lang=language;
  byId('room-language').value=language;
  const hero=byId('room-heading');
  const headline = other[language].headline;
  const emphasis = language==='ko' ? '새로운' : language==='ja' ? '新しい' : '';
  const at = emphasis ? headline.indexOf(emphasis) : -1;
  if (at > 0) {
    const em=document.createElement('em'); em.textContent=headline.slice(at);
    hero.replaceChildren(document.createTextNode(headline.slice(0,at)),document.createElement('br'),em);
  } else { hero.textContent=headline; }
  document.querySelector('.lab-intro>p:last-child').textContent=other[language].intro;
  byId('lab-instruction').querySelector('p').textContent=other[language].instruction;
  byId('dialogue-go').textContent=other[language].go;
  byId('dialogue-back').textContent=other[language].back;
  for(const hotspot of document.querySelectorAll('.room-hotspot')){
    hotspot.querySelector('.spot-name').textContent=label(hotspot.dataset.room);
    hotspot.setAttribute('aria-label',label(hotspot.dataset.room));
  }
  for(const nav of document.querySelectorAll('.lab-nav a')){
    nav.textContent=nav.dataset[language==='ko'?'kr':language==='ja'?'ja':'en'];
  }
  byId('lab-account').textContent=signedIn ? (language==='ko'?'내 계정':language==='ja'?'マイページ':language==='vi'?'Tài khoản':language==='zh-CN'?'我的账户':'My account') : other[language].login;
  if(currentScene) fill(currentScene);
  try{localStorage.setItem('dohyun-language',language);}catch{}
}
function fill(key){
  const scene=sceneInfo[key];
  const content=scene[language]||scene.en||scene.ko;
  byId('dialogue-tag').textContent=scene.tag;
  byId('dialogue-title').textContent=content[0];
  byId('dialogue-description').textContent=content[1];
  byId('dialogue-quote').textContent=content[2];
  byId('dialogue-go').href=scene.url;
}
function openScene(key,button){
  if(!sceneInfo[key]||stage.classList.contains('is-zooming')||stage.classList.contains('is-dialogue'))return;
  sound.click();lastFocus=button;currentScene=key;
  const bounds=button.getBoundingClientRect();
  activePane=button.closest('.scene-pane');
  activeArtwork=activePane?.querySelector('.scene-image');
  if (!activePane || !activeArtwork) return;
  const rect=activePane.getBoundingClientRect();
  activeArtwork.style.transformOrigin=((bounds.left+bounds.width/2-rect.left)/rect.width*100)+'% '+((bounds.top+bounds.height/2-rect.top)/rect.height*100)+'%';
  activePane.classList.add('is-zooming');
  stage.classList.add('is-zooming');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  sceneTimer=window.setTimeout(()=>{
    fill(key);
    activePane?.classList.remove('is-zooming');
    stage.classList.remove('is-zooming');
    stage.classList.add('is-dialogue');
    dialogue.hidden=false;
    dialogue.setAttribute('aria-hidden','false');
    byId('dialogue-back').focus();
  },reduced?25:650);
}
function closeScene(){
  clearTimeout(sceneTimer);
  stage.classList.remove('is-zooming','is-dialogue');
  dialogue.hidden=true;
  dialogue.setAttribute('aria-hidden','true');
  currentScene=null;
  activePane?.classList.remove('is-zooming');
  if (activeArtwork) activeArtwork.style.transformOrigin='';
  activePane=null; activeArtwork=null;
  lastFocus?.focus();
}
document.querySelectorAll('.room-hotspot').forEach(b=>b.addEventListener('click',()=>openScene(b.dataset.room,b)));
byId('dialogue-close').addEventListener('click',closeScene);
byId('dialogue-back').addEventListener('click',closeScene);
byId('dialogue-go').addEventListener('click',e=>{
  const key=currentScene;
  if(!key)return;
  e.preventDefault();
  sound.transition();
  stage.classList.add('is-navigating');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(()=>{location.assign(sceneInfo[key].url);},reduced?0:480);
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&currentScene){e.preventDefault();closeScene();}});
byId('room-language').addEventListener('change',e=>{language=other[e.target.value]?e.target.value:'ko';translate();});
translate();
import('./cloud-api.js').then(async ({supabase})=>{
  if(!supabase)return;
  const {data,error}=await supabase.auth.getUser();
  if(!error&&data?.user){
    signedIn=true;
    const a=byId('lab-account');
    a.href='mypage.html';
    translate();
  }
}).catch(()=>{});
