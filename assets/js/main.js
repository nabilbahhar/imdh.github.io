// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => { navMenu.classList.remove('active'); navToggle.classList.remove('active'); });
  });
}

// Counter animation
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current);
    }, 16);
  });
}

// Intersection Observer for fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.querySelector('[data-count]')) animateCounters();
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .hero-stats').forEach(el => observer.observe(el));

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  link.classList.toggle('active', link.getAttribute('href') === currentPage);
});on 
