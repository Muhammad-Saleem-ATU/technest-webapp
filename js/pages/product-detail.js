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
//  Updated Week 7 - now uses Basket class for Add to Basket
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

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

function getProductFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id     = params.get('id');

    if (!id) return null;

    const product = productsData.find(p => p.id === id);

    return product || null;
}


// ── Render product ────────────────────────────────────────────

function renderProduct(product) {

    document.title = 'TechNest - ' + product.name;

    document.getElementById('product-image').src       = product.image;
    document.getElementById('product-image').alt       = product.name;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-name').textContent     = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent    = '\u20AC' + product.price.toFixed(2);
}


// ── Not found ─────────────────────────────────────────────────

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

function setupAddToBasket(product) {
    const btn = document.getElementById('add-to-basket-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {

        const qtyInput = document.getElementById('quantity');
        const qty      = parseInt(qtyInput.value) || 1;

        const basket = new Basket();
        basket.addItem(product, qty);

        updateBasketBadge();
        showAddedFeedback(btn);
    });
}


// ── Button feedback ───────────────────────────────────────────

function showAddedFeedback(btn) {
    btn.textContent = 'Added!';
    btn.disabled    = true;

    setTimeout(() => {
        btn.textContent = 'Add to Basket';
        btn.disabled    = false;
    }, 1500);
}


// ── Basket badge ─────────────────────────────────────────────

function updateBasketBadge() {
    const storage = new StorageManager('technest-basket');
    const saved   = storage.load();

    let count = 0;
    saved.forEach(item => {
        count += item.qty;
    });

    const badge       = document.getElementById('basket-count');
    const badgeMobile = document.getElementById('basket-count-mobile');

    if (badge)       badge.textContent       = count;
    if (badgeMobile) badgeMobile.textContent = count;
}