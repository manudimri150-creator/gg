// Kalaa Print & Pack - Shopping Cart Page Controller

document.addEventListener('DOMContentLoaded', () => {
  if (!window.KalaaCart) return;

  const itemsContainer = document.getElementById('cart-items-container');
  const cartContentRoot = document.getElementById('cart-content-root');
  const cartEmptyRoot = document.getElementById('cart-empty-root');

  const subtotalEl = document.getElementById('summary-subtotal');
  const discountRow = document.getElementById('summary-discount-row');
  const discountEl = document.getElementById('summary-discount');
  const gstEl = document.getElementById('summary-gst');
  const shippingEl = document.getElementById('summary-shipping');
  const totalEl = document.getElementById('summary-total');

  const promoInput = document.getElementById('promo-input');
  const promoApplyBtn = document.getElementById('btn-apply-promo');
  const promoMsg = document.getElementById('promo-status-msg');

  const checkoutBtn = document.getElementById('btn-checkout');

  // Load saved coupon if any
  let activeCoupon = sessionStorage.getItem('kalaa_coupon') || '';
  if (activeCoupon && promoInput) {
    promoInput.value = activeCoupon;
  }

  // Initial Render
  renderCart();

  // Listeners
  if (promoApplyBtn) {
    promoApplyBtn.addEventListener('click', applyPromoCode);
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
  }

  // Main Render Function
  function renderCart() {
    const items = window.KalaaCart.getItems();
    
    if (items.length === 0) {
      if (cartContentRoot) cartContentRoot.style.display = 'none';
      if (cartEmptyRoot) cartEmptyRoot.style.display = 'block';
      return;
    }

    if (cartContentRoot) cartContentRoot.style.display = 'grid';
    if (cartEmptyRoot) cartEmptyRoot.style.display = 'none';

    if (itemsContainer) {
      itemsContainer.innerHTML = '';
      
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'cart-item-card';

        // Format selected options list
        let optionsHtml = '';
        if (item.options && Object.keys(item.options).length > 0) {
          optionsHtml = '<div style="margin-top: 4px; font-size:12px; color: var(--text-muted);">';
          Object.keys(item.options).forEach(key => {
            optionsHtml += `<span><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${item.options[key].label}</span><br>`;
          });
          optionsHtml += '</div>';
        }

        const totalItemCost = item.unitPrice * item.qty;

        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumbnail">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            ${optionsHtml}
          </div>
          <div class="qty-selector" style="margin-bottom:0;">
            <button class="qty-btn dec-btn" data-id="${item.id}" aria-label="Decrease quantity">-</button>
            <input type="number" class="qty-input item-qty-input" data-id="${item.id}" value="${item.qty}" min="1" aria-label="Quantity for ${item.name}">
            <button class="qty-btn inc-btn" data-id="${item.id}" aria-label="Increase quantity">+</button>
          </div>
          <div class="cart-item-price">₹${totalItemCost.toLocaleString('en-IN')}</div>
          <button class="cart-item-remove remove-btn" data-id="${item.id}" aria-label="Remove ${item.name} from cart">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        `;

        itemsContainer.appendChild(card);
      });

      // Bind quantity adjustment buttons
      document.querySelectorAll('.dec-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = btn.dataset.id;
          const currentItem = items.find(i => i.id === id);
          if (currentItem) {
            window.KalaaCart.updateQuantity(id, currentItem.qty - 1);
            renderCart();
          }
        });
      });

      document.querySelectorAll('.inc-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = btn.dataset.id;
          const currentItem = items.find(i => i.id === id);
          if (currentItem) {
            window.KalaaCart.updateQuantity(id, currentItem.qty + 1);
            renderCart();
          }
        });
      });

      document.querySelectorAll('.item-qty-input').forEach(input => {
        input.addEventListener('change', (e) => {
          const id = input.dataset.id;
          const val = Math.max(1, Number(input.value));
          window.KalaaCart.updateQuantity(id, val);
          renderCart();
        });
      });

      // Bind remove buttons
      document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          window.KalaaCart.removeItem(id);
          renderCart();
        });
      });
    }

    calculateSummary();
  }

  // Calculate pricing summaries
  function calculateSummary() {
    const subtotal = window.KalaaCart.getSubtotal();
    let discount = 0;

    // Validate active coupon
    if (activeCoupon === 'SAVE5') {
      if (subtotal >= 2000) {
        discount = Math.round(subtotal * 0.05);
        if (discountRow) discountRow.style.display = 'flex';
        if (discountEl) discountEl.textContent = `-₹${discount.toLocaleString('en-IN')}`;
        if (promoMsg) {
          promoMsg.textContent = 'Promo Code SAVE5 active (5% OFF applied).';
          promoMsg.className = 'promo-status success';
        }
      } else {
        // Automatically disable if order amount falls below min threshold
        activeCoupon = '';
        sessionStorage.removeItem('kalaa_coupon');
        if (discountRow) discountRow.style.display = 'none';
        if (promoMsg) {
          promoMsg.textContent = 'SAVE5 code requires a minimum order of ₹2,000.';
          promoMsg.className = 'promo-status error';
        }
      }
    } else {
      if (discountRow) discountRow.style.display = 'none';
    }

    const netAmount = subtotal - discount;
    
    // Indian Goods and Services Tax (GST) is 18% on printed goods
    const gst = Math.round(netAmount * 0.18);

    // Free delivery on orders above ₹500
    const shipping = netAmount > 500 || netAmount === 0 ? 0 : 50;

    const grandTotal = netAmount + gst + shipping;

    // Write values to elements
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (gstEl) gstEl.textContent = `₹${gst.toLocaleString('en-IN')}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    if (totalEl) totalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  }

  // Apply Coupon Handler
  function applyPromoCode() {
    const code = promoInput.value.trim().toUpperCase();
    const subtotal = window.KalaaCart.getSubtotal();

    if (!code) {
      activeCoupon = '';
      sessionStorage.removeItem('kalaa_coupon');
      promoMsg.style.display = 'none';
      renderCart();
      return;
    }

    if (code === 'SAVE5') {
      if (subtotal >= 2000) {
        activeCoupon = 'SAVE5';
        sessionStorage.setItem('kalaa_coupon', 'SAVE5');
        promoMsg.textContent = 'Promo Code SAVE5 applied successfully!';
        promoMsg.className = 'promo-status success';
      } else {
        activeCoupon = '';
        sessionStorage.removeItem('kalaa_coupon');
        promoMsg.textContent = 'SAVE5 requires a minimum order of ₹2,000.';
        promoMsg.className = 'promo-status error';
      }
    } else {
      activeCoupon = '';
      sessionStorage.removeItem('kalaa_coupon');
      promoMsg.textContent = 'Invalid promo code. Try SAVE5.';
      promoMsg.className = 'promo-status error';
    }

    renderCart();
  }
});
