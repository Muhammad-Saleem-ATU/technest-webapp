# Week 8 – Checkout Form and Validation

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Institution:** Atlantic Technological University  
**Week:** 8 of 10

---

## What I Did This Week

This week I built the checkout page functionality. The checkout page was already
styled and had all the HTML form fields in place from week 2, but none of it was
connected to JavaScript. This week I wrote checkout.js to read the basket contents
into the order summary, validate every form field before allowing the order through,
handle the place order action which clears the basket and shows a confirmation
message, and add auto-formatting to the card number and expiry fields to improve
the user experience. The style.css file was also updated with styles for the order
summary rows and the validation error messages.

---

## 1. New Page Script

### 1.1 js/pages/checkout.js

The page script for checkout.html. Like basket.js, a single Basket instance is
created at the top of the file and reused throughout so localStorage is only
read once on page load.

**On page load** — `updateBasketBadge()` runs first to show the correct count in
the navbar. Then the basket is checked with `basket.isEmpty()`. If the basket is
empty the user is redirected straight back to basket.html using
`window.location.href`. This prevents someone reaching a blank checkout page with
no items. If the basket has items then `renderOrderSummary()`, `setupForm()` and
`setupCardFormatting()` are all called.

---

### 1.2 Functions

**renderOrderSummary()** — reads `basket.items` and builds a list of item rows
inside the `#checkout-items` container on the right hand side of the page. Each
row shows the product name, quantity and line total. The overall total is written
into `#checkout-total` using `basket.getTotal()`.

**setupForm()** — attaches a submit event listener to `#checkout-form`. The
listener calls `e.preventDefault()` to stop the browser doing a page reload, then
calls `validateForm()`. If validation returns false the function stops and the
errors are shown. If validation returns true `placeOrder()` is called.

**validateForm()** — the main validation function. It calls `clearErrors()` first
to remove any messages left from a previous attempt, then checks every required
field one by one. It returns true only if no `.field-error` elements were added
to the page. The specific checks are:

- First name and last name — must not be empty
- Email — must not be empty and must contain both @ and a dot using `isValidEmail()`
- Address line 1, city and postcode — must not be empty
- Card number — must not be empty, must be exactly 16 digits after spaces are
  stripped, must be numeric
- Expiry — must not be empty, must match MM/YY format using a regular expression,
  month must be between 1 and 12 using `isValidExpiry()`
- CVV — must not be empty, must be at least 3 characters, must be numeric

**placeOrder()** — called only after validation passes. Calls `basket.clear()`
which empties `this.items` and removes the `technest-basket` key from localStorage.
Then calls `updateBasketBadge()` so the navbar badge drops to zero. The
`#checkout-content` div is hidden by adding Bootstrap's `d-none` class and the
`#confirmation-message` div is shown by removing `d-none`. Finally
`window.scrollTo()` smoothly scrolls the page back to the top so the confirmation
is visible.

**setupCardFormatting()** — attaches input event listeners to the card number and
expiry fields to format them as the user types. The card number listener strips
all non-digit characters, splits the remaining digits into groups of four using a
regular expression and rejoins them with spaces, giving the standard
`1234 5678 9012 3456` format. The expiry listener strips non-digits and inserts a
forward slash after the second character automatically so the user only needs to
type the digits.

---

### 1.3 Helper Functions

**getVal(id)** — gets the trimmed value of a form field by its id. Used throughout
`validateForm()` to avoid repeating `document.getElementById()` and `.value.trim()`
on every field.

**isValidEmail(email)** — a simple check that the email string contains an @ symbol
after the first character and a dot somewhere after that. This is not a full RFC
email validator but is sufficient for a front-end project at this level.

**isValidExpiry(expiry)** — uses a regular expression `/^\d{2}\/\d{2}$/` to check
the format is exactly two digits, a forward slash and two more digits. Then parses
the month and checks it is between 1 and 12.

**showError(id, message)** — finds the form field by id, adds the Bootstrap
`is-invalid` class to give it a red border, then creates a new `div` with class
`field-error` and appends it directly after the field inside its parent container.

**clearErrors()** — removes all `.field-error` divs from the page and removes the
`is-invalid` class from all fields. Called at the start of every `validateForm()`
call so errors from the previous attempt do not stack up.

