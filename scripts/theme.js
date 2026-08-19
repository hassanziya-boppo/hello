// scripts/theme.js - Dark mode toggle for Nexora landing page
(function() {
  const STORAGE_KEY = 'theme-preference';
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');

  // Set initial theme from localStorage
  function setTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      if (toggleBtn) toggleBtn.textContent = '☀️';
    } else {
      html.removeAttribute('data-theme');
      if (toggleBtn) toggleBtn.textContent = '🌙';
    }
  }

  function getPreferredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function toggleTheme() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      setTheme('light');
      saveTheme('light');
    } else {
      setTheme('dark');
      saveTheme('dark');
    }
  }

  // On load, set theme
  const preferred = getPreferredTheme();
  if (preferred === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  // Attach event
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
})();
