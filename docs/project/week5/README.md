# TechNest - Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It is being developed as part of a final semester project at Atlantic Technological University.

The application will let users browse products, filter and search the catalogue, view individual product pages, manage a shopping basket, and go through a checkout process. Everything runs in the browser with no back-end or server required.

---

## About the Project

The goal of this project is not just to build a shop interface, but to practise writing well-structured, modular JavaScript using Object-Oriented Programming principles. The code is split into separate classes and modules so that each file has one clear job.

The basket contents will be saved to localStorage, which means they will not be lost if the user refreshes the page.

---

## Features

The following features are working as of week 5:

- Product listing page with all 20 products displayed in category sections with Swiper carousels
- Filter products by category (Laptops, Phones, Audio, Gaming)
- Search products by name
- Sort products by price (low to high / high to low)
- Category filter pre-selected when arriving from the home page
- Featured products section on the home page showing one product per category
- Navbar basket badge updates from localStorage on every page

The following features are still to be built:

- Individual product detail pages loaded using URL parameters
- Add products to basket with quantity selection
- Basket with full CRUD - add, update quantity, remove items
- Automatic basket total calculation
- Basket saved to localStorage so it persists on page refresh
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

This is the current state of the project at the end of week 5. The products data
file and the first two page scripts have been added. Basket.js and StorageManager.js
will be added in week 7.

```
technest-webapp/
├── index.html                 (updated week 5 - scripts linked, category URLs fixed)
├── products.html              (updated week 5 - Swiper layout, scripts linked)
├── product-detail.html        (unchanged - page script added week 6)
├── basket.html                (updated week 5 - footer links corrected)
├── checkout.html              (updated week 5 - footer links corrected)
├── css/
│   └── style.css              (updated week 5 - Swiper styles added)
├── js/
│   ├── data/
│   │   └── products.js        (completed week 5)
│   ├── models/
│   │   ├── Product.js         (completed week 4)
│   │   ├── Basket.js          (added week 7)
│   │   └── StorageManager.js  (added week 7)
│   └── pages/
│       ├── index.js           (completed week 5)
│       ├── products.js        (completed week 5)
│       ├── product-detail.js  (added week 6)
│       ├── basket.js          (added week 7)
│       └── checkout.js        (added week 8)
├── assets/
│   └── images/                (product images added week 5)
└── docs/
    └── diagrams/
```

---

## How to Run

No installation or server needed. Just clone the repository and open `index.html` in a browser.
```bash
git clone https://github.com/Muhammad-Saleem-ATU/technest-webapp
```

Then open `index.html` directly in Chrome or Firefox. The home page and products
page are fully working. The remaining pages are styled but not yet connected to
JavaScript.

---

## Weekly Progress

This project is being built over 10 weeks.

| Week | Focus | Status |
|------|-------|--------|
| Week 1 | Requirements, wireframes, architecture planning, repo setup | Done |
| Week 2 | Structural diagrams, core HTML structure for all pages | Done |
| Week 3 | CSS styling and Bootstrap responsive layout | Done |
| Week 4 | Product.js ES6 class | Done |
| Week 5 | Products data file, dynamic product rendering, Swiper carousels, filtering and search | Done |
| Week 6 | Product detail page and URL parameter handling | Upcoming |
| Week 7 | Basket.js, StorageManager.js, basket CRUD and localStorage integration | Upcoming |
| Week 8 | Checkout form and client-side validation | Upcoming |
| Week 9 | Testing and code refactoring | Upcoming |
| Week 10 | Final touches and documentation | Upcoming |

---

## Author

Muhammad Saleem  
Student No: L00196822  
Module: PROJ_IT805 - LY_ICSWD_B: Project (2025/26)  
Atlantic Technological University
