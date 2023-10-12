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


// card realization
// Находим все элементы с классом services__back-btn-more
const moreButtons = document.querySelectorAll('.services__back-btn-more');

// Находим все элементы с классом services__back-btn-back
const backButtons = document.querySelectorAll('.services__back-btn-back');

// Добавляем обработчики событий для кнопок "Подробнее"
moreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Находим родительский элемент с классом services__card и добавляем класс changed
    const card = button.closest('.services__card');
    card.classList.add('changed');
  });
});

// Добавляем обработчики событий для кнопок "Назад"
backButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Находим родительский элемент с классом services__card и удаляем класс changed
    const card = button.closest('.services__card');
    card.classList.remove('changed');
  });
});