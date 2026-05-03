// ============================================================
//  js/pages/products.js
//  Page script for products.html
//  Renders products grouped by category, each in a Swiper
//  carousel. Supports category filtering, keyword search and
//  price sorting.
//
//  Author : Muhammad Saleem
//  Student: L00196822
//  Week 5 - Dynamic Rendering and Filtering
// ============================================================

// Categories shown on this page — order controls section order

const CATEGORIES = ['Laptops', 'Phones', 'Audio', 'Gaming'];

let activeCategory = 'All';
let searchQuery    = '';
let sortOrder      = 'price-asc';

let swiperInstances = [];


document.addEventListener('DOMContentLoaded', () => {

    updateBasketBadge();
    checkUrlCategory();
    renderSections();
    setupFilterButtons();
    setupSearch();
    setupSort();

});


// ── Render category sections ──────────────────────────────────

function renderSections() {

    swiperInstances.forEach(s => s.destroy(true, true));
    swiperInstances = [];

    const container  = document.getElementById('category-sections');
    const noResults  = document.getElementById('no-results');

    let categoriesToShow = CATEGORIES;
    if (activeCategory !== 'All') {
        categoriesToShow = [activeCategory];
    }

    let html        = '';
    let totalShown  = 0;

    categoriesToShow.forEach(cat => {

        let products = productsData.filter(p => p.category === cat);

        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase();
            products = products.filter(p => p.name.toLowerCase().includes(q));
        }

        if (sortOrder === 'price-asc') {
            products.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'price-desc') {
            products.sort((a, b) => b.price - a.price);
        }

        if (products.length === 0) return;

        totalShown += products.length;

        let slides = '';
        products.forEach(p => {
            slides += `
                <div class="swiper-slide">
                    <div class="product-card">
                        <img src="${p.image}" alt="${p.name}">
                        <div class="card-body">
                            <span class="category-badge">${p.category}</span>
                            <h5>${p.name}</h5>
                            <p class="price">&#8364;${p.price.toFixed(2)}</p>
                            <a href="product-detail.html?id=${p.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;
        });

        const swiperClass = `swiper-${cat.toLowerCase()}`;
        html += `
            <section class="category-section-block" data-category="${cat}">
                <div class="container">
                    <h2 class="category-section-title">${cat}</h2>
                    <div class="swiper ${swiperClass}">
                        <div class="swiper-wrapper">
                            ${slides}
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        `;
    });

    container.innerHTML = html;

    if (totalShown === 0) {
        noResults.style.display = 'block';
        return;
    }
    noResults.style.display = 'none';

    categoriesToShow.forEach(cat => {
        const swiperClass = `.swiper-${cat.toLowerCase()}`;
        const el = document.querySelector(swiperClass);
        if (!el) return;

        const swiper = new Swiper(swiperClass, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: `${swiperClass} .swiper-button-next`,
                prevEl: `${swiperClass} .swiper-button-prev`,
            },
            pagination: {
                el: `${swiperClass} .swiper-pagination`,
                clickable: true,
            },
            breakpoints: {
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
            }
        });

        swiperInstances.push(swiper);
    });
}


// ── Filter buttons ───────────────────────────────────────────

function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active-filter'));
            btn.classList.add('active-filter');
            activeCategory = btn.dataset.category;
            renderSections();
        });
    });
}


// ── Search ───────────────────────────────────────────────────

function setupSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;

    input.addEventListener('input', () => {
        searchQuery = input.value;
        renderSections();
    });
}


// ── Sort ─────────────────────────────────────────────────────

function setupSort() {
    const select = document.getElementById('sort-select');
    if (!select) return;

    select.value = 'price-asc';

    select.addEventListener('change', () => {
        sortOrder = select.value;
        renderSections();
    });
}


// ── URL category check ────────────────────────────────────────

function checkUrlCategory() {
    const params = new URLSearchParams(window.location.search);
    const cat    = params.get('category');
    if (!cat) return;

    activeCategory = cat;

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active-filter');
        if (btn.dataset.category === cat) {
            btn.classList.add('active-filter');
        }
    });
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