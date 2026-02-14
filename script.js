// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Counter Animation
const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + '+';
        }
    };
    
    updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Form Submission (Static - No Backend)
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Typewriter Effect for Hero Section
const typewriterElement = document.getElementById('typewriter');

if (typewriterElement) {
    const texts = [
        'Building Industry-Ready Developers...',
        'Initializing Coding Culture...',
        'Loading Innovation...',
        'CPC.launch()'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (!isDeleting && charIndex < currentText.length) {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        } else if (isDeleting && charIndex > 0) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            if (!isDeleting) {
                typingSpeed = 2000; // Pause at end
                isDeleting = true;
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before starting new text
            }
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typewriter effect after a short delay
    setTimeout(type, 1000);
}

// Terminal Lines Animation
const terminalLines = [
    document.getElementById('terminal-line-1'),
    document.getElementById('terminal-line-2'),
    document.getElementById('terminal-line-3')
];

// Ensure terminal lines are visible with staggered animation
if (terminalLines[0]) {
    setTimeout(() => {
        terminalLines.forEach((line, index) => {
            if (line) {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateX(0)';
                }, index * 500);
            }
        });
    }, 2000);
}


// Stagger Animation on Scroll
const staggerItems = document.querySelectorAll('.stagger-item');

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

staggerItems.forEach(item => {
    item.style.animationPlayState = 'paused';
    staggerObserver.observe(item);
});

// Spotlight Effect for Cards
const spotlightContainer = document.querySelector('.spotlight-container');
if (spotlightContainer) {
    const cards = spotlightContainer.querySelectorAll('.premium-glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.opacity = '0.5';
                    otherCard.style.transform = 'scale(0.98)';
                }
            });
        });
        
        card.addEventListener('mouseleave', () => {
            cards.forEach(otherCard => {
                otherCard.style.opacity = '1';
                otherCard.style.transform = 'scale(1)';
            });
        });
    });
}
