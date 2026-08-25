// scripts/theme.js - Dark mode toggle for Nexora landing page
(function() {
  const STORAGE_KEY = 'theme-preference';
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');

  // Apply a theme ('dark' or 'light') to the document
  function setTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      if (toggleBtn) toggleBtn.textContent = '☀️';
    } else {
      html.removeAttribute('data-theme');
      if (toggleBtn) toggleBtn.textContent = '🌙';
    }
  }

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function getSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
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

  // On load, use the user's explicit choice if they made one; otherwise
  // follow the system setting so the site matches it by default.
  const stored = getStoredTheme();
  if (stored === 'dark' || stored === 'light') {
    setTheme(stored);
  } else {
    setTheme(getSystemTheme());
  }

  // If the user has never made an explicit choice, keep following the
  // system setting live as it changes (e.g. day/night auto-switching).
  if (!stored && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      if (!getStoredTheme()) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else if (mediaQuery.addListener) {
      // Safari < 14
      mediaQuery.addListener(handleSystemChange);
    }
  }

  // Attach event
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
})();
