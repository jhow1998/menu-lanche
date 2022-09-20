var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
     },
    breakpoints: {
        540: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
    },
  });

  let menu = document.querySelector("#menu-btn");
  let navbar = document.querySelector('.header .navbar');
  
  menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };
  
