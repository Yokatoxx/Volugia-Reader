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

if (tabsNav) {
  tabsNav.addEventListener('click', (e) => {
    const tab = e.target.closest('.gallery-tab');
    if (tab) switchTab(tab);
  });

  tabsNav.addEventListener('keydown', (e) => {
    const index = tabs.indexOf(document.activeElement);
    if (index === -1) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      switchTab(tabs[(index + 1) % tabs.length]);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      switchTab(tabs[(index - 1 + tabs.length) % tabs.length]);
    }
  });
}
