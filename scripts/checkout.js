import { cart, removeFromCart } from "../data/cart.js";
import { products } from "./resturant.js";

let cartSummaryHTML = "";

function updateBill() {
  let totalItems = 0;
  let beforeTax = 0,
    tax,
    total;
  cart.forEach((cartItem) => {
    totalItems++;
    products.forEach((product) => {
      if (product.name == cartItem.productName) {
        beforeTax += cartItem.quantity * product.price;
      }
    });
  });

  tax = 0.1 * beforeTax;
  total = beforeTax + 50 + tax;
  document.querySelectorAll(".qty")[0].innerHTML = totalItems;
  document.querySelectorAll(".total-items")[0].innerHTML =
    "Items (" +totalItems + ") ";
  document.querySelectorAll(".payment-summary-money")[0].innerHTML = "&#8377;"+beforeTax;
  document.querySelectorAll(".payment-summary-money-beforeTax")[0].innerHTML = "&#8377;"+(beforeTax + 50);
  document.querySelectorAll(".payment-summary-money-tax")[0].innerHTML = "&#8377;"+tax;
  document.querySelectorAll(".payment-summary-money-total")[0].innerHTML = "&#8377;"+total;
}
window.onload = () => {
  updateBill();
};
cart.forEach((cartItem) => {
  const productName = cartItem.productName;

  let matchingProduct;
  products.forEach((product) => {
    if (product.name === productName) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="cart-item-container  js-cart-item-container-${matchingProduct.name}">
          <div class="cart-item-details-grid">
            <img class="product-image" src="${matchingProduct.image}">
            <div class="cart-item-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-price">
                &#8377; ${matchingProduct.price}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-name="${matchingProduct.name}">
                  Delete
                </span>
              </div>
            </div>
          </div>
        </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productName = link.dataset.productName;
    removeFromCart(productName);
    const container = document.querySelector(
      `.js-cart-item-container-${productName}`
    );
    container.remove();
    updateBill();
  });
});
