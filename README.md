# TechNest - Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It is being developed as part of a final semester project at Atlantic Technological University.

The application allows users to browse products, filter and search the catalogue, view individual product pages, manage a shopping basket, and complete a checkout process. All functionality is implemented on the client side, with no server or backend required.

---

## About the Project

The aim of this project is to demonstrate structured front-end development using modern JavaScript practices. The application is designed using Object-Oriented Programming (OOP) principles, with a clear separation between data, logic, and presentation.

The project also simulates real-world development practices by incorporating version control, modular architecture, and DevOps workflows.

---

## Features

- Product listing page with dynamic catalogue
- Filter products by category
- Search products by name
- Sort products by price
- Individual product detail pages (planned)
- Shopping basket with CRUD functionality (planned)
- Basket persistence using localStorage (planned)
- Checkout form with validation (planned)
- Responsive design for desktop, tablet, and mobile
- Dynamic product rendering using JavaScript (Week 5)
- Swiper.js product carousels (Week 5)

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)
- Swiper.js
- localStorage API
- Git and GitHub
- GitHub Actions (CI/CD)
- Visual Studio Code
- Chrome Developer Tools

---

## DevOps & CI/CD

This project integrates DevOps practices using GitHub to support a structured and automated development workflow.

- GitHub Actions is used to implement a Continuous Integration (CI) pipeline
- Every push and pull request triggers automated checks
- A pull request workflow is enforced for all changes to the main branch
- Branch protection rules ensure:
  - Pull request approval is required before merging
  - Code must pass CI checks before integration
- Development is carried out using feature branches

### CI Pipeline Enhancement (Week 5)

The CI pipeline was enhanced to include:

- HTML validation
- CSS linting
- JavaScript linting

This ensures improved code quality and consistency before integration into the main branch.

---

## Project Structure

The current project structure (as of Week 5) is shown below:

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
│   │   └── Product.js
│   └── pages/
│       ├── index.js
│       └── products.js
├── assets/
│   └── images/
├── docs/
│   ├── project/
│   │   ├── week1/
│   │   ├── week2/
│   │   ├── week3/
│   │   └── week4/
│   └── devops/
└── structural_behavioural_interface_diagrams/
```

---

## How to Run

No installation or backend server is required.

Clone the repository:

```bash
git clone https://github.com/Muhammad-Saleem-ATU/technest-webapp
```

Then open `index.html` in a web browser (Chrome or Firefox recommended).

---

## Weekly Progress

| Week    | Focus                                                                | Status    |
|---------|----------------------------------------------------------------------|-----------|
| Week 1  | Requirements, wireframes, architecture planning, repository setup    | Completed |
| Week 2  | Structural diagrams and HTML page structure                          | Completed |
| Week 3  | CSS styling, responsive layout, DevOps CI pipeline setup             | Completed |
| Week 4  | JavaScript data modelling (Product.js)                               | Completed |
| Week 5  | Dynamic rendering, filtering, search, Swiper integration, CI upgrade | Completed |
| Week 6  | Product detail page functionality                                    | Upcoming  |
| Week 7  | Basket CRUD and localStorage integration                             | Upcoming  |
| Week 8  | Checkout and validation                                              | Upcoming  |
| Week 9  | Testing and optimisation                                             | Upcoming  |
| Week 10 | Final documentation and submission                                   | Upcoming  |

---

## Author

Muhammad Saleem  
Student No: L00196822  
Module: PROJ_IT805 - Software Development Project  
Atlantic Technological University
