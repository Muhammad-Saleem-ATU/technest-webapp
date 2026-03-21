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

document.addEventListener('DOMContentLoaded', function () {

    updateBasketBadge();
    renderFeaturedProducts();

});


// ── Featured products ─────────────────────────────────────────
// Picks the first product from each category and renders them
// as cards in the featured products section on the home page.

function renderFeaturedProducts() {

    const categories = ['Laptops', 'Phones', 'Audio', 'Gaming'];
    const featured   = [];

    // Get the first product found for each category
    categories.forEach(function (cat) {
        const match = productsData.find(function (p) {
            return p.category === cat;
        });
        if (match) {
            featured.push(match);
        }
    });

    const container = document.getElementById('featured-products');
    if (!container) return;

    let html = '';
    featured.forEach(function (p) {
        html += buildFeaturedCard(p);
    });

    container.innerHTML = html;
}


// ── Build featured card ───────────────────────────────────────
// Same card structure as the products page so the styling is
// consistent across both pages.

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
// Updates the navbar basket count badge from localStorage.
// Reads directly from localStorage in week 5 since StorageManager
// is not created until week 7.

function updateBasketBadge() {
    const saved = JSON.parse(localStorage.getItem('technest-basket') || '[]');

    let count = 0;
    saved.forEach(function (item) {
        count += item.qty;
    });

    // Update both desktop and mobile badge
    const badge       = document.getElementById('basket-count');
    const badgeMobile = document.getElementById('basket-count-mobile');

    if (badge)       badge.textContent       = count;
    if (badgeMobile) badgeMobile.textContent = count;
}
