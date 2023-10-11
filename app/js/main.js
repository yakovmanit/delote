// burger realization
const close = document.querySelector('.sidebar__close-icon');
const sidebar = document.querySelector('.sidebar');
const burger = document.querySelector('.menu-burger');

close.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--active');
});

burger.addEventListener('click', () => {
  sidebar.classList.add('sidebar--active');
});


// nav replace
function moveNavToSidebar() {
  const nav = document.querySelector(".nav");
  const sidebar = document.querySelector(".sidebar");
  const sidebarClose = document.querySelector(".sidebar__close");

  if (window.innerWidth <= 768) {
      sidebar.insertBefore(nav, sidebarClose.nextSibling);
  }
}

// Вызовем функцию при загрузке страницы и при изменении размера окна
window.addEventListener("load", moveNavToSidebar);
window.addEventListener("resize", moveNavToSidebar);