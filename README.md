# TechNest - Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It is being developed as part of a final semester project at Atlantic Technological University.

The application allows users to browse products, filter and search the catalogue, view individual product pages, manage a shopping basket, and complete a checkout process. All functionality is implemented on the client side, with no server or backend required.

---

## About the Project

The aim of this project is to demonstrate structured front-end development using modern JavaScript practices. The application follows Object-Oriented Programming (OOP) principles with clear separation between data, logic and presentation.

The project also simulates real-world software development practices by incorporating version control, modular architecture, and a DevOps CI/CD pipeline.

---

## Features (Week 8)

The following features are implemented:

### Product & Catalogue

* Product listing page with dynamic catalogue
* Filter products by category
* Search products by name
* Sort products by price
* Swiper.js product carousels
* Featured products on home page

### Product Detail

* Dynamic product detail page using URL parameters
* Product data populated dynamically (name, image, description, price)

### Basket System (Week 7)

* Add to basket with selected quantity
* Basket stored using localStorage
* Basket page with full CRUD functionality:

  * Increase/decrease quantity
  * Remove items
* Basket total calculation
* Navbar basket badge updates dynamically

### Checkout System (Week 8)

* Order summary generated dynamically from basket
* Full client-side form validation:

  * Name, email, address, payment fields
* Inline error messages for invalid inputs
* Auto-formatting:

  * Card number (#### #### #### ####)
  * Expiry date (MM/YY)
* Prevent checkout with empty basket (redirect)
* Order confirmation message displayed
* Basket cleared after successful order

### UI & UX

* Responsive design (desktop, tablet, mobile)
* Bootstrap-based layout
* Improved user experience with validation feedback

---

## Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (ES6+)
* Swiper.js
* localStorage API
* Git & GitHub
* GitHub Actions (CI/CD)
* Visual Studio Code

---

## DevOps & CI/CD Pipeline

This project implements a **GitHub Actions-based CI/CD pipeline** aligned with modern DevOps and GitOps practices.

### Continuous Integration (CI)

The CI pipeline runs on:

* Push to feature branches
* Pull requests to `main`

Pipeline stages:

* **Code Checkout**
* **Linting & Validation**

  * HTML (HTMLHint)
  * CSS (Stylelint)
  * JavaScript (ESLint)
  * Super-Linter (multi-language validation)
* **Automated Testing**

  * Jest testing integrated into pipeline
* **Security (DevSecOps)**

  * npm audit for vulnerability scanning
* **Fail-Fast Quality Gates**

  * Pipeline stops immediately on error

This ensures only validated, tested, and secure code progresses.

---

### Continuous Deployment (CD)

* Triggered on merge to `main`
* Artefact-based deployment approach
* Deployment automated using GitHub Actions
* Application deployed to **GitHub Pages**

---

### Multi-Environment Strategy

* **Development** → Feature branches
* **Staging** → Pre-production validation
* **Production** → Main branch

```text
CI → Build → Staging → Production
```

---

### Collaboration Workflow

* Feature branches for all development
* Pull requests required before merge
* CI must pass before merging
* Code reviews enforced
* Branch protection rules applied

---

### DevOps Principles Applied

This pipeline aligns with key DevOps principles:

* **Automation** → CI/CD pipelines automate validation and deployment
* **Fail-Fast** → Errors detected early
* **DevSecOps** → Security integrated into pipeline
* **Quality Gates** → Validation stages enforce code quality
* **GitOps** → Repository acts as the single source of truth

---

## Project Structure (Week 8)

```text
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
```

---

## How to Run

No installation or backend server is required.

```bash
git clone https://github.com/Muhammad-Saleem-ATU/technest-webapp
```

Run the project using a local development server.

Recommended (VS Code):

Install Live Server
Right-click index.html
Click Open with Live Server

---

## Weekly Progress

| Week    | Focus                                  | Status    |
| ------- | -------------------------------------- | --------- |
| Week 1  | Requirements, wireframes, architecture | Completed |
| Week 2  | HTML structure                         | Completed |
| Week 3  | CSS + CI setup                         | Completed |
| Week 4  | Product model                          | Completed |
| Week 5  | Dynamic rendering & filtering          | Completed |
| Week 6  | Product detail + DevOps pipeline       | Completed |
| Week 7  | Basket system                          | Completed |
| Week 8  | Checkout & validation                  | Completed |
| Week 9  | Testing & optimisation                 | Upcoming  |
| Week 10 | Final submission                       | Upcoming  |

---

## Author

Muhammad Saleem
Student No: L00196822
Module: PROJ_IT805 - Software Development Project
Atlantic Technological University
