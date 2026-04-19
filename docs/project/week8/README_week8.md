# TechNest - Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It is being developed as part of a final semester project at Atlantic Technological University.

The application lets users browse products, filter and search the catalogue, view individual product pages, manage a shopping basket and go through a checkout process. Everything runs in the browser with no back-end or server required.

---

## About the Project

The goal of this project is not just to build a shop interface, but to practise writing well-structured, modular JavaScript using Object-Oriented Programming principles. The code is split into separate classes and modules so that each file has one clear job.

The basket contents are saved to localStorage, which means they are not lost if the user refreshes the page. After a successful checkout the basket is cleared automatically.

---

## Features

The following features are working as of week 8:

- Product listing page with all 20 products displayed in category sections with Swiper carousels
- Filter products by category (Laptops, Phones, Audio, Gaming)
- Search products by name
- Sort products by price (low to high / high to low)
- Category filter pre-selected when arriving from the home page
- Featured products section on the home page showing one product per category
- Product detail page loads the correct product from the URL parameter
- Add to Basket button saves item to basket with selected quantity
- Basket page shows all items with image, name, price and quantity
- Increase or decrease item quantity directly in the basket
- Remove individual items from the basket
- Order summary updates automatically with correct total
- Basket persists across page navigation via localStorage
- Navbar basket badge shows correct item count on every page
- Checkout page reads basket into order summary automatically
- Client-side form validation with inline error messages on all fields
- Card number auto-formatted as 1234 5678 9012 3456 while typing
- Expiry date auto-formatted as MM/YY while typing
- Confirmation message shown after successful order
- Basket cleared after successful order
- Redirect to basket page if checkout is accessed with an empty basket

The following features are still to be built:

- Final testing and any bug fixes found during week 9
- Code refactoring and any final documentation updates in week 10

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
├── index.html
├── products.html
├── product-detail.html
├── basket.html
├── checkout.html
├── css/
│   └── style.css
├── icons/
│   └── favicon.ico
├── js/
│   ├── data/
│   │   └── products.js
│   ├── models/
│   │   ├── Product.js
│   │   ├── Basket.js
│   │   └── StorageManager.js
│   └── pages/
│       ├── index.js
│       ├── products.js
│       ├── product-detail.js
│       ├── basket.js
│       └── checkout.js
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

Then open `index.html` directly in Chrome or Firefox. All five pages are fully working.

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
| Week 8 | Checkout form, client-side validation and order confirmation | Done |
| Week 9 | Testing and code refactoring | Upcoming |
| Week 10 | Final touches and documentation | Upcoming |

---

## Author

Muhammad Saleem  
Student No: L00196822  
Module: PROJ_IT805 - LY_ICSWD_B: Project (2025/26)  
Atlantic Technological University
