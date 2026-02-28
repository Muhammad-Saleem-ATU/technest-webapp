# TechNest – Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It was developed as part of a final year project at Atlantic Technological University.

The application lets users browse products, filter and search the catalogue, view individual product pages, manage a shopping basket, and go through a checkout process. Everything runs in the browser with no back-end or server required.

---

## About the Project

The goal of this project was not just to build a shop interface, but to practise writing well-structured, modular JavaScript using Object-Oriented Programming principles. The code is split into separate classes and modules so that each file has one clear job.

The basket contents are saved to localStorage, which means they are not lost if the user refreshes the page.

---

## Features

- Product listing page with all products loaded from a JavaScript data file
- Filter products by category
- Search products by name
- Sort products by price (low to high / high to low)
- Individual product detail pages loaded using URL parameters
- Add products to basket with quantity selection
- Basket with full CRUD — add, update quantity, remove items
- Automatic basket total calculation
- Basket saved to localStorage so it persists on page refresh
- Checkout form with client-side validation
- Confirmation message shown after successful checkout
- Fully responsive layout — works on desktop, tablet, and mobile

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
```
technest-webapp/
├── index.html
├── products.html
├── product-detail.html
├── basket.html
├── checkout.html
├── css/
│   └── style.css
├── js/
│   ├── data/
│   │   └── products.js
│   ├── models/
│   │   ├── Product.js
│   │   ├── Basket.js
│   │   └── Storage.js
│   └── pages/
└── assets/
    └── images/
```

---

## How to Run

No installation or server needed. Just clone the repository and open `index.html` in a browser.
```bash
git clone https://github.com/Muhammad-Saleem-ATU/technest-webapp
```

Then open `index.html` directly in Chrome or Firefox.

---

## Development Progress

This project is being built over 10 weeks following an incremental development approach.

| Week | Focus |
|------|-------|
| Week 1 | Requirements, wireframes, architecture planning, repo setup |
| Week 2 | Core HTML structure for all pages |
| Week 3 | CSS styling and Bootstrap responsive layout |
| Week 4 | JavaScript data modelling and OOP class structure |
| Week 5 | Dynamic product rendering, filtering and search |
| Week 6 | Product detail page and URL parameter handling |
| Week 7 | Basket CRUD and localStorage integration |
| Week 8 | Checkout form and client-side validation |
| Week 9 | Testing and code refactoring |
| Week 10 | Final touches and documentation |

---

## Author

Muhammad Saleem  
Student No: L00196822  
Module: PROJ_IT805 - LY_ICSWD_B: Project (2025/26)  
Atlantic Technological University
