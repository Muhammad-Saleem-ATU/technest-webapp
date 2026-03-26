# Week 1 – Requirements and Architecture Design

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Institution:** Atlantic Technological University  
**Week:** 1 of 10

---

## What I Did This Week

This week was all about planning before writing any code. I wrote out the
requirements for the application, planned how the folders and files will be
structured, described what each JavaScript class will do, and sketched out
what each page needs to look like.

---

## 1. Requirements

Before starting to build anything I needed to figure out exactly what the
app has to do. I split the requirements into two types — functional
(what the app does) and non-functional (how well it does it).

### 1.1 Functional Requirements

These are the actual features the app needs to have.

| ID | Requirement | Priority |
|----|-------------|----------|
| FR01 | Display a list of products loaded from a JavaScript data file | Must |
| FR02 | Each product shows name, image, price and category | Must |
| FR03 | User can filter products by category | Must |
| FR04 | User can search for products by name | Must |
| FR05 | User can sort products by price (low to high / high to low) | Must |
| FR06 | Clicking a product opens its individual detail page | Must |
| FR07 | Product detail page loads the correct product using a URL parameter | Must |
| FR08 | Product detail page shows full description, image, price and add-to-basket button | Must |
| FR09 | User can add a product to the basket from the detail page | Must |
| FR10 | User can view all items currently in their basket | Must |
| FR11 | User can update the quantity of an item in the basket | Must |
| FR12 | User can remove an item from the basket | Must |
| FR13 | Basket automatically recalculates the total when items change | Must |
| FR14 | Basket contents are saved to localStorage so they persist on page refresh | Must |
| FR15 | Checkout page has a form with name, email, address and card fields | Must |
| FR16 | Checkout form validates all fields before submission | Must |
| FR17 | A confirmation message is shown after successful checkout | Must |
| FR18 | Navigation bar shows the current number of items in the basket | Want |
| FR19 | User can continue shopping from the basket page without losing basket contents | Want |

### 1.2 Non-Functional Requirements

These are about quality, performance and how the app is built rather than
specific features.

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR01 | App must be fully responsive on desktop, tablet and mobile | Must |
| NFR02 | All pages load quickly in a browser with no build tools or server needed | Must |
| NFR03 | Code is split into separate modules — data, models, pages | Must |
| NFR04 | All JavaScript uses ES6+ syntax including classes, modules and arrow functions | Must |
| NFR05 | App works correctly in Chrome and Firefox at minimum | Must |
| NFR06 | Variable and function names are clear and consistent throughout | Must |
| NFR07 | Visual design is consistent across all pages | Must |
| NFR08 | Error messages and validation feedback are easy for the user to understand | Must |
| NFR09 | No back-end server or database — everything runs client-side only | Must |
| NFR10 | Git used for version control with regular commits after each meaningful change | Must |

---

## 2. Architecture Plan

### 2.1 Technologies

| Technology | What it is used for |
|------------|---------------------|
| HTML5 | Structure and content of each page |
| CSS3 | Custom styling on top of Bootstrap |
| Bootstrap 5 | Responsive grid layout and UI components |
| JavaScript ES6+ | All application logic, classes and DOM manipulation |
| localStorage API | Saving basket contents in the browser |
| Visual Studio Code | Code editor |
| Git and GitHub | Version control and tracking progress |
| Chrome Developer Tools | Testing, debugging and checking responsiveness |

### 2.2 Folder Structure

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
│   │   └── Storage.js
│   └── pages/
├── assets/
│   └── images/
└── docs/
```

### 2.4 Page Flow

```text
Home Page
  → Products Page
      → Product Detail Page
          → Basket Page
              → Checkout Page
                  → Confirmation Message
```

---

## 4. Week 1 Summary

- Wrote all requirements
- Planned structure
- Created repo

