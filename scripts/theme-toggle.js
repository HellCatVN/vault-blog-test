// Nocturne theme toggle.
// Reads the persisted preference from localStorage at the top of <head> to
// avoid a flash of the wrong theme; this file only attaches click behavior.
(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  function paintIcon() {
    const isLight = root.dataset.theme === 'light';
    button.setAttribute(
      'aria-label',
      isLight ? 'Switch to dark theme' : 'Switch to light theme'
    );
    button.innerHTML = isLight
      ? '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>'
      : '<svg class="icon" viewBox="0 0 24 24"><path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z"></path></svg>';
  }

  paintIcon();

  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem('nocturne-theme', root.dataset.theme);
    } catch (_) {
      // Ignore quota or privacy-mode failures.
    }
    paintIcon();
  });
})();