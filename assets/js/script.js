const links = document.querySelectorAll('.btn-group .btn_link');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const isMobile = window.innerWidth <= 991;
      const offset = isMobile ? 70 : 100; 

      const topPos = targetEl.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  });
});
