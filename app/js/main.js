// JS

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

const servicesCards = document.querySelectorAll('.services__card');

servicesCards.forEach(card =>{
  card.classList.add('wow', 'animation-right');
});


// JQ
$(function () {
  // табы
  ////////////////////////
  $('.tab').on('click', function (e) {
    // Отключает переход по ссылке куда-то
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    // this значит добавление идет к тому элементу, на который нажали
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    // <div class="tabs-container">
    //   <div class="tabs-wrapper">
    //     <a class="tab tab--active" href="#tab-1">123</a>
    //     <a class="tab " href="#tab-2">456</a>
    //     <a class="tab " href="#tab-3">789</a>
    //   </div>
    //   <div class="tabs-container">
    //     <div class="tabs-content tabs-content--active" id="tab-1">123</div>
    //     <div class="tabs-content" id="tab-2">456</div>
    //     <div class="tabs-content" id="tab-3">789</div>
    //   </div>
    // </div>

  });


    // $("[data-fancybox='gallery']").fancybox({
       
    // });

    // scroll
    $("a[href^='#']").click(function() {
      const _href = $(this).attr("href");
  
      $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
  
      return false;
    });

    new WOW().init();
  });
  
// Fancybox.bind("[data-fancybox]", {
//   arrows: true
// });
