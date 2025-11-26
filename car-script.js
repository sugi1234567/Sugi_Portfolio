// ===================================
// Car Data
// ===================================
const carsData = [
    {
        id: 1,
        brand: 'Maruti Suzuki',
        name: 'Swift',
        price: '₹6.49 Lakh',
        priceValue: 649000,
        type: 'hatchback',
        fuel: 'Petrol',
        transmission: 'Manual',
        seating: '5',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop'
    },
    {
        id: 2,
        brand: 'Hyundai',
        name: 'Creta',
        price: '₹10.87 Lakh',
        priceValue: 1087000,
        type: 'suv',
        fuel: 'Diesel',
        transmission: 'Automatic',
        seating: '5',
        badge: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=500&h=300&fit=crop'
    },
    {
        id: 3,
        brand: 'Tata',
        name: 'Nexon EV',
        price: '₹14.99 Lakh',
        priceValue: 1499000,
        type: 'suv',
        fuel: 'Electric',
        transmission: 'Automatic',
        seating: '5',
        badge: 'EV',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=500&h=300&fit=crop'
    },
    {
        id: 4,
        brand: 'Honda',
        name: 'City',
        price: '₹11.82 Lakh',
        priceValue: 1182000,
        type: 'sedan',
        fuel: 'Petrol',
        transmission: 'CVT',
        seating: '5',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=300&fit=crop'
    },
    {
        id: 5,
        brand: 'Mahindra',
        name: 'Thar',
        price: '₹13.59 Lakh',
        priceValue: 1359000,
        type: 'suv',
        fuel: 'Diesel',
        transmission: 'Manual',
        seating: '4',
        badge: 'Adventure',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&h=300&fit=crop'
    },
    {
        id: 6,
        brand: 'Kia',
        name: 'Seltos',
        price: '₹10.90 Lakh',
        priceValue: 1090000,
        type: 'suv',
        fuel: 'Petrol',
        transmission: 'Automatic',
        seating: '5',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop'
    },
    {
        id: 7,
        brand: 'Toyota',
        name: 'Fortuner',
        price: '₹33.43 Lakh',
        priceValue: 3343000,
        type: 'suv',
        fuel: 'Diesel',
        transmission: 'Automatic',
        seating: '7',
        badge: 'Premium',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop'
    },
    {
        id: 8,
        brand: 'BMW',
        name: '3 Series',
        price: '₹46.90 Lakh',
        priceValue: 4690000,
        type: 'luxury',
        fuel: 'Petrol',
        transmission: 'Automatic',
        seating: '5',
        badge: 'Luxury',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop'
    },
    {
        id: 9,
        brand: 'Mercedes-Benz',
        name: 'C-Class',
        price: '₹55.90 Lakh',
        priceValue: 5590000,
        type: 'luxury',
        fuel: 'Petrol',
        transmission: 'Automatic',
        seating: '5',
        badge: 'Luxury',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop'
    },
    {
        id: 10,
        brand: 'Maruti Suzuki',
        name: 'Wagon R',
        price: '₹5.54 Lakh',
        priceValue: 554000,
        type: 'hatchback',
        fuel: 'Petrol',
        transmission: 'Manual',
        seating: '5',
        badge: 'Budget',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&h=300&fit=crop'
    },
    {
        id: 11,
        brand: 'Hyundai',
        name: 'Verna',
        price: '₹11.07 Lakh',
        priceValue: 1107000,
        type: 'sedan',
        fuel: 'Petrol',
        transmission: 'Automatic',
        seating: '5',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&h=300&fit=crop'
    },
    {
        id: 12,
        brand: 'Tata',
        name: 'Safari',
        price: '₹15.49 Lakh',
        priceValue: 1549000,
        type: 'suv',
        fuel: 'Diesel',
        transmission: 'Automatic',
        seating: '7',
        badge: 'Premium',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=300&fit=crop'
    }
];

// ===================================
// State Management
// ===================================
let currentFilter = 'all';
let isSignUpMode = false;

