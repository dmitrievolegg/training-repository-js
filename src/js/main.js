import '../styles/main.scss';
import { initComponents } from './components';
import { setupAPI } from './services/api';
import { loadHTML } from './loader.js';

document.addEventListener('DOMContentLoaded', () => {
  setupAPI();
  initComponents();

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
