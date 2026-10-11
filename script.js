/**
 * BRAJ SEVA — DEVOTIONAL E-COMMERCE WEBSITE
 * script.js — All product data, interactions and WhatsApp integration
 *
 * HOW TO EDIT:
 *   - Products: Edit the `PRODUCTS` array below.
 *   - FAQs: Edit the `FAQS` array below.
 *   - WhatsApp number: Search for WA_NUMBER and change it.
 *   - Prices: Marked as demo — update in PRODUCTS array.
 */

'use strict';

/* =========================================================
   0. CONFIG — Edit these values
   ========================================================= */
const WA_NUMBER = '919286070355';
const WA_BASE   = `https://wa.me/${WA_NUMBER}?text=`;

/* =========================================================
   1. PRODUCTS DATA ARRAY
   All prices are DEMO placeholders.
   Replace with actual images and prices before going live.
   ========================================================= */
const PRODUCTS = [
  /* ---------- BRAJ RAJ ---------- */
  {
    id: 'br-001',
    name: 'Braj Raj (50g)',
    category: 'braj-raj',
    categoryLabel: 'Braj Raj',
    price: '₹99',
    image: 'assets/product_braj_raj.jpg',
    emoji: '🪔',
    shortDesc: 'Pavitra Vrindavan ki mitti — tilak aur pooja ke liye.',
    fullDesc: 'Vrindavan aur Braj Dham ki pavitra dhool. Tilak, archan aur pooja ke kaam aati hai. 50g ka pack, sundar terracotta dibe mein packed. (Demo product — actual quantity and price may vary.)',
  },
  {
    id: 'br-002',
    name: 'Braj Raj (100g)',
    category: 'braj-raj',
    categoryLabel: 'Braj Raj',
    price: '₹179',
    image: 'assets/product_braj_raj.jpg',
    emoji: '🪔',
    shortDesc: 'Vrindavan ki pavitra mitti — bade pack mein.',
    fullDesc: 'Braj Dham ki pavitra dhool ka 100g ka bada pack. Parivaar ke upyog ke liye uchit. (Demo product — actual quantity and price may vary.)',
  },

  /* ---------- CHHAVI / GURUJI ---------- */
  {
    id: 'ch-001',
    name: 'Radha Krishna Chhavi — Gold Frame',
    category: 'chhavi',
    categoryLabel: 'Chhavi / Guruji',
    price: '₹349',
    image: 'assets/product_chhavi.jpg',
    emoji: '🖼️',
    shortDesc: 'Sundar sone ke frame mein Radha Krishna ki chhavi.',
    fullDesc: 'Vrindavan ke kalakaron dwara bani sundar Radha Krishna chhavi, sone ki rang ke ornate frame mein. Griha mandir ya gift ke liye uchit. (Demo product — actual size, style and price may vary.)',
  },
  {
    id: 'ch-002',
    name: 'Radha Krishna Chhavi — Classic',
    category: 'chhavi',
    categoryLabel: 'Chhavi / Guruji',
    price: '₹249',
    image: 'assets/product_chhavi.jpg',
    emoji: '🖼️',
    shortDesc: 'Saral aur sundar chhavi — har mandir ke liye.',
    fullDesc: 'Classic style Radha Krishna chhavi, griha mandir ya bhent ke liye. Sundar rang aur detailed artwork. (Demo product — actual size and price may vary.)',
  },

  /* ---------- TULSI MALA ---------- */
  {
    id: 'tm-001',
    name: 'Tulsi Mala — 108 Manka (Jaap)',
    category: 'tulsi-mala',
    categoryLabel: 'Tulsi Mala',
    price: '₹199',
    image: 'assets/product_tulsi_mala.jpg',
    emoji: '📿',
    shortDesc: '108 mankon ki pavitra Tulsi mala jaap ke liye.',
    fullDesc: 'Shudh Tulsi ki lakdi ke 108 manke. Naam jaap aur dhyaan ke liye prayog ki jaati hai. Gold-tipped finish ke saath sundar design. (Demo product — quality specifications and price may vary.)',
  },
  {
    id: 'tm-002',
    name: 'Tulsi Mala — Standard (54 Manka)',
    category: 'tulsi-mala',
    categoryLabel: 'Tulsi Mala',
    price: '₹129',
    image: 'assets/product_tulsi_mala.jpg',
    emoji: '📿',
    shortDesc: 'Chhoti Tulsi Mala — daily use ke liye.',
    fullDesc: 'Shudh Tulsi ki 54 manka mala. Daily dhyaan aur naam jaap ke liye upyogi. (Demo product — actual bead count and price may vary.)',
  },

  /* ---------- KANTHI MALA ---------- */
  {
    id: 'km-001',
    name: 'Kanthi Mala — Single Layer',
    category: 'kanthi-mala',
    categoryLabel: 'Kanthi Mala',
    price: '₹89',
    image: 'assets/product_kanthi_mala.jpg',
    emoji: '🌿',
    shortDesc: 'Tulsi ki lakdi ki ek layar kanthi mala.',
    fullDesc: 'Tulsi ki shudh lakdi se bani single layer kanthi mala. Bhakton dwara niyamit roop se pahni jaati hai. Dharan karne ke liye haiku aur halki. (Demo product — price may vary.)',
  },
  {
    id: 'km-002',
    name: 'Kanthi Mala — 3 Layer Tulsi',
    category: 'kanthi-mala',
    categoryLabel: 'Kanthi Mala',
    price: '₹159',
    image: 'assets/product_kanthi_mala.jpg',
    emoji: '🌿',
    shortDesc: 'Teen layar ki Tulsi kanthi mala — vishesh bhakton ke liye.',
    fullDesc: 'Shudh Tulsi lakdi ki teen layar kanthi mala. Vishesh pujas aur utsavon ke liye uchit. (Demo product — price and bead specifications may vary.)',
  },

  /* ---------- THAKUR JI VASTRA ---------- */
  {
    id: 'tv-001',
    name: 'Thakur Ji Vastra — Saffron Silk Set',
    category: 'thakur-vastra',
    categoryLabel: 'Thakur Ji Vastra',
    price: '₹449',
    image: 'assets/product_thakur_vastra.jpg',
    emoji: '🧵',
    shortDesc: 'Saffron rang ki resham poshak Thakur Ji ke liye.',
    fullDesc: 'Sundar saffron rang ki silk poshak Thakur Ji ke liye, gold zari embroidery ke saath. Size 4 inch deity ke liye. (Demo product — actual size, material and price may vary. Please confirm idol size on WhatsApp.)',
  },
  {
    id: 'tv-002',
    name: 'Thakur Ji Vastra — Festival Set',
    category: 'thakur-vastra',
    categoryLabel: 'Thakur Ji Vastra',
    price: '₹599',
    image: 'assets/product_thakur_vastra.jpg',
    emoji: '🧵',
    shortDesc: 'Vishesh utsav poshak — Janmashtami, Holi aur adhik.',
    fullDesc: 'Vishesh utsavon ke liye bani sundar poshak — heavy embroidery, zari work aur complete set (lehenga, dupatta, mukut, payjama). (Demo product — actual size and price may vary.)',
  },

  /* ---------- YAMUNA JAL ---------- */
  {
    id: 'yj-001',
    name: 'Yamuna Jal — 250ml (Copper Kalash)',
    category: 'yamuna-jal',
    categoryLabel: 'Yamuna Jal',
    price: '₹299',
    image: 'assets/product_yamuna_jal.jpg',
    emoji: '💧',
    shortDesc: 'Pavitra Yamuna ka jal copper kalash mein.',
    fullDesc: 'Vrindavan Dham ke pavitra Yamuna Ghat se laya gaya jal, handmade copper kalash mein. Pooja, abhishek aur griha shuddhikaran ke liye. (Demo product — availability and price may vary. Confirm on WhatsApp.)',
  },
  {
    id: 'yj-002',
    name: 'Yamuna Jal — 100ml (Gift Pack)',
    category: 'yamuna-jal',
    categoryLabel: 'Yamuna Jal',
    price: '₹149',
    image: 'assets/product_yamuna_jal.jpg',
    emoji: '💧',
    shortDesc: 'Chhota gift pack — bhent dene ke liye.',
    fullDesc: '100ml ka sundar gift packaging mein Yamuna Jal. Kisi bhi shubh avsar par bhent dene ke liye uchit. (Demo product — availability and price may vary.)',
  },

  /* ---------- SEVA SAMAGRI ---------- */
  {
    id: 'ss-001',
    name: 'Pooja Samagri Kit — Complete',
    category: 'seva-samagri',
    categoryLabel: 'Seva Samagri',
    price: '₹399',
    image: 'assets/product_seva_samagri.jpg',
    emoji: '✨',
    shortDesc: 'Pooja ke liye complete samagri kit — ek hi jagah se.',
    fullDesc: 'Complete pooja samagri kit jisme shamil hai: copper diyas, agarbatti, camphor, kumkum, chandan, haldi, dhoop. Brass tray ke saath. (Demo product — exact contents and price may vary.)',
  },
  {
    id: 'ss-002',
    name: 'Copper Diya Set (5 Pcs)',
    category: 'seva-samagri',
    categoryLabel: 'Seva Samagri',
    price: '₹249',
    image: 'assets/product_seva_samagri.jpg',
    emoji: '🪔',
    shortDesc: 'Handmade copper diyas — Thakur Ji ki seva ke liye.',
    fullDesc: 'Panchdhatu se bane 5 handmade copper diyas. Griha mandir, Thakur Ji ki seva aur vishesh pujas ke liye ideal. (Demo product — size and price may vary.)',
  },
];

