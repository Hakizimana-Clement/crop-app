const username = document.querySelector(".username");
const password = document.querySelector(".password");
// const confirmPassword = document.querySelector(".confirm-Password");
const confirmBtn = document.querySelector("button");

const userId = location.hash.substring(1);
const users = userSavingData();

const user = users.find((user) => {
  return user.id === userId;
});

if (user === undefined) {
  location.assign("index.html");
}
// username.value = user.username;
// password.value = user.password;
// confirmPassword.value = user.password;

username.addEventListener("change", (e) => {
  user.username = e.target.value;
  userSavedData(users);
});

password.addEventListener("change", (e) => {
  user.password = e.target.value;
  userSavedData(users);
});
confirmBtn.addEventListener("click", () => {
  alert("successfully saved");
  location.assign(`dashboard.html#${userId}`);
});
// set the value
// userForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = {
//     username: e.target.elements.username.value,
//     password: e.target.elements.password.value,
//     confrimPassword: e.target.elements.confirmPassword.value,
//   };
//   console.log(data);
// });
