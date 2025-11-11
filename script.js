// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
if (btn && links) {
  btn.addEventListener('click', ()=>{
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    links.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }));
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();


// Mobile hamburger toggle
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('no-scroll', open);
  });
  // Close on link click (optional)
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (links.classList.contains('open')) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }
  }));
})();
