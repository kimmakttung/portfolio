const q=id=>document.getElementById(id);
const markets={ko:'한국',ja:'일본',vi:'베트남'};
const audiences={young:'20~30대 직장인',student:'대학생',traveler:'여행자',family:'가족'};
const issues={
 time:{label:'바쁜 일상 속 시간 부족',act:'짧은 시간에 즐길 수 있는 10분 경험을 설계합니다.',test:'5명에게 10분 안에 사용해 보게 하고 만족도와 재이용 의사를 기록합니다.'},
 culture:{label:'서로 다른 문화의 거리감',act:'두 나라의 익숙한 일상을 연결한 체험 콘텐츠를 만듭니다.',test:'서로 다른 문화권 참여자를 인터뷰해 이해도와 흥미를 확인합니다.'},
 routine:{label:'좋은 습관을 지속하기 어려움',act:'매주 작은 성공을 기록하고 공유하는 참여 루틴을 만듭니다.',test:'일주일간 참여 지속률과 중도 포기 이유를 관찰합니다.'},
 discovery:{label:'취향에 맞는 선택의 어려움',act:'3가지 간단한 질문으로 개인 취향에 맞는 선택지를 큐레이션합니다.',test:'참여자의 선택 소요 시간과 추천 만족도를 비교합니다.'}
};
const moods={
 warm:{name:'온기',t:'안심하고 함께할 수 있는 감성'},
 refined:{name:'결',t:'섬세하고 품위 있는 경험'},
 play:{name:'놀이',t:'재미있고 탐색하기 쉬운 경험'}
};
let latest='';
q('brand-form').addEventListener('submit',event=>{
  event.preventDefault();
  const market=markets[q('b-market').value];
  const audience=audiences[q('b-audience').value];
  const issue=issues[q('b-issue').value];
  const mood=moods[q('b-tone').value];
  q('experiment-empty').hidden=true;q('experiment-result').hidden=false;
  const title='연결의 '+mood.name+' · '+market;
  const hypothesis=market+'의 '+audience+'은(는) '+issue.label+'을(를) 겪을 때, '+mood.t+'을(를) 제공하는 브랜드에 관심을 가질 수 있습니다.';
  const execution=issue.act+' '+market+'의 문화와 '+audience+'의 일상에서 얻은 관찰을 반영해 작은 시제품부터 시작합니다.';
  const test=issue.test+' 실제 사용자와 문화적 맥락을 확인하기 전까지는 검증된 수요라고 단정하지 않습니다.';
  q('result-name').textContent=title;
  q('result-hypothesis').textContent=hypothesis;
  q('result-execution').textContent=execution;
  q('result-test').textContent=test;
  latest=[title,'기획 가설: '+hypothesis,'경험 설계: '+execution,'검증 방법: '+test].join('\n\n');
});
q('result-copy').addEventListener('click',async()=>{
 if(!latest)return;
 try{
   await navigator.clipboard.writeText(latest);
   q('result-copy').textContent='복사 완료 ✓';
 }catch{
   q('result-copy').textContent='복사할 수 없습니다. 텍스트를 직접 선택해 주세요.';
 }
});
