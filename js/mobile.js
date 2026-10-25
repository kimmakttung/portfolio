'use strict';
const mobileQuery=matchMedia('(max-width: 760px)');
const mobileMenu=document.querySelector('.mobile-menu');
const siteNavigation=document.getElementById('site-navigation');
document.documentElement.classList.add('mobile-enhanced');
function setMobileMenu(open,returnFocus=false){
 const expanded=mobileQuery.matches&&open;
 mobileMenu.setAttribute('aria-expanded',String(expanded));
 mobileMenu.setAttribute('aria-label',t(expanded?'메뉴 닫기':'메뉴 열기'));
 siteNavigation.hidden=mobileQuery.matches&&!expanded;
 if(returnFocus)mobileMenu.focus();
}
mobileMenu.addEventListener('click',()=>setMobileMenu(mobileMenu.getAttribute('aria-expanded')!=='true'));
siteNavigation.addEventListener('click',event=>{if(event.target.closest('a')&&mobileQuery.matches)setMobileMenu(false);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileMenu.getAttribute('aria-expanded')==='true')setMobileMenu(false,true);});
mobileQuery.addEventListener('change',()=>setMobileMenu(false));
document.addEventListener('languagechange',()=>mobileMenu.setAttribute('aria-label',t(mobileMenu.getAttribute('aria-expanded')==='true'?'메뉴 닫기':'메뉴 열기')));
setMobileMenu(false);