// ===================================
// DOM Elements
// ===================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const signInBtn = document.getElementById('signInBtn');
const signInModal = document.getElementById('signInModal');
const closeModal = document.getElementById('closeModal');
const authSwitchLink = document.getElementById('authSwitchLink');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const authTitle = document.getElementById('authTitle');
const authSubtitle = document.getElementById('authSubtitle');
const authSwitchText = document.getElementById('authSwitchText');
const carsGrid = document.getElementById('carsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchTabs = document.querySelectorAll('.search-tab');

// ===================================
// Navbar Scroll Effect
// ===================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Mobile Menu Toggle
// ===================================
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===================================
// Search Tab Switching
// ===================================
searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        searchTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// ===================================
// Modal Functions
// ===================================
function openModal() {
    signInModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    signInModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

signInBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking overlay
signInModal.querySelector('.modal-overlay').addEventListener('click', closeModalFunc);

// Switch between Sign In and Sign Up
authSwitchLink.addEventListener('click', (e) => {
    e.preventDefault();
    isSignUpMode = !isSignUpMode;

    if (isSignUpMode) {
        signInForm.classList.add('hidden');
        signUpForm.classList.remove('hidden');
        authTitle.textContent = 'Create Account';
        authSubtitle.textContent = 'Sign up to get started';
        authSwitchText.innerHTML = 'Already have an account? <a href="#" id="authSwitchLink" class="link-primary">Sign in</a>';
    } else {
        signUpForm.classList.add('hidden');
        signInForm.classList.remove('hidden');
        authTitle.textContent = 'Welcome Back!';
        authSubtitle.textContent = 'Sign in to access your account';
        authSwitchText.innerHTML = 'Don\'t have an account? <a href="#" id="authSwitchLink" class="link-primary">Sign up</a>';
    }

    // Re-attach event listener to new link
    document.getElementById('authSwitchLink').addEventListener('click', arguments.callee);
});

// Handle Sign In Form Submit
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    // Simulate successful login
    showNotification('Success! Welcome back.', 'success');
    closeModalFunc();

    // Reset form
    signInForm.reset();
});

// Handle Sign Up Form Submit
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const phone = document.getElementById('signUpPhone').value;
    const password = document.getElementById('signUpPassword').value;

    // Simulate successful registration
    showNotification('Account created successfully!', 'success');
    closeModalFunc();

    // Reset form
    signUpForm.reset();
});

// ===================================
// Social Auth
// ===================================
document.getElementById('googleSignInBtn').addEventListener('click', () => {
    showNotification('Opening Gmail...', 'info');
    // Open Gmail in a new tab
    window.open('https://mail.google.com', '_blank');
});

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#00d4aa' : '#667eea'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Car Display Functions
// ===================================
function renderCars(filter = 'all') {
    const filteredCars = filter === 'all'
        ? carsData
        : carsData.filter(car => car.type === filter);

    carsGrid.innerHTML = filteredCars.map(car => `
        <div class="car-card" data-type="${car.type}" onclick="viewCarDetails(${car.id})">
            <div class="car-image">
                <img src="${car.image}" alt="${car.brand} ${car.name}" loading="lazy">
                <span class="car-badge">${car.badge}</span>
            </div>
            <div class="car-details">
                <div class="car-brand">${car.brand}</div>
                <h3 class="car-name">${car.name}</h3>
                <div class="car-specs">
                    <span class="car-spec">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        ${car.fuel}
                    </span>
                    <span class="car-spec">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${car.transmission}
                    </span>
                    <span class="car-spec">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        </svg>
                        ${car.seating} Seats
                    </span>
                </div>
                <div class="car-price">
                    <span class="price">${car.price}</span>
                    <button class="view-details" onclick="event.stopPropagation(); viewCarDetails(${car.id})">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Animate cards
    const cards = document.querySelectorAll('.car-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// View car details
// View car details
function viewCarDetails(carId) {
    const car = carsData.find(c => c.id === carId);
    if (car) {
        const modal = document.getElementById('carDetailsModal');
        const content = document.getElementById('carDetailsContent');

        content.innerHTML = `
            <div class="modal-car-image">
                <img src="${car.image}" alt="${car.brand} ${car.name}">
                <span class="car-badge">${car.badge}</span>
            </div>
            <div class="modal-car-info">
                <div class="modal-car-header">
                    <div>
                        <div class="car-brand">${car.brand}</div>
                        <h2 class="car-name">${car.name}</h2>
                    </div>
                    <div class="price">${car.price}</div>
                </div>
                
                <div class="modal-specs-grid">
                    <div class="spec-item">
                        <span class="spec-label">Fuel Type</span>
                        <span class="spec-value">${car.fuel}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Transmission</span>
                        <span class="spec-value">${car.transmission}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Seating</span>
                        <span class="spec-value">${car.seating} Persons</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Type</span>
                        <span class="spec-value" style="text-transform: capitalize">${car.type}</span>
                    </div>
                </div>

                <div class="modal-actions">
                    <button class="btn-primary btn-block" onclick="showNotification('Test drive request sent!', 'success')">Book Test Drive</button>
                    <button class="btn-secondary btn-block" onclick="showNotification('Dealer will contact you shortly', 'success')">Contact Dealer</button>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Setup close button
        const closeBtn = document.getElementById('closeCarModal');
        const overlay = modal.querySelector('.modal-overlay');

        const closeCarModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        closeBtn.onclick = closeCarModal;
        overlay.onclick = closeCarModal;
    }
}

