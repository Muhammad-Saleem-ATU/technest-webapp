// ============================================================
//  products.js  (js/data/products.js)
//  Static array of product data for TechNest.
//  This is the single source of truth for all product
//  information in the application.
//  It is never modified at runtime — page scripts only read it.
//
//  20 products across 4 categories:
//  Laptops (5), Phones (5), Audio (5), Gaming (5)
//
//  Author : Muhammad Saleem
//  Student: L00196822
//  Week 4 - Data Modelling and OOP Structure
// ============================================================

const productsData = [

    // ── LAPTOPS ──────────────────────────────────────────────

    {
        id          : 'p001',
        name        : 'ProBook X15 Laptop',
        price       : 899.99,
        category    : 'Laptops',
        description : 'A powerful 15-inch laptop built for everyday productivity and multitasking. Features a Full HD IPS display, fast SSD storage and a long-lasting battery. Ideal for students and professionals who need reliable performance on the go.',
        image       : 'assets/images/p001.jpg'
    },
    {
        id          : 'p002',
        name        : 'UltraSlim 13 Laptop',
        price       : 749.99,
        category    : 'Laptops',
        description : 'A lightweight 13-inch laptop designed for portability without sacrificing performance. Thin aluminium body, backlit keyboard and all-day battery life make it a great choice for working anywhere.',
        image       : 'assets/images/p002.jpg'
    },
    {
        id          : 'p003',
        name        : 'GameForce Pro Laptop',
        price       : 1299.99,
        category    : 'Laptops',
        description : 'A high-performance gaming laptop with a dedicated GPU, 144Hz display and advanced cooling system. Handles demanding games and creative applications with ease. Built for serious performance.',
        image       : 'assets/images/p003.jpg'
    },
    {
        id          : 'p004',
        name        : 'WorkStation 17 Laptop',
        price       : 1099.99,
        category    : 'Laptops',
        description : 'A large-screen 17-inch laptop designed for power users and developers. Spacious keyboard, high-resolution display and expandable RAM make this a solid workstation replacement for those who need desktop-level power in a portable form.',
        image       : 'assets/images/p004.jpg'
    },
    {
        id          : 'p005',
        name        : 'BudgetBook Essential',
        price       : 399.99,
        category    : 'Laptops',
        description : 'An affordable and reliable laptop for everyday tasks. Handles web browsing, documents and video streaming without any fuss. A practical choice for students or anyone who needs a dependable machine at a reasonable price.',
        image       : 'assets/images/p005.jpg'
    },

    // ── PHONES ───────────────────────────────────────────────

    {
        id          : 'p006',
        name        : 'NovaPro X Phone',
        price       : 799.99,
        category    : 'Phones',
        description : 'A flagship smartphone with a stunning AMOLED display, triple camera system and fast charging support. Smooth performance for photography, gaming and daily use. Available in midnight black and arctic silver.',
        image       : 'assets/images/p006.jpg'
    },
    {
        id          : 'p007',
        name        : 'NovaPro Lite Phone',
        price       : 449.99,
        category    : 'Phones',
        description : 'A mid-range smartphone that delivers great value without cutting too many corners. Solid camera, reliable battery life and a sharp display make this a smart everyday phone for most users.',
        image       : 'assets/images/p007.jpg'
    },
    {
        id          : 'p008',
        name        : 'ZenPhone Ultra',
        price       : 999.99,
        category    : 'Phones',
        description : 'A premium smartphone with a large display, long battery life and excellent low-light camera performance. Packed with the latest features for users who want the best experience available.',
        image       : 'assets/images/p008.jpg'
    },
    {
        id          : 'p009',
        name        : 'CompactView Mini Phone',
        price       : 299.99,
        category    : 'Phones',
        description : 'A compact and lightweight smartphone designed for users who prefer a smaller form factor. Fits comfortably in one hand, easy to carry and reliable for calls, messaging and light daily use.',
        image       : 'assets/images/p009.jpg'
    },
    {
        id          : 'p010',
        name        : 'RugedX Outdoor Phone',
        price       : 549.99,
        category    : 'Phones',
        description : 'A rugged, waterproof smartphone built to handle tough conditions. Drop-resistant, dustproof and rated for outdoor use. A dependable choice for anyone who works in challenging environments or enjoys outdoor activities.',
        image       : 'assets/images/p010.jpg'
    },

    // ── AUDIO ────────────────────────────────────────────────

    {
        id          : 'p011',
        name        : 'SoundWave Pro Headphones',
        price       : 199.99,
        category    : 'Audio',
        description : 'Over-ear wireless headphones with active noise cancellation and premium sound quality. Up to 30 hours of battery life on a single charge. Comfortable padded ear cups make them suitable for long listening sessions.',
        image       : 'assets/images/p011.jpg'
    },
    {
        id          : 'p012',
        name        : 'BassCore Earbuds',
        price       : 89.99,
        category    : 'Audio',
        description : 'True wireless earbuds with deep bass and a secure fit for active use. IPX4 water resistance, touch controls and up to 6 hours of playback per charge with an additional 18 hours from the charging case.',
        image       : 'assets/images/p012.jpg'
    },
    {
        id          : 'p013',
        name        : 'StudioMix Speaker',
        price       : 149.99,
        category    : 'Audio',
        description : 'A portable Bluetooth speaker with 360-degree sound and a compact design. Waterproof and dustproof for outdoor use. Connects easily to any Bluetooth device and delivers surprisingly powerful audio for its size.',
        image       : 'assets/images/p013.jpg'
    },
    {
        id          : 'p014',
        name        : 'ClearVoice USB Microphone',
        price       : 79.99,
        category    : 'Audio',
        description : 'A plug-and-play USB condenser microphone ideal for streaming, podcasting and video calls. Cardioid pickup pattern reduces background noise and captures clear, crisp voice audio without any additional software or drivers.',
        image       : 'assets/images/p014.jpg'
    },
    {
        id          : 'p015',
        name        : 'AudioPhile Wired Headphones',
        price       : 129.99,
        category    : 'Audio',
        description : 'High-fidelity wired headphones designed for audiophiles who prioritise sound accuracy over wireless convenience. Flat, detailed sound signature with a wide soundstage. Includes a detachable cable and carrying pouch.',
        image       : 'assets/images/p015.jpg'
    },

    // ── GAMING ───────────────────────────────────────────────

    {
        id          : 'p016',
        name        : 'ProPad Elite Controller',
        price       : 69.99,
        category    : 'Gaming',
        description : 'A precision wireless gaming controller with programmable buttons, adjustable trigger sensitivity and a comfortable ergonomic grip. Compatible with PC and most modern consoles. Low latency wireless connection for responsive gameplay.',
        image       : 'assets/images/p016.jpg'
    },
    {
        id          : 'p017',
        name        : 'RapidClick Gaming Mouse',
        price       : 59.99,
        category    : 'Gaming',
        description : 'A high-precision gaming mouse with adjustable DPI up to 12000, RGB lighting and six programmable buttons. Lightweight design with a comfortable shape for extended gaming sessions. Braided cable for durability.',
        image       : 'assets/images/p017.jpg'
    },
    {
        id          : 'p018',
        name        : 'TactilePro Gaming Keyboard',
        price       : 99.99,
        category    : 'Gaming',
        description : 'A full-size mechanical gaming keyboard with tactile switches, per-key RGB backlighting and a solid aluminium frame. Dedicated media controls and anti-ghosting support for accurate input during fast-paced games.',
        image       : 'assets/images/p018.jpg'
    },
    {
        id          : 'p019',
        name        : 'VisionX 27 Gaming Monitor',
        price       : 349.99,
        category    : 'Gaming',
        description : 'A 27-inch gaming monitor with a 165Hz refresh rate, 1ms response time and FreeSync support. QHD resolution delivers sharp visuals and the curved panel provides an immersive viewing experience for both gaming and general use.',
        image       : 'assets/images/p019.jpg'
    },
    {
        id          : 'p020',
        name        : 'HyperSound Gaming Headset',
        price       : 79.99,
        category    : 'Gaming',
        description : 'A surround sound gaming headset with a noise-cancelling boom microphone and large 50mm drivers. Padded ear cups for comfort during long sessions. Works with PC, console and mobile via 3.5mm jack or USB adapter.',
        image       : 'assets/images/p020.jpg'
    }

];
