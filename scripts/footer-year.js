// scripts/footer-year.js - Dynamically sets the current year in the footer
(function() {
  var yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();
