let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let cart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  cart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

// подключение swiper слайдера категории
const swiperCategory = new Swiper('.category-slider', {
    breakpoints: {
      // when window width is >= 480px
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20
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

  // табы категории
  const categoryTabs = document.querySelector(".category-tabs");
  categoryTabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("btn") &&
    !e.target.classList.contains("active-tab")
  ) {
    const target = e.target.getAttribute("data-target");
    // console.log(target);
    categoryTabs.querySelector(".active-tab").classList.remove("active-tab");
    e.target.classList.add("active-tab");
    const categorySection = document.querySelector(".category");
    categorySection
      .querySelector(".content-tab.active-tab")
      .classList.remove("active-tab");
    categorySection.querySelector(target).classList.add("active-tab");
  }
});

let hiddenSofas = document.querySelector(".text-sofas");
let btnSovas= document.querySelector(".btn-arrow-sofas");

document.querySelector("#btn-sofas").onclick = () => {
  hiddenSofas.classList.toggle("active");
  btnSovas.classList.toggle("active");
};

let hiddenKitchen = document.querySelector(".text-kitchen");
let btnKitchen = document.querySelector(".btn-arrow-kitchen");

document.querySelector("#btn-kitchen").onclick = () => {
  hiddenKitchen.classList.toggle("active");
  btnKitchen.classList.toggle("active");
};

let hiddenDressres = document.querySelector(".text-dressers");
let btnDressres = document.querySelector(".btn-arrow-dressers");

document.querySelector("#btn-dressers").onclick = () => {
  hiddenDressres.classList.toggle("active");
  btnDressres.classList.toggle("active");
};

let hiddenBeds = document.querySelector(".text-beds");
let btnBeds = document.querySelector(".btn-arrow-beds");

document.querySelector("#btn-beds").onclick = () => {
  hiddenBeds.classList.toggle("active");
  btnBeds.classList.toggle("active");
};

let hiddenChild = document.querySelector(".text-child");
let btnChild = document.querySelector(".btn-arrow-child");

document.querySelector("#btn-child").onclick = () => {
  hiddenChild.classList.toggle("active");
  btnChild.classList.toggle("active");
};

let hiddenHallway = document.querySelector(".text-hallway");
let btnHallway = document.querySelector(".btn-arrow-hallway");

document.querySelector("#btn-hallway").onclick = () => {
  hiddenHallway.classList.toggle("active");
  btnHallway.classList.toggle("active");
};

let hiddenHousehold = document.querySelector(".text-household");
let btnHousehold = document.querySelector(".btn-arrow-household");

document.querySelector("#btn-household").onclick = () => {
  hiddenHousehold.classList.toggle("active");
  btnHousehold.classList.toggle("active");
};

let hiddenLiving = document.querySelector(".text-living");
let btnLiving = document.querySelector(".btn-arrow-living");

document.querySelector("#btn-living").onclick = () => {
  hiddenLiving.classList.toggle("active");
  btnLiving.classList.toggle("active");
};

let hiddentables = document.querySelector(".text-tables");
let btntables = document.querySelector(".btn-arrow-tables");

document.querySelector("#btn-tables").onclick = () => {
  hiddentables.classList.toggle("active");
  btntables.classList.toggle("active");
};