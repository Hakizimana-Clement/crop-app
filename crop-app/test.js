const manureType = document.querySelector("[data-manure='manure-choose']");
const qty = document.querySelector("[data-manure='qty']");
const unitPrice = document.querySelector("[data-manure='unit-price']");
const total = document.querySelector("[data-manure='total']");

const price = {
  "manure-npk-17": 800,
  "manure-npk-20": 900,
  "manure-urea": 950,
  "manure-dap": 980,
};

const updatePrice = () => {
  const selectManure = manureType.selectedOptions[0].dataset.manure;
  const selectedPrice = price[selectManure];

  // get theinput quality
  const quantity = qty.value;

  // calculate the total
  const totalPrice = selectedPrice * quantity;

  unitPrice.textContent = selectedPrice;
  total.textContent = totalPrice;
};

manureType.addEventListener("change", updatePrice);
qty.addEventListener("input", updatePrice);
updatePrice();
