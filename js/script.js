
  let searchBtn = document.querySelector('#search-btn');
  let searchForm = document.querySelector('.header .search-form');
  //evento para abrir a barra de pesquisa
  searchBtn.onclick = () =>{
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }

 
  let menu = document.querySelector("#menu-btn");
  let navbar = document.querySelector('.header .navbar');
 //evento para abrir o navbar
  menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    
  };
  // variaveis do modal
  let loginForm = document.querySelector('.entrega-container');
  let formClose = document.querySelector('#close');
  let formBtn = document.querySelector('#cep-btn');
  // evento para abrir o modal
  formBtn.addEventListener('click',()=> {
    loginForm.classList.add('active');
  });
  //evento para fecha o modal
  formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
  })

  //objeto da bliblioteca js swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
     },
    breakpoints: {
      340: {
        slidesPerView: 4,
      },
        540: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 8,
        },
    },
  });

  

  
  
