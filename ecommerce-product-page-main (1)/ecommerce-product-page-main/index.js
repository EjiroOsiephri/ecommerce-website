const gone = document.querySelector(".gone");
const close = document.getElementById("icon-cancel");
const list = document.querySelector(".list");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const imgone = document.getElementById("imgone");
const imgtwo = document.getElementById("imgtwo");
const imgthree = document.getElementById("imgthree");
const imgfour = document.getElementById("imgfour");
const parTwo = document.getElementById("par-two");
const parCart = document.querySelector(".par-cart");
const cartDropDown = document.querySelector(".cart-dropdown");
const cartId = document.querySelector("#cart-id");
const hThree = document.getElementById("h3-cart");
const imgProduct = document.getElementById("img-product");
const hFourDropDown = document.getElementById("h4-dropdown");
const span = document.getElementById("span");
const iconDelete = document.getElementById("delete");
const imgThumb = document.querySelector(".mini-dropdown");
const checkout = document.querySelector("#checkout");
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
  console.log("ejiro");
  parTwo.innerText++;
  parCart.innerText++;
});

// cartId.addEventListener("click", () => {
//   cartId.classList.toggle("gone");
// });

imgone.addEventListener("click", () => {
  imgone.style.border = "2px solid red";
  imgProduct.src = "images/image-product-1.jpg";
});

imgtwo.addEventListener("click", () => {
  imgtwo.style.border = "2px solid red";
  imgProduct.src = "images/image-product-2.jpg";
});

imgthree.addEventListener("click", () => {
  imgthree.style.border = "2px solid red";
  imgProduct.src = "images/image-product-3.jpg";
});

imgfour.addEventListener("click", () => {
  imgfour.style.border = "2px solid red";
  imgProduct.src = "images/image-product-4.jpg";
});
