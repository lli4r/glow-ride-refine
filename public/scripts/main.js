// Acessa - Main JavaScript
// Pure vanilla JS for static pages

(function() {
  'use strict';
  
  // Active navigation link highlight
  function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '/' && href === '/index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  // Mobile menu toggle (if needed in future)
  function initMobileMenu() {
    const menuButton = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
  
  // Card hover effects
  function initCardHoverEffects() {
    const cards = document.querySelectorAll('.card-hover-lift');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }
  
  // Initialize all functions on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    highlightActiveNav();
    initSmoothScroll();
    initMobileMenu();
    initCardHoverEffects();
  });
  
  // Update footer year
  const yearElement = document.querySelector('[data-current-year]');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
})();
