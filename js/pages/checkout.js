// ============================================================
//  js/pages/checkout.js
// ============================================================

const basket = new Basket();


// ── On page load ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

    updateBasketBadge();

    if (basket.isEmpty()) {
        window.location.href = 'basket.html';
        return;
    }

    renderOrderSummary();
    setupForm();
    setupCardFormatting();
    setupBlurValidation();
});


// ── Order summary ─────────────────────────────────────────────

function renderOrderSummary() {

    const container = document.getElementById('checkout-items');
    const totalEl   = document.getElementById('checkout-total');

    if (!container) return;

    let html = '';
    basket.items.forEach(item => {
        html += `
            <div class="checkout-summary-item">
                <span class="checkout-item-name">${item.name} &times; ${item.qty}</span>
                <span class="checkout-item-price">€${(item.price * item.qty).toFixed(2)}</span>
            </div>
        `;
    });

    container.innerHTML = html;

    if (totalEl) {
        totalEl.textContent = '€' + basket.getTotal().toFixed(2);
    }
}


// ── Form setup ────────────────────────────────────────────────

function setupForm() {

    const form = document.getElementById('checkout-form');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Run name validation first so custom messages are set
        validateNameField(document.getElementById('first-name'));
        validateNameField(document.getElementById('last-name'));

        // Bootstrap validation
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        // Payment rules
        if (!validatePaymentDetails()) return;

        placeOrder();
    });
}


// ── Name field validation ─────────────────────────────────────

/**
 * Checks a name field for two things:
 *  1. Starts with a digit  → invalid (custom message)
 *  2. Fails the HTML pattern → invalid (let browser message show)
 * Uses setCustomValidity so Bootstrap's was-validated styling works correctly.
 */
function validateNameField(field) {
    if (!field) return;

    const val = field.value.trim();

    if (/^\d/.test(val)) {
        // Starts with a number — set a custom message
        field.setCustomValidity('Name must not start with a number.');
    } else {
        // Clear any previous custom message so the pattern check can run cleanly
        field.setCustomValidity('');
    }
}


// ── Blur validation ───────────────────────────────────────────

function setupBlurValidation() {

    const form = document.getElementById('checkout-form');
    if (!form) return;

    const nameFields = ['first-name', 'last-name'];
    const fields = form.querySelectorAll('input');

    fields.forEach(field => {

        field.addEventListener('blur', () => {

            // Run custom name logic before checkValidity
            if (nameFields.includes(field.id)) {
                validateNameField(field);
            }

            // Expiry: pattern may pass but date could be in the past
            if (field.id === 'expiry' && field.checkValidity() && !isValidExpiry(field.value.trim())) {
                field.classList.add('is-invalid');
                field.classList.remove('is-valid');
                return;
            }

            if (!field.checkValidity()) {
                field.classList.add('is-invalid');
                field.classList.remove('is-valid');
            } else {
                field.classList.add('is-valid');
                field.classList.remove('is-invalid');
            }
        });

        // Clear the custom validity message as soon as the user starts typing again
        // so the field doesn't stay stuck in invalid state mid-edit
        field.addEventListener('input', () => {
            if (nameFields.includes(field.id)) {
                field.setCustomValidity('');
            }
        });

    });
}


// ── Payment validation ────────────────────────────────────────

function validatePaymentDetails() {

    let valid = true;

    // Card number
    const cardField = document.getElementById('card-number');
    const cardNum = getVal('card-number').replace(/\s/g, '');

    cardField.classList.remove('is-invalid');

    if (cardNum.length !== 16 || isNaN(cardNum)) {
        cardField.classList.add('is-invalid');
        valid = false;
    }

    // Expiry
    const expiryField = document.getElementById('expiry');
    const expiry = getVal('expiry');

    expiryField.classList.remove('is-invalid');

    if (!isValidExpiry(expiry)) {
        expiryField.classList.add('is-invalid');
        expiryField.classList.remove('is-valid');
        valid = false;
    }

    // CVV
    const cvvField = document.getElementById('cvv');
    const cvv = getVal('cvv');

    cvvField.classList.remove('is-invalid');

    if (cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
        cvvField.classList.add('is-invalid');
        valid = false;
    }

    return valid;
}


// ── Place order ───────────────────────────────────────────────

function placeOrder() {

    basket.clear();
    updateBasketBadge();

    const checkoutContent = document.getElementById('checkout-content');
    const confirmation    = document.getElementById('confirmation-message');

    if (checkoutContent) checkoutContent.classList.add('d-none');
    if (confirmation)    confirmation.classList.remove('d-none');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ── Card formatting ───────────────────────────────────────────

function setupCardFormatting() {

    const cardInput = document.getElementById('card-number');
    if (cardInput) {
        cardInput.addEventListener('input', () => {
            let val = cardInput.value.replace(/\D/g, '');
            val = val.match(/.{1,4}/g);
            cardInput.value = val ? val.join(' ') : '';
        });
    }

    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', () => {
            let val = expiryInput.value.replace(/\D/g, '');
            if (val.length >= 3) {
                val = val.substring(0, 2) + '/' + val.substring(2, 4);
            }
            expiryInput.value = val;
        });
    }
}


// ── Helpers ───────────────────────────────────────────────────

function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
}

function isValidExpiry(expiry) {
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) return false;

    const now       = new Date();
    const currYear  = now.getFullYear() % 100; // e.g. 2026 → 26
    const currMonth = now.getMonth() + 1;      // 1–12

    const month = parseInt(expiry.substring(0, 2));
    const year  = parseInt(expiry.substring(3, 5));

    if (year < currYear) return false;
    if (year === currYear && month < currMonth) return false;

    return true;
}


// ── Basket badge ─────────────────────────────────────────────

function updateBasketBadge() {
    const count = basket.getCount();

    const badge       = document.getElementById('basket-count');
    const badgeMobile = document.getElementById('basket-count-mobile');

    if (badge)       badge.textContent       = count;
    if (badgeMobile) badgeMobile.textContent = count;
}
