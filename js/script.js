var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
     },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });