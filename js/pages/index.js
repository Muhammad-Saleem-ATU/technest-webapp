// ============================================================
//  js/pages/index.js
//  Page script for index.html (home page)
//  Renders one featured product per category in the featured
//  products section, and updates the navbar basket badge.
//
//  Author : Muhammad Saleem
//  Student: L00196822
//  Week 5 - Dynamic Rendering and Filtering
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    updateBasketBadge();
    renderFeaturedProducts();
});


// ── Featured products ─────────────────────────────────────────

function renderFeaturedProducts() {

    const categories = ['Laptops', 'Phones', 'Audio', 'Gaming'];
    const featured   = [];

    categories.forEach(cat => {
        const match = productsData.find(p => p.category === cat);
        if (match) {
            featured.push(match);
        }
    });

    const container = document.getElementById('featured-products');
    if (!container) return;

    const html = featured.map(p => buildFeaturedCard(p)).join('');

    container.innerHTML = html;
}


// ── Build featured card ───────────────────────────────────────

function buildFeaturedCard(product) {
    return `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="card-body">
                    <span class="category-badge">${product.category}</span>
                    <h5>${product.name}</h5>
                    <p class="price">€${product.price.toFixed(2)}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    `;
}


// ── Basket badge ─────────────────────────────────────────────

function updateBasketBadge() {
    const saved = JSON.parse(localStorage.getItem('technest-basket') || '[]');

    let count = 0;
    saved.forEach(item => {
        count += item.qty;
    });

    const badge       = document.getElementById('basket-count');
    const badgeMobile = document.getElementById('basket-count-mobile');

    if (badge)       badge.textContent       = count;
    if (badgeMobile) badgeMobile.textContent = count;
}