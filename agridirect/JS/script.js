/* ==========================================================================
   AGRIDIRECT SA - MAIN JAVASCRIPT FILE (JS/script.js)
   Handles form validation, interactive filters, mobile navigation, and FAQs
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. MOBILE MENU TOGGLE
    // ----------------------------------------------------------------------
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    // Create a mobile menu button dynamically if screen is small
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '&#9776; Menu'; // Hamburger icon
    mobileMenuBtn.style.display = 'none'; // Hidden by default on desktop

    if (header && nav) {
        header.insertBefore(mobileMenuBtn, nav);

        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
        });
    }

    // ----------------------------------------------------------------------
    // 2. ENQUIRY FORM VALIDATION & INTERACTIVITY (Enquiry.html)
    // ----------------------------------------------------------------------
    const enquiryForm = document.querySelector('#enquiry-form-section form');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent standard page refresh

            const userRole = document.getElementById('user-role').value;
            const fullName = document.getElementById('full-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const details = document.getElementById('produce-details').value.trim();

            // Simple validation check
            if (!fullName || !email || !phone || !details) {
                alert('Please fill in all required fields before submitting.');
                return;
            }

            // Display success feedback message
            alert(`Thank you, ${fullName}! Your enquiry as a ${userRole} has been submitted successfully. Our team will contact you at ${email} shortly.`);

            // Reset form fields
            enquiryForm.reset();
        });
    }

    // ----------------------------------------------------------------------
    // 3. CONTACT FORM VALIDATION (Contact.html)
    // ----------------------------------------------------------------------
    const contactForm = document.querySelector('#general-contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const cName = document.getElementById('cname').value.trim();
            const cEmail = document.getElementById('cemail').value.trim();
            const cMsg = document.getElementById('cmsg').value.trim();

            if (!cName || !cEmail || !cMsg) {
                alert('Please complete all contact fields.');
                return;
            }

            alert(`Thank you ${cName}, your message has been sent to our support team.`);
            contactForm.reset();
        });
    }

    // ----------------------------------------------------------------------
    // 4. LIVE PRODUCE SEARCH & FILTER (Products.html)
    // ----------------------------------------------------------------------
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');
    const filterForm = document.querySelector('#filter-section form');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const selectedCategory = categorySelect ? categorySelect.value.toLowerCase() : 'all';

        productCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardCategory = (card.dataset.category || '').toLowerCase();
            const matchesSearch = cardText.includes(searchTerm);

            // Match against the card's data-category attribute (set on each .product-card)
            const matchesCategory = (selectedCategory === 'all') || cardCategory === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (filterForm) {
        filterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            filterProducts();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', filterProducts);
    }

    // ----------------------------------------------------------------------
    // 5. INTERACTIVE FAQ ACCORDION (Added dynamically if FAQ section exists)
    // ----------------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            if (answer) {
                const isVisible = answer.style.display === 'block';
                answer.style.display = isVisible ? 'none' : 'block';
            }
        });
    });

});