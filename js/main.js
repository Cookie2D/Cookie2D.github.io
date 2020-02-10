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

let menuButton = document.querySelector('.button_burger');
let menu = document.querySelector('.header');
let modalButton = document.querySelector('#modal-btn');
let descriptionButton = document.querySelector('#description-btn')
let modal = document.querySelector('.modal');

menuButton.addEventListener('click', function () {
  menu.classList.toggle('header--active');
  this.classList.toggle('button_burger--active');
});

modalButton.addEventListener('click', function () {
  modal.classList.add('hide');
});

descriptionButton.addEventListener('click', function () {
  modal.classList.remove('hide');
});