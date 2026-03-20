# TechNest - Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It is being developed as part of a final semester project at Atlantic Technological University.

The application will let users browse products, filter and search the catalogue, view individual product pages, manage a shopping basket, and go through a checkout process. Everything will run in the browser with no back-end or server required.

---

## About the Project

The goal of this project is not just to build a shop interface, but to practise writing well-structured, modular JavaScript using Object-Oriented Programming principles. The code is split into separate classes and modules so that each file has one clear job.

The basket contents will be saved to localStorage, which means they will not be lost if the user refreshes the page.

---

## Features (Planned)

- Product listing page with all products loaded from a JavaScript data file
- Filter products by category
- Search products by name
- Sort products by price (low to high / high to low)
- Individual product detail pages loaded using URL parameters
- Add products to basket with quantity selection
- Basket with full CRUD - add, update quantity, remove items
- Automatic basket total calculation
- Basket saved to localStorage so it persists on page refresh
- Checkout form with client-side validation
- Confirmation message shown after a successful checkout
- Fully responsive layout - works on desktop, tablet and mobile

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)
- localStorage API
- Visual Studio Code
- Git and GitHub
- Chrome Developer Tools

---

## Project Structure

This is the current state of the project at the end of week 4. The Product class
has been written. The data file and page scripts will be added from week 5 onwards.
Basket.js and StorageManager.js will be added in week 7.

```
technest-webapp/
├── index.html
├── products.html
├── product-detail.html
├── basket.html
├── checkout.html
├── css/
│   └── style.css              (completed week 3)
├── js/
│   ├── data/                  (empty - products.js added week 5)
│   ├── models/
│   │   ├── Product.js         (completed week 4)
│   │   ├── Basket.js          (added week 7)
│   │   └── StorageManager.js  (added week 7)
│   └── pages/                 (empty - page scripts added week 5+)
├── assets/
│   └── images/                (empty - images added week 5)
└── docs/
    └── diagrams/
```

---

## How to Run

No installation or server needed. Just clone the repository and open `index.html` in a browser.
```bash
git clone https://github.com/Muhammad-Saleem-ATU/technest-webapp
```

Then open `index.html` directly in Chrome or Firefox. The pages are fully styled
but JavaScript functionality has not been connected yet.

---

## Weekly Progress

This project is being built over 10 weeks.

| Week | Focus | Status |
|------|-------|--------|
| Week 1 | Requirements, wireframes, architecture planning, repo setup | Done |
| Week 2 | Structural diagrams, core HTML structure for all pages | Done |
| Week 3 | CSS styling and Bootstrap responsive layout | Done |
| Week 4 | Product.js ES6 class | Done |
| Week 5 | Products data file, dynamic product rendering, filtering and search | Upcoming |
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
