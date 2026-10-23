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
  // Every card uses a locally generated, original SVG artwork—no repeated stock photos.
  const loadMoreButton = document.querySelector('#load-more');
  const loadMoreButton = document.querySelector('#load-more');
  const portfolioCount = document.querySelector('#portfolio-count');
  let loadedExtra = 0;
  const batchSize = 12;
  const totalSamples = extraSamples.length;
  const escapeText = (v) => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const palettes = [
    ['#111827','#f7f0df','#f05b35','#e9c46a'], ['#132a25','#f2eadb','#d2e3a3','#e77c52'],
    ['#24153b','#fff3e6','#ff6b9d','#6ed8e5'], ['#0d2340','#f5f0e8','#e6b94f','#e75b4a'],
    ['#e9e1d2','#182b2a','#b34b32','#c5d6a0'], ['#191919','#f8f5ed','#c7ff4f','#8e7cff'],
    ['#f7d9d0','#4a2030','#f08a5d','#f5c45e'], ['#092d36','#f0e9d7','#ff9e3d','#8ed9ca'],
    ['#f1ede5','#24211f','#c54f35','#a8b9a2'], ['#181b38','#f6f1e7','#fa5b43','#79a7ff']
  ];
  const xmlEscape = (s) => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const makeArtwork = (sample, index) => {
    const p = palettes[index % palettes.length];
    const [bg, fg, accent, accent2] = p;
    const title = xmlEscape(sample.title.toUpperCase());
    const words = title.split(' ');
    const line1 = words.slice(0, Math.max(1, Math.ceil(words.length/2))).join(' ');
    const line2 = words.slice(Math.max(1, Math.ceil(words.length/2))).join(' ');
    const category = sample.category;
    const n = index + 1;
    const angle = (n * 17) % 360;
    const circles = Array.from({length: 5}, (_,j) => {
      const x = 90 + ((n*83+j*131)%620), y = 150 + ((n*47+j*109)%700), r = 18 + ((n*13+j*17)%100);
      return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+(j%2?accent:accent2)+'" opacity="'+(0.13+(j%3)*0.09)+'"/>';
    }).join('');
    const stripes = Array.from({length: 9}, (_,j) => '<path d="M '+(j*105-100)+' 0 L '+(j*105+400)+' 1000" stroke="'+fg+'" stroke-width="'+(j%3+1)+'" opacity=".09"/>').join('');
    let hero = '';
    if (category === 'packaging') {
      const packType = n % 4;
      if (packType === 0) hero = '<g transform="translate(210 270)"><rect x="65" y="0" width="250" height="430" rx="18" fill="'+accent2+'" opacity=".35"/><path d="M 90 20 L 290 20 L 310 410 L 70 410 Z" fill="'+fg+'"/><rect x="94" y="105" width="192" height="205" rx="4" fill="'+accent+'"/><text x="190" y="155" text-anchor="middle" font-size="18" fill="'+bg+'" letter-spacing="4">BOTANICAL</text><text x="190" y="205" text-anchor="middle" font-size="34" font-weight="800" fill="'+bg+'">'+xmlEscape(words[0]||'PURE')+'</text><text x="190" y="236" text-anchor="middle" font-size="13" fill="'+bg+'">DAILY FORMULA</text><circle cx="190" cy="270" r="22" fill="'+accent2+'"/></g>';
      else if (packType === 1) hero = '<g transform="translate(230 270)"><path d="M 55 75 L 255 75 L 275 390 Q 155 450 35 390 Z" fill="'+fg+'"/><rect x="95" y="0" width="120" height="90" rx="18" fill="'+accent2+'"/><rect x="65" y="155" width="180" height="150" rx="8" fill="'+accent+'"/><text x="155" y="198" text-anchor="middle" font-size="15" fill="'+bg+'" letter-spacing="3">SMALL BATCH</text><text x="155" y="238" text-anchor="middle" font-size="29" font-weight="800" fill="'+bg+'">'+xmlEscape(words[0]||'FRESH')+'</text><text x="155" y="266" text-anchor="middle" font-size="13" fill="'+bg+'">NO. '+String(n).padStart(2,'0')+'</text></g>';
      else if (packType === 2) hero = '<g transform="translate(205 280)"><rect x="45" y="25" width="285" height="370" rx="6" fill="'+accent2+'"/><rect x="70" y="0" width="235" height="400" rx="4" fill="'+fg+'"/><rect x="70" y="105" width="235" height="185" fill="'+accent+'"/><path d="M 95 265 Q 170 100 280 235" fill="none" stroke="'+bg+'" stroke-width="5"/><text x="187" y="150" text-anchor="middle" font-size="13" fill="'+bg+'" letter-spacing="4">THE ORIGINAL</text><text x="187" y="195" text-anchor="middle" font-size="28" font-weight="800" fill="'+bg+'">'+xmlEscape(words[0]||'NATURE')+'</text><text x="187" y="325" text-anchor="middle" font-size="12" fill="'+bg+'" letter-spacing="3">PURE • SIMPLE • GOOD</text></g>';
      else hero = '<g transform="translate(190 275)"><rect x="70" y="0" width="290" height="420" rx="12" fill="'+fg+'"/><rect x="70" y="120" width="290" height="180" fill="'+accent2+'"/><circle cx="215" cy="210" r="63" fill="'+accent+'" opacity=".85"/><text x="215" y="160" text-anchor="middle" font-size="14" fill="'+bg+'" letter-spacing="4">EST. 2026</text><text x="215" y="222" text-anchor="middle" font-size="25" font-weight="800" fill="'+bg+'">'+xmlEscape(words[0]||'PURE')+'</text><text x="215" y="338" text-anchor="middle" font-size="13" fill="'+bg+'" letter-spacing="2">MADE WITH CARE</text></g>';
    } else if (category === 'product') {
      const form = n % 4;
      if (form === 0) hero = '<g transform="translate(150 280)"><ellipse cx="250" cy="420" rx="190" ry="32" fill="'+fg+'" opacity=".13"/><rect x="150" y="50" width="200" height="330" rx="80" fill="'+fg+'"/><rect x="178" y="0" width="144" height="85" rx="25" fill="'+accent2+'"/><rect x="178" y="165" width="144" height="100" rx="16" fill="'+accent+'"/><text x="250" y="205" text-anchor="middle" font-size="17" fill="'+bg+'" font-weight="800">'+xmlEscape(words[0]||'FORM')+'</text><text x="250" y="231" text-anchor="middle" font-size="11" fill="'+bg+'">DESIGNED DAILY</text></g>';
      else if (form === 1) hero = '<g transform="translate(170 300)"><ellipse cx="240" cy="370" rx="190" ry="25" fill="'+fg+'" opacity=".14"/><rect x="105" y="35" width="270" height="270" rx="65" fill="'+fg+'"/><rect x="130" y="60" width="220" height="220" rx="48" fill="'+bg+'"/><circle cx="240" cy="170" r="72" fill="'+accent+'"/><circle cx="240" cy="170" r="52" fill="'+accent2+'"/><path d="M 215 170 L 235 190 L 275 140" fill="none" stroke="'+bg+'" stroke-width="9" stroke-linecap="round"/><rect x="200" y="305" width="80" height="100" rx="28" fill="'+accent2+'"/></g>';
      else if (form === 2) hero = '<g transform="translate(180 300)"><ellipse cx="220" cy="370" rx="170" ry="25" fill="'+fg+'" opacity=".13"/><path d="M 80 150 Q 70 80 140 75 L 310 75 Q 380 80 370 150 L 345 315 Q 225 365 105 315 Z" fill="'+fg+'"/><path d="M 140 90 L 310 90 L 330 290 Q 225 330 120 290 Z" fill="'+accent2+'"/><path d="M 150 140 Q 225 95 300 140" fill="none" stroke="'+accent+'" stroke-width="9"/><text x="225" y="205" text-anchor="middle" font-size="24" font-weight="800" fill="'+bg+'">'+xmlEscape(words[0]||'MOVE')+'</text><text x="225" y="235" text-anchor="middle" font-size="12" fill="'+bg+'">OBJECT / '+n+'</text></g>';
      else hero = '<g transform="translate(160 300)"><ellipse cx="240" cy="380" rx="185" ry="25" fill="'+fg+'" opacity=".15"/><path d="M 125 80 L 335 80 L 355 330 L 105 330 Z" fill="'+fg+'"/><rect x="145" y="105" width="170" height="170" rx="6" fill="'+accent+'"/><circle cx="230" cy="190" r="55" fill="'+accent2+'"/><circle cx="230" cy="190" r="26" fill="'+bg+'"/><text x="230" y="305" text-anchor="middle" font-size="15" fill="'+bg+'" letter-spacing="3">OBJECT '+n+'</text></g>';
    } else {
      const typeSize = category === 'flyer' ? 74 : category === 'poster' ? 84 : category === 'visual' ? 78 : 62;
      hero = '<g transform="translate(64 260)"><text x="0" y="0" font-size="17" font-weight="700" fill="'+accent+'" letter-spacing="6">'+xmlEscape(sample.type)+'</text><text x="0" y="115" font-size="'+typeSize+'" font-weight="800" fill="'+fg+'" letter-spacing="-3">'+line1+'</text>'+(line2?'<text x="0" y="'+(115+typeSize)+'" font-size="'+typeSize+'" font-weight="800" fill="'+accent+'" letter-spacing="-3">'+line2+'</text>':'')+'<path d="M 0 300 L 590 300" stroke="'+fg+'" stroke-width="2" opacity=".55"/><text x="0" y="345" font-size="19" fill="'+fg+'" letter-spacing="2">IDEAS MADE VISIBLE / 2026</text></g>';
      if (category === 'flyer') hero += '<g transform="translate(430 70) rotate(14)"><circle cx="100" cy="110" r="95" fill="'+accent+'" opacity=".92"/><circle cx="100" cy="110" r="62" fill="'+bg+'"/><circle cx="100" cy="110" r="35" fill="'+accent2+'"/><circle cx="100" cy="110" r="10" fill="'+bg+'"/></g>';
      if (category === 'poster') hero += '<g transform="translate(420 600) rotate(-9)"><rect width="200" height="250" rx="4" fill="'+accent2+'"/><path d="M 0 180 L 100 0 L 200 180 Z" fill="'+accent+'"/><circle cx="100" cy="150" r="43" fill="'+fg+'"/></g>';
      if (category === 'visual') hero += '<g transform="translate(440 630)"><path d="M 0 130 C 40 -20 150 -10 190 100 S 310 260 350 55" fill="none" stroke="'+accent+'" stroke-width="32" stroke-linecap="round"/><circle cx="120" cy="150" r="68" fill="'+accent2+'" opacity=".85"/></g>';
      if (category === 'graphic') hero += '<g transform="translate(455 600)"><rect width="190" height="220" rx="8" fill="'+accent+'" /><rect x="22" y="22" width="146" height="176" rx="4" fill="'+bg+'"/><text x="95" y="112" text-anchor="middle" font-size="45" font-weight="800" fill="'+fg+'">XL</text><text x="95" y="150" text-anchor="middle" font-size="10" fill="'+accent2+'">VISUAL SYSTEM</text></g>';
    }
    const badge = category === 'packaging' ? 'PACKAGING / LABEL' : category === 'product' ? 'PRODUCT CONCEPT' : category === 'flyer' ? 'EVENT / CAMPAIGN' : category === 'poster' ? 'BRAND CAMPAIGN' : category === 'visual' ? 'ART DIRECTION' : 'GRAPHIC SYSTEM';
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img" aria-label="'+xmlEscape(sample.title)+' original design concept"><defs><linearGradient id="wash" x1="0" y1="0" x2="1" y2="1"><stop stop-color="'+bg+'"/><stop offset="1" stop-color="'+accent2+'"/></linearGradient><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 .06 0"/></filter></defs><rect width="800" height="1000" fill="'+bg+'"/><rect x="18" y="18" width="764" height="964" rx="5" fill="none" stroke="'+fg+'" stroke-opacity=".25"/>'+circles+stripes+'<path d="M 0 0 L 800 0 L 800 185 Q 530 260 0 130 Z" fill="'+accent+'" opacity=".13"/><text x="64" y="82" font-family="Arial,sans-serif" font-size="18" font-weight="700" fill="'+fg+'" letter-spacing="5">XLANG / DESIGN STUDIO</text><text x="735" y="82" text-anchor="end" font-family="Arial,sans-serif" font-size="15" fill="'+fg+'" letter-spacing="2">'+String(n).padStart(3,'0')+'</text>'+hero+'<rect x="64" y="900" width="672" height="1" fill="'+fg+'" opacity=".5"/><text x="64" y="938" font-family="Arial,sans-serif" font-size="14" fill="'+fg+'" letter-spacing="3">'+badge+'</text><text x="736" y="938" text-anchor="end" font-family="Arial,sans-serif" font-size="13" fill="'+fg+'" opacity=".7">CONCEPT STUDY · 2026</text><rect width="800" height="1000" filter="url(#grain)" opacity=".18"/></svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  };
  const makeSampleCard = (sample, index) => {
    const card = document.createElement('article');
    card.className = 'project-card extra-project-card';
    card.dataset.category = sample.category;
    const art = makeArtwork(sample, index);
    card.innerHTML = '<div class="project-image real-image original-artwork"><img loading="lazy" decoding="async" width="800" height="1000" alt="' + escapeText(sample.type + ' concept artwork: ' + sample.title) + '" src="' + art + '"><span class="project-index">DESIGN ' + String(index + 1).padStart(3,'0') + '</span></div><div class="project-meta"><div><span class="project-type">' + escapeText(sample.type) + '</span><h3>' + escapeText(sample.title) + '</h3><p>Original vector artwork with a category-specific composition, palette and visual treatment. Concept study, not a claimed client commission.</p></div><span class="project-open">↗</span></div>';
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
