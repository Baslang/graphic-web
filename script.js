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


  // Fresh XLANG portfolio concepts: exactly 100 projects in the six requested categories.
  const portfolioGrid = document.querySelector('.project-grid-real');
  const extraSamples = [{"category":"flyer","type":"FLYER DESIGN","title":"Lagos Creative Week"},{"category":"flyer","type":"FLYER DESIGN","title":"Afrobeats Night"},{"category":"flyer","type":"FLYER DESIGN","title":"Sunday Brunch Club"},{"category":"flyer","type":"FLYER DESIGN","title":"Grand Opening Cafe"},{"category":"flyer","type":"FLYER DESIGN","title":"Fashion Pop-Up"},{"category":"flyer","type":"FLYER DESIGN","title":"Tech Meetup"},{"category":"flyer","type":"FLYER DESIGN","title":"Summer Rooftop Party"},{"category":"flyer","type":"FLYER DESIGN","title":"Fitness Bootcamp"},{"category":"flyer","type":"FLYER DESIGN","title":"Art Exhibition"},{"category":"flyer","type":"FLYER DESIGN","title":"Youth Conference"},{"category":"flyer","type":"FLYER DESIGN","title":"Real Estate Open House"},{"category":"flyer","type":"FLYER DESIGN","title":"Food Festival"},{"category":"flyer","type":"FLYER DESIGN","title":"Beauty Masterclass"},{"category":"flyer","type":"FLYER DESIGN","title":"Music Listening Party"},{"category":"flyer","type":"FLYER DESIGN","title":"Back-to-School Sale"},{"category":"flyer","type":"FLYER DESIGN","title":"Wedding Showcase"},{"category":"flyer","type":"FLYER DESIGN","title":"Startup Pitch Night"},{"category":"product","type":"PRODUCT DESIGN","title":"Smart Hydration Bottle"},{"category":"product","type":"PRODUCT DESIGN","title":"Wireless Earbuds"},{"category":"product","type":"PRODUCT DESIGN","title":"Fitness Smartwatch"},{"category":"product","type":"PRODUCT DESIGN","title":"Portable Bluetooth Speaker"},{"category":"product","type":"PRODUCT DESIGN","title":"Minimal Desk Lamp"},{"category":"product","type":"PRODUCT DESIGN","title":"Reusable Travel Cup"},{"category":"product","type":"PRODUCT DESIGN","title":"Premium Headphones"},{"category":"product","type":"PRODUCT DESIGN","title":"Smart Home Hub"},{"category":"product","type":"PRODUCT DESIGN","title":"Ergonomic Mouse"},{"category":"product","type":"PRODUCT DESIGN","title":"Luxury Perfume Bottle"},{"category":"product","type":"PRODUCT DESIGN","title":"Electric Kettle"},{"category":"product","type":"PRODUCT DESIGN","title":"Skincare Dispenser"},{"category":"product","type":"PRODUCT DESIGN","title":"Compact Camera"},{"category":"product","type":"PRODUCT DESIGN","title":"Travel Backpack"},{"category":"product","type":"PRODUCT DESIGN","title":"Wireless Charging Stand"},{"category":"product","type":"PRODUCT DESIGN","title":"Foldable Laptop Stand"},{"category":"visual","type":"VISUAL DESIGN","title":"Electric Blue Art Direction"},{"category":"visual","type":"VISUAL DESIGN","title":"Organic Form Study"},{"category":"visual","type":"VISUAL DESIGN","title":"Future Culture Visual"},{"category":"visual","type":"VISUAL DESIGN","title":"Editorial Color System"},{"category":"visual","type":"VISUAL DESIGN","title":"Motion Poster Frame"},{"category":"visual","type":"VISUAL DESIGN","title":"Abstract Type Experiment"},{"category":"visual","type":"VISUAL DESIGN","title":"African Pattern Remix"},{"category":"visual","type":"VISUAL DESIGN","title":"Neo-Brutalist Composition"},{"category":"visual","type":"VISUAL DESIGN","title":"Soft Minimal Campaign"},{"category":"visual","type":"VISUAL DESIGN","title":"Chromatic 3D Study"},{"category":"visual","type":"VISUAL DESIGN","title":"Geometric Identity World"},{"category":"visual","type":"VISUAL DESIGN","title":"Luxury Monochrome Study"},{"category":"visual","type":"VISUAL DESIGN","title":"Retro-Futurist Artwork"},{"category":"visual","type":"VISUAL DESIGN","title":"Botanical Visual Story"},{"category":"visual","type":"VISUAL DESIGN","title":"Editorial Collage"},{"category":"visual","type":"VISUAL DESIGN","title":"Digital Texture Series"},{"category":"visual","type":"VISUAL DESIGN","title":"Bold Typography Artwork"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Citrus Grove Orange Juice"},{"category":"packaging","type":"PACKAGING & LABEL","title":"PureDrop Mineral Water"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Nuve Body Lotion"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Kora Coffee Beans"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Mellow Oat Milk"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Zest Hot Sauce"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Honeyfield Raw Honey"},{"category":"packaging","type":"PACKAGING & LABEL","title":"EarthKind Shampoo"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Luma Face Serum"},{"category":"packaging","type":"PACKAGING & LABEL","title":"DailyGrain Cereal"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Velvet Cocoa Powder"},{"category":"packaging","type":"PACKAGING & LABEL","title":"FreshRoot Spice Blend"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Soleil Sunscreen"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Bloom Herbal Tea"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Peak Protein Powder"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Mira Fragrance"},{"category":"packaging","type":"PACKAGING & LABEL","title":"PawWell Pet Treats"},{"category":"packaging","type":"PACKAGING & LABEL","title":"Oasis Dish Soap"},{"category":"poster","type":"POSTER DESIGN","title":"Nova Mobile Launch"},{"category":"poster","type":"POSTER DESIGN","title":"Aurum Luxury Fragrance"},{"category":"poster","type":"POSTER DESIGN","title":"Streetwear Drop 02"},{"category":"poster","type":"POSTER DESIGN","title":"CineNight Thriller Premiere"},{"category":"poster","type":"POSTER DESIGN","title":"GreenFuture Sustainability"},{"category":"poster","type":"POSTER DESIGN","title":"UrbanRide E-Bike"},{"category":"poster","type":"POSTER DESIGN","title":"Lush Skin Studio"},{"category":"poster","type":"POSTER DESIGN","title":"Velocity Auto Show"},{"category":"poster","type":"POSTER DESIGN","title":"Soundwave Festival"},{"category":"poster","type":"POSTER DESIGN","title":"FreshMart Weekend Deals"},{"category":"poster","type":"POSTER DESIGN","title":"Atlas Business Summit"},{"category":"poster","type":"POSTER DESIGN","title":"Golden Hour Restaurant"},{"category":"poster","type":"POSTER DESIGN","title":"PlayZone Gaming Event"},{"category":"poster","type":"POSTER DESIGN","title":"CloudNine Travel"},{"category":"poster","type":"POSTER DESIGN","title":"Pulse Energy Drink"},{"category":"poster","type":"POSTER DESIGN","title":"Heritage Culture Week"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Brand Social Campaign Kit"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Corporate Company Profile"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Restaurant Menu System"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Real Estate Brochure"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Investor Pitch Deck"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Podcast Cover Series"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"YouTube Thumbnail System"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Event Ticket and Pass"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Annual Report Layout"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Business Card Collection"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Email Campaign Header"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Retail Sale Banner Set"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Mystery Book Cover"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Nonprofit Impact Report"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Product Catalog Design"},{"category":"graphic","type":"GRAPHIC DESIGN","title":"Digital Ad Creative"}];
  const imageIds = ["photo-1501386761578-eac5c94b800a","photo-1514525253161-7a46d19cd819","photo-1516450360452-9312f5e86fc7","photo-1492684223066-81342ee5ff30","photo-1506157786151-b8491531f063","photo-1511795409834-ef04bbd61622","photo-1517457373958-b7ffb1e1f6d0","photo-1516280440614-37939bbacd81","photo-1470229722913-7c0e2dbbafd3","photo-1523275335684-37898b6baf30","photo-1542291026-7eec264c27ff","photo-1503602642458-232111445657","photo-1526170375885-4d8ecf77b99f","photo-1496181133206-80ce9b88a853","photo-1505740420928-5e560c06d30e","photo-1527814050087-3793815479db","photo-1546868871-7041f2a55e12","photo-1491553895911-0055eca6402d","photo-1541701494587-cb58502866ab","photo-1549490349-8643362247b5","photo-1557683316-973673baf926","photo-1550745165-9bc0b252726f","photo-1557682250-33bd709cbe85","photo-1513364776144-60967b0f800f","photo-1541961017774-22349e4a1262","photo-1518005020951-eccb494ad742","photo-1500534623283-312aadb485b7","photo-1600271886742-f049cd451bba","photo-1602143407151-7111542de6e8","photo-1608248543803-ba4f8c70ae0b","photo-1547887538-e3a2f32cb1cc","photo-1445116572660-236099ec97a0","photo-1587049352851-8d4e89133924","photo-1608571423902-eed4a5ad8108","photo-1600185365483-26d7a4cc7519","photo-1606313564200-e75d5e30476c","photo-1596040033229-a9821ebd058d","photo-1611930022073-b7a4ba5fcccd","photo-1564890369478-c89ca6d9cde9","photo-1556228578-0d85b1a4d571","photo-1541643600914-78b084683601","photo-1589927986089-35812388d1f4","photo-1558655146-d09347e92766","photo-1529139574466-a303027c1d8b","photo-1485846234645-a62644f84728","photo-1497436072909-60f36d5e7f10","photo-1558981806-ec527fa84c39","photo-1503376780353-7e6692767b70","photo-1542838132-92c53300491e","photo-1556761175-b413da4baf72","photo-1517248135467-4c7edcad34c4","photo-1542751371-adc38448a05e","photo-1501785888041-af3ef285b470","photo-1593305841991-05c297ba4575","photo-1544816155-12df9643f363","photo-1460925895917-afdab827c52f","photo-1517245386807-bb43f82c33c4","photo-1511818966892-d7d671e672a2","photo-1552664730-d307ca884978","photo-1544947950-fa07a98d237f","photo-1556761175-b413da4baf72","photo-1497366754035-f200968a6e72","photo-1494438639946-1ebd1d20bf85","photo-1455390582262-044cdead277a"];
  const loadMoreButton = document.querySelector('#load-more');
  const portfolioCount = document.querySelector('#portfolio-count');
  let loadedExtra = 0;
  const batchSize = 12;
  const totalSamples = extraSamples.length;
  const escapeText = (v) => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const makeSampleCard = (sample, index) => {
    const card = document.createElement('article');
    card.className = 'project-card extra-project-card';
    card.dataset.category = sample.category;
    const imageId = imageIds[index % imageIds.length];
    card.innerHTML = '<div class="project-image real-image"><img loading="lazy" decoding="async" width="800" height="600" alt="' + escapeText(sample.type + ' concept: ' + sample.title) + '" src="https://images.unsplash.com/' + imageId + '?auto=format&fit=crop&w=720&q=65"><span class="project-index">CONCEPT ' + String(index + 1).padStart(3,'0') + '</span></div><div class="project-meta"><div><span class="project-type">' + escapeText(sample.type) + '</span><h3>' + escapeText(sample.title) + '</h3><p>Distinct concept direction developed for a specific brand, product or audience. Portfolio concept, not a claimed client commission.</p></div><span class="project-open">↗</span></div>';
    return card;
  };
  const updatePortfolioCount = () => {
    if (!portfolioGrid || !portfolioCount) return;
    const visible = Array.from(portfolioGrid.querySelectorAll('.project-card')).filter(card => !card.hidden).length;
    portfolioCount.textContent = 'Showing ' + visible + ' of ' + totalSamples + ' concept samples';
  };
  const loadBatch = () => {
    if (!portfolioGrid) return;
    const filter = document.querySelector('.filter-button.active')?.dataset.filter || 'all';
    const end = Math.min(loadedExtra + batchSize, totalSamples);
    for (; loadedExtra < end; loadedExtra++) {
      const card = makeSampleCard(extraSamples[loadedExtra], loadedExtra);
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
      portfolioGrid.appendChild(card);
    }
    if (loadMoreButton) {
      loadMoreButton.hidden = loadedExtra >= totalSamples;
      loadMoreButton.textContent = loadedExtra >= totalSamples ? 'All 100 samples loaded' : 'Load more samples (' + Math.min(batchSize, totalSamples - loadedExtra) + ') ＋';
    }
    updatePortfolioCount();
  };
  if (loadMoreButton) loadMoreButton.addEventListener('click', loadBatch);
  if (portfolioGrid) loadBatch();

  const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
  const projectCards = () => Array.from(document.querySelectorAll('.project-card[data-category]'));
  const applyFilter = (filter) => {
    filterButtons.forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    projectCards().forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
      card.classList.add('in-view');
    });
    updatePortfolioCount();
  };
  filterButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => applyFilter(button.dataset.filter || 'all'));
  });
  document.querySelectorAll('[data-jump-filter]').forEach(link => link.addEventListener('click', () => applyFilter(link.dataset.jumpFilter || 'all')));

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
