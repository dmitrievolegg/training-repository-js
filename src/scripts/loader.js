export function loadHTML(selector, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML fragment:', error));
}

// Initialize fragments loading
document.addEventListener('DOMContentLoaded', () => {
  const fragments = [
    { selector: '#header-placeholder', url: '/src/partials/header.html' },
    {
      selector: '#vite-promo-placeholder',
      url: '/src/partials/vite-promo.html',
    },
    { selector: '#badges-placeholder', url: '/src/partials/badges.html' },
    { selector: '#footer-placeholder', url: '/src/partials/footer.html' },
  ];

  fragments.forEach(fragment => loadHTML(fragment.selector, fragment.url));
});
