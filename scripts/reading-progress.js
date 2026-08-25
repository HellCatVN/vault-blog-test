// Reading progress indicator. Reads scroll position and updates the bar
// within the article header. No-op when the bar is absent.
(() => {
  const bar = document.querySelector('[data-reading-progress-bar]');
  const counter = document.querySelector('[data-reading-progress-count]');
  if (!bar || !counter) return;

  function update() {
    const article = document.querySelector('article');
    if (!article) return;
    const rect = article.getBoundingClientRect();
    const viewport = window.innerHeight;
    const total = rect.height - viewport;
    const scrolled = Math.min(Math.max(-rect.top, 0), total);
    const pct = total > 0 ? Math.round((scrolled / total) * 100) : 0;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    counter.textContent = `${pct}%`;
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();