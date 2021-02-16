$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
  // параметры слайдера
  /*direction: 'vertical', //вертикальное расположение слайда*/
  loop: true, //бесконечное прокручивание слайда
  slidesPerView: 6, //Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)


    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 2,
        //spaceBetween: 20
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3,
        //spaceBetween: 30
      },
      // если браузер >= 992px
      992: {
        slidesPerView: 4,
        //spaceBetween: 40
      }
    }
  });


  const reviewsSlider = new Swiper('.reviews-slider', {
    // параметры слайдера
    /*direction: 'vertical', //вертикальное расположение слайда*/
    loop: true, //бесконечное прокручивание слайда
    slidesPerView: 1, //Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)


    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  $("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'img/flowers-slider-1.jpg',
      opts : {
        caption : 'First caption',
        thumb   : 'img/flowers-slider-1.jpg'
      }
    },
    {
      src  : 'img/flowers-slider-2.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : 'img/flowers-slider-2.jpg'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
})