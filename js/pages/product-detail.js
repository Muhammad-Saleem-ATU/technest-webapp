// ============================================================
//  js/pages/product-detail.js
//  Page script for product-detail.html
//  Reads the product id from the URL, finds the matching
//  product in the data array and fills in all the details
//  on the page. Also handles the Add to Basket button.
//
//  Author : Muhammad Saleem
//  Student: L00196822
//  Week 6 - Product Detail Page
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    updateBasketBadge();

    const product = getProductFromUrl();

    if (!product) {
        showNotFound();
        return;
    }

    renderProduct(product);
    setupAddToBasket(product);

});


// ── Get product from URL ──────────────────────────────────────
// Reads the ?id= parameter from the URL and finds the matching
// product in the productsData array. Returns null if not found.

function getProductFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id     = params.get('id');

    if (!id) return null;

    const product = productsData.find(function (p) {
        return p.id === id;
    });

    return product || null;
}


// ── Render product ────────────────────────────────────────────
// Fills in all the placeholder elements in the HTML with the
// real product data.

function renderProduct(product) {

    // Update the page title in the browser tab
    document.title = 'TechNest - ' + product.name;

    // Fill in each element by id
    document.getElementById('product-image').src       = product.image;
    document.getElementById('product-image').alt       = product.name;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-name').textContent     = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent    = '\u20AC' + product.price.toFixed(2);
}


// ── Not found ─────────────────────────────────────────────────
// Shows an error message if the id in the URL does not match
// any product. This can happen if someone types a wrong URL.

function showNotFound() {
    const detail = document.getElementById('product-detail');
    if (!detail) return;

    detail.innerHTML = `
        <div class="col-12 text-center py-5">
            <h3>Product not found</h3>
            <p class="text-muted">The product you are looking for does not exist.</p>
            <a href="products.html" class="btn btn-primary mt-3">Back to Products</a>
        </div>
    `;
}


// ── Add to basket ─────────────────────────────────────────────
// Reads the quantity input and saves the item to localStorage.
// StorageManager is not used yet so this reads and writes
// localStorage directly. Full basket integration in week 7.

function setupAddToBasket(product) {
    const btn = document.getElementById('add-to-basket-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {

        const qtyInput = document.getElementById('quantity');
        const qty      = parseInt(qtyInput.value) || 1;

        // Load existing basket from localStorage
        const basket = JSON.parse(localStorage.getItem('technest-basket') || '[]');

        // Check if this product is already in the basket
        const existing = basket.find(function (item) {
            return item.id === product.id;
        });

        if (existing) {
            // Just increase the quantity
            existing.qty += qty;
        } else {
            // Add as a new item
            basket.push({
                id    : product.id,
                name  : product.name,
                price : product.price,
                image : product.image,
                qty   : qty
            });
        }

        // Save back to localStorage
        localStorage.setItem('technest-basket', JSON.stringify(basket));

        // Update the badge and give feedback
        updateBasketBadge();
        showAddedFeedback(btn);
    });
}


// ── Button feedback ───────────────────────────────────────────
// Briefly changes the button text to confirm the item was added
// then resets it after 1.5 seconds.

function showAddedFeedback(btn) {
    btn.textContent = 'Added!';
    btn.disabled    = true;

    setTimeout(function () {
        btn.textContent = 'Add to Basket';
        btn.disabled    = false;
    }, 1500);
}


// ── Basket badge ─────────────────────────────────────────────
// Reads directly from localStorage. StorageManager is not
// created until week 7.

function updateBasketBadge() {
    const saved = JSON.parse(localStorage.getItem('technest-basket') || '[]');

    let count = 0;
    saved.forEach(function (item) {
        count += item.qty;
    });

    const badge       = document.getElementById('basket-count');
    const badgeMobile = document.getElementById('basket-count-mobile');

    if (badge)       badge.textContent       = count;
    if (badgeMobile) badgeMobile.textContent = count;
}
