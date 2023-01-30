const open = document.getElementById("icon-open");
const close = document.getElementById("icon-cancel");
const list = document.querySelector(".list");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const parTwo = document.getElementById("par-two");
const parCart = document.querySelector(".par-cart");

// const images = document.querySelector(".img-carousel").children;
// const prev = document.getElementById("icon-previous");
// const next = document.getElementById("icon-next");
const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});

open.addEventListener("click", () => {
  list.style.marginLeft = "0px";
});
close.addEventListener("click", () => {
  list.style.marginLeft = "-280px";
});

plus.addEventListener("click", () => {
  parTwo.innerText++;
  parCart.innerText++;
});

minus.addEventListener("click", () => {
  parTwo.innerText--;
  parCart.innerText--;
});
