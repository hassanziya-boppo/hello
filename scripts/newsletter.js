// scripts/newsletter.js - Newsletter signup logic for Nexora landing page
(function() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  const input = document.getElementById('newsletter-email');
  const error = document.getElementById('newsletter-error');
  const confirmation = document.getElementById('newsletter-confirmation');

  function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = input.value.trim();
    if (!validateEmail(email)) {
      error.textContent = 'Please enter a valid email address.';
      error.style.display = 'block';
      input.setAttribute('aria-invalid', 'true');
      return;
    }
    // Simulate success (no backend)
    form.style.display = 'none';
    confirmation.style.display = 'block';
  });

  input.addEventListener('input', function() {
    error.textContent = '';
    error.style.display = 'none';
    input.removeAttribute('aria-invalid');
  });
})();