/* =========================================================
   2. FAQ DATA
   ========================================================= */
const FAQS = [
  {
    q: 'Main order kaise kar sakta/sakti hoon?',
    a: 'Kisi bhi product par "Order on WhatsApp" button click karein. Aapka message pre-filled hoga product details ke saath. Bas send karein aur hum aapko jald se jald reply karenge.',
  },
  {
    q: 'Kya delivery pan-India available hai?',
    a: 'Demo information: Hum pan-India delivery provide karte hain. Actual delivery areas aur charges ke liye kripya WhatsApp par sampark karein.',
  },
  {
    q: 'Delivery mein kitna samay lagta hai?',
    a: 'Demo information: Order confirm hone ke baad approximately 5–10 working days mein delivery ho jaati hai. Actual time location par nirbhar karta hai.',
  },
  {
    q: 'Kya prices fixed hain?',
    a: 'Website par dikhaye gaye prices demo placeholders hain. Actual pricing ke liye kripya WhatsApp par sampark karein. Hum bulk orders par special rates de sakte hain.',
  },
  {
    q: 'Payment kaise ki jaati hai?',
    a: 'Demo information: UPI, bank transfer aur cash on delivery jaise options available ho sakte hain. Kripya order confirm karne se pehle WhatsApp par payment details confirm karein.',
  },
  {
    q: 'Kya gift packaging available hai?',
    a: 'Demo information: Haan, gift packaging ki suvidha available hai. Kripya WhatsApp par batayein ki aapko special gift packaging chahiye.',
  },
  {
    q: 'Bulk order ke liye kya karna hoga?',
    a: 'Bulk orders ke liye seedha WhatsApp par sampark karein. Hum volume ke anusar special pricing discuss kar sakte hain.',
  },
];

