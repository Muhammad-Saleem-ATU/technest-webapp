// ============================================================
//  js/pages/basket.js
//  Page script for basket.html
//  Displays all basket items, handles quantity changes and
//  item removal, and shows the running total.
//
//  Author : Muhammad Saleem
//  Student: L00196822
//  Week 7 - Basket CRUD and localStorage Integration
// ============================================================

// One Basket instance used throughout this page

// ============================================================
//  js/pages/basket.js
//  FIXED VERSION - Stable, ES6, correct event handling
// ============================================================

let basket;

document.addEventListener('DOMContentLoaded', () => {
    basket = new Basket();

    renderBasket();
    updateBasketBadge();
    setupBasketEvents();
});


// ── Render basket ─────────────────────────────────────────────

const renderBasket = () => {
    const container = document.getElementById('basket-items');
    if (!container) return;

    if (basket.isEmpty()) {
        showEmptyBasket();
        updateTotals();
        return;
    }

    const html = basket.items.map(item => buildItemRow(item)).join('');
    container.innerHTML = html;

    updateTotals();
};


// ── Build item row ────────────────────────────────────────────

const buildItemRow = (item) => `
    <div class="basket-item" data-id="${item.id}">
        <div class="basket-item-img">
            <img src="${item.image}" alt="${item.name}">
        </div>

        <div class="basket-item-info">
            <h5 class="basket-item-name">${item.name}</h5>
            <p class="basket-item-price">€${item.price.toFixed(2)} each</p>
        </div>

        <div class="basket-item-qty">
            <button class="qty-btn qty-decrease" data-id="${item.id}">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn qty-increase" data-id="${item.id}">+</button>
        </div>

        <div class="basket-item-subtotal">
            €${(item.price * item.qty).toFixed(2)}
        </div>

        <div class="basket-item-remove">
            <button class="remove-btn" data-id="${item.id}">&times;</button>
        </div>
    </div>
`;


// ── Empty basket ──────────────────────────────────────────────

const showEmptyBasket = () => {
    const container = document.getElementById('basket-items');
    if (!container) return;

    container.innerHTML = `
        <div class="empty-state" id="empty-basket-message">
            <p>Your basket is empty.</p>
            <a href="products.html" class="btn btn-outline-orange">Continue Shopping</a>
        </div>
    `;
};


// ── Event handling (FINAL FIX) ─────────────────────────────────

const setupBasketEvents = () => {
    const container = document.getElementById('basket-items');
    if (!container) return;

    container.addEventListener('click', (e) => {

        const btn = e.target.closest('button');
        if (!btn) return;

        const id = String(btn.dataset.id); 

        //  Increase
        if (btn.classList.contains('qty-increase')) {
            const item = basket.items.find(i => String(i.id) === id);
            if (item) {
                basket.updateQty(id, item.qty + 1);
            }
        }

        //  Decrease
        if (btn.classList.contains('qty-decrease')) {
            const item = basket.items.find(i => String(i.id) === id);
            if (item) {
                basket.updateQty(id, item.qty - 1);
            }
        }

        //  Remove
        if (btn.classList.contains('remove-btn')) {
            basket.removeItem(id);
        }

        renderBasket();
        updateBasketBadge();
    });
};


// ── Totals ────────────────────────────────────────────────────

const updateTotals = () => {
    const total    = basket.getTotal();
    const subtotal = document.getElementById('basket-subtotal');
    const totalEl  = document.getElementById('basket-total');

    if (subtotal) subtotal.textContent = '€' + total.toFixed(2);
    if (totalEl)  totalEl.textContent  = '€' + total.toFixed(2);
};


// ── Basket badge ──────────────────────────────────────────────

const updateBasketBadge = () => {
    const count       = basket.getCount();
    const badge       = document.getElementById('basket-count');
    const badgeMobile = document.getElementById('basket-count-mobile');

    if (badge)       badge.textContent       = count;
    if (badgeMobile) badgeMobile.textContent = count;
};