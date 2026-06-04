// Kalaa Print & Pack - Product Details Page Controller

document.addEventListener('DOMContentLoaded', () => {
  if (!window.KalaaData) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId) {
    window.location.href = 'index.html';
    return;
  }

  const product = window.KalaaData.getProductById(productId);
  if (!product) {
    window.location.href = 'index.html';
    return;
  }

  // Render product general info
  document.title = `${product.name} | Kalaa Print & Pack`;
  
  const nameEl = document.getElementById('detail-name');
  if (nameEl) nameEl.textContent = product.name;

  const descEl = document.getElementById('detail-description');
  if (descEl) descEl.textContent = product.description;

  const fullDescEl = document.getElementById('full-description');
  if (fullDescEl) fullDescEl.textContent = product.description;

  const mainImgEl = document.getElementById('detail-main-img');
  if (mainImgEl) mainImgEl.src = product.image;

  // Render breadcrumbs
  const breadcrumbsEl = document.getElementById('detail-breadcrumbs');
  if (breadcrumbsEl) {
    const cat = window.KalaaData.CATEGORIES.find(c => c.id === product.category);
    const catName = cat ? cat.name : 'Category';
    const catLink = cat ? `category.html?category=${cat.id}` : 'category.html';
    breadcrumbsEl.innerHTML = `<a href="index.html">Home</a> &gt; <a href="${catLink}">${catName}</a> &gt; <span>${product.name}</span>`;
  }

  // Render Image Thumbnails (3 variants)
  const thumbsContainer = document.getElementById('detail-thumbnails');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = '';
    
    // We create 3 thumbnail options: primary image, and two close-ups/alternatives
    const imageVariants = [
      product.image,
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300", // abstract graphics close-up
      "https://images.unsplash.com/photo-1586075010923-2dd45e9b2d4f?q=80&w=300"  // corporate desk stationery
    ];

    imageVariants.forEach((imgSrc, idx) => {
      const btn = document.createElement('button');
      btn.className = `thumb-btn ${idx === 0 ? 'active' : ''}`;
      btn.innerHTML = `<img src="${imgSrc}" alt="Thumbnail View ${idx + 1}">`;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (mainImgEl) mainImgEl.src = imgSrc;
      });
      thumbsContainer.appendChild(btn);
    });
  }

  // Render dynamic configuration dropdowns
  const optionsContainer = document.getElementById('dynamic-options-container');
  if (optionsContainer && product.options) {
    optionsContainer.innerHTML = '';

    Object.keys(product.options).forEach(optKey => {
      const optionsList = product.options[optKey];
      if (optionsList && optionsList.length > 0) {
        const group = document.createElement('div');
        group.className = 'detail-option-group';
        
        // Capitalize key for label
        const prettyKey = optKey.charAt(0).toUpperCase() + optKey.slice(1);
        
        let selectHtml = `
          <label class="detail-option-label" for="select-opt-${optKey}">Select ${prettyKey}:</label>
          <select id="select-opt-${optKey}" class="config-selector" data-option="${optKey}">
        `;

        optionsList.forEach(opt => {
          let labelText = opt.label;
          if (opt.extraCost > 0) labelText += ` (+₹${opt.extraCost})`;
          if (opt.priceMultiplier > 1.0) labelText += ` (Bulk discount)`;
          selectHtml += `<option value="${opt.value}">${labelText}</option>`;
        });

        selectHtml += `</select>`;
        group.innerHTML = selectHtml;
        optionsContainer.appendChild(group);
      }
    });

    // Add change listeners
    document.querySelectorAll('.config-selector').forEach(sel => {
      sel.addEventListener('change', calculatePrice);
    });
  }

  // Quantity input actions
  const qtyInput = document.getElementById('qty-input');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');

  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      const val = Math.max(1, Number(qtyInput.value) - 1);
      qtyInput.value = val;
      calculatePrice();
    });
    
    qtyPlus.addEventListener('click', () => {
      const val = Number(qtyInput.value) + 1;
      qtyInput.value = val;
      calculatePrice();
    });

    qtyInput.addEventListener('input', () => {
      if (Number(qtyInput.value) < 1) qtyInput.value = 1;
      calculatePrice();
    });
  }

  // Initial price calculation
  calculatePrice();

  // Price Calculation Logic
  function calculatePrice() {
    let basePrice = product.price;
    let multiplier = 1.0;
    
    // Read selections
    document.querySelectorAll('.config-selector').forEach(sel => {
      const optKey = sel.dataset.option;
      const optVal = sel.value;
      const optsArray = product.options[optKey];
      const selectedObj = optsArray.find(o => String(o.value) === String(optVal));

      if (selectedObj) {
        if (selectedObj.extraCost) basePrice += selectedObj.extraCost;
        if (selectedObj.priceMultiplier) multiplier *= selectedObj.priceMultiplier;
      }
    });

    const qty = qtyInput ? Number(qtyInput.value) : 1;
    const finalPrice = Math.round(basePrice * multiplier * qty);

    const priceValEl = document.getElementById('detail-price');
    if (priceValEl) priceValEl.textContent = `₹${finalPrice.toLocaleString('en-IN')}`;
  }

  // Add to Cart Execution
  const cartBtn = document.getElementById('btn-add-to-cart');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      const qty = qtyInput ? Number(qtyInput.value) : 1;
      const selectedOptions = {};

      document.querySelectorAll('.config-selector').forEach(sel => {
        const optKey = sel.dataset.option;
        const optVal = sel.value;
        const optsArray = product.options[optKey];
        const selectedObj = optsArray.find(o => String(o.value) === String(optVal));
        if (selectedObj) {
          selectedOptions[optKey] = {
            label: selectedObj.label,
            value: selectedObj.value
          };
        }
      });

      if (window.KalaaCart) {
        window.KalaaCart.addItem(product.id, qty, selectedOptions);
        
        // Show premium feedback alert
        const alertBox = document.createElement('div');
        alertBox.style.position = 'fixed';
        alertBox.style.bottom = '80px';
        alertBox.style.right = '20px';
        alertBox.style.backgroundColor = 'var(--primary)';
        alertBox.style.color = '#fff';
        alertBox.style.padding = '12px 24px';
        alertBox.style.borderRadius = 'var(--radius-md)';
        alertBox.style.boxShadow = 'var(--shadow-lg)';
        alertBox.style.zIndex = '1000';
        alertBox.style.fontFamily = 'var(--font-headings)';
        alertBox.style.fontWeight = '600';
        alertBox.style.fontSize = '14px';
        alertBox.style.transform = 'translateY(10px)';
        alertBox.style.opacity = '0';
        alertBox.style.transition = 'all 0.3s ease';
        alertBox.textContent = `🎉 Added ${qty}x ${product.name} to Cart!`;

        document.body.appendChild(alertBox);

        setTimeout(() => {
          alertBox.style.transform = 'translateY(0)';
          alertBox.style.opacity = '1';
        }, 100);

        setTimeout(() => {
          alertBox.style.transform = 'translateY(10px)';
          alertBox.style.opacity = '0';
          setTimeout(() => alertBox.remove(), 300);
        }, 3000);
      }
    });
  }

  // Specifications table rendering
  const specsTableBody = document.getElementById('specs-table-body');
  if (specsTableBody && product.specifications) {
    specsTableBody.innerHTML = '';
    Object.keys(product.specifications).forEach(specKey => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${specKey}</td>
        <td>${product.specifications[specKey]}</td>
      `;
      specsTableBody.appendChild(tr);
    });
  }

  // Tabs toggle listeners
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.target;
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');
    });
  });
});