/* =========================================================
   3. STATE
   ========================================================= */
let activeCategory = 'all';
let searchQuery    = '';
let currentProduct = null;

/* =========================================================
   4. HELPERS
   ========================================================= */
function buildWALink(text) {
  return WA_BASE + encodeURIComponent(text);
}

function buildOrderMessage(product, qty) {
  return (
    `Jai Shri Krishna 🙏\n\n` +
    `Main neeche di gayi seva samagri ke baare mein enquiry karna chahta/chahti hoon:\n\n` +
    `Product  : ${product.name}\n` +
    `Category : ${product.categoryLabel}\n` +
    `Demo Price: ${product.price} (please confirm actual price)\n` +
    `Quantity : ${qty}\n\n` +
    `Kripya mujhe actual price, availability aur delivery details batayein.\n\n` +
    `Dhanyawad 🙏`
  );
}

function getCategoryLabel(slug) {
  const map = {
    'all':            'Sabhi',
    'braj-raj':       'Braj Raj',
    'chhavi':         'Chhavi / Guruji',
    'tulsi-mala':     'Tulsi Mala',
    'kanthi-mala':    'Kanthi Mala',
    'thakur-vastra':  'Thakur Ji Vastra',
    'yamuna-jal':     'Yamuna Jal',
    'seva-samagri':   'Seva Samagri',
  };
  return map[slug] || slug;
}

