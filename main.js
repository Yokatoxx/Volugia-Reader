document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('primary-nav');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const tabs = Array.from(document.querySelectorAll('.gallery-tab'));
  const panels = document.querySelectorAll('.gallery-panel');

  function switchTab(tab) {
    const targetId = tab.dataset.target;
    if (!targetId) return;

    tabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
      t.tabIndex = -1;
    });
    panels.forEach((p) => {
      p.classList.remove('active');
      p.hidden = true;
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    tab.tabIndex = 0;
    tab.focus();

    const activePanel = document.getElementById(targetId);
    if (activePanel) {
      activePanel.classList.add('active');
      activePanel.hidden = false;
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => switchTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        const next = tabs[(index + 1) % tabs.length];
        switchTab(next);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const prev = tabs[(index - 1 + tabs.length) % tabs.length];
        switchTab(prev);
      }
    });
  });
});
