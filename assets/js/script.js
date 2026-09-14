const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '\u00D7' : '\u2630';
  });

  document.querySelectorAll('.nav nav a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = '\u2630';
    });
  });
}

if (document.querySelector('.page-content .faq-list')) {
  const supportStyles = document.createElement('link');
  supportStyles.rel = 'stylesheet';
  supportStyles.href = 'assets/css/support.css';
  document.head.appendChild(supportStyles);
}
