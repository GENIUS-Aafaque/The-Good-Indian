export let currentValue = []; // Initial value

document.addEventListener("DOMContentLoaded", function () {
  const decreaseBtns = document.querySelectorAll(".decrease-btn");
  const increaseBtns = document.querySelectorAll(".increase-btn");
  const quantityInputs = document.querySelectorAll(".quantity-input");

  decreaseBtns.forEach(function (decreaseBtn, index) {
    currentValue[index] = Number(quantityInputs[index].value);
    decreaseBtn.addEventListener("click", function () {
      if (currentValue[index] > 0) {
        currentValue[index] -= 1;
        quantityInputs[index].value = currentValue[index];
      }
    });
  });

  increaseBtns.forEach(function (increaseBtn, index) {
    increaseBtn.addEventListener("click", function () {
      currentValue[index] = Number(quantityInputs[index].value);
      currentValue[index] += 1;
      quantityInputs[index].value = currentValue[index];
    });
  });
});
