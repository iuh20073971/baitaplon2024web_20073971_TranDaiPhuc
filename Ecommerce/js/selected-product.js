"use strict";

const product__name = localStorage.getItem("name");
const product__image = localStorage.getItem("image");
const product__price = localStorage.getItem("price");

const product = document.querySelector(".container");
const productDetail = function () {
  product.innerHTML = "";
  const html = `
  <div class="container">
  <div class="product-detail">
    <div class="image">
      <img src="${product__image}" alt="" class="product-img" />
    </div>

    <div class="information">
      <h2 class="product-name">${product__name}</h2>
      <p class="product-price">${product__price}</p>
      <div class="product-color">
        <div class="color black"></div>
        <div class="color pink"></div>
      </div>
      <p class="product-details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum
        sunt impedit, dolorem dolores illum totam saepe itaque hic ratione.
        Placeat totam dolorem accusamus quis suscipit error quas delectus
        similique!
      </p>

      <button class="btn-cart">Add to cart</button>
    </div>
  </div>
</div>`;

  product.insertAdjacentHTML("afterbegin", html);
};

productDetail();
//////////////////////////////////////////////////////////

const btnCart = document.querySelector(".btn-cart");

let cartList = JSON.parse(localStorage.getItem("carts"));

function checkCartProduct(productItem) {
  for (let i = 0; i < cartList.length; i++) {
    if (
      cartList[i].name == String(productItem.name) &&
      cartList[i].price == Number(productItem.price) &&
      String(cartList[i].img) == String(productItem.img)
    ) {
      return false;
    }
  }
  return true;
}

btnCart.addEventListener("click", function () {
  let productName = document.querySelector(".product-name").innerHTML;
  let productPrice = document
    .querySelector(".product-price")
    .innerHTML.slice(1);
  let productImg = document.querySelector(".product-img").getAttribute("src");

  let selectedProduct = {};

  selectedProduct.name = productName;
  selectedProduct.price = productPrice;
  selectedProduct.img = productImg;

  if (cartList.length == 0) {
    cartList.push(selectedProduct);
    localStorage.setItem("carts", JSON.stringify(selectedProduct));
    alert("Add suscessfully");
    return true;
  }

  if (checkCartProduct(selectedProduct) == false) {
    alert("You have added this product already");
  } else {
    alert("Added sucessfully");
    cartList.push(selectedProduct);
    localStorage.setItem("carts", JSON.stringify(cartList));
  }
});
