const mySwiper = new Swiper('.swiper-container', {
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
descriptionButton = document.querySelector('#description-btn')

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

// Description
descriptionButton.addEventListener('click', function () {
  menu.classList.remove('header--active');
  menuButton.classList.remove('button_burger--active');
  
  swal('Ведьмак', `«Ведьмак» (англ. The Witcher) — американо-польский фэнтезийный телесериал, снятый по мотивам одноименной серии романов Анджея Сапковского[1]. Премьера сериала состоялась 20 декабря 2019 года на стриминг-сервисе Netflix. 13 ноября 2019 года был официально анонсирован второй сезон.

  Ведьмак Геральт из Ривии, мутант и убийца чудовищ, изо всех сил старается найти своё место в мире, где люди часто оказываются намного хуже монстров[2]. Сюжет первого сезона большей частью представляет собой вольную интерпретацию некоторых рассказов первых двух книг саги о Ведьмаке — «Последнее желание» и «Меч Предназначения».`, 'info', {
    button: 'Закрыть'
  });
});