// Mobile menu
const menuBtn=document.querySelector('.menu-btn');
const mobileMenu=document.querySelector('.mobile-menu');
if(menuBtn&&mobileMenu){menuBtn.addEventListener('click',()=>mobileMenu.classList.toggle('open'))}

// Scroll progress + back to top
const bar=document.querySelector('.scroll-progress__bar');
const toTop=document.querySelector('.to-top');
function onScroll(){
  const h=document.documentElement;
  const sc=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  if(bar)bar.style.width=sc+'%';
  if(toTop)toTop.classList.toggle('show',h.scrollTop>400);
}
document.addEventListener('scroll',onScroll,{passive:true});
if(toTop)toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Reveal on scroll
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Mark active nav link
const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav__links a, .mobile-menu a').forEach(a=>{
  const href=a.getAttribute('href');
  if(href===path)a.classList.add('active');
});

// Counters
const counters=document.querySelectorAll('[data-count]');
const cio=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    const el=e.target;cio.unobserve(el);
    const target=parseInt(el.dataset.count,10);const dur=1400;const start=performance.now();
    const suf=el.dataset.suffix||'';
    function step(t){const p=Math.min((t-start)/dur,1);const val=Math.floor(target*(1-Math.pow(1-p,3)));el.textContent=val.toLocaleString('ar-EG')+suf;if(p<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);
  });
},{threshold:.3});
counters.forEach(c=>cio.observe(c));

// Contact form
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=encodeURIComponent(data.get('name')||'');
  const service=encodeURIComponent(data.get('service')||'');
  const area=encodeURIComponent(data.get('area')||'');
  const msg=encodeURIComponent(data.get('message')||'');
  const text=`السلام عليكم، الاسم: ${decodeURIComponent(name)}%0Aالخدمة: ${decodeURIComponent(service)}%0Aالمنطقة: ${decodeURIComponent(area)}%0Aالرسالة: ${decodeURIComponent(msg)}`;
  window.location.href=`https://wa.me/96565954080?text=${text}`;
})}
