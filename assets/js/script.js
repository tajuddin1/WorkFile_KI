const links = document.querySelectorAll('.btn-group .btn_link');

links.forEach(link => {
  link.addEventListener('click', (e) => {

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const isMobile = window.innerWidth <= 991;
      const offset = isMobile ? 175 : 175; 

      const topPos = targetEl.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  });
});



  const toggleBtn = document.getElementById('faqAll');
  let allOpen = false;

  toggleBtn.addEventListener('click', function () {
    const accordions = document.querySelectorAll('.accordion-collapse');

    accordions.forEach((accordion) => {
      const bsCollapse = bootstrap.Collapse.getInstance(accordion) || new bootstrap.Collapse(accordion, { toggle: false });

      if (allOpen) {
        bsCollapse.hide();
      } else {
        bsCollapse.show();
      }
    });
    allOpen = !allOpen;

  });
