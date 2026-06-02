// Kalaa Print & Pack - My Account Page Controller

document.addEventListener('DOMContentLoaded', () => {
  initAccountTabs();
  renderOrderHistory();
  renderAddresses();
});

// --- ACCORDION / TAB SWITCHING ---
function initAccountTabs() {
  const tabs = document.querySelectorAll('.account-nav-btn');
  const panes = document.querySelectorAll('.account-content-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const paneId = tab.dataset.pane;
      const targetPane = document.getElementById(paneId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

// --- RENDER PLACED ORDERS FROM LOCALSTORAGE ---
function renderOrderHistory() {
  const container = document.getElementById('account-orders-list');
  if (!container) return;

  let orders = [];
  try {
    const saved = localStorage.getItem('kalaa_orders');
    orders = saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Failed to read orders', e);
  }

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:var(--spacing-xxl) 0; color:var(--text-muted);">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:var(--spacing-sm);">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <h3>No orders found</h3>
        <p style="font-size:13px; margin-top:4px; margin-bottom:var(--spacing-md);">You haven't placed any printing orders yet.</p>
        <a href="category.html" class="btn btn-outline" style="font-size:13px; padding:6px 16px;">Browse Products</a>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  orders.forEach(order => {
    const card = document.createElement('div');
    card.className = 'order-card';

    // Build items rows
    let itemsHtml = '';
    order.items.forEach(item => {
      // Options string formatting
      let optsString = '';
      if (item.options && Object.keys(item.options).length > 0) {
        optsString = '<br><small style="color:var(--text-muted);">';
        Object.keys(item.options).forEach(k => {
          optsString += `<strong>${k}:</strong> ${item.options[k].label} | `;
        });
        optsString = optsString.slice(0, -3); // trim trailing slash
        optsString += '</small>';
      }

      itemsHtml += `
        <div class="order-item-row" style="border-bottom:1px solid rgba(0,0,0,0.03); padding-bottom:8px; margin-bottom:8px;">
          <div style="display:flex; align-items:center; gap:var(--spacing-sm);">
            <img src="${item.image}" alt="${item.name}" style="width:40px; height:40px; object-fit:cover; border-radius:var(--radius-sm);">
            <div>
              <span style="font-weight:500; font-size:13px;">${item.name}</span>
              <span style="color:var(--text-muted); font-size:12px;">x${item.qty}</span>
              ${optsString}
            </div>
          </div>
          <span style="font-weight:600; font-size:13px;">₹${(item.unitPrice * item.qty).toLocaleString('en-IN')}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="order-card-header">
        <div>
          <span style="color:var(--text-muted); text-transform:uppercase; font-weight:700; font-size:11px;">Order Number</span><br>
          <strong>${order.id}</strong>
        </div>
        <div>
          <span style="color:var(--text-muted); text-transform:uppercase; font-weight:700; font-size:11px;">Placed On</span><br>
          <span>${order.date}</span>
        </div>
        <div>
          <span style="color:var(--text-muted); text-transform:uppercase; font-weight:700; font-size:11px;">Status</span><br>
          <span style="color:var(--primary); font-weight:700;">${order.status}</span>
        </div>
        <div>
          <span style="color:var(--text-muted); text-transform:uppercase; font-weight:700; font-size:11px;">Total Price</span><br>
          <strong>${order.total}</strong>
        </div>
      </div>
      <div class="order-card-body">
        ${itemsHtml}
        <div style="margin-top:var(--spacing-md); display:flex; justify-content:space-between; flex-wrap:wrap; gap:var(--spacing-sm); align-items:center; font-size:13px;">
          <div>
            <span style="color:var(--text-muted);">Delivery Address:</span>
            <span style="font-weight:500;">${order.address}</span>
          </div>
          <div>
            <span style="color:var(--text-muted);">Expected Delivery:</span>
            <strong style="color:var(--success);">${order.deliveryDate}</strong>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// --- RENDER SAVED ADDRESSES ---
function renderAddresses() {
  const container = document.getElementById('account-addresses-container');
  if (!container) return;

  let orders = [];
  try {
    const saved = localStorage.getItem('kalaa_orders');
    orders = saved ? JSON.parse(saved) : [];
  } catch (e) {}

  container.innerHTML = '';

  // Render mock primary billing address
  const billingDiv = document.createElement('div');
  billingDiv.style.border = '1px solid var(--border-light)';
  billingDiv.style.borderRadius = 'var(--radius-md)';
  billingDiv.style.padding = 'var(--spacing-md)';
  billingDiv.innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom:var(--spacing-xs);">
      <strong style="font-size:14px; text-transform:uppercase; color:var(--primary);">Primary Billing & Office Address</strong>
      <span style="font-size:11px; font-weight:700; background-color:var(--accent-light); color:var(--primary); padding:2px 6px; border-radius:var(--radius-sm);">DEFAULT</span>
    </div>
    <div style="font-size:13px; line-height:1.5; color:var(--text-dark);">
      <strong>Rajesh Kumar</strong><br>
      Kumar Tech Solutions Pvt Ltd<br>
      Flat 401, Apex Heights, Sector 15<br>
      Navi Mumbai, Maharashtra - 400703<br>
      Phone: 9876543210
    </div>
  `;
  container.appendChild(billingDiv);

  // If there's an address from checkout order, show it as delivery address
  if (orders.length > 0) {
    const deliveryDiv = document.createElement('div');
    deliveryDiv.style.border = '1px solid var(--border-light)';
    deliveryDiv.style.borderRadius = 'var(--radius-md)';
    deliveryDiv.style.padding = 'var(--spacing-md)';
    deliveryDiv.innerHTML = `
      <strong style="font-size:14px; display:block; text-transform:uppercase; color:var(--primary); margin-bottom:var(--spacing-xs);">Recent Delivery Address</strong>
      <div style="font-size:13px; line-height:1.5; color:var(--text-dark);">
        <strong>Rajesh Kumar</strong><br>
        ${orders[0].address}
      </div>
    `;
    container.appendChild(deliveryDiv);
  }
}
