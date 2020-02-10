let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.button_arrow',
  },
  breakpoints: {
    540: {
      slidesPerView: 2
    }
  }

});

const body = document.querySelector('body');
      menu = document.querySelector('.header');
      menuButton = document.querySelector('.button_burger');
      modalButton = document.querySelector('#modal-btn');
      descriptionButton = document.querySelector('#description-btn')
      modal = document.querySelector('.modal');
      modalDialog = document.querySelector('.modal__dialog')

menuButton.addEventListener('click', function () {
  event.stopPropagation();
  menu.classList.toggle('header--active');
  menuButton.classList.toggle('button_burger--active');
});

body.addEventListener('click', function () {
  if (menu.classList.contains('header--active')) {
    menu.classList.remove('header--active');
    menuButton.classList.remove('button_burger--active');
  }
})

menu.addEventListener('click', function () {
  event.stopPropagation();
})

modalButton.addEventListener('click', function () {
  modal.classList.add('hide');
  body.classList.remove('no-scroll')
});

descriptionButton.addEventListener('click', function () {
  modal.classList.remove('hide');
  body.classList.add('no-scroll')
});

modal.addEventListener('click', function () {
  modal.classList.add('hide');
  body.classList.remove('no-scroll')
})

modalDialog.addEventListener('click', function () {
  event.stopPropagation();
})