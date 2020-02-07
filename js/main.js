let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
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

menuButton.addEventListener('click', function () {
  menu.classList.toggle('header--active');
  this.classList.toggle('button_burger--active');
})