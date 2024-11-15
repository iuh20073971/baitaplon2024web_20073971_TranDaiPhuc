"use strict";

const navbar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
const close = document.querySelector(".close");

console.log(navbar);

navbar.addEventListener("click", function () {
  nav.classList.add("active");
});

close.addEventListener("click", function () {
  nav.classList.remove("active");
});
