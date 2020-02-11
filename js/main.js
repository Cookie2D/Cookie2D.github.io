
function toggleMenu() {
  $('.header').toggleClass('show');
  $('.button_burger').toggleClass('button_burger--active');
}

$('.button_burger').on('click', () => {
  toggleMenu();
  event.stopPropagation();
});

// Close by click on mask
$('body').on('click', () => {
  $('.header').on('click', () => event.stopPropagation());

  if ($('.header').hasClass('show')) toggleMenu();
})

// Description modal window
$('.description__button').on('click', () => {
  toggleMenu();

  //Alert modal window
  swal('Ведьмак', `«Ведьмак» (англ. The Witcher) — американо-польский фэнтезийный телесериал, снятый по мотивам одноименной серии романов Анджея Сапковского[1]. Премьера сериала состоялась 20 декабря 2019 года на стриминг-сервисе Netflix. 13 ноября 2019 года был официально анонсирован второй сезон.
  
  Ведьмак Геральт из Ривии, мутант и убийца чудовищ, изо всех сил старается найти своё место в мире, где люди часто оказываются намного хуже монстров[2]. Сюжет первого сезона большей частью представляет собой вольную интерпретацию некоторых рассказов первых двух книг саги о Ведьмаке — «Последнее желание» и «Меч Предназначения».`, 'info', {
    button: 'Закрыть'
  });
});


//Slider Settings
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