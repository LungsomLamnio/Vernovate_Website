// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.getElementById('hamburger');
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', function() {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  if (!hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
    navLinks?.classList.remove('active');
    hamburger?.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close mobile menu on window resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    navLinks?.classList.remove('active');
    hamburger?.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Demo button functionality
const demoButton = document.querySelector('.demo-button');
demoButton?.addEventListener('click', function() {
  // Add ripple effect
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  this.appendChild(ripple);
  
  // Simulate demo launch
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Loading Demo...</span>';
  
  setTimeout(() => {
    alert('Demo would launch here! This is a placeholder for the actual demo functionality.');
    this.innerHTML = '<span>Try Demo</span> <i class="fas fa-external-link-alt"></i>';
    ripple.remove();
  }, 2000);
});

// Scroll animations using Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      
      // Add special animations for different elements
      if (entry.target.classList.contains('prototype-card')) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      }
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Add initial styles for animation
  const animatedElements = document.querySelectorAll('.prototype-card');
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
});

// Console welcome message
console.log('%c🚀 Welcome to VERNOVATE!', 'color: #FFD700; font-size: 20px; font-weight: bold;');
console.log('%cAI & Computer Vision Innovation', 'color: #00D9FF; font-size: 14px;');