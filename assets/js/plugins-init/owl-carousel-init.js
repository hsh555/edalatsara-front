$(document).ready(function () {

  $(".news-carousel__carousel").owlCarousel({
    items: 4,
    rtl: true,
    slideby: 4,
    loop: true,
    autoplay: true,
    margin: 12,
    nav: true,
    dots: false,
    navText: ["<img src='./assets/images/icons/arrow-right.svg'>", "<img src='./assets/images/icons/arrow-left.svg'>"],
    responsive: {
      // breakpoint from 0 up
      0: {
        // nav: false,
        items: 1,
        slideby: 1,
      },
      // breakpoint from 480 up
      560: {
        // nav: false,
        items: 2,
        slideby: 2,
      },
      // breakpoint from 768 up
      768: {
        // nav: false,
        items: 3,
        slideby: 3,
      },
      // breakpoint from 992 up
      992: {
        // nav: false,
        items: 4,
        slideby: 4,
      },
      // breakpoint from 1140 up
      // 1140: {
      //   nav: true,
      // },
    },
  });

  $(".videos-carousel__carousel").owlCarousel({
    items: 6,
    rtl: true,
    slideby: 6,
    loop: true,
    autoplay: true,
    margin: 12,
    nav: true,
    dots: false,
    navText: ["<img src='./assets/images/icons/arrow-right.svg'>", "<img src='./assets/images/icons/arrow-left.svg'>"],
    responsive: {
      // breakpoint from 0 up
      0: {
        // nav: false,
        items: 1,
        slideby: 1,
      },
      // breakpoint from 480 up
      560: {
        // nav: false,
        items: 2,
        slideby: 2,
      },
      // breakpoint from 768 up
      768: {
        // nav: false,
        items: 3,
        slideby: 3,
      },
      // breakpoint from 992 up
      992: {
        // nav: false,
        items: 4,
        slideby: 4,
      },
      // breakpoint from 1140 up
      // 1140: {
      //   nav: true,
      // },
    },
  });
});