// ===================================
// Filter Functionality
// ===================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        currentFilter = filter;
        renderCars(filter);
    });
});

// ===================================
// Search Functionality
// ===================================
document.querySelector('.btn-search').addEventListener('click', (e) => {
    e.preventDefault();
    const brand = document.getElementById('brandSelect').value;
    const budget = document.getElementById('budgetSelect').value;
    const bodyType = document.getElementById('bodyTypeSelect').value;

    let searchParams = [];
    if (brand) searchParams.push(`Brand: ${brand}`);
    if (budget) searchParams.push(`Budget: ${budget}`);
    if (bodyType) searchParams.push(`Type: ${bodyType}`);

    if (searchParams.length > 0) {
        showNotification(`Searching for ${searchParams.join(', ')}`, 'info');

        // Filter cars based on search
        let filtered = carsData;

        if (brand) {
            filtered = filtered.filter(car =>
                car.brand.toLowerCase().replace(' ', '') === brand.toLowerCase()
            );
        }

        if (bodyType) {
            filtered = filtered.filter(car => car.type === bodyType);
        }

        // Scroll to cars section
        document.getElementById('new-cars').scrollIntoView({ behavior: 'smooth' });

        // Display filtered results
        setTimeout(() => {
            carsGrid.innerHTML = filtered.map(car => `
                <div class="car-card" data-type="${car.type}" onclick="viewCarDetails(${car.id})">
                    <div class="car-image">
                        <img src="${car.image}" alt="${car.brand} ${car.name}" loading="lazy">
                        <span class="car-badge">${car.badge}</span>
                    </div>
                    <div class="car-details">
                        <div class="car-brand">${car.brand}</div>
                        <h3 class="car-name">${car.name}</h3>
                        <div class="car-specs">
                            <span class="car-spec">⚡ ${car.fuel}</span>
                            <span class="car-spec">🔧 ${car.transmission}</span>
                            <span class="car-spec">👥 ${car.seating} Seats</span>
                        </div>
                        <div class="car-price">
                            <span class="price">${car.price}</span>
                            <button class="view-details" onclick="event.stopPropagation(); viewCarDetails(${car.id})">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            if (filtered.length === 0) {
                carsGrid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">No cars found</h3>
                        <p style="color: var(--text-secondary);">Try adjusting your search criteria</p>
                    </div>
                `;
            }
        }, 500);
    } else {
        showNotification('Please select at least one search criteria', 'info');
    }
});

// ===================================
// Newsletter Form
// ===================================
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    showNotification('Successfully subscribed to newsletter!', 'success');
    e.target.reset();
});

// ===================================
// Sell Car Button
// ===================================
document.getElementById('sellCarBtn').addEventListener('click', () => {
    showNotification('Sell Car feature coming soon!', 'info');
});

// ===================================
// Smooth Scroll for Nav Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    renderCars();

    // Add entrance animation to hero
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 400);
});
