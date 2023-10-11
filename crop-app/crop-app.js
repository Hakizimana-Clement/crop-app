const cropForm = document.querySelector(".crop-form");
const createAccountForm = document.querySelector(".create-account-form");
const userUl = document.querySelector(".user-list");
const loginForm = document.querySelector(".login-form");

// error variables
let cropFormError = {
  cropName: null,
  cropCategories: null,
  cropImg: null,
  background: null,
  usability: null,
  requirement: null,
  seedBed: null,
  sowing: null,
  pestAndDisease: null,
  harvest: null,
  postHarvest: null,
};

let createUserAccountError = {
  username: null,
  password: null,
};
let loginError = null;

// // array of account
// const userAccount = [
//   { id: 2, username: "coco", password: 23454323 },
//   { id: 1, username: "adam", password: 12345678 },
// ];

// 1.array of crop data
const cropInfo = savedData();

// 2.array of new user data
const newUser = userSavingData();

// search
const filters = { searchText: "", sortBy: "npk" };

// render on page
renderCrops(cropInfo, filters);
// searching
document.querySelector(".searching-crop").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderCrops(cropInfo, filters);
});

// creat new crop
cropForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasErrors = false;

  // crop name
  if (e.target.elements.cropName.value.length < 3) {
    cropFormError.cropName =
      "crop name should be have more than three (3) words.";
    hasErrors = true;
  } else {
    cropFormError.cropName = null;
  }

  // crop categories
  if (e.target.elements.cropCategories.value.length < 3) {
    cropFormError.cropCategories =
      "crop category should be have more than three (3) words.";
    hasErrors = true;
  } else {
    cropFormError.cropCategories = null;
  }

  // crop img
  if (e.target.elements.background.value.length < 50) {
    cropFormError.background = "Crop background should be more than 50 words";
    hasErrors = true;
  } else {
    cropFormError.background = null;
  }
  // crop usability
  if (e.target.elements.usability.value.length < 50) {
    cropFormError.usability = "Crop usability should be more than 50 words";
    hasErrors = true;
  } else {
    cropFormError.usability = null;
  }

  // crop requirement
  if (e.target.elements.requirement.value.length < 50) {
    cropFormError.requirement = "Crop requirement should be more than 50 words";
    hasErrors = true;
  } else {
    cropFormError.requirement = null;
  }

  // crop seed bed
  if (e.target.elements.seedBed.value.length < 50) {
    cropFormError.seedBed = "Crop seedbed should be more than 50 words";
    hasErrors = true;
  } else {
    cropFormError.seedBed = null;
  }

  // crop sowing
  if (e.target.elements.sowing.value.length < 50) {
    cropFormError.sowing = "Crop sowing should be more than 50 words";
    hasErrors = true;
  } else {
    cropFormError.sowing = null;
  }

  // crop pest and disease
  if (e.target.elements.pestAndDisease.value.length < 50) {
    cropFormError.pestAndDisease =
      "Crop pest and disease should be more than 50 words";
    hasErrors = true;
  } else {
    cropFormError.pestAndDisease = null;
  }

  // crop harvest
  if (e.target.elements.harvest.value.length < 50) {
    cropFormError.harvest = "Crop harvest should be more than 50 words";
    hasErrors = true;
  } else {
    cropFormError.harvest = null;
  }

  // crop post harvest
  if (e.target.elements.postHarvest.value.length < 50) {
    cropFormError.postHarvest =
      "Crop post harvest should be more than 50 words";
    hasErrors = true;
  } else {
    cropFormError.postHarvest = null;
  }

  showCropFormErrors(cropFormError);

  if (hasErrors) {
    return;
  }

  const datas = {
    id: uuidv4(),
    name: e.target.elements.cropName.value,
    category: e.target.elements.cropCategories.value,
    cropImg: e.target.elements.cropImg.value,
    background: e.target.elements.background.value,
    usability: e.target.elements.usability.value,
    requirement: e.target.elements.requirement.value,
    seedBed: e.target.elements.seedBed.value,
    sowing: e.target.elements.sowing.value,
    pestAndDisease: e.target.elements.pestAndDisease.value,
    harvest: e.target.elements.harvest.value,
    postHarvest: e.target.elements.postHarvest.value,
  };

  // add to the arrary
  cropInfo.push(datas);
  // save to local storage
  saveData(cropInfo);
  // clear form
  cropForm.reset();
  // render the lastest data
  renderCrops(cropInfo, filters);
});
///////////////////////////////////////////////////////////////////////
// create account
///////////////////////////////////////////////////////////////////////
createAccountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isCorrect = false;
  const accountData = {
    id: uuidv4(),
    username: e.target.elements.username.value,
    password: e.target.elements.password.value,
  };
  // checking error
  // username
  if (accountData.username.length < 3) {
    createUserAccountError.username = "Username should be more than 2 words.";
    isCorrect = true;
    accountData.username.value = "";
  } else {
    createUserAccountError.username = null;
  }

  // password
  if (accountData.password.length < 8) {
    createUserAccountError.password =
      "Your password is weak. Use a strong password that has more than 8 characters.";
    isCorrect = true;
    accountData.password.value = "";
  } else {
    createUserAccountError.password = null;
    accountData.password.value = "";
  }
  showCreateFormErrors(createUserAccountError);

  if (isCorrect) {
    return;
  }
  // save in array
  newUser.push(accountData);
  // save in localstorage
  userSavedData(newUser);
  // re-render on page
  renderUser(newUser);
  // clear input
  createAccountForm.reset();
});

renderUser(newUser);

//////////////////////////////////////////////////////////
// login
//////////////////////////////////////////////////////////
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginData = {
    username: e.target.elements.username.value,
    password: e.target.elements.password.value,
  };
  console.log(loginData);
  // user authentication
  userAuth(loginData);
});
