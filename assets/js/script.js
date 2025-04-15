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
      const offset = isMobile ? 100 : 100; 

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


  document.addEventListener('DOMContentLoaded', () => {
    const stickyNav = document.querySelector('.sticky-nav');
    const stickyTop = document.querySelector('.sticky-top');
    if (!stickyNav || !stickyTop) return;

    const sentinel = document.createElement('div');
    stickyNav.parentNode.insertBefore(sentinel, stickyNav);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.boundingClientRect.top < 0 && !entry.isIntersecting) {
        stickyTop.classList.add('active');
      } else {
        stickyTop.classList.remove('active');
      }
    }, {
      threshold: [0],
    });

    observer.observe(sentinel);
  });