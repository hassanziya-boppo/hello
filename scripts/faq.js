// scripts/faq.js - Accessible accordion for FAQ section
(function() {
  const faqItems = document.querySelectorAll('.faq-item');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function closeAll() {
    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question');
      const panel = item.querySelector('.faq-answer');
      btn.setAttribute('aria-expanded', 'false');
      panel.setAttribute('hidden', '');
      panel.style.maxHeight = null;
      item.classList.remove('open');
    });
  }

  function openItem(item) {
    const btn = item.querySelector('.faq-question');
    const panel = item.querySelector('.faq-answer');
    btn.setAttribute('aria-expanded', 'true');
    panel.removeAttribute('hidden');
    item.classList.add('open');
    if (!prefersReducedMotion) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const panel = item.querySelector('.faq-answer');
    btn.addEventListener('click', function() {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      closeAll();
      if (!expanded) {
        openItem(item);
      }
    });
    btn.addEventListener('keydown', function(e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        btn.click();
      }
    });
    // Remove maxHeight after transition ends (for closing)
    panel.addEventListener('transitionend', function() {
      if (btn.getAttribute('aria-expanded') === 'false') {
        panel.style.maxHeight = null;
      }
    });
  });

  // Animate panels
  document.querySelectorAll('.faq-answer').forEach(panel => {
    if (!prefersReducedMotion) {
      panel.style.overflow = 'hidden';
      panel.style.transition = 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)';
      panel.style.maxHeight = null;
    }
  });

  // Chevron rotation
  const observer = new MutationObserver(() => {
    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question');
      const chevron = btn.querySelector('.faq-chevron');
      if (btn.getAttribute('aria-expanded') === 'true') {
        chevron.classList.add('rotated');
      } else {
        chevron.classList.remove('rotated');
      }
    });
  });
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    observer.observe(btn, { attributes: true, attributeFilter: ['aria-expanded'] });
  });

  // Initially all collapsed
  closeAll();
})();
