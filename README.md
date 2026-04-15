# TechNest - Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It is being developed as part of a final semester project at Atlantic Technological University.

The application allows users to browse products, filter and search the catalogue, view individual product pages, manage a shopping basket, and complete a checkout process. All functionality is implemented on the client side, with no server or backend required.

---

## About the Project

The aim of this project is to demonstrate structured front-end development using modern JavaScript practices. The application follows Object-Oriented Programming (OOP) principles with clear separation between data, logic and presentation.

The project also simulates real-world software development practices by incorporating version control, modular architecture and a DevOps CI/CD pipeline.

---

## Features (Week 6)

The following features are implemented:

- Product listing page with dynamic catalogue
- Filter products by category
- Search products by name
- Sort products by price
- Swiper.js product carousels
- Product detail page (dynamic rendering using URL parameters)
- Product details populated from data (name, image, description, price)
- Add to Basket functionality using localStorage
- Basket badge updates dynamically across pages
- Responsive design (desktop, tablet, mobile)
- Favicon added to all pages

### Upcoming Features

- Basket page with CRUD functionality
- Basket total calculation
- Checkout form with validation
- Order confirmation flow

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)
- Swiper.js
- localStorage API
- Git & GitHub
- GitHub Actions (CI/CD)
- Visual Studio Code

---

## DevOps & CI/CD Pipeline (Week 6 Enhancement)

This project implements a **GitHub Actions-based CI/CD pipeline** aligned with modern DevOps and GitOps practices.

### Continuous Integration (CI)

The CI pipeline runs on:
- Push to feature branches
- Pull requests to `main`

Pipeline stages:

- **Code Checkout**
- **Linting & Validation**
  - HTML validation (HTMLHint)
  - CSS linting (Stylelint)
  - JavaScript linting (ESLint)
  - Super-Linter (multi-language validation)
- **Automated Testing** 
  - Automated testing implemented using Jest within the CI pipeline
- **Security (DevSecOps)**
  - Dependency vulnerability scanning using npm audit integrated into the CI pipeline
- **Fail-Fast Quality Gates**
  - Pipeline fails if any validation, testing or security step fails

This ensures that only validated, tested and secure code is promoted through the pipeline to production.

---

### Continuous Deployment (CD)

The deployment pipeline follows an **artefact-based GitOps approach**:


- Build artefact is created in CI
- Artefact is uploaded and stored
- Same artefact is used in deployment
- Deployment is automated using GitHub Actions

The application is deployed to **GitHub Pages** as the production environment.

---

### Multi-Environment Deployment

The pipeline includes environment separation:

- **Development** → Feature branches  
- **Staging** → Intermediate deployment stage  
- **Production** → Main branch deployment  

#### Deployment flow:

```text
CI → Build → Staging → Production
```


- Staging ensures pre-production validation
- Production requires manual approval via GitHub Environments

---

### Collaboration Workflow

- Feature branches used for all development
- Pull requests required before merging
- CI pipeline must pass before merge
- Code review required (simulated using second GitHub account)
- Branch protection rules enforced

---

### DevOps Principles Applied

This pipeline aligns with the **CAMS model**:

- **Culture** → Collaboration via PRs and reviews  
- **Automation** → CI/CD pipelines automate validation and deployment  
- **Measurement** → Pipeline results provide feedback  
- **Sharing** → Transparent workflows and documentation  

---

## Project Structure (Week 6)


```text
technest-webapp/
├── index.html
├── products.html
├── product-detail.html
├── basket.html
├── checkout.html
├── css/
│ └── style.css
├── icons/
│ └── favicon.ico
├── js/
│ ├── data/
│ │ └── products.js
│ ├── models/
│ │ └── Product.js
│ └── pages/
│ ├── index.js
│ ├── products.js
│ └── product-detail.js
├── assets/
│ └── images/
└── docs/
```

---

## How to Run

No installation or backend server is required.

```bash
git clone https://github.com/Muhammad-Saleem-ATU/technest-webapp
```

Open index.html in a browser (Chrome or Firefox recommended).

## Weekly Progress


| Week    | Focus                                    | Status    |
| ------- | ---------------------------------------- | --------- |
| Week 1  | Requirements, wireframes, architecture   | Completed |
| Week 2  | HTML structure                           | Completed |
| Week 3  | CSS + CI pipeline setup                  | Completed |
| Week 4  | Product.js model                         | Completed |
| Week 5  | Dynamic rendering + filtering            | Completed |
| Week 6  | Product detail + DevOps pipeline upgrade | Completed |
| Week 7  | Basket system                            | Upcoming  |
| Week 8  | Checkout                                 | Upcoming  |
| Week 9  | Testing & optimisation                   | Upcoming  |
| Week 10 | Final submission                         | Upcoming  |



## Author

Muhammad Saleem
Student No: L00196822
Module: PROJ_IT805 - Software Development Project
Atlantic Technological University