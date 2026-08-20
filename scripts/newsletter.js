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
    // Try to deliver email to local dev server
    fetch('http://localhost:3001/api/newsletter-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    .then(function(response) {
      if (!response.ok) return response.json().then(function(data) { throw data; });
      return response.json();
    })
    .then(function(data) {
      form.style.display = 'none';
      confirmation.style.display = 'block';
    })
    .catch(function(err) {
      error.textContent = (err && err.error) ? err.error : 'Failed to record your email. Please try again.';
      error.style.display = 'block';
      input.setAttribute('aria-invalid', 'true');
    });
  });

  input.addEventListener('input', function() {
    error.textContent = '';
    error.style.display = 'none';
    input.removeAttribute('aria-invalid');
  });
})();
