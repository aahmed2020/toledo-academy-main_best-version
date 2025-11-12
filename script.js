// Mobile hamburger menu toggle - FIXED VERSION
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  
  if (!toggle || !links) return;
  
  // Toggle menu when hamburger clicked
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
  });
  
  // Close menu when any link clicked
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && 
        !links.contains(e.target) && 
        !toggle.contains(e.target)) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }
  });
})();

// Footer year auto-update
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