/* =========================================================
   5. RENDER PRODUCTS
   ========================================================= */
function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    const matchCat =
      activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

function renderProducts() {
  const grid      = document.getElementById('product-grid');
  const noResults = document.getElementById('no-results');
  const filtered  = getFilteredProducts();

  grid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  filtered.forEach((product, index) => {
    const card = document.createElement('article');
    card.className  = 'product-card fade-in-up';
    card.setAttribute('role', 'listitem');
    card.setAttribute('data-id', product.id);
    card.style.transitionDelay = `${index * 60}ms`;

    card.innerHTML = `
      <div class="product-img-wrap">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-img"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="product-img-placeholder" style="display:none;" aria-hidden="true">${product.emoji}</div>
        <span class="product-category-tag">${product.categoryLabel}</span>
        <span class="product-quick-view" aria-hidden="true">Quick View</span>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-short-desc">${product.shortDesc}</p>
        <div class="product-price-row">
          <span class="product-price">${product.price}</span>
          <span class="price-demo-tag">Demo Price</span>
        </div>
        <button
          class="product-order-btn"
          data-id="${product.id}"
          id="order-btn-${product.id}"
          aria-label="Order ${product.name} on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Order on WhatsApp
        </button>
      </div>
    `;

    /* Click on card -> open modal */
    card.addEventListener('click', (e) => {
      if (e.target.closest('.product-order-btn')) return; // handled separately
      openModal(product);
    });

    /* Click on order button -> direct WhatsApp */
    card.querySelector('.product-order-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      const msg = buildOrderMessage(product, 1);
      window.open(buildWALink(msg), '_blank', 'noopener,noreferrer');
    });

    grid.appendChild(card);

    /* Trigger fade-in after paint */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => card.classList.add('visible'));
    });
  });
}

/* =========================================================
   6. MODAL
   ========================================================= */
function openModal(product) {
  currentProduct = product;

  document.getElementById('modal-img').src        = product.image;
  document.getElementById('modal-img').alt        = product.name;
  document.getElementById('modal-product-name').textContent = product.name;
  document.getElementById('modal-category-label').textContent = product.categoryLabel.toUpperCase();
  document.getElementById('modal-cat-badge').textContent      = product.categoryLabel;
  document.getElementById('modal-price').textContent          = product.price + ' (demo)';
  document.getElementById('modal-desc').textContent           = product.fullDesc;
  document.getElementById('modal-qty').value = 1;

  updateModalWABtn();

  const overlay = document.getElementById('modal-overlay');
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close').focus();
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.hidden = true;
  document.body.style.overflow = '';
  currentProduct = null;
}

function updateModalWABtn() {
  if (!currentProduct) return;
  const qty = parseInt(document.getElementById('modal-qty').value, 10) || 1;
  const msg = buildOrderMessage(currentProduct, qty);
  document.getElementById('modal-wa-btn').href = buildWALink(msg);
}

/* =========================================================
   7. RENDER FAQS
   ========================================================= */
function renderFAQs() {
  const list = document.getElementById('faq-list');
  list.innerHTML = '';

  FAQS.forEach((faq, idx) => {
    const item = document.createElement('div');
    item.className = 'faq-item fade-in-up';
    item.setAttribute('role', 'listitem');
    item.id = `faq-item-${idx}`;

    item.innerHTML = `
      <button
        class="faq-question"
        id="faq-q-${idx}"
        aria-expanded="false"
        aria-controls="faq-ans-${idx}"
      >
        <span>${faq.q}</span>
        <span class="faq-chevron" aria-hidden="true">▼</span>
      </button>
      <div class="faq-answer" id="faq-ans-${idx}" role="region" aria-labelledby="faq-q-${idx}">
        <div class="faq-answer-inner">${faq.a}</div>
      </div>
    `;

    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      /* Close all */
      document.querySelectorAll('.faq-item.open').forEach((el) => {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      /* Toggle clicked */
      if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
      }
    });

    list.appendChild(item);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => item.classList.add('visible'));
    });
  });
}

/* =========================================================
   8. HERO PARTICLES
   ========================================================= */
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const count = window.innerWidth < 600 ? 10 : 20;

  for (let i = 0; i < count; i++) {
    const p   = document.createElement('div');
    p.className = 'particle';
    const size    = Math.random() * 6 + 3;
    const left    = Math.random() * 100;
    const delay   = Math.random() * 12;
    const duration = Math.random() * 12 + 10;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    container.appendChild(p);
  }
}

