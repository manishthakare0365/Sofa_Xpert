// Contact form → WhatsApp
function sendToWhatsApp(e) {
  e.preventDefault();
  const name    = document.getElementById('cf-name').value.trim();
  const phone   = document.getElementById('cf-phone').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const service = document.getElementById('cf-service').value;
  const msg     = document.getElementById('cf-msg').value.trim();

  const text =
    `Hello Sofa Xpert! 👋\n\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    (email ? `*Email:* ${email}\n` : '') +
    `*Service Required:* ${service}\n` +
    (msg ? `*Details:* ${msg}` : '');

  window.open('https://wa.me/919355655110?text=' + encodeURIComponent(text), '_blank');
}

// Nav scroll
  const nav=document.getElementById('nav');
  window.addEventListener('scroll',()=>nav.classList.toggle('solid',window.scrollY>60));

  // Hamburger
  const hbg=document.getElementById('hbgBtn'),mob=document.getElementById('mobNav'),mx=document.getElementById('mobX');
  hbg.addEventListener('click',()=>mob.classList.add('open'));
  mx.addEventListener('click', ()=>mob.classList.remove('open'));
  function cM(){mob.classList.remove('open')}

  // Reveal
  const io=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){e.target.classList.add('up');io.unobserve(e.target)}
    });
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.rv').forEach((el,i)=>{
    el.style.transitionDelay=(i%4)*.08+'s';
    io.observe(el);
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const expanded = btn.getAttribute('aria-expanded')==='true';
      document.querySelectorAll('.faq-q').forEach(b=>{
        b.setAttribute('aria-expanded','false');
        b.nextElementSibling.classList.remove('open');
      });
      if(!expanded){
        btn.setAttribute('aria-expanded','true');
        btn.nextElementSibling.classList.add('open');
      }
    });
  });

  // Active nav highlight
  const secs=document.querySelectorAll('section[id]');
  const lks=document.querySelectorAll('.nav-ul a:not(.nav-cta)');
  window.addEventListener('scroll',()=>{
    let c='';
    secs.forEach(s=>{if(window.scrollY>=s.offsetTop-130)c=s.id});
    lks.forEach(a=>a.style.color=a.getAttribute('href')==='#'+c?'var(--gold)':'');
  });
