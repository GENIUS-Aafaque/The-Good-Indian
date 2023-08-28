import { cart, addToCart } from "../data/cart.js";

export const products = [
  {
    image: "images/products/product1.png",
    name: "Fried-Puff-Water-Balls",
    rating: {
      stars: 5.0,
      count: 130,
    },
    price: 60,
  },
  {
    image: "images/products/product2.png",
    name: "Onion-Tomato-Capsicum-Pizza",
    rating: {
      stars: 4.0,
      count: 127,
    },
    price: 350,
  },
  {
    image: "images/products/product3.png",
    name: "Burger",
    rating: {
      stars: 4.0,
      count: 110,
    },
    price: 210,
  },
  {
    image: "images/products/product4.png",
    name: "Hyderabadi-Chicken-Biryani",
    rating: {
      stars: 4.5,
      count: 150,
    },
    price: 380,
  },
  {
    image: "images/products/product5.png",
    name: "South-Indian-Special-Masala-Dosa",
    rating: {
      stars: 3.5,
      count: 70,
    },
    price: 150,
  },
  {
    image: "images/products/product6.png",
    name: "Pao-Bhaji",
    rating: {
      stars: 4.0,
      count: 80,
    },
    price: 120,
  },
  {
    image: "images/products/product7.png",
    name: "Chole-Bhature",
    rating: {
      stars: 3.0,
      count: 56,
    },
    price: 180,
  },
  {
    image: "images/products/product8.png",
    name: "Veg-Hakka-Noodles",
    rating: {
      stars: 4.0,
      count: 90,
    },
    price: 160,
  },
  {
    image: "images/products/product9.png",
    name: "North-Indian-Special-Veg-Thali",
    rating: {
      stars: 4.5,
      count: 190,
    },
    price: 200,
  },
  {
    image: "images/products/product10.png",
    name: "Grilled-Club-Sandwhich",
    rating: {
      stars: 3.0,
      count: 55,
    },
    price: 110,
  },
];

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

function updateProductQuantity() {
  let containers = document.querySelectorAll(".product-container");
  containers.forEach((con) => {
    let name = con
      .querySelectorAll(".product-namelimit-text-to-2-lines")[0]
      .innerHTML.trim();

    let input = con.querySelectorAll(".quantity-input")[0];
    cart.forEach((cartItem) => {
      if (cartItem.productName.localeCompare(name) == 0) {
        input.value = cartItem.quantity;
      }
    });
  });
}
window.onload = () => {
  updateCartQuantity();
  updateProductQuantity();
};
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.productName;

    addToCart(productName);
    updateCartQuantity();
  });
});
