//  js/pages/admin.js
// ============================================================
//  TechNest Admin Panel
// ============================================================

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';
let uploadedImage = '';

const imageInput = document.getElementById('new-image');

imageInput.addEventListener('change', function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        uploadedImage = e.target.result;
    };

    reader.readAsDataURL(file);
});

// ── Elements ────────────────────────────────────────────────

const loginSection = document.getElementById('login-section');
const adminSection = document.getElementById('admin-section');

const loginBtn     = document.getElementById('login-btn');
const logoutBtn    = document.getElementById('logout-btn');

const loginError   = document.getElementById('login-error');

const tableBody    = document.getElementById('products-table-body');


// ── Product storage ─────────────────────────────────────────

let products = JSON.parse(localStorage.getItem('technest-products')) || productsData;

saveProducts();


function saveProducts() {
    localStorage.setItem('technest-products', JSON.stringify(products));
}


// ── Login ───────────────────────────────────────────────────

loginBtn.addEventListener('click', () => {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {

        localStorage.setItem('admin-logged-in', 'true');

        showAdminPanel();

    } else {

        loginError.classList.remove('d-none');
    }
});


logoutBtn.addEventListener('click', () => {

    localStorage.removeItem('admin-logged-in');

    location.reload();
});


function showAdminPanel() {

    loginSection.classList.add('d-none');

    adminSection.classList.remove('d-none');

    renderProducts();
}


if (localStorage.getItem('admin-logged-in') === 'true') {
    showAdminPanel();
}


// ── Render products ─────────────────────────────────────────

function renderProducts() {

    tableBody.innerHTML = '';

    products.forEach(product => {

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.name}</td>

            <td>
				<input
					type="number"
					class="form-control price-input"
					value="${product.price}"
					data-price-id="${product.id}"
					min="0"
					step="0.01"
				>
			</td>
            <td>
                <input
                    type="number"
                    class="form-control stock-input"
                    value="${product.stock}"
                    data-id="${product.id}"
                    min="0"
                >
            </td>

            <td>
                <button
                    class="btn btn-success btn-sm save-stock-btn"
                    data-id="${product.id}"
                >
                    Save
                </button>

                <button
                    class="btn btn-danger btn-sm delete-btn"
                    data-id="${product.id}"
                >
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    bindButtons();
}


// ── Bind buttons ────────────────────────────────────────────

function bindButtons() {

    document.querySelectorAll('.save-stock-btn').forEach(btn => {

		btn.addEventListener('click', () => {

			const id = btn.dataset.id;

			const stockInput = document.querySelector(
				`input[data-id="${id}"]`
			);

			const priceInput = document.querySelector(
				`input[data-price-id="${id}"]`
			);

			const product = products.find(
				p => String(p.id) === String(id)
			);

			product.stock = parseInt(stockInput.value);

			product.price = parseFloat(priceInput.value);

			saveProducts();

			alert('Product updated successfully.');
		});
	});


    document.querySelectorAll('.delete-btn').forEach(btn => {

        btn.addEventListener('click', () => {

            const id = btn.dataset.id;

            products = products.filter(p => String(p.id) !== String(id));

            saveProducts();

            renderProducts();
        });
    });
}


// ── Add product ─────────────────────────────────────────────

const addBtn = document.getElementById('add-product-btn');

addBtn.addEventListener('click', () => {

    const name =
        document.getElementById('new-name').value.trim();

    const category =
        document.getElementById('new-category').value.trim();

    const description =
        document.getElementById('new-description').value.trim();

    const price = parseFloat(
        document.getElementById('new-price').value
    );

    const stock = parseInt(
        document.getElementById('new-stock').value
    );

    // Validation

    if (name.length === 0 || name.length > 60) {
        alert('Product name must be between 1 and 60 characters.');
        return;
    }

    if (category.length === 0 || category.length > 30) {
        alert('Category name must be between 1 and 30 characters.');
        return;
    }

    if (description.length === 0 || description.length > 300) {
        alert('Description must be between 1 and 300 characters.');
        return;
    }

    if (isNaN(price) || price < 0) {
        alert('Please enter a valid price.');
        return;
    }

    if (isNaN(stock) || stock < 0) {
        alert('Please enter a valid stock quantity.');
        return;
    }

    if (!uploadedImage) {
        alert('Please upload a product image.');
        return;
    }

    const newProduct = {

        id: 'p' + Date.now(),

        name: name,

        price: price,

        stock: stock,

        category: category,

        image: uploadedImage,

        description: description
    };

    products.push(newProduct);

    saveProducts();

    renderProducts();

    alert('Product added successfully.');
});