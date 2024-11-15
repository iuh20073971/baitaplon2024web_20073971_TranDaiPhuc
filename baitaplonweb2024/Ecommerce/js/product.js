"use strict";

//======================================================================DATA===================================================================================================
const product1 = {
  name: "Roundtrip® Carry-on Expandable Spinner",
  type: "luggage",
  price: 329.99,
  image: "../img//product/lug3.png",
};

const product2 = {
  name: "Crew™ VersaPack™ Rolling UnderSeat Carry-on",
  type: "luggage",
  price: 209.99,
  image: "../img//product/lug4.png",
};

const product3 = {
  name: "Maxlite® 5 International Expandable Carry-On Rollaboard®",
  type: "luggage",
  price: 139.99,
  image: "../img//product/lug5.png",
};

const product4 = {
  name: "Washington Nationals Dooney & Bourke Game Day Hobo Bag",
  type: "travel bag",
  price: 322.49,
  image: "../img/product/tb1.png",
};

const product5 = {
  name: "Lily & Bean Luggage Pale Pink",
  type: "luggage",
  price: 135.0,
  image: "../img//product/lug1.png",
};

const product6 = {
  name: "Travelpro® Platinum® Elite 21”",
  type: "luggage",
  price: 329.99,
  image: "../img//product/lug2.png",
};

const product7 = {
  name: "Continental Dual Access 4 Wheeled Carry-On",
  type: "luggage",
  price: 1500,
  image: "../img//product/lug6.png",
};

const product8 = {
  name: "Michael Kors Suri Mini Small Bucket Crossbody Bag Shoulder Signature",
  type: "handbag",
  price: 304.99,
  image: "../img//product/tb2.png",
};

const product9 = {
  name: "Monogram Nylon Jacquard Backpack NYY BLACK",
  type: "handbag",
  price: 449.99,
  image: "../img//product/tb3.png",
};

const product10 = {
  name: "MLB Coruroy Bucket Bag PHILADELPHIA PHILLIES Coral",
  type: "handbag",
  price: 449.99,
  image: "../img//product/tb4.png",
};
const listProduct = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];

// console.log(listProduct);

localStorage.setItem("listProduct", JSON.stringify(listProduct));
// const listProduct = JSON.parse(localStorage.getItem("listProduct"));
//==========================================================================================================================================================================

const products = document.querySelector(".product-list");

// Load list product
const displayProduct = function () {
  products.innerHTML = "";
  const productList = listProduct.forEach((product) => {
    const html = ` 

      <div class="product-box">
        <img src="${product.image}" class="product-img" />
        <a href="product-detail.html" class="product-link">${product.name}</a>
        <div class="product-row">
          <span class="product-price">$${product.price}</span>
          <a class="product-cart">
            <i class="product-add-cart fa-solid fa-cart-plus"></i>
          </a>
      </div>
  </div>`;

    products.insertAdjacentHTML("afterbegin", html);
  });
};

displayProduct();

const product__list = document.querySelector(".product-list");
const product__item = document.querySelectorAll(".product-box");
const product__name = document.querySelector(".product-link");
const product__price = document.querySelector(".product-price");

const selectedProduct = {};

product__item.forEach((product) => {
  product.addEventListener("click", function () {
    selectedProduct.name = product.querySelector(".product-link").innerHTML;
    selectedProduct.price = product.querySelector(".product-price").innerHTML;
    selectedProduct.image = product
      .querySelector(".product-img")
      .getAttribute("src");
    // console.log(
    //   (selectedProduct.image = product
    //     .querySelector(".product-img")
    //     .getAttribute("src"))
    // );

    saveData();
  });
});

function saveData() {
  localStorage.setItem("name", selectedProduct.name);
  localStorage.setItem("image", selectedProduct.image);
  localStorage.setItem("price", selectedProduct.price);
}
////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////

const btnAddToCart = document.querySelectorAll(".product-cart");
let cartList = JSON.parse(localStorage.getItem("carts"));
if (cartList == null) {
  cartList = [];
}
console.log(cartList);

btnAddToCart.forEach((btn) => {
  btn.addEventListener("click", addToCartClicked);
});

function checkCartProduct(productItem) {
  for (let i = 0; i < cartList.length; i++) {
    // console.log(cartList[i].name == String(productItem.name));
    // console.log(cartList[i].price == Number(productItem.price));
    // console.log(String(cartList[i].productImg) == String(productItem.img));
    // console.log(String(cartList[i].img));
    // console.log(productItem.img);

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

function addToCartClicked(event) {
  var btn = event.target;
  var productItem = btn.parentElement.parentElement.parentElement;
  var productName = productItem.querySelector(".product-link").innerHTML;
  // console.log(productName);
  var productPrice = productItem
    .querySelector(".product-price")
    .innerHTML.slice(1);
  // console.log(productPrice);
  var productImg = productItem
    .querySelector(".product-img")
    .getAttribute("src");
  var cartProduct = productInformation(productName, productPrice, productImg);

  if (cartList.length == 0) {
    cartList.push(cartProduct);
    localStorage.setItem("carts", JSON.stringify(cartList));
    alert("Add suscessfully");
    return true;
  }
  checkCartProduct(cartProduct);
  let check = checkCartProduct(cartProduct);
  console.log(checkCartProduct(cartProduct));
  if (checkCartProduct(cartProduct) == false) {
    alert("You have added this product already");
  } else {
    alert("Added sucessfully");
    cartList.push(cartProduct);
    localStorage.setItem("carts", JSON.stringify(cartList));
  }
  // cartList.push(cartProduct);
  // console.log(cartList);
  // console.log(cartList);
  // localStorage.setItem("carts", JSON.stringify(cartList));
}

function productInformation(productName, productPrice, productImg) {
  var productCart = {};
  productCart.name = productName;
  productCart.price = productPrice;
  productCart.img = productImg;
  return productCart;
}
