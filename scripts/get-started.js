// scripts/get-started.js - Scroll to newsletter signup on CTA click
(function() {
  const btn = document.getElementById('get-started-btn');
  const newsletterForm = document.getElementById('newsletter-form');
  if (!btn || !newsletterForm) return;
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    newsletterForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Optionally, focus the email input for better UX
    const emailInput = document.getElementById('newsletter-email');
    if (emailInput) {
      setTimeout(() => emailInput.focus(), 600); // Wait for scroll
    }
  });
})();
