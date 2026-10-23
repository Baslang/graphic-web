(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mark the document as enhanced only after this file has loaded. The CSS
  // uses this class so content remains visible if JavaScript is unavailable.
  document.documentElement.classList.add('js-ready');

  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('in-view'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  // Mobile navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle && mainNav) {
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      mainNav.classList.remove('open');
    };
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      mainNav.classList.toggle('open', !isOpen);
    });
    mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  // Portfolio filtering
  const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
  const projectCards = Array.from(document.querySelectorAll('.project-card[data-category]'));
  const applyFilter = (filter) => {
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) card.classList.add('in-view');
    });
  };
  filterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => applyFilter(button.dataset.filter || 'all'));
  });
  document.querySelectorAll('[data-jump-filter]').forEach((link) => {
    link.addEventListener('click', () => {
      const filter = link.dataset.jumpFilter || 'all';
      applyFilter(filter);
    });
  });

  // Gentle pointer movement on the 3D-inspired hero stage, disabled on touch
  // devices and for users who request reduced motion.
  const heroStage = document.querySelector('#heroStage');
  if (heroStage && !reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const stageImage = heroStage.querySelector('.stage-image');
    let frame = 0;
    heroStage.addEventListener('pointermove', (event) => {
      const rect = heroStage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        heroStage.style.setProperty('--pointer-x', (x * 7).toFixed(2) + 'deg');
        heroStage.style.setProperty('--pointer-y', (y * -6).toFixed(2) + 'deg');
        if (stageImage) stageImage.style.transform = 'translate3d(' + (x * 7).toFixed(1) + 'px,' + (y * 7).toFixed(1) + 'px,0) rotateY(' + (x * 2).toFixed(2) + 'deg)';
      });
    });
    heroStage.addEventListener('pointerleave', () => {
      if (frame) cancelAnimationFrame(frame);
      heroStage.style.removeProperty('--pointer-x');
      heroStage.style.removeProperty('--pointer-y');
      if (stageImage) stageImage.style.removeProperty('transform');
    });
  }

  // Back-to-top control and footer year
  const backTop = document.querySelector('.back-top');
  const updateBackTop = () => {
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 520);
  };
  window.addEventListener('scroll', updateBackTop, { passive: true });
  updateBackTop();
  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Keep navigation highlight aligned with the visible page section.
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const active = link.getAttribute('href') === '#' + entry.target.id;
            link.classList.toggle('active', active);
          });
        }
      });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
