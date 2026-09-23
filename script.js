// --- Mobile Menu Toggle ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
});

// --- Active Nav Link on Scroll ---
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

    if (targetLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        targetLink.classList.add('active');
      } else {
        targetLink.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', highlightNavLink);

// --- Contact Form Submission Handler ---
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  
  // Temporary loading indicator
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending...';

  setTimeout(() => {
    formStatus.classList.add('success');
    formStatus.style.display = 'block';
    contactForm.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;

    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 5000);
  }, 800);
});
