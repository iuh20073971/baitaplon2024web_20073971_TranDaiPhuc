"use strict";

const navbar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
const close = document.querySelector(".close");

if (navbar) {
  console.log("OK");

  navbar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}

close.addEventListener("click", function () {
  nav.classList.remove("active");
});

const btn_shop = document.querySelector(".btn-shop");
btn_shop.addEventListener("click", function () {
  const feature_section = document.querySelector(".feature-section");
  feature_section.scrollIntoView({ behavior: "smooth" });
});
