const userId = location.hash.substring(1);
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const price = document.querySelector(".price");
const totalPrice = document.querySelector(".total");
const quantity = document.querySelector("#qty");
const manureType = document.querySelector("#manure-type");
// unit price
let unitPrice = 0;
// get data from local storage
const users = userSavingData();

// console.log(userId);
// console.log(users);

const user = users.find((user) => {
  return user.id === userId;
});

username.textContent = user.username;
password.textContent = user.password;

// purchase
quantity.addEventListener("input", (e) => {
  const data = e.target.value;
  unitPrice = 600;
  totalPrice.innerHTML = `<strong>Total: ${unitPrice * data} rwf </strong>`;
});

// manure
manureType.addEventListener("change", (e) => {
  if (e.target.value === "npk") {
    unitPrice = 800;
    price.textContent = unitPrice;

    totalPrice.innerHTML = `<strong>Total: ${unitPrice * 5} rwf </strong>`;
  } else if (e.target.value === "npk-17-17-17") {
    unitPrice = 600;
    price.textContent = unitPrice;

    totalPrice.innerHTML = `<strong>Total: ${unitPrice * 5} rwf </strong>`;
  } else if (e.target.value === "urea") {
    unitPrice = 650;
    price.textContent = unitPrice;
    totalPrice.innerHTML = `<strong>Total: ${unitPrice * 5} rwf </strong>`;
  } else if (e.target.value === "dap") {
    unitPrice = 550;
    price.textCo5tent = unitPrice;
    totalPrice.innerHTML = `<strong>Total: ${unitPrice * 5} rwf </strong>`;
  } else {
    totalPrice.innerHTML = `<strong>Total: 0 rwf</strong>`;
  }
});
