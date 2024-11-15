"use strict";
const listProduct = JSON.parse(localStorage.getItem("carts"));
console.log(listProduct);

function displayCart(listCart) {
  const table = document.querySelector(".cart-table");
  listCart.forEach((cart) => {
    const html = `
    <tr class="cart-row">
          <td style="width: 25%" class="cart-name">
           ${cart.name}
          </td>
          <td>
            <img src=" ${cart.img}" alt="" class="product-img" />
          </td>
          <td style="width: 10%">
            <input type="number" value="1" class="quantity" />
          </td>
          <td class="cart-price"> ${cart.price}</td>
          <td class="cart-total"> ${cart.price}</td>
          <td><button class="btn-danger">Remove</button></td>
        </tr>
    `;
    table.insertAdjacentHTML("beforeend", html);
    updateCartTotal();
  });
}

displayCart(listProduct);

///////////////////////////////////////////////////////////////////////////
const btnRemove = document.querySelectorAll(".btn-danger");

btnRemove.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    const btnClicked = e.target;
    const rowInformation = btnClicked.parentElement.parentElement;
    const productName = rowInformation.querySelector(".cart-name").innerHTML;

    // Remove product in cart
    listProduct.forEach((product, i) => {
      if (product.name == productName.trim()) {
        listProduct.splice(i, 1);
      }
    });
    console.log(listProduct);
    localStorage.setItem("carts", JSON.stringify(listProduct));
    btnClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
});
///////////////////////////////////////////////////////////////////////////
function updateCartTotal() {
  var cart = document.querySelector(".cart-table");
  var cartRows = cart.querySelectorAll(".cart-row");
  var totalprice = 0;
  cartRows.forEach((row, i) => {
    var price = Number(row.querySelector(".cart-price").innerHTML);
    var quantity = Number(row.querySelector(".quantity").value);
    var total = Math.round(price * quantity * 100) / 100;
    row.querySelector(".cart-total").innerHTML = total;
    totalprice += total;
  });
  document.querySelector(".total-price").innerHTML =
    "$" + Math.round(totalprice * 100) / 100;
}
///////////////////////////////////////////////////////////////////////////
//Update Quantity
document.querySelectorAll(".quantity").forEach((qty) => {
  qty.addEventListener("keyup", function (e) {
    if (quantityVaild(+qty.value) == true) {
      updateCartTotal();
    } else {
      qty.value = 1;
      updateCartTotal();
      alert("Quantity must be a number > 0");
    }
  });
});

///////////////////////////////////////////////////////////////////////////
function quantityVaild(quantity) {
  if (quantity <= 0) {
    return false;
  }
  return true;
}
