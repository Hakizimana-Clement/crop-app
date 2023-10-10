////////////////////////////////
// load saved data
////////////////////////////////
const savedData = () => {
  // save in localstorage
  const cropJson = localStorage.getItem("crops");
  if (cropJson !== null) {
    return JSON.parse(cropJson);
  } else {
    console.log("Not data found");
    return [];
  }
};
////////////////////////////////
// save data
////////////////////////////////
const saveData = (cropInfo) => {
  localStorage.setItem("crops", JSON.stringify(cropInfo));
};

////////////////////////////////
// remove data on page and local storage
////////////////////////////////
const removeData = (id) => {
  console.log(id);

  // console.log(cropInfo);
  const cropIndex = cropInfo.findIndex((crop) => {
    // console.log(console.log(crop));
    console.log(crop.id === id);
    return crop.id === id;
  });

  console.log(cropIndex);

  if (cropIndex > -1) {
    cropInfo.splice(cropIndex, 1);
  }
};

////////////////////////////////
// render DOM
////////////////////////////////
const renderDomEl = (crop) => {
  // // container
  const cropDiv = document.createElement("div");
  cropDiv.classList.add("crop-card");

  // name
  const cropName = document.createElement("h3");
  cropName.innerHTML = `<b>Name:</b> ${crop.name}`;
  cropDiv.append(cropName);

  // /////////////////////////
  // //  image to upload
  // /////////////////////////
  // image
  const imgEl = document.createElement("img");
  imgEl.classList.add("crop-img");
  imgEl.src = crop.cropImg;
  imgEl.setAttribute("alt", "crop image");
  cropDiv.append(imgEl);

  // gategory
  const cropGategory = document.createElement("p");
  cropGategory.innerHTML = `<b>Category:</b> ${crop.category}`;
  cropDiv.append(cropGategory);
  // requirement
  const cropRequirement = document.createElement("p");
  cropRequirement.innerHTML = `<b>requirement:</b> ${crop.requirement}`;
  cropDiv.append(cropRequirement);
  //sed bed preparation
  const cropseedBed = document.createElement("p");
  cropseedBed.innerHTML = `<b>seed bed preparation:</b> ${crop.seedBed}`;
  cropDiv.append(cropseedBed);
  //sowing method
  const cropSowing = document.createElement("p");
  cropSowing.innerHTML = `<b>Sowing method:</b> ${crop.sowing}`;
  cropDiv.append(cropSowing);
  //pest management
  const cropPest = document.createElement("p");
  cropPest.innerHTML = `<b> Pest and disease management:</b> ${crop.pestAndDisease}`;
  cropDiv.append(cropPest);
  // harvesting
  const cropHarvest = document.createElement("p");
  cropHarvest.innerHTML = `<b>Harvesting:</b> ${crop.harvest}`;
  cropDiv.append(cropHarvest);
  //post harvesting
  const cropPostHarvest = document.createElement("p");
  cropPostHarvest.innerHTML = `<b>Post harvesting:</b> ${crop.postHarvest}`;
  cropDiv.append(cropPostHarvest);
  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "delete";
  cropDiv.append(deleteBtn);
  // add event for delete
  deleteBtn.addEventListener("click", () => {
    removeData(crop.id);
    saveData(cropInfo);
    renderCrops(cropInfo, filters);
  });

  // add to the container
  return document.querySelector(".crop-container").append(cropDiv);
};

// render function
const renderCrops = (cropArray, filters) => {
  // filter by name
  const filterCrops = cropArray.filter((crop) => {
    return crop.name.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  // clear duplicate of element
  document.querySelector(".crop-container").innerHTML = "";
  // render to page
  filterCrops.forEach((crop) => {
    renderDomEl(crop);
  });
};

////////////////////////////////////////////////
//  errors handle
////////////////////////////////////////////////
// const showCropFormErrors = (error) => {
//   if (error.cropCategories != null ) {
//     document.querySelector("#crop-name-error").textContent = error.cropName;
//   } else {
//     document.querySelector("#crop-name-error").textContent = "";
//   }
//   console.log(error);
// };
const showCropFormErrors = (error) => {
  if (error.cropName !== null) {
    document.querySelector("#crop-name-error").textContent = error.cropName;
  } else if (error.cropCategories !== null) {
    document.querySelector("#crop-category-error").textContent =
      error.cropCategories;
  } else if (error.background !== null) {
    document.querySelector("#crop-background-error").textContent =
      error.background;
  } else if (error.usability !== null) {
    document.querySelector("#crop-usability-error").textContent =
      error.usability;
  } else if (error.requirement !== null) {
    document.querySelector("#crop-requirement-error").textContent =
      error.requirement;
  } else if (error.seedBed !== null) {
    document.querySelector("#crop-seedBed-error").textContent = error.seedBed;
  } else if (error.sowing !== null) {
    document.querySelector("#crop-sowing-error").textContent = error.sowing;
  } else if (error.pestAndDisease !== null) {
    document.querySelector("#crop-pestAndDisease-error").textContent =
      error.pestAndDisease;
  } else if (error.harvest !== null) {
    document.querySelector("#crop-harvest-error").textContent = error.harvest;
  } else if (error.postHarvest !== null) {
    document.querySelector("#crop-postHarvest-error").textContent =
      error.postHarvest;
  } else {
    document.querySelector("#crop-name-error").textContent = "";
  }
};
