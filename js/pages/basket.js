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
let basket;

document.addEventListener('DOMContentLoaded', function () {

    basket = new Basket();

    renderBasket();
    updateBasketBadge();

});


// ── Render basket ─────────────────────────────────────────────
// Builds the full basket page content. Shows the empty state
// message if there are no items, otherwise shows each item
// row and updates the totals.

function renderBasket() {

    const container = document.getElementById('basket-items');
    if (!container) return;

    if (basket.isEmpty()) {
        showEmptyBasket();
        updateTotals();
        return;
    }

    let html = '';
    basket.items.forEach(function (item) {
        html += buildItemRow(item);
    });

    container.innerHTML = html;

    // Hide the empty basket message
    const emptyMsg = document.getElementById('empty-basket-message');
    if (emptyMsg) emptyMsg.style.display = 'none';

    setupQuantityControls();
    setupRemoveButtons();
    updateTotals();
}


// ── Build item row ────────────────────────────────────────────
// Returns the HTML string for one basket item row.

function buildItemRow(item) {
    return `
        <div class="basket-item" data-id="${item.id}">
            <div class="basket-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="basket-item-info">
                <h5 class="basket-item-name">${item.name}</h5>
                <p class="basket-item-price">&#8364;${item.price.toFixed(2)} each</p>
            </div>
            <div class="basket-item-qty">
                <button class="qty-btn qty-decrease" data-id="${item.id}">&#8722;</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn qty-increase" data-id="${item.id}">&#43;</button>
            </div>
            <div class="basket-item-subtotal">
                &#8364;${(item.price * item.qty).toFixed(2)}
            </div>
            <div class="basket-item-remove">
                <button class="remove-btn" data-id="${item.id}">&times;</button>
            </div>
        </div>
    `;
}


// ── Show empty basket ─────────────────────────────────────────

function showEmptyBasket() {
    const container = document.getElementById('basket-items');
    if (!container) return;

    container.innerHTML = `
        <div class="empty-state" id="empty-basket-message">
            <p>Your basket is empty.</p>
            <a href="products.html" class="btn btn-outline-orange">Continue Shopping</a>
        </div>
    `;
}


// ── Quantity controls ─────────────────────────────────────────
// Attaches click listeners to all + and - buttons.

function setupQuantityControls() {

    document.querySelectorAll('.qty-increase').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const id   = btn.dataset.id;
            const item = basket.items.find(function (i) { return i.id === id; });
            if (item) {
                basket.updateQty(id, item.qty + 1);
                renderBasket();
                updateBasketBadge();
            }
        });
    });

    document.querySelectorAll('.qty-decrease').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const id   = btn.dataset.id;
            const item = basket.items.find(function (i) { return i.id === id; });
            if (item) {
                basket.updateQty(id, item.qty - 1);
                renderBasket();
                updateBasketBadge();
            }
        });
    });
}


// ── Remove buttons ────────────────────────────────────────────

function setupRemoveButtons() {
    document.querySelectorAll('.remove-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            basket.removeItem(btn.dataset.id);
            renderBasket();
            updateBasketBadge();
        });
    });
}


// ── Update totals ─────────────────────────────────────────────
// Updates the subtotal and total amounts in the order summary.

function updateTotals() {
    const total    = basket.getTotal();
    const subtotal = document.getElementById('basket-subtotal');
    const totalEl  = document.getElementById('basket-total');

    if (subtotal) subtotal.textContent = '\u20AC' + total.toFixed(2);
    if (totalEl)  totalEl.textContent  = '\u20AC' + total.toFixed(2);
}


// ── Basket badge ──────────────────────────────────────────────

function updateBasketBadge() {
    const count       = basket.getCount();
    const badge       = document.getElementById('basket-count');
    const badgeMobile = document.getElementById('basket-count-mobile');

    if (badge)       badge.textContent       = count;
    if (badgeMobile) badgeMobile.textContent = count;
}
