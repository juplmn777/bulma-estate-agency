const btnMenu = document.getElementById('nav-button');
const menuContent = document.getElementById('menu-content');

btnMenu.addEventListener('click', () => {
  menuContent.classList.toggle('is-active');
});

const allNavLinks = document.querySelectorAll('.navbar-item');
allNavLinks.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    menuContent.classList.toggle('is-active');
  });
});
