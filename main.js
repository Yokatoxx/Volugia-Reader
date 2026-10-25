document.documentElement.classList.add('js');

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('primary-nav');

if (menuToggle && navLinks) {
  function closeMenu() {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  }
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  navLinks.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  matchMedia('(width >= 60rem)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
}

const tabs = Array.from(document.querySelectorAll('.gallery-tab'));
const panels = document.querySelectorAll('.gallery-panel');
const tabsNav = document.querySelector('.gallery-tabs-nav');

function switchTab(tab) {
  const targetId = tab?.getAttribute('aria-controls');
  if (!targetId || !document.getElementById(targetId)) return;
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panels.forEach(panel => { panel.hidden = panel.id !== targetId; });
  tab.focus({ preventScroll: true });
}

if (tabsNav) {
  tabsNav.addEventListener('click', event => {
    const tab = event.target.closest('.gallery-tab');
    if (tab) switchTab(tab);
  });
  tabsNav.addEventListener('keydown', event => {
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      switchTab(tabs[next]);
    }
  });
}
