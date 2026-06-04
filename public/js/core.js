// Kalaa Print & Pack - Core Application Script

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initPromoBanner();
  initNavDrawer();
  initSearchOverlay();
  initThemeToggle();
  initHomeSlider();
  window.KalaaCart.syncBadges();
});


// --- SCROLL EFFECT ---
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }
}

// --- PROMO BANNER DISMISS ---
function initPromoBanner() {
  const closeBtn = document.querySelector('.promo-close');
  const banner = document.querySelector('.promo-banner');
  if (closeBtn && banner) {
    // Check if previously dismissed in this session
    if (sessionStorage.getItem('promo-dismissed') === 'true') {
      banner.style.display = 'none';
    } else {
      closeBtn.addEventListener('click', () => {
        banner.classList.add('dismissed');
        sessionStorage.setItem('promo-dismissed', 'true');
        setTimeout(() => {
          banner.style.display = 'none';
        }, 300); // Wait for transition
      });
    }
  }
}

// --- MOBILE DRAWER & MEGA-MENU ---
function initNavDrawer() {
  const trigger = document.querySelector('.nav-trigger');
  const drawer = document.querySelector('.nav-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close');
  const drawerContent = document.getElementById('drawer-categories-list');

  // Also catch bottom-nav "Categories" clicks to open drawer
  const bottomCatBtn = document.getElementById('btn-mobile-categories');

  function openDrawer(e) {
    if (e) e.preventDefault();
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock body scroll
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (trigger) trigger.addEventListener('click', openDrawer);
  if (bottomCatBtn) bottomCatBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Render categories in drawer from products-data.js
  if (drawerContent && window.KalaaData) {
    drawerContent.innerHTML = '';
    window.KalaaData.CATEGORIES.forEach(cat => {
      const li = document.createElement('li');
      li.className = 'drawer-menu-item-with-submenu';
      
      // Get products for this category
      const categoryProducts = window.KalaaData.PRODUCTS.filter(p => p.category === cat.id);
      
      let submenuHtml = '';
      if (cat.subCategories && cat.subCategories.length > 0) {
        // Group by subcategory
        submenuHtml = `
          <div class="drawer-submenu grouped-submenu">
            ${cat.subCategories.map(sub => {
              const subProducts = categoryProducts.filter(p => p.subCategory === sub.id);
              if (subProducts.length === 0) return '';
              return `
                <div class="submenu-group">
                  <div class="submenu-group-title">${sub.name}</div>
                  <div class="submenu-group-items">
                    ${subProducts.map(prod => `
                      <a href="product.html?id=${prod.id}">${prod.name}</a>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else if (categoryProducts.length > 0) {
        // Flat list
        submenuHtml = `
          <div class="drawer-submenu">
            ${categoryProducts.map(prod => `
              <a href="product.html?id=${prod.id}">${prod.name}</a>
            `).join('')}
          </div>
        `;
      }
      
      li.innerHTML = `
        <a href="category.html?category=${cat.id}" class="drawer-menu-link">
          <span>${cat.name}</span>
          <svg class="drawer-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
        ${submenuHtml}
      `;
      drawerContent.appendChild(li);
    });
  }
}

// --- HEADER SEARCH CONTROLLER (INLINE EXPANDING) ---
function initSearchOverlay() {
  const wrapper = document.querySelector('.header-search-wrapper');
  if (!wrapper) return;

  const trigger = wrapper.querySelector('.search-trigger');
  const input = wrapper.querySelector('.header-search-input');
  const closeBtn = wrapper.querySelector('.header-search-close');
  const resultsDropdown = wrapper.querySelector('.header-search-results');
  
  // Mobile search button in bottom nav
  const mobileSearchBtn = document.getElementById('btn-mobile-search');

  function toggleSearch(e) {
    if (e) e.preventDefault();
    if (wrapper.classList.contains('active')) {
      collapseSearch();
    } else {
      wrapper.classList.add('active');
      setTimeout(() => {
        if (input) input.focus();
      }, 150);
    }
  }

  function collapseSearch() {
    wrapper.classList.remove('active');
    if (input) input.value = '';
    if (resultsDropdown) {
      resultsDropdown.innerHTML = '';
      resultsDropdown.classList.remove('active');
    }
  }

  if (trigger) trigger.addEventListener('click', toggleSearch);
  if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', toggleSearch);
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      collapseSearch();
    });
  }

  // Close search when clicking outside
  document.addEventListener('click', (e) => {
    if (wrapper && !wrapper.contains(e.target) && (!mobileSearchBtn || !mobileSearchBtn.contains(e.target))) {
      collapseSearch();
    }
  });

  // Handle typing inside input
  if (input && resultsDropdown && window.KalaaData) {
    input.addEventListener('input', (e) => {
      const value = e.target.value.trim();
      if (value.length < 2) {
        resultsDropdown.innerHTML = '';
        resultsDropdown.classList.remove('active');
        return;
      }

      const results = window.KalaaData.searchProducts(value);
      resultsDropdown.innerHTML = '';
      resultsDropdown.classList.add('active');

      if (results.length === 0) {
        resultsDropdown.innerHTML = `<div class="header-search-result-item" style="justify-content: center; color: var(--text-muted); font-size: 12px;">No products found</div>`;
        return;
      }

      results.slice(0, 5).forEach(prod => {
        const item = document.createElement('a');
        item.href = `product.html?id=${prod.id}`;
        item.className = 'header-search-result-item';
        item.innerHTML = `
          <img src="${prod.image}" alt="${prod.name}">
          <div class="header-search-result-info">
            <h5>${prod.name}</h5>
            <p>Starting at ₹${prod.price}</p>
          </div>
        `;
        resultsDropdown.appendChild(item);
      });
    });
    
    // Prevent default form enter page-load
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
  }
}



// --- CART STATE MANAGEMENT ---
window.KalaaCart = {
  getItems() {
    try {
      const cart = localStorage.getItem('kalaa_cart');
      return cart ? JSON.parse(cart) : [];
    } catch (e) {
      console.error("Cart retrieval failed", e);
      return [];
    }
  },

  saveItems(items) {
    try {
      localStorage.setItem('kalaa_cart', JSON.stringify(items));
      this.syncBadges();
    } catch (e) {
      console.error("Cart save failed", e);
    }
  },

  addItem(productId, qty = 1, selectedOptions = {}) {
    const items = this.getItems();
    const existingIndex = items.findIndex(item => 
      item.productId === productId && 
      JSON.stringify(item.options) === JSON.stringify(selectedOptions)
    );

    const product = window.KalaaData ? window.KalaaData.getProductById(productId) : null;
    if (!product) return;

    // Calculate item unit price based on configuration options
    let unitPrice = product.price;
    
    // Add extra cost for specific options
    if (product.options) {
      Object.keys(selectedOptions).forEach(optionKey => {
        const selectedValue = selectedOptions[optionKey];
        
        // Find options arrays
        let optsArray = product.options[optionKey];
        if (optsArray) {
          const optMatch = optsArray.find(o => String(o.value) === String(selectedValue) || String(o.value) === String(selectedValue.value));
          if (optMatch) {
            if (optMatch.extraCost) unitPrice += optMatch.extraCost;
            if (optMatch.priceMultiplier) unitPrice *= optMatch.priceMultiplier;
          }
        }
      });
    }

    if (existingIndex > -1) {
      items[existingIndex].qty += Number(qty);
    } else {
      items.push({
        id: 'cart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        productId,
        name: product.name,
        image: product.image,
        qty: Number(qty),
        unitPrice: Math.round(unitPrice),
        options: selectedOptions
      });
    }

    this.saveItems(items);
  },

  removeItem(cartItemId) {
    let items = this.getItems();
    items = items.filter(item => item.id !== cartItemId);
    this.saveItems(items);
  },

  updateQuantity(cartItemId, qty) {
    const items = this.getItems();
    const item = items.find(item => item.id === cartItemId);
    if (item) {
      item.qty = Math.max(1, Number(qty));
      this.saveItems(items);
    }
  },

  clearCart() {
    localStorage.removeItem('kalaa_cart');
    this.syncBadges();
  },

  getSubtotal() {
    const items = this.getItems();
    return items.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  },

  syncBadges() {
    const items = this.getItems();
    const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = totalQty;
      badge.style.display = totalQty > 0 ? 'flex' : 'none';
    });
  }
};

// --- DARK MODE THEME TOGGLER ---
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('.theme-toggle');
  
  function updateToggleIcons(theme) {
    toggleBtns.forEach(btn => {
      const sunIcon = btn.querySelector('.sun-icon');
      const moonIcon = btn.querySelector('.moon-icon');
      if (theme === 'dark') {
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
      } else {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
      }
    });
  }

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateToggleIcons(currentTheme);

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('kalaa_theme', theme);
      updateToggleIcons(theme);
    });
  });

  // Listen for storage theme updates in other tabs/windows to sync instantly
  window.addEventListener('storage', (e) => {
    if (e.key === 'kalaa_theme') {
      const theme = e.newValue || 'light';
      document.documentElement.setAttribute('data-theme', theme);
      updateToggleIcons(theme);
    }
  });
}

// --- HOME SLIDER SLIDESHOW ---
function initHomeSlider() {
  const slides = document.querySelectorAll('.home-slide');
  if (slides.length === 0) return;

  const leftArrow = document.querySelector('.slider-arrow.arrow-left');
  const rightArrow = document.querySelector('.slider-arrow.arrow-right');
  const sliderSection = document.querySelector('.home-slider-section');

  let currentSlideIndex = 0;
  let autoplayTimer = null;
  const autoplayInterval = 6000; // 6 seconds

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (index >= slides.length) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = slides.length - 1;
    } else {
      currentSlideIndex = index;
    }

    slides[currentSlideIndex].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    showSlide(currentSlideIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, autoplayInterval);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (leftArrow) {
    leftArrow.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      startAutoplay();
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      startAutoplay();
    });
  }

  if (sliderSection) {
    sliderSection.addEventListener('mouseenter', stopAutoplay);
    sliderSection.addEventListener('mouseleave', startAutoplay);
  }

  // Initialize
  showSlide(currentSlideIndex);
  startAutoplay();
}

