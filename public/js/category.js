// Kalaa Print & Pack - Category Page Controller

document.addEventListener('DOMContentLoaded', () => {
  if (!window.KalaaData) return;

  const urlParams = new URLSearchParams(window.location.search);
  const catId = urlParams.get('category');
  
  let currentProducts = [];
  let categoryName = "All Products";

  // Determine current active catalog subset
  if (catId) {
    const cat = window.KalaaData.CATEGORIES.find(c => c.id === catId);
    if (cat) {
      categoryName = cat.name;
      currentProducts = window.KalaaData.getProductsByCategory(catId);
      
      // Update page headings
      document.title = `${categoryName} | Kalaa Print & Pack`;
      const pageTitle = document.getElementById('category-page-title');
      if (pageTitle) pageTitle.textContent = categoryName;

      const breadcrumbs = document.getElementById('breadcrumbs');
      if (breadcrumbs) breadcrumbs.innerHTML = `<a href="index.html">Home</a> &gt; <span>${categoryName}</span>`;
    } else {
      currentProducts = [...window.KalaaData.PRODUCTS];
    }
  } else {
    currentProducts = [...window.KalaaData.PRODUCTS];
    const breadcrumbs = document.getElementById('breadcrumbs');
    if (breadcrumbs) breadcrumbs.innerHTML = `<a href="index.html">Home</a> &gt; <span>All Products</span>`;
  }

  // Cache elements
  const grid = document.getElementById('catalog-products-grid');
  const sortSelect = document.getElementById('sort-select');
  const checkboxes = document.querySelectorAll('.filter-checkbox');

  // Initial render
  filterAndRender();

  // Attach event listeners
  if (sortSelect) {
    sortSelect.addEventListener('change', filterAndRender);
  }
  checkboxes.forEach(cb => {
    cb.addEventListener('change', filterAndRender);
  });

  if (grid) {
    grid.addEventListener('click', (e) => {
      const wishlistBtn = e.target.closest('.premium-wishlist-btn');
      if (wishlistBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = wishlistBtn.dataset.id;
        toggleFavorite(id, wishlistBtn);
      }
    });
  }

  function toggleFavorite(id, btnElement) {
    let favorites = JSON.parse(localStorage.getItem('kalaa_favorites') || '[]');
    const idx = favorites.indexOf(id);
    if (idx > -1) {
      favorites.splice(idx, 1);
      btnElement.classList.remove('active');
      btnElement.querySelector('svg').setAttribute('fill', 'none');
    } else {
      favorites.push(id);
      btnElement.classList.add('active');
      btnElement.querySelector('svg').setAttribute('fill', 'currentColor');
    }
    localStorage.setItem('kalaa_favorites', JSON.stringify(favorites));
  }

  // Filter, Sort and Render Pipeline
  function filterAndRender() {
    let filteredList = [...currentProducts];

    // 1. Gather Selected Filters
    const selectedFilters = {
      paper: [],
      finish: [],
      quantity: []
    };

    checkboxes.forEach(cb => {
      if (cb.checked) {
        const type = cb.dataset.type;
        const val = cb.value;
        selectedFilters[type].push(val);
      }
    });

    // 2. Apply Filters
    if (selectedFilters.paper.length > 0) {
      filteredList = filteredList.filter(prod => {
        const text = (prod.name + " " + prod.description).toLowerCase();
        
        return selectedFilters.paper.some(val => {
          if (val === 'matte' && text.includes('matte')) return true;
          if (val === 'gloss' && (text.includes('gloss') || text.includes('shiny'))) return true;
          if (val === 'velvet' && text.includes('velvet')) return true;
          if (val === 'cotton' && (text.includes('cotton') || text.includes('pique') || text.includes('coat'))) return true;
          
          if (prod.options && prod.options.paper) {
            return prod.options.paper.some(opt => opt.label.toLowerCase().includes(val));
          }
          return false;
        });
      });
    }

    if (selectedFilters.finish.length > 0) {
      filteredList = filteredList.filter(prod => {
        const text = (prod.name + " " + prod.description).toLowerCase();
        return selectedFilters.finish.some(val => {
          if (val === 'spot-uv' && (text.includes('uv') || text.includes('spot'))) return true;
          if (val === 'embroidery' && (text.includes('embroid') || text.includes('stitch'))) return true;
          if (val === 'print' && (text.includes('print') || text.includes('screen') || text.includes('transfer'))) return true;
          if (val === 'none') {
            return !text.includes('uv') && !text.includes('embroid') && !text.includes('stitch') && !text.includes('print');
          }
          
          if (prod.options && prod.options.finish) {
            return prod.options.finish.some(opt => opt.label.toLowerCase().includes(val));
          }
          return false;
        });
      });
    }

    if (selectedFilters.quantity.length > 0) {
      filteredList = filteredList.filter(prod => {
        if (!prod.options || !prod.options.quantity) return true;
        
        const minQty = prod.options.quantity[0].value;
        return selectedFilters.quantity.some(val => {
          if (val === 'low' && minQty <= 10) return true;
          if (val === 'mid' && minQty > 10 && minQty <= 100) return true;
          if (val === 'high' && minQty > 100) return true;
          return false;
        });
      });
    }

    // 3. Apply Sorting
    const sortVal = sortSelect ? sortSelect.value : 'popularity';
    if (sortVal === 'price-low') {
      filteredList.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-high') {
      filteredList.sort((a, b) => b.price - a.price);
    }

    // 4. Render Grid
    renderGrid(filteredList);
  }

  function renderGrid(products) {
    if (!grid) return;
    grid.innerHTML = '';

    if (products.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <h3>No matching products found</h3>
          <p style="margin-top: 8px;">Try clearing some of your filters in the sidebar or check back later.</p>
        </div>
      `;
      return;
    }

    const shapesList = products.filter(p => p.subCategory === 'shapes');
    const papersList = products.filter(p => p.subCategory === 'papers-textures');

    if (catId === 'visiting-cards' && (shapesList.length > 0 || papersList.length > 0)) {
      grid.className = 'visiting-cards-container';
      
      const shapes = shapesList;
      const papers = papersList;
      
      const favorites = JSON.parse(localStorage.getItem('kalaa_favorites') || '[]');

      // Hide category sort dropdown/container on visiting cards page
      const contentHeader = document.querySelector('.category-content-header');
      if (contentHeader) {
        // We can hide the sort dropdown completely to clean up the page header as per reference photo
        const sortWrapper = contentHeader.querySelector('.category-sort');
        if (sortWrapper) sortWrapper.style.display = 'none';
      }

      // 1. Shapes Section
      if (shapes.length > 0) {
        const shapesSec = document.createElement('div');
        shapesSec.className = 'visiting-cards-section';
        shapesSec.innerHTML = `
          <h2 class="category-grid-title">Shop by shapes</h2>
          <p class="category-grid-subtitle">Select from various shapes & sizes.</p>
          <div class="visiting-cards-subgrid"></div>
        `;
        const subgrid = shapesSec.querySelector('.visiting-cards-subgrid');
        shapes.forEach(prod => {
          subgrid.appendChild(createPremiumCard(prod, favorites));
        });
        grid.appendChild(shapesSec);
      }

      // 2. Papers & Textures Section
      if (papers.length > 0) {
        const papersSec = document.createElement('div');
        papersSec.className = 'visiting-cards-section';
        papersSec.innerHTML = `
          <h2 class="category-grid-title">Shop by papers & textures</h2>
          <p class="category-grid-subtitle">Most Popular</p>
          <div class="visiting-cards-subgrid"></div>
        `;
        const subgrid = papersSec.querySelector('.visiting-cards-subgrid');
        papers.forEach(prod => {
          subgrid.appendChild(createPremiumCard(prod, favorites));
        });
        grid.appendChild(papersSec);
      }
    } else {
      grid.className = 'products-grid';
      
      // Restore sort display for other categories
      const contentHeader = document.querySelector('.category-content-header');
      if (contentHeader) {
        const sortWrapper = contentHeader.querySelector('.category-sort');
        if (sortWrapper) sortWrapper.style.display = 'flex';
      }

      products.forEach(prod => {
        const card = document.createElement('a');
        card.href = `product.html?id=${prod.id}`;
        card.className = 'product-card';
        card.innerHTML = `
          ${prod.badge ? `<div class="product-badge">${prod.badge}</div>` : ''}
          <div class="product-img-wrapper skeleton">
            <img src="${prod.image}" alt="${prod.name}" loading="lazy" onload="this.parentElement.classList.remove('skeleton')">
          </div>
          <div class="product-info">
            <h3 class="product-name">${prod.name}</h3>
            <div class="product-price">Starting at <span>₹${prod.price}</span></div>
          </div>
        `;
        grid.appendChild(card);
      });
    }
  }

  function createPremiumCard(prod, favorites) {
    const isFavorite = favorites.includes(prod.id);
    const card = document.createElement('div');
    card.className = 'premium-card';
    
    let ratingsHtml = '';
    if (prod.rating) {
      const fullStars = Math.round(prod.rating);
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= fullStars ? 'star-filled' : 'star-empty'}">★</span>`;
      }
      ratingsHtml = `
        <div class="premium-rating-row">
          <div class="stars-display">${stars}</div>
          <span class="premium-rating-val">${prod.rating.toFixed(1)}</span>
          <span class="premium-rating-count">(${prod.ratingCount})</span>
        </div>
      `;
    }

    card.innerHTML = `
      <button class="premium-wishlist-btn ${isFavorite ? 'active' : ''}" aria-label="Toggle Wishlist" data-id="${prod.id}">
        <svg viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
      <a href="product.html?id=${prod.id}" class="premium-card-link">
        ${prod.badge ? `<div class="premium-badge">${prod.badge}</div>` : ''}
        <div class="premium-img-wrapper skeleton">
          <img src="${prod.image}" alt="${prod.name}" loading="lazy" onload="this.parentElement.classList.remove('skeleton')">
        </div>
        <div class="premium-info">
          <h3 class="premium-name">${prod.name}</h3>
          ${prod.deliveryText ? `<div class="premium-delivery">${prod.deliveryText}</div>` : '<div class="premium-delivery-placeholder"></div>'}
          ${ratingsHtml}
          <div class="premium-price-row">
            <div class="premium-price-from">From <span>₹${prod.price.toFixed(2)}</span></div>
            <div class="premium-unit-rate">${prod.subpriceText}</div>
          </div>
        </div>
      </a>
    `;
    return card;
  }
});