/* =========================================================
   9. SCROLL ANIMATIONS (IntersectionObserver)
   ========================================================= */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  /* Observe static sections */
  document.querySelectorAll(
    '.step-card, .delivery-card, .contact-card, .about-feat'
  ).forEach((el) => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

/* =========================================================
   10. NAVBAR SCROLL BEHAVIOUR
   ========================================================= */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  /* Sticky shadow on scroll */
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* Hamburger toggle */
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  /* Close mobile nav when a link is clicked */
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  /* Footer category links -> filter products */
  document.querySelectorAll('[data-filter]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-filter');
      if (cat) {
        setActiveCategory(cat);
      }
    });
  });
}

/* =========================================================
   11. CATEGORY FILTER
   ========================================================= */
function setActiveCategory(cat) {
  activeCategory = cat;

  document.querySelectorAll('.category-card').forEach((btn) => {
    const isActive = btn.getAttribute('data-category') === cat;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  renderProducts();
}

function initCategoryFilter() {
  document.querySelectorAll('.category-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      setActiveCategory(btn.getAttribute('data-category'));
    });
  });
}

/* =========================================================
   12. SEARCH
   ========================================================= */
function initSearch() {
  const input     = document.getElementById('product-search');
  const clearBtn  = document.getElementById('search-clear');
  const resetBtn  = document.getElementById('reset-search-btn');

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = input.value;
      clearBtn.hidden = !searchQuery;
      renderProducts();
    }, 260);
  });

  clearBtn.addEventListener('click', () => {
    input.value  = '';
    searchQuery  = '';
    clearBtn.hidden = true;
    input.focus();
    renderProducts();
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      input.value  = '';
      searchQuery  = '';
      clearBtn.hidden = true;
      setActiveCategory('all');
    });
  }
}

/* =========================================================
   13. MODAL EVENTS
   ========================================================= */
function initModal() {
  const overlay   = document.getElementById('modal-overlay');
  const closeBtn  = document.getElementById('modal-close');
  const minusBtn  = document.getElementById('qty-minus');
  const plusBtn   = document.getElementById('qty-plus');
  const qtyInput  = document.getElementById('modal-qty');

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) closeModal();
  });

  minusBtn.addEventListener('click', () => {
    const val = parseInt(qtyInput.value, 10) || 1;
    if (val > 1) {
      qtyInput.value = val - 1;
      updateModalWABtn();
    }
  });

  plusBtn.addEventListener('click', () => {
    const val = parseInt(qtyInput.value, 10) || 1;
    if (val < 99) {
      qtyInput.value = val + 1;
      updateModalWABtn();
    }
  });

  qtyInput.addEventListener('input', () => {
    let val = parseInt(qtyInput.value, 10);
    if (isNaN(val) || val < 1) val = 1;
    if (val > 99) val = 99;
    qtyInput.value = val;
    updateModalWABtn();
  });
}

/* =========================================================
   14. SMOOTH SCROLL FOR ANCHOR LINKS
   ========================================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH   = document.getElementById('navbar').offsetHeight;
        const top    = target.getBoundingClientRect().top + window.pageYOffset - navH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* =========================================================
   15. ACTIVE NAV HIGHLIGHT (scroll spy)
   ========================================================= */
function initScrollSpy() {
  const sections = ['home', 'shop', 'about', 'contact'];
  const links    = {
    home:    document.getElementById('nav-home'),
    shop:    document.getElementById('nav-shop'),
    about:   document.getElementById('nav-about'),
    contact: document.getElementById('nav-contact'),
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          Object.values(links).forEach((l) => l && l.style.setProperty('color', ''));
          if (links[id]) links[id].style.color = 'var(--saffron-dark)';
        }
      });
    },
    { rootMargin: `-${document.getElementById('navbar').offsetHeight + 8}px 0px -55% 0px` }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* =========================================================
   16. INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  renderProducts();
  renderFAQs();
  initNavbar();
  initCategoryFilter();
  initSearch();
  initModal();
  initSmoothScroll();
  initScrollSpy();
  initScrollAnimations();
});
