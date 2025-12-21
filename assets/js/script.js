// SCRIPT LOADED - Testing
console.log('===== SCRIPT.JS LOADED =====');

// Dark mode is permanent - no toggle needed
const html = document.documentElement;
html.classList.add('dark');
console.log('Dark mode activated');

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only process valid anchors (not just '#')
        if (href && href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 64; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Scroll to top button
const scrollTopButton = document.getElementById('scroll-top');

if (scrollTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.remove('opacity-0', 'invisible');
            scrollTopButton.classList.add('opacity-100', 'visible');
        } else {
            scrollTopButton.classList.add('opacity-0', 'invisible');
            scrollTopButton.classList.remove('opacity-100', 'visible');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

console.log('Checkpoint 1: After Scroll Top Button');

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-primary', 'font-semibold');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-primary', 'font-semibold');
                }
            });
        }
    });
}

console.log('Checkpoint 2: After Navigation Highlighting');

window.addEventListener('scroll', highlightNavigation);

// Add typing effect to hero section
const heroTitle = document.querySelector('#home h1 span');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    setTimeout(typeWriter, 500);
}

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.card-hover');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tags animation on scroll
const skillTags = document.querySelectorAll('.skill-tag');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, index * 50);
        }
    });
}, { threshold: 0.5 });

skillTags.forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    skillObserver.observe(tag);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#home');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

console.log('Checkpoint 3: After Parallax Effect');

// Dynamic typing effect for roles
const roles = ['Software Engineer', 'Backend Developer', 'Python Developer', 'Database Architect'];
const roleElement = document.getElementById('typing-role');
let roleIndex = 0;
let charIndex = roles[0].length; // Start with full text
let isDeleting = false;
let typeSpeed = 100;

function typeRole() {
    if (!roleElement) return; // Safety check

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before typing next
    }

    setTimeout(typeRole, typeSpeed);
}

// Start the typing effect if element exists
if (roleElement) {
    // Initial pause before starting to delete the first role
    setTimeout(() => {
        isDeleting = true;
        typeRole();
    }, 2000);
}

// Scroll Progress Bar
const scrollProgressBar = document.getElementById('scroll-progress');
if (scrollProgressBar) {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgressBar.style.width = scrolled + '%';
    });
}

console.log('Checkpoint 4: After Scroll Progress Bar');

// Toggle Certificates
console.log('===== STARTING TOGGLE CERTIFICATES SECTION =====');
const toggleCertificatesBtn = document.getElementById('toggle-certificates');
const additionalCertificates = document.getElementById('additional-certificates');
const toggleText = document.getElementById('toggle-certificates-text');
const toggleIcon = document.getElementById('toggle-certificates-icon');

// Debug: log what elements were found
console.log('Toggle Certificates Debug:');
console.log('- toggleCertificatesBtn:', toggleCertificatesBtn);
console.log('- additionalCertificates:', additionalCertificates);
console.log('- toggleText:', toggleText);
console.log('- toggleIcon:', toggleIcon);

if (toggleCertificatesBtn && additionalCertificates && toggleText && toggleIcon) {
    console.log('All elements found! Adding click listener...');

    // Detect language from HTML lang attribute
    const isSpanish = document.documentElement.lang === 'es';
    const showAllText = isSpanish ? 'Ver todos los certificados' : 'Show all certificates';
    const showLessText = isSpanish ? 'Ver menos' : 'Show less';

    toggleCertificatesBtn.addEventListener('click', (e) => {
        console.log('Button clicked!');
        e.preventDefault();
        e.stopPropagation();

        additionalCertificates.classList.toggle('hidden');
        console.log('Hidden class toggled. Current classes:', additionalCertificates.className);

        if (additionalCertificates.classList.contains('hidden')) {
            toggleText.textContent = showAllText;
            toggleIcon.style.transform = 'rotate(0deg)';
        } else {
            toggleText.textContent = showLessText;
            toggleIcon.style.transform = 'rotate(180deg)';
        }
    });
} else {
    console.log('ERROR: Some elements not found!');
}