---

## 2. HTML Changes

### 2.1 checkout.html

Script tags added before the Bootstrap script at the bottom of the file. The load
order matches the other pages — StorageManager first because Basket depends on it:

```html
<script src="js/models/StorageManager.js"></script>
<script src="js/models/Basket.js"></script>
<script src="js/models/Product.js"></script>
<script src="js/data/products.js"></script>
<script src="js/pages/checkout.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

---

## 3. CSS Changes

### 3.1 style.css

Two new sections added at the bottom of the stylesheet:

**Order summary rows** — `.checkout-summary-item` uses flexbox with
`justify-content: space-between` to push the item name to the left and the price
to the right. A bottom border separates each row. `.checkout-item-price` is styled
in orange to match the rest of the site.

**Validation styles** — `.field-error` is a small red text block that appears
directly below an invalid field. `.form-control.is-invalid` overrides Bootstrap's
default blue invalid border with red to match the error text colour.

---

## 4. File Structure After Week 8

```text
technest-webapp/
├── index.html                     -- unchanged
├── products.html                  -- unchanged
├── product-detail.html            -- unchanged
├── basket.html                    -- unchanged
├── checkout.html                  -- updated: script tags added
├── css/
│   └── style.css                  -- updated: checkout and validation styles added
├── icons/
│   └── favicon.ico                -- unchanged
├── js/
│   ├── data/
│   │   └── products.js            -- unchanged
│   ├── models/
│   │   ├── Product.js             -- unchanged
│   │   ├── Basket.js              -- unchanged
│   │   └── StorageManager.js      -- unchanged
│   └── pages/
│       ├── index.js               -- unchanged
│       ├── products.js            -- unchanged
│       ├── product-detail.js      -- unchanged
│       ├── basket.js              -- unchanged
│       └── checkout.js            -- NEW: checkout page script
├── assets/
│   └── images/
└── docs/
    └── diagrams/
```

---

## 5. Decisions Made This Week

**Redirect if basket is empty** — rather than showing the checkout page with an
empty order summary, the page immediately redirects to basket.html if no items
are found. This avoids confusion and is standard eCommerce behaviour. It also
means the rest of the page load code can assume the basket has items without
needing extra checks.

**Client-side validation only** — there is no back-end server in this project so
all validation runs in the browser using JavaScript. Each field is checked in
sequence and error messages are shown inline under the relevant field rather than
in a single block at the top. This makes it clearer for the user which fields need
fixing.

**e.preventDefault() on form submit** — without this the browser would try to
submit the form as a standard HTTP POST request and reload the page. Since there
is no server to receive it the page would just go blank. Calling
`e.preventDefault()` keeps everything running in JavaScript.

**clearErrors() before every validation run** — if the user submits the form,
sees errors, fixes some but not all and submits again, calling `clearErrors()`
first makes sure old error messages are removed before new ones are added. Without
this, duplicate error messages would appear under fields.

**Auto-format card number and expiry** — these fields are formatted as the user
types rather than on blur or on submit. This gives immediate visual feedback and
makes it obvious the input is being accepted in the right format. The card number
formatter strips non-digits first so pasted numbers with dashes or spaces are
handled cleanly.

**basket.clear() before showing confirmation** — the basket is cleared before
hiding the form so that if anything went wrong with the DOM manipulation the
basket would still be empty. Clearing first also means the badge in the navbar
updates immediately when `updateBasketBadge()` is called straight after.

---

## 6. Week 8 Summary

- Written checkout.js with renderOrderSummary, setupForm, validateForm, placeOrder,
  setupCardFormatting and all helper functions
- Full client-side validation on all nine form fields with inline error messages
- Auto-formatting for card number (groups of four) and expiry (MM/YY slash)
- Basket cleared and confirmation shown after successful order
- Redirect to basket.html if checkout is accessed with an empty basket
- Script tags added to checkout.html in correct load order
- Checkout and validation CSS added to style.css
- Committed all new and updated files to GitHub

**Next week (Week 9):** Testing and code refactoring. Each page will be tested
manually in the browser, any bugs found will be fixed and the code will be tidied
up where needed.
