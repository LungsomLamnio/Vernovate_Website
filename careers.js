document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });

  // Apply button functionality
  document.querySelectorAll('.btn-apply').forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.card');
      const jobTitle = card.querySelector('h3').textContent;
      
      // Simple modal-like alert (replace with actual application modal)
      if (confirm(`Apply for ${jobTitle}? This would typically open an application form or redirect to a job portal.`)) {
        this.innerHTML = '<i class="bi bi-check-circle me-2"></i>Application Started!';
        this.classList.remove('btn-warning');
        this.classList.add('btn-success');
        
        setTimeout(() => {
          this.innerHTML = 'Apply Now';
          this.classList.remove('btn-success');
          this.classList.add('btn-warning');
        }, 3000);
      }
    });
  });

  // Animate numbers in statistics
  function animateNumber(element, finalNumber, duration = 1000) {
    const startNumber = 0;
    const increment = Math.ceil(finalNumber / (duration / 50));
    let currentNumber = startNumber;
    
    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= finalNumber) {
        currentNumber = finalNumber;
        clearInterval(timer);
      }
      element.textContent = currentNumber + (element.textContent.includes('+') ? '+' : '');
    }, 50);
  }

  // Initialize number animation when stats come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statItems = entry.target.querySelectorAll('.card-body h3');
        statItems.forEach(item => {
          const text = item.textContent;
          if (text.includes('+')) {
            const number = parseInt(text);
            item.textContent = '0+';
            animateNumber(item, number);
          } else if (text.includes('%')) {
            const number = parseInt(text);
            item.textContent = '0%';
            animateNumber(item, number);
          }
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.row.g-4');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // Console welcome message
  console.log('%c🚀 Welcome to VERNOVATE Careers!', 'color: #FFB000; font-size: 20px; font-weight: bold;');
  console.log('%cWe\'re hiring talented individuals to join our team', 'color: #00D9FF; font-size: 14px;');
});