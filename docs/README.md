# TechNest - Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It is being developed as part of a final semester project at Atlantic Technological University.

The application allows users to browse products, filter and search the catalogue, view individual product pages, manage a shopping basket, and complete a checkout process. All functionality is implemented on the client side, with no server or backend required.

---

## About the Project

The aim of this project is to demonstrate structured front-end development using modern JavaScript practices. The application is designed using Object-Oriented Programming (OOP) principles, with a clear separation between data, logic, and presentation.

The project also simulates real-world development practices by incorporating version control, modular architecture, and DevOps workflows.

---

## Features

- Product listing page with dynamic catalogue (planned)
- Filter products by category
- Search products by name
- Sort products by price
- Individual product detail pages
- Shopping basket with full CRUD functionality
- Automatic price calculation
- Basket persistence using localStorage
- Checkout form with validation
- Responsive design for desktop, tablet, and mobile
- JavaScript data modelling using ES6 classes (Week 4)

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)
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
- The CI pipeline includes:
  - HTML validation
  - CSS linting
  - JavaScript linting
- A pull request workflow is enforced for all changes to the main branch
- Branch protection rules ensure:
  - Pull request approval is required before merging
  - Code must pass CI checks before integration
- Development is carried out using feature branches (e.g. week-based branches)

These practices improve code quality, maintainability, and collaboration.

---

## Project Structure

The current project structure (as of Week 4) is shown below:

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
│   ├── models/
│   │   └── Product.js
│   └── pages/
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

Then open index.html in a web browser (Chrome or Firefox recommended).

## Weekly Progress

| Week    | Focus                                                                 | Status    |
| ------- | --------------------------------------------------------------------- | --------- |
| Week 1  | Requirements, wireframes, architecture planning, repository setup     | Completed |
| Week 2  | Structural diagrams and HTML page structure                           | Completed |
| Week 3  | CSS styling, responsive layout, DevOps CI pipeline setup              | Completed |
| Week 4  | JavaScript data modelling (Product.js) and enhanced CI pipeline       | Completed |
| Week 5  | Dynamic rendering, filtering and search                               | Upcoming  |
| Week 6  | Product detail page functionality                                     | Upcoming  |
| Week 7  | Basket CRUD and localStorage integration                              | Upcoming  |
| Week 8  | Checkout and validation                                               | Upcoming  |
| Week 9  | Testing and optimisation                                              | Upcoming  |
| Week 10 | Final documentation and submission                                    | Upcoming  |


## Author

Muhammad Saleem  
Student No: L00196822  

**Modules:**
- PROJ_IT805 - Software Development Project  
- DVOP_IT802 - DevOps Pipelines  

This project is developed primarily for the Software Development Project module and is also utilised within the DevOps Pipelines module to implement CI/CD practices.

Atlantic Technological University
