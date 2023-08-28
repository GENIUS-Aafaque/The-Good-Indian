import { currentValue } from "../quantity.js";
export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productName) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productName === cartItem.productName) {
      matchingItem = cartItem;
    }
  });
  let index;
  document.querySelectorAll(".js-add-to-cart").forEach((button, i) => {
    if (button.dataset.productName == productName) {
      index = i;
    }
  });
  if (matchingItem) {
    matchingItem.quantity = currentValue[index];
  } else {
    cart.push({
      productName: productName,
      quantity: currentValue[index],
    });
  }
  saveToStorage();
  if (currentValue[index] == 0) {
    removeFromCart(productName);
  }
}

export function removeFromCart(productName) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productName !== productName) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}
