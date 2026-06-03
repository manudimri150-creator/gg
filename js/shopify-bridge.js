// ============================================================
// Kalaa Print & Pack — Shopify Storefront Bridge
// Connects the UI shell to Shopify Web Components
// Store: 9v7pza-vy.myshopify.com
// ============================================================

(function () {
  'use strict';

  // ----- SHOPIFY CART MODAL OPENER -----
  // Intercept all .cart-link clicks → open shopify-cart modal instead of navigating
  document.addEventListener('DOMContentLoaded', () => {
    const cartLinks = document.querySelectorAll('.cart-link');
    const shopifyCart = document.getElementById('main-cart');

    cartLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (shopifyCart) {
          e.preventDefault();
          shopifyCart.showModal();
        }
      });
    });

    // ----- CART BADGE SYNC VIA SHOPIFY EVENTS -----
    // Listen for cart updates from Shopify Web Components
    if (shopifyCart) {
      shopifyCart.addEventListener('shopify-cart-update', updateCartBadge);
      shopifyCart.addEventListener('shopify-cart-line-add', updateCartBadge);
      shopifyCart.addEventListener('shopify-cart-line-remove', updateCartBadge);
    }

    // ----- PRODUCT PAGE: Dynamic Handle from URL -----
    initProductPage();

    // ----- CATEGORY PAGE: Dynamic Collection from URL -----
    initCategoryPage();
  });

  // ---- UPDATE CART BADGE ----
  function updateCartBadge(event) {
    const cart = event?.detail?.cart || event?.target;
    let totalItems = 0;

    if (cart && cart.lines) {
      cart.lines.forEach(line => {
        totalItems += line.quantity || 0;
      });
    }

    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });
  }

  // ---- PRODUCT PAGE INIT ----
  function initProductPage() {
    const productContextEl = document.getElementById('shopify-product-context');
    if (!productContextEl) return;

    const params = new URLSearchParams(window.location.search);
    // Support both ?handle= (Shopify) and ?id= (legacy KalaaData)
    const handle = params.get('handle') || params.get('id');

    if (handle) {
      // Set the handle attribute — this triggers Shopify to load the product
      productContextEl.setAttribute('handle', handle);
      // Remove wait-for-update so it loads immediately with the handle
      productContextEl.removeAttribute('wait-for-update');
    } else {
      // No product specified — show a not found message
      productContextEl.innerHTML = `
        <div style="text-align:center; padding: 3rem; color: var(--text-muted);">
          <h2>Product Not Found</h2>
          <p>Please browse our <a href="category.html" style="color:var(--primary);">product catalog</a>.</p>
        </div>
      `;
    }
  }

  // ---- CATEGORY PAGE INIT ----
  function initCategoryPage() {
    const collectionContextEl = document.getElementById('shopify-collection-context');
    if (!collectionContextEl) return;

    const params = new URLSearchParams(window.location.search);
    const collection = params.get('collection') || params.get('category');

    if (collection) {
      collectionContextEl.setAttribute('handle', collection);
    }
  }

  // ---- GLOBAL: ADD TO CART HELPER ----
  // Called by product card buttons: window.KalaaShopify.addToCart(event)
  window.KalaaShopify = {
    cart: null,

    getCart() {
      if (!this.cart) {
        this.cart = document.getElementById('main-cart');
      }
      return this.cart;
    },

    addToCart(event) {
      const cart = this.getCart();
      if (cart) {
        cart.addLine(event).showModal();
      }
    },

    openCart() {
      const cart = this.getCart();
      if (cart) {
        cart.showModal();
      }
    },

    buyNow(event) {
      const store = document.querySelector('shopify-store');
      if (store) {
        store.buyNow(event);
      }
    }
  };

})();
