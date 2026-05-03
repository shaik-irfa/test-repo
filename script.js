// ====================================
// FORM HANDLING
// ====================================

// Get the contact form element
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
    // Prevent the form from actually submitting to a server
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation: check if all fields are filled
    if (name && email && message) {
        // Show success message
        formMessage.textContent = '✓ Thank you! Your message has been sent successfully.';
        formMessage.classList.add('success');
        formMessage.classList.remove('error');

        // Clear the form fields
        contactForm.reset();

        // Remove the message after 3 seconds
        setTimeout(function() {
            formMessage.textContent = '';
            formMessage.classList.remove('success');
        }, 3000);
    } else {
        // Show error message
        formMessage.textContent = '✗ Please fill in all fields.';
        formMessage.classList.add('error');
        formMessage.classList.remove('success');
    }
});

// ====================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ====================================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event to each navigation link
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smooth scroll to the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====================================
// BUTTON CLICK HANDLER
// ====================================

// Get the "Get Started" button from the hero section
const ctaButton = document.querySelector('.cta-button');

// Add click event listener
ctaButton.addEventListener('click', function() {
    // Scroll to the services section when "Get Started" is clicked
    const servicesSection = document.querySelector('#services');
    servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// ====================================
// HOVER EFFECTS FOR SERVICE CARDS
// ====================================

// Get all service cards
const serviceCards = document.querySelectorAll('.service-card');

// Add hover effects to each card
serviceCards.forEach(function(card) {
    // When mouse enters the card
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ====================================
// SCROLL ANIMATION (Optional Enhancement)
// ====================================

// Function to check if an element is in view
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Add scroll event listener for animations
window.addEventListener('scroll', function() {
    // You can add more interactive effects here as the page is scrolled
    // For example, fade in elements as they come into view
});

// ====================================
// EMAIL VALIDATION HELPER (Optional)
// ====================================

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Optional: You can enhance the form validation by uncommenting the code below
/*
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if email is valid
    if (!isValidEmail(email)) {
        formMessage.textContent = '✗ Please enter a valid email address.';
        formMessage.classList.add('error');
        formMessage.classList.remove('success');
        return;
    }

    if (name && email && message) {
        formMessage.textContent = '✓ Thank you! Your message has been sent successfully.';
        formMessage.classList.add('success');
        formMessage.classList.remove('error');
        contactForm.reset();

        setTimeout(function() {
            formMessage.textContent = '';
            formMessage.classList.remove('success');
        }, 3000);
    }
});
*/

console.log('Website JavaScript loaded successfully!');
