// scripts/back-to-top.js - Show/hide "Back to top" button and scroll to top on click
(function() {
  const SHOW_AFTER_PX = 300;
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  function updateVisibility() {
    if (window.scrollY > SHOW_AFTER_PX) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', updateVisibility, { passive: true });

  // Set initial state in case the page loads already scrolled
  updateVisibility();
})();
