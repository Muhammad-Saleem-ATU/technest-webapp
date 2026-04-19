# TechNest - Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It is being developed as part of a final semester project at Atlantic Technological University.

The application will let users browse products, filter and search the catalogue, view individual product pages, manage a shopping basket, and go through a checkout process. Everything runs in the browser with no back-end or server required.

---

## About the Project

The goal of this project is not just to build a shop interface, but to practise writing well-structured, modular JavaScript using Object-Oriented Programming principles. The code is split into separate classes and modules so that each file has one clear job.

The basket contents are saved to localStorage, which means they are not lost if the user refreshes the page.

---

## Features

The following features are working as of week 7:

- Product listing page with all 20 products in category sections with Swiper carousels
- Filter products by category (Laptops, Phones, Audio, Gaming)
- Search products by name
- Sort products by price (low to high / high to low)
- Category filter pre-selected when arriving from the home page
- Featured products section on the home page
- Product detail page loads correct product from the URL
- Add to Basket with quantity selection
- Basket page shows all items with image, name, price and quantity
- Increase or decrease item quantity from the basket page
- Remove individual items from the basket
- Running total updates automatically
- Basket saved to localStorage and persists on page refresh
- Navbar basket badge updates on every page

The following features are still to be built:

- Checkout form with client-side validation
- Confirmation message shown after a successful checkout

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- Swiper.js (product carousels)
- JavaScript (ES6+)
- localStorage API
- Visual Studio Code
- Git and GitHub
- Chrome Developer Tools

---

## Project Structure

```text
technest-webapp/
├── index.html                 (updated week 7 - StorageManager script added)
├── products.html              (updated week 7 - StorageManager script added)
├── product-detail.html        (updated week 7 - Basket + StorageManager scripts added)
├── basket.html                (updated week 7 - all scripts linked)
├── checkout.html              (unchanged)
├── css/
│   └── style.css              (updated week 7 - basket styles added)
├── icons/
│   └── favicon.ico            (added week 6)
├── js/
│   ├── data/
│   │   └── products.js        (unchanged)
│   ├── models/
│   │   ├── Product.js         (unchanged)
│   │   ├── Basket.js          (completed week 7)
│   │   └── StorageManager.js  (completed week 7)
│   └── pages/
│       ├── index.js           (updated week 7 - uses StorageManager for badge)
│       ├── products.js        (updated week 7 - uses StorageManager for badge)
│       ├── product-detail.js  (updated week 7 - uses Basket class for add to basket)
│       ├── basket.js          (completed week 7)
│       └── checkout.js        (added week 8)
├── assets/
│   └── images/
└── docs/
    └── diagrams/
```

---

## How to Run

No installation or server needed. Just clone the repository and open `index.html` in a browser.
```bash
git clone https://github.com/Muhammad-Saleem-ATU/technest-webapp
```

Then open `index.html` directly in Chrome or Firefox. All pages except checkout are
fully working.

---

## Weekly Progress

| Week | Focus | Status |
|------|-------|--------|
| Week 1 | Requirements, wireframes, architecture planning, repo setup | Done |
| Week 2 | Structural diagrams, core HTML structure for all pages | Done |
| Week 3 | CSS styling and Bootstrap responsive layout | Done |
| Week 4 | Product.js ES6 class | Done |
| Week 5 | Products data file, dynamic product rendering, Swiper carousels, filtering and search | Done |
| Week 6 | Product detail page, URL parameter handling and favicon | Done |
| Week 7 | Basket.js, StorageManager.js, basket CRUD and localStorage integration | Done |
| Week 8 | Checkout form and client-side validation | Upcoming |
| Week 9 | Testing and code refactoring | Upcoming |
| Week 10 | Final touches and documentation | Upcoming |

---

## Author

Muhammad Saleem  
Student No: L00196822  
Module: PROJ_IT805 - LY_ICSWD_B: Project (2025/26)  
Atlantic Technological University
