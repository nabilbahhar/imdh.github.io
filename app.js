// ========== NAVIGATION SYSTEM ==========
function navigateTo(page, e) {
  if (e) e.preventDefault();
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show target page
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
  }
  
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Close mobile menu if open
  closeMobileMenu();
  
  // Update hash
  history.pushState(null, '', '#' + page);
  
  // Re-trigger animations for visible elements
  requestAnimationFrame(() => {
    triggerAnimations(target);
  });
}

// Handle hash routing
function handleHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  navigateTo(hash);
}

// ========== MOBILE MENU ==========
function openMobileMenu() {
  const overlay = document.getElementById('mobileOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const overlay = document.getElementById('mobileOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ========== PROJECT FILTERS ==========
function initProjectFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      
      // Update active button
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter cards
      document.querySelectorAll('.project-card').forEach(card => {
        if (filter === 'all' || card.dataset.status === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ========== PUBLICATION TABS ==========
function initPubTabs() {
  document.querySelectorAll('.pub-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      
      // Update active tab
      document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show target content
      document.querySelectorAll('.pub-content').forEach(c => c.classList.remove('active'));
      document.getElementById('pub-' + target).classList.add('active');
    });
  });
}

// ========== NAVBAR SCROLL BEHAVIOR ==========
function initNavbar() {
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  }, { passive: true });
}

// ========== SCROLL ANIMATIONS ==========
let fadeObserver;

function triggerAnimations(container) {
  if (!fadeObserver) {
    fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  }
  
  const elements = container ? container.querySelectorAll('.fade-in:not(.visible)') : document.querySelectorAll('.fade-in:not(.visible)');
  elements.forEach(el => fadeObserver.observe(el));
}

// ========== COUNTER ANIMATION ==========
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        if (target) {
          let current = 0;
          const increment = target / 40;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              entry.target.textContent = target + '+';
              clearInterval(timer);
            } else {
              entry.target.textContent = Math.floor(current) + '+';
            }
          }, 30);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  document.getElementById('mobileMenuBtn').addEventListener('click', openMobileMenu);
  document.getElementById('mobileCloseBtn').addEventListener('click', closeMobileMenu);
  document.getElementById('mobileOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeMobileMenu();
  });
  
  // Mobile nav links
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page || link.getAttribute('href').replace('#', '');
      navigateTo(page);
    });
  });
  
  // Desktop nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });
  
  // Footer nav links already have onclick handlers
  
  initProjectFilters();
  initPubTabs();
  initNavbar();
  triggerAnimations();
  animateCounters();
  
  // Handle initial hash
  handleHash();
  
  // Handle back/forward
  window.addEventListener('popstate', handleHash);
  
  // Set initial language
  setLanguage('fr');
});
