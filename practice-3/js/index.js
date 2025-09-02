const qtyInputs = document.querySelectorAll('.item-qty');
const prices = [10, 20]; // Prices of each item in order
const totalElem = document.querySelector('.total');

function calculateTotal() {
  let total = 0;
  qtyInputs.forEach((input, index) => {
    total += input.value * prices[index];
  });
  totalElem.textContent = `Total: $${total}`;
}

qtyInputs.forEach(input => {
  input.addEventListener('input', calculateTotal);
});

// Initial calculation on page load
calculateTotal();
