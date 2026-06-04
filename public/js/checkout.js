// Kalaa Print & Pack - Checkout Page Controller

document.addEventListener('DOMContentLoaded', () => {
  if (!window.KalaaCart) return;

  const items = window.KalaaCart.getItems();
  
  // If cart is empty, redirect back to cart (unless we are showing the success screen)
  const successRoot = document.getElementById('checkout-success-root');
  const formRoot = document.getElementById('checkout-form-root');
  
  if (items.length === 0 && (!successRoot || successRoot.style.display === 'none')) {
    window.location.href = 'cart.html';
    return;
  }

  // Cache elements
  const previewContainer = document.getElementById('checkout-items-preview');
  const subtotalEl = document.getElementById('chk-subtotal');
  const discountRow = document.getElementById('chk-discount-row');
  const discountEl = document.getElementById('chk-discount');
  const gstEl = document.getElementById('chk-gst');
  const shippingEl = document.getElementById('chk-shipping');
  const totalEl = document.getElementById('chk-total');

  const deliveryStd = document.getElementById('delivery-std');
  const deliveryExp = document.getElementById('delivery-exp');
  const labelStdCost = document.getElementById('label-std-cost');

  const paymentTabs = document.querySelectorAll('.payment-tab-btn');
  const paymentContents = document.querySelectorAll('.payment-tab-content');

  const mainForm = document.getElementById('checkout-main-form');
  const submitBtn = document.getElementById('btn-place-order');

  let activePaymentMethod = 'upi'; // upi, card, netbanking
  let subtotal = window.KalaaCart.getSubtotal();
  let discount = 0;
  let activeCoupon = sessionStorage.getItem('kalaa_coupon') || '';

  if (activeCoupon === 'SAVE5' && subtotal >= 2000) {
    discount = Math.round(subtotal * 0.05);
  }

  // --- INITIAL RENDERS ---
  renderItemsPreview();
  calculatePricing();

  // --- ACTIONS & LISTENERS ---

  // Delivery Method change
  if (deliveryStd && deliveryExp) {
    deliveryStd.addEventListener('change', calculatePricing);
    deliveryExp.addEventListener('change', calculatePricing);
  }

  // Payment tab triggers
  paymentTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      paymentTabs.forEach(t => t.classList.remove('active'));
      paymentContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.target;
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');

      // Update active payment method flag
      if (targetId === 'pay-upi') activePaymentMethod = 'upi';
      else if (targetId === 'pay-card') activePaymentMethod = 'card';
      else if (targetId === 'pay-net') activePaymentMethod = 'netbanking';
    });
  });

  // Render items brief list
  function renderItemsPreview() {
    if (!previewContainer) return;
    previewContainer.innerHTML = '';
    
    items.forEach(item => {
      const div = document.createElement('div');
      div.style.display = 'flex';
      div.style.justifyContent = 'space-between';
      div.style.fontSize = '13px';
      div.style.marginBottom = '6px';
      div.innerHTML = `
        <span style="color:var(--text-dark);">${item.name} <small style="color:var(--text-muted);">x${item.qty}</small></span>
        <span style="font-weight:500;">₹${(item.unitPrice * item.qty).toLocaleString('en-IN')}</span>
      `;
      previewContainer.appendChild(div);
    });
  }

  // Calculate pricing values
  function calculatePricing() {
    const netAmount = subtotal - discount;
    const gst = Math.round(netAmount * 0.18);
    
    // Standard shipping standard rules: FREE above ₹500, else ₹50
    const stdShippingCost = netAmount > 500 ? 0 : 50;
    if (labelStdCost) {
      labelStdCost.textContent = stdShippingCost === 0 ? 'FREE' : `+₹${stdShippingCost}`;
    }

    let shippingCost = stdShippingCost;
    if (deliveryExp && deliveryExp.checked) {
      shippingCost = 150; // Express flat surcharge
    }

    const grandTotal = netAmount + gst + shippingCost;

    // Render values
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (discountEl && discount > 0) {
      discountEl.textContent = `-₹${discount.toLocaleString('en-IN')}`;
      if (discountRow) discountRow.style.display = 'flex';
    } else {
      if (discountRow) discountRow.style.display = 'none';
    }
    if (gstEl) gstEl.textContent = `₹${gst.toLocaleString('en-IN')}`;
    if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'FREE' : `₹${shippingCost}`;
    if (totalEl) totalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    // Update main order pricing on the form side too
    const chkSubtotal = document.getElementById('chk-subtotal');
    const chkDiscountRow = document.getElementById('chk-discount-row');
    const chkDiscount = document.getElementById('chk-discount');
    const chkGst = document.getElementById('chk-gst');
    const chkShipping = document.getElementById('chk-shipping');
    const chkTotal = document.getElementById('chk-total');

    if (chkSubtotal) chkSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (chkDiscount && discount > 0) {
      chkDiscount.textContent = `-₹${discount.toLocaleString('en-IN')}`;
      if (chkDiscountRow) chkDiscountRow.style.display = 'flex';
    } else {
      if (chkDiscountRow) chkDiscountRow.style.display = 'none';
    }
    if (chkGst) chkGst.textContent = `₹${gst.toLocaleString('en-IN')}`;
    if (chkShipping) chkShipping.textContent = shippingCost === 0 ? 'FREE' : `₹${shippingCost}`;
    if (chkTotal) chkTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  }

  // Form submission handler
  if (mainForm) {
    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Custom validation for payment details
      if (activePaymentMethod === 'upi') {
        const upiId = document.getElementById('pay-upi-id').value.trim();
        if (!upiId || !upiId.includes('@')) {
          alert('Please enter a valid UPI ID (e.g., name@upi).');
          return;
        }
      } else if (activePaymentMethod === 'card') {
        const cardNum = document.getElementById('pay-card-num').value.replace(/\s+/g, '');
        const cardExp = document.getElementById('pay-card-exp').value.trim();
        const cardCvv = document.getElementById('pay-card-cvv').value.trim();

        if (cardNum.length < 15 || isNaN(cardNum)) {
          alert('Please enter a valid 16-digit card number.');
          return;
        }
        if (!cardExp || !cardExp.includes('/')) {
          alert('Please enter expiry date in MM/YY format.');
          return;
        }
        if (cardCvv.length < 3 || isNaN(cardCvv)) {
          alert('Please enter a valid 3-digit CVV.');
          return;
        }
      } else if (activePaymentMethod === 'netbanking') {
        const bank = document.getElementById('pay-bank-select').value;
        if (!bank) {
          alert('Please select your Net Banking bank.');
          return;
        }
      }

      // Read shipping details
      const name = document.getElementById('ship-name').value.trim();
      const addr1 = document.getElementById('ship-address1').value.trim();
      const addr2 = document.getElementById('ship-address2').value.trim();
      const city = document.getElementById('ship-city').value.trim();
      const state = document.getElementById('ship-state').value;
      const pin = document.getElementById('ship-pin').value.trim();
      
      const fullAddress = `${addr1}${addr2 ? ', ' + addr2 : ''}, ${city}, ${state} - ${pin}`;

      // Calculate delivery date
      const isExpress = deliveryExp && deliveryExp.checked;
      const daysToAdd = isExpress ? 3 : 5;
      const delivDate = new Date();
      delivDate.setDate(delivDate.getDate() + daysToAdd);
      const formattedDelivDate = delivDate.toLocaleDateString('en-IN', {
        weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'
      });

      // Calculate final total
      const totalText = document.getElementById('chk-total').textContent;

      // Compile Order Object
      const orderNum = `KL-${Math.floor(10000000 + Math.random() * 90000000)}-IN`;
      const orderObj = {
        id: orderNum,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: [...items],
        total: totalText,
        address: fullAddress,
        deliveryDate: formattedDelivDate,
        status: 'Order Placed & Processing'
      };

      // Save Order to History
      try {
        const savedOrders = localStorage.getItem('kalaa_orders');
        const ordersList = savedOrders ? JSON.parse(savedOrders) : [];
        ordersList.unshift(orderObj); // Add newest order first
        localStorage.setItem('kalaa_orders', JSON.stringify(ordersList));
      } catch (err) {
        console.error('Failed to save order history', err);
      }

      // Clear Shopping Cart
      window.KalaaCart.clearCart();
      sessionStorage.removeItem('kalaa_coupon');

      // Transition Screen view
      if (formRoot) formRoot.style.display = 'none';
      if (successRoot) successRoot.style.display = 'block';

      // Update success text details
      const succNum = document.getElementById('success-order-num');
      const succAddr = document.getElementById('success-address');
      const succDate = document.getElementById('success-delivery-date');

      if (succNum) succNum.textContent = orderNum;
      if (succAddr) succAddr.textContent = `${name}, ${fullAddress}`;
      if (succDate) succDate.textContent = formattedDelivDate;

      // Scroll to top
      window.scrollTo(0, 0);
    });
  }
});
