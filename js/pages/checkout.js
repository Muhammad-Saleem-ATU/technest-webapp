// ============================================================
//  js/pages/checkout.js
//  Page script for checkout.html
//  Reads the basket from localStorage using the Basket class,
//  populates the order summary, validates the checkout form
//  and shows a confirmation message after a successful order.
//
//  Author : Muhammad Saleem
//  Student: L00196822
//  Week 8 - Checkout Form and Validation
// ============================================================

const basket = new Basket();


// ── On page load ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {

    updateBasketBadge();

    // If basket is empty send the user back to the basket page
    if (basket.isEmpty()) {
        window.location.href = 'basket.html';
        return;
    }

    renderOrderSummary();
    setupForm();
    setupCardFormatting();

});


// ── Order summary ─────────────────────────────────────────────
// Reads the basket items and builds the order summary list on
// the right hand side of the checkout page.

function renderOrderSummary() {

    const container = document.getElementById('checkout-items');
    const totalEl   = document.getElementById('checkout-total');

    if (!container) return;

    let html = '';
    basket.items.forEach(function (item) {
        html += `
            <div class="checkout-summary-item">
                <span class="checkout-item-name">${item.name} &times; ${item.qty}</span>
                <span class="checkout-item-price">\u20AC${(item.price * item.qty).toFixed(2)}</span>
            </div>
        `;
    });

    container.innerHTML = html;

    if (totalEl) {
        totalEl.textContent = '\u20AC' + basket.getTotal().toFixed(2);
    }
}


// ── Form setup ────────────────────────────────────────────────
// Attaches the submit listener to the checkout form.

function setupForm() {

    const form = document.getElementById('checkout-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Run validation — stop if anything fails
        if (!validateForm()) return;

        // All good — place the order
        placeOrder();
    });
}


// ── Validation ────────────────────────────────────────────────
// Checks each required field and shows an error message under
// any field that fails. Returns true only if everything passes.

function validateForm() {

    let valid = true;

    // Clear any previous error messages first
    clearErrors();

    // Personal details
    if (!getVal('first-name'))   showError('first-name',   'Please enter your first name.');
    if (!getVal('last-name'))    showError('last-name',    'Please enter your last name.');

    const email = getVal('email');
    if (!email) {
        showError('email', 'Please enter your email address.');
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address.');
    }

    // Delivery address
    if (!getVal('address-1'))  showError('address-1',  'Please enter your address.');
    if (!getVal('city'))       showError('city',       'Please enter your city.');
    if (!getVal('postcode'))   showError('postcode',   'Please enter your postcode.');

    // Payment
    const cardNum = getVal('card-number').replace(/\s/g, '');
    if (!cardNum) {
        showError('card-number', 'Please enter your card number.');
    } else if (cardNum.length !== 16 || isNaN(cardNum)) {
        showError('card-number', 'Card number must be 16 digits.');
    }

    const expiry = getVal('expiry');
    if (!expiry) {
        showError('expiry', 'Please enter the expiry date.');
    } else if (!isValidExpiry(expiry)) {
        showError('expiry', 'Please use MM/YY format.');
    }

    const cvv = getVal('cvv');
    if (!cvv) {
        showError('cvv', 'Please enter your CVV.');
    } else if (cvv.length < 3 || isNaN(cvv)) {
        showError('cvv', 'CVV must be 3 digits.');
    }

    // Check if any errors were added
    valid = document.querySelectorAll('.field-error').length === 0;

    return valid;
}


// ── Place order ───────────────────────────────────────────────
// Clears the basket, hides the form and shows the confirmation.

function placeOrder() {

    // Clear the basket from localStorage
    basket.clear();
    updateBasketBadge();

    // Hide the checkout form and show the confirmation message
    const checkoutContent = document.getElementById('checkout-content');
    const confirmation    = document.getElementById('confirmation-message');

    if (checkoutContent) checkoutContent.classList.add('d-none');
    if (confirmation)    confirmation.classList.remove('d-none');

    // Scroll to the top so the confirmation is visible
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ── Card number formatting ────────────────────────────────────
// Automatically adds a space every 4 digits as the user types
// so the card number looks like: 1234 5678 9012 3456

function setupCardFormatting() {

    const cardInput = document.getElementById('card-number');
    if (!cardInput) return;

    cardInput.addEventListener('input', function () {
        let val = cardInput.value.replace(/\D/g, '');   // digits only
        val = val.match(/.{1,4}/g);                     // split into groups of 4
        cardInput.value = val ? val.join(' ') : '';
    });

    // Auto-format expiry as MM/YY
    const expiryInput = document.getElementById('expiry');
    if (!expiryInput) return;

    expiryInput.addEventListener('input', function () {
        let val = expiryInput.value.replace(/\D/g, '');
        if (val.length >= 3) {
            val = val.substring(0, 2) + '/' + val.substring(2, 4);
        }
        expiryInput.value = val;
    });
}


// ── Helpers ───────────────────────────────────────────────────

// Gets trimmed value from a form field by id
function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
}

// Basic email format check
function isValidEmail(email) {
    return email.indexOf('@') > 0 && email.indexOf('.') > 0;
}

// Checks expiry is MM/YY format with a real month
function isValidExpiry(expiry) {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;
    const month = parseInt(expiry.substring(0, 2));
    return month >= 1 && month <= 12;
}

// Shows a red error message under a field
function showError(id, message) {
    const field = document.getElementById(id);
    if (!field) return;

    const error = document.createElement('div');
    error.className   = 'field-error';
    error.textContent = message;
    field.classList.add('is-invalid');
    field.parentNode.appendChild(error);
}

// Removes all existing error messages and invalid states
function clearErrors() {
    document.querySelectorAll('.field-error').forEach(function (el) {
        el.remove();
    });
    document.querySelectorAll('.is-invalid').forEach(function (el) {
        el.classList.remove('is-invalid');
    });
}


// ── Basket badge ─────────────────────────────────────────────

function updateBasketBadge() {
    const count       = basket.getCount();
    const badge       = document.getElementById('basket-count');
    const badgeMobile = document.getElementById('basket-count-mobile');

    if (badge)       badge.textContent       = count;
    if (badgeMobile) badgeMobile.textContent = count;
}
