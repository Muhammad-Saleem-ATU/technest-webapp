# TechNest - Front-End eCommerce Web Application

TechNest is a client-side eCommerce web application built for a fictional electronics and gadgets retailer. It is being developed as part of a final semester project at Atlantic Technological University.

The application allows users to browse products, filter and search the catalogue, view individual product pages, manage a shopping basket, and complete a checkout process. All functionality is implemented on the client side, with no server or backend required.

---

## About the Project

The aim of this project is to demonstrate structured front-end development using modern JavaScript practices. The application follows Object-Oriented Programming (OOP) principles with clear separation between data, logic and presentation.

The project also simulates real-world software development practices by incorporating version control, modular architecture, and a DevOps CI/CD pipeline.

---

## Week 9 Overview

Week 9 focused on validating the stability and reliability of the TechNest application through structured testing and refinement. At this stage, all core features were implemented, so the priority shifted to quality assurance and optimisation.

---

## Objectives

- Design and execute structured test cases  
- Identify and fix bugs  
- Validate basket persistence using localStorage  
- Test checkout validation (including edge cases)  
- Perform responsive testing across devices  
- Refactor and clean up code  

---

## Testing Approach

Testing was conducted using a **manual black-box testing approach**, focusing on user interactions rather than internal implementation.

Areas tested:
- Product listing, filtering and search  
- Product detail page loading  
- Basket functionality (add, update, remove)  
- localStorage persistence  
- Checkout validation  
- Responsive layout  

---

## Key Test Cases

| Test ID | Feature | Description |
|--------|--------|-------------|
| TC-01 | Product Listing | Products load correctly |
| TC-06 | Basket | Add item to basket |
| TC-09 | Persistence | Basket remains after refresh |
| TC-12 | Checkout | Valid submission |
| TC-13 | Responsive | Mobile layout |

---

## Fixes and Improvements

- Fixed basket badge not updating consistently  
- Added validation for missing URL parameters  
- Improved checkout validation logic  
- Fixed responsive layout issues  

---

## Code Refactoring

- Removed unused code and console logs  
- Improved variable naming  
- Simplified logic in filtering and validation  

---

## Responsive Testing

Tested using Chrome DevTools:
- Mobile (375px)
- Tablet (768px)
- Desktop  

Ensured proper layout and usability across all screen sizes.

---

## Current Status

- All core features working correctly  
- Major bugs resolved  
- Application stable and ready for final submission  

---

## Known Limitations

- No backend or real payment system  
- Minor UI improvements possible  
- No automated testing implemented  

---

## Git Commits (Week 9)

```text
week9: add test cases document
week9: fix basket badge update issue
week9: improve checkout validation
week9: responsive fixes
week9: refactor filtering logic
```

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


## Author

Muhammad Saleem
Student No: L00196822
Module: PROJ_IT805 - Software Development Project
Atlantic Technological University