// scripts/announcement-bar.js - Dismiss the announcement bar and remember it permanently
(function() {
  const STORAGE_KEY = 'announcement-dismissed';
  const bar = document.getElementById('announcement-bar');
  const closeBtn = document.getElementById('announcement-close-btn');
  if (!bar) return;

  function isDismissed() {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  }

  function dismiss() {
    bar.classList.add('hidden');
    localStorage.setItem(STORAGE_KEY, 'true');
  }

  // On load, hide the bar if it was previously dismissed
  if (isDismissed()) {
    bar.classList.add('hidden');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', dismiss);
  }
})();
