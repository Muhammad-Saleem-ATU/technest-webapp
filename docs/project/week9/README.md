# TechNest – Front-End eCommerce Web Application

**Student:** Muhammad Saleem
**Student No:** L00196822
**Course:** BSc Honours in Contemporary Software Development
**University:** Atlantic Technological University
**Week:** 9 – Testing and Refinement

---

## What is TechNest?

TechNest is a front-end eCommerce web application built for a fictional electronics and gadgets retailer. It runs entirely in the browser – there is no backend server or database involved. Everything is handled with HTML, CSS, Bootstrap 5 and JavaScript (ES6+).

Users can browse products, filter and search the catalogue, add items to a basket and go through a checkout process. The basket data is saved using `localStorage` so it stays there if you refresh the page.

---

## Running the Project

The application is deployed and can be accessed directly online:

**Live Demo:**
```bash
https://gotechnest.netlify.app/
```

This is the recommended way to test the system.

---

### Running Locally (Optional)

To ensure correct behaviour of browser storage (localStorage), the project should be run using a local development server rather than opening files directly.

#### Option 1: VS Code Live Server (Recommended)
1. Open the project in Visual Studio Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html`
4. Select **"Open with Live Server"**

#### Option 2: Python Server

Run the following command in the project folder:

```bash
python -m http.server
```

Then open in your browser:
```md
http://localhost:8000/
```

---

## Project Structure

```text
technest/
│
├── index.html              # Homepage / product listing
├── product.html            # Individual product detail page
├── basket.html             # Basket / cart page
├── checkout.html           # Checkout form page
│
├── css/
│   └── styles.css          # Custom styles (Bootstrap is loaded via CDN)
│
├── js/
│   ├── products.js         # Product data (array of product objects)
│   ├── Product.js          # Product class
│   ├── Basket.js           # Basket class – handles add/remove/update
│   ├── Storage.js          # Storage class – wraps localStorage
│   ├── catalogue.js        # Renders product listing, handles filtering/sorting
│   ├── productDetail.js    # Loads correct product using URL parameters
│   ├── basketPage.js       # Renders basket contents and handles updates
│   └── checkout.js         # Form validation and submission handling
│
└── README.md
```

---

## Features

- Browse a product catalogue with dynamic rendering from JavaScript data
- Filter products by category (phones, laptops, accessories etc.)
- Search by keyword
- Sort by price or name
- View individual product detail pages (URL parameter routing)
- Add products to the basket
- Update quantities or remove items from the basket
- Basket total recalculates automatically
- Basket data persists across page reloads using localStorage
- Checkout form with client-side validation
- Responsive layout for desktop, tablet and mobile

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Custom styling |
| Bootstrap 5 | Responsive grid and UI components |
| JavaScript ES6+ | Application logic, OOP classes, DOM manipulation |
| localStorage API | Client-side data persistence |
| Git / GitHub | Version control |

---

## Week 9 Focus – Testing

This week is about testing the application properly. I am going through each feature and checking it works as expected. Test cases are documented in the Week 9 planning document.

Things being tested this week:
- Product listing and filtering
- Product detail page loading
- Basket CRUD (add, update, remove)
- localStorage persistence after refresh
- Checkout form validation
- Responsive layout on mobile and tablet sizes

Any bugs found are being fixed and committed separately so the Git history stays clear.

---

## Known Issues / Work in Progress

- Basket badge count in navbar – checking it always updates immediately
- Minor spacing issues on smaller screen sizes being reviewed
- No real payment processing (this is a front-end prototype only)

---

## Git Commit Style

Commits this week follow this format:

```text
week9: fix basket badge update on add to basket
week9: refactor filter function in catalogue.js
week9: cross-device testing, patch mobile padding
```

---

## References

- Bootstrap (2021) *Bootstrap 5.0 Documentation*. Available at: 
```md
https://getbootstrap.com/docs/5.0
```
- MDN Web Docs (2023) *JavaScript reference*. Available at: 
```md
https://developer.mozilla.org/en-US/docs/Web/JavaScript
```
- Flanagan, D. (2020) *JavaScript: The Definitive Guide*. 7th edn. O'Reilly Media.
- Osmani, A. (2022) *Learning JavaScript Design Patterns*. 2nd edn. O'Reilly Media.
