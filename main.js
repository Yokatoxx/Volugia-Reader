const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('primary-nav');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const tabs = Array.from(document.querySelectorAll('.gallery-tab'));
const panels = document.querySelectorAll('.gallery-panel');
const tabsNav = document.querySelector('.gallery-tabs-nav');

function switchTab(tab) {
  const targetId = tab?.dataset.target;
  if (!targetId) return;

  tabs.forEach((t) => {
    const isTarget = t === tab;
    t.setAttribute('aria-selected', String(isTarget));
    t.tabIndex = isTarget ? 0 : -1;
  });
  panels.forEach((p) => {
    p.hidden = p.id !== targetId;
  });
  tab.focus();
}

if (tabsNav) {
  tabsNav.addEventListener('click', (e) => {
    const tab = e.target.closest('.gallery-tab');
    if (tab) switchTab(tab);
  });

  tabsNav.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i === -1) return;
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (dir) {
      e.preventDefault();
      switchTab(tabs[(i + dir + tabs.length) % tabs.length]);
    }
  });
}
