let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// табы лидеров продаж
const menuTabs = document.querySelector(".sales-leaders-tabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("btn-tabs") && !e.target.classList.contains("active-tab")){
        const target = e.target.getAttribute("data-target");
        // console.log(target);
        menuTabs.querySelector(".active-tab").classList.remove("active-tab");
        e.target.classList.add("active-tab");
        const menuSection = document.querySelector(".sales-leaders");
        menuSection.querySelector(".content-tab.active-tab").classList.remove("active-tab");
        menuSection.querySelector(target).classList.add("active-tab");
    }
});

// подключение swiper слайдера
const swiper = new Swiper('.swiper', {
  breakpoints: {
    // when window width is >= 480px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

