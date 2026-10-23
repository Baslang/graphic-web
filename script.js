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


  // Extend the portfolio to 100 entries, while rendering images in small batches.
  const portfolioGrid = document.querySelector('.project-grid-real');
  const initialCards = portfolioGrid ? Array.from(portfolioGrid.querySelectorAll('.project-card')) : [];
  const extraSamples = [{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Color Theory"},{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Visual Rhythm"},{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Form Studies"},{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Creative Direction"},{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Bold Composition"},{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Campaign Visuals"},{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Art Direction"},{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Modern Graphics"},{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Visual Contrast"},{"category":"graphic","type":"GRAPHIC & VISUAL DESIGN","title":"Experimental Layout"},{"category":"food","type":"FOOD & BEVERAGE","title":"Citrus Press"},{"category":"food","type":"FOOD & BEVERAGE","title":"Coffee Ritual"},{"category":"food","type":"FOOD & BEVERAGE","title":"Fresh Harvest"},{"category":"food","type":"FOOD & BEVERAGE","title":"Botanical Drinks"},{"category":"food","type":"FOOD & BEVERAGE","title":"Everyday Nutrition"},{"category":"food","type":"FOOD & BEVERAGE","title":"Craft Beverage"},{"category":"food","type":"FOOD & BEVERAGE","title":"Natural Pantry"},{"category":"food","type":"FOOD & BEVERAGE","title":"Juice Culture"},{"category":"food","type":"FOOD & BEVERAGE","title":"Market Fresh"},{"category":"food","type":"FOOD & BEVERAGE","title":"Pure Ingredients"},{"category":"flyer","type":"FLYERS & POSTERS","title":"After Hours"},{"category":"flyer","type":"FLYERS & POSTERS","title":"Sound & Motion"},{"category":"flyer","type":"FLYERS & POSTERS","title":"City Sessions"},{"category":"flyer","type":"FLYERS & POSTERS","title":"Culture Festival"},{"category":"flyer","type":"FLYERS & POSTERS","title":"Live Energy"},{"category":"flyer","type":"FLYERS & POSTERS","title":"Night Shift"},{"category":"flyer","type":"FLYERS & POSTERS","title":"Open Air"},{"category":"flyer","type":"FLYERS & POSTERS","title":"The Main Event"},{"category":"flyer","type":"FLYERS & POSTERS","title":"Rhythm Series"},{"category":"flyer","type":"FLYERS & POSTERS","title":"Creative Meetup"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Daily Ritual"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Botanical Care"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Pure Form"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Skin Essentials"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Studio Scent"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Nourish Lab"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Modern Wellness"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Soft Science"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Earth Ritual"},{"category":"packaging","type":"PRODUCT & PACKAGING","title":"Product Stories"},{"category":"branding","type":"BRAND IDENTITY","title":"Forma Studio"},{"category":"branding","type":"BRAND IDENTITY","title":"Northline"},{"category":"branding","type":"BRAND IDENTITY","title":"Nuvé Objects"},{"category":"branding","type":"BRAND IDENTITY","title":"Common Ground"},{"category":"branding","type":"BRAND IDENTITY","title":"Studio Nova"},{"category":"branding","type":"BRAND IDENTITY","title":"Kindred Goods"},{"category":"branding","type":"BRAND IDENTITY","title":"Goodwell"},{"category":"branding","type":"BRAND IDENTITY","title":"Field & Form"},{"category":"branding","type":"BRAND IDENTITY","title":"Monogram System"},{"category":"branding","type":"BRAND IDENTITY","title":"Everyday Supply"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Studio Workspace"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Finance Dashboard"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Travel Journal"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Wellness App"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Creative Commerce"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Product Landing"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Analytics Suite"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Learning Platform"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Service Booking"},{"category":"digital","type":"UI/UX & WEB DESIGN","title":"Mobile Banking"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"Field Notes"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"The Form Issue"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"Future Brief"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"Culture Journal"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"Annual Review"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"Brand Handbook"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"Pitch Story"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"Architecture Digest"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"Market Report"},{"category":"editorial","type":"PRESENTATION & EDITORIAL","title":"Ideas in Motion"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Launch Carousel"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Brand Story"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Product Spotlight"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Creator Series"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Weekly Campaign"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Community Post"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Seasonal Social"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Editorial Carousel"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Offer Campaign"},{"category":"social","type":"SOCIAL MEDIA DESIGN","title":"Visual Announcement"},{"category":"print","type":"PRINT & BROCHURE","title":"Company Profile"},{"category":"print","type":"PRINT & BROCHURE","title":"Property Brochure"},{"category":"print","type":"PRINT & BROCHURE","title":"Restaurant Menu"},{"category":"print","type":"PRINT & BROCHURE","title":"Event Program"},{"category":"print","type":"PRINT & BROCHURE","title":"Lookbook"},{"category":"print","type":"PRINT & BROCHURE","title":"Product Catalog"},{"category":"print","type":"PRINT & BROCHURE","title":"Travel Guide"},{"category":"print","type":"PRINT & BROCHURE","title":"Annual Report"},{"category":"print","type":"PRINT & BROCHURE","title":"Service Booklet"},{"category":"print","type":"PRINT & BROCHURE","title":"Print Collection"},{"category":"web","type":"WEBSITE MOCKUPS","title":"Commerce Homepage"},{"category":"web","type":"WEBSITE MOCKUPS","title":"Agency Website"},{"category":"web","type":"WEBSITE MOCKUPS","title":"Portfolio Landing"}];
  const imageIds = ["photo-1490481651871-ab68de25d43d","photo-1523275335684-37898b6baf30","photo-1542291026-7eec264c27ff","photo-1526170375885-4d8ecf77b99f","photo-1512499617640-c74ae3a79d37","photo-1556228578-0d85b1a4d571","photo-1556229010-6c3f2c9ca5f8","photo-1600185365483-26d7a4cc7519","photo-1602143407151-7111542de6e8","photo-1547887538-e3a2f32cb1cc","photo-1608571423902-eed4a5ad8108","photo-1596462502278-27bfdc403348","photo-1608248543803-ba4f8c70ae0b","photo-1611930022073-b7a4ba5fcccd","photo-1571781926291-c477ebfd024b","photo-1598440947619-2c35fc9aa908","photo-1601049541289-9b1b7bbbfe19","photo-1600185365926-3a2ce3cdb9eb","photo-1600185365483-26d7a4cc7519","photo-1612817288484-6f916006741a","photo-1602143407151-7111542de6e8","photo-1586495777744-4413f21062fa","photo-1556742049-0cfed4f6a45d","photo-1460925895917-afdab827c52f","photo-1558655146-d09347e92766","photo-1559028012-481c04fa702d","photo-1557683316-973673baf926","photo-1550745165-9bc0b252726f","photo-1557682250-33bd709cbe85","photo-1558618666-fcd25c85cd64","photo-1500530855697-b586d89ba3ee","photo-1513364776144-60967b0f800f","photo-1541701494587-cb58502866ab","photo-1549490349-8643362247b5","photo-1518005020951-eccb494ad742","photo-1500534623283-312aadb485b7","photo-1506794778202-cad84cf45f1d","photo-1524504388940-b1c1722653e1","photo-1534528741775-53994a69daeb","photo-1515886657613-9f3515b0c78f","photo-1529139574466-a303027c1d8b","photo-1483985988355-763728e1935b","photo-1485230895905-ec40ba36b9bc","photo-1490481651871-ab68de25d43d","photo-1523381210434-271e8be1f52b","photo-1529139574466-a303027c1d8b","photo-1503342217505-b0a15ec3261c","photo-1512436991641-6745cdb1723f","photo-1509631179647-0177331693ae","photo-1490481651871-ab68de25d43d","photo-1542291026-7eec264c27ff","photo-1542291026-7eec264c27ff","photo-1553062407-98eeb64c6a62","photo-1553062407-98eeb64c6a62","photo-1526170375885-4d8ecf77b99f","photo-1503602642458-232111445657","photo-1494438639946-1ebd1d20bf85","photo-1544816155-12df9643f363","photo-1517841905240-472988babdf9","photo-1523729376308-7c1b1b1b3f31","photo-1507003211169-0a1dd7228f2d","photo-1556761175-b413da4baf72","photo-1521737711867-e3b97375f902","photo-1552664730-d307ca884978","photo-1553877522-43269d4ea984","photo-1551836022-d5d88e9218df","photo-1522071820081-009f0129c71c","photo-1517245386807-bb43f82c33c4","photo-1522542550221-31fd19575a2d","photo-1498050108023-c5249f4df085","photo-1519389950473-47ba0277781c","photo-1516321318423-f06f85e504b3","photo-1551288049-bebda4e38f71","photo-1559028006-448665bd7c7f","photo-1553877522-43269d4ea984","photo-1556761175-b413da4baf72","photo-1516321318423-f06f85e504b3","photo-1467232004584-a241de8bcf5d","photo-1499951360447-b19be8fe80f5","photo-1507238691740-187a5b1d37b8","photo-1519389950473-47ba0277781c","photo-1559028012-481c04fa702d","photo-1516321318423-f06f85e504b3","photo-1556761175-b413da4baf72","photo-1521737711867-e3b97375f902","photo-1517245386807-bb43f82c33c4","photo-1552664730-d307ca884978","photo-1522071820081-009f0129c71c","photo-1497366754035-f200968a6e72","photo-1497366216548-37526070297c","photo-1497366811353-6870744d04b2","photo-1497366754035-f200968a6e72","photo-1455390582262-044cdead277a","photo-1455390582262-044cdead277a","photo-1544947950-fa07a98d237f","photo-1519682337058-a94d519337bc","photo-1513475382585-d06e58bcb0e0","photo-1517842645767-c639042777db","photo-1455390582262-044cdead277a","photo-1516979187457-637abb4f9353","photo-1512820790803-83ca734da794","photo-1543002588-bfa74002ed7e","photo-1495446815901-a7297e633e8d","photo-1519682337058-a94d519337bc"];
  const loadMoreButton = document.querySelector('#load-more');
  const portfolioCount = document.querySelector('#portfolio-count');
  let loadedExtra = 0;
  const batchSize = 12;
  const totalSamples = initialCards.length + extraSamples.length;
  const makeSampleCard = (sample, index) => {
    const article = document.createElement('article');
    article.className = 'project-card extra-project-card';
    article.dataset.category = sample.category;
    const photoId = imageIds[index % imageIds.length];
    const heading = sample.title + (index >= imageIds.length ? ' — Edition ' + (Math.floor(index / imageIds.length) + 2) : '');
    article.innerHTML = '<div class="project-image real-image"><img loading="lazy" decoding="async" width="800" height="600" alt="Realistic visual reference for ' + heading.replace(/&/g, '&amp;').replace(/"/g, '&quot;') + '" src="https://images.unsplash.com/' + photoId + '?auto=format&fit=crop&w=720&q=65"><span class="project-index">CONCEPT SAMPLE ' + String(index + 8).padStart(2, '0') + '</span></div><div class="project-meta"><div><span class="project-type">' + sample.type + '</span><h3>' + heading + '</h3><p>Portfolio concept exploring realistic art direction, composition, typography and presentation for this design category.</p></div><span class="project-open">↗</span></div>';
    return article;
  };
  const updatePortfolioCount = () => {
    const visible = portfolioGrid ? Array.from(portfolioGrid.querySelectorAll('.project-card')).filter(card => !card.hidden && card.style.display !== 'none').length : 0;
    if (portfolioCount) portfolioCount.textContent = 'Showing ' + visible + ' of ' + totalSamples + ' concept samples';
  };
  const loadBatch = () => {
    if (!portfolioGrid) return;
    const end = Math.min(loadedExtra + batchSize, extraSamples.length);
    for (; loadedExtra < end; loadedExtra++) {
      const card = makeSampleCard(extraSamples[loadedExtra], loadedExtra);
      if (document.querySelector('.filter-button.active')?.dataset.filter && document.querySelector('.filter-button.active').dataset.filter !== 'all' && document.querySelector('.filter-button.active').dataset.filter !== card.dataset.category) card.hidden = true;
      portfolioGrid.appendChild(card);
    }
    if (loadMoreButton) {
      loadMoreButton.hidden = loadedExtra >= extraSamples.length;
      loadMoreButton.textContent = loadedExtra >= extraSamples.length ? 'All 100 samples loaded' : 'Load more samples (' + Math.min(batchSize, extraSamples.length - loadedExtra) + ') ＋';
    }
    updatePortfolioCount();
  };
  if (loadMoreButton) loadMoreButton.addEventListener('click', loadBatch);
  // Build the first batch immediately; remaining images wait for user action.
  if (portfolioGrid) loadBatch();

  // Portfolio filtering
  const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
  const projectCards = () => Array.from(document.querySelectorAll('.project-card[data-category]'));
  const applyFilter = (filter) => {
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    projectCards().forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) card.classList.add('in-view');
    });
    if (typeof updatePortfolioCount === 'function') updatePortfolioCount();
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
