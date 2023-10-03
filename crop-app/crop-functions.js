// debugger;
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
  const cropIndex = cropInfo.findIndex((crop) => {
    return crop.id === id;
  });
  if (cropIndex > -1) {
    cropInfo.splice(cropIndex, 1);
  } else {
    console.log("id not found");
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
  // debugger;
  // add event for delete
  deleteBtn.addEventListener("click", () => {
    console.log(crop);
    removeData(crop.id);
    saveData();
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

// data to add on page
// const dataFromUser = (e) => {
//   const datas = {
//     id: uuidv4(),
//     name: e.target.elements.cropName.value,
//     category: e.target.elements.cropCategories.value,
//     cropImg: e.target.elements.cropImg.value,
//     background: e.target.elements.background.value,
//     usability: e.target.elements.usability.value,
//     requirement: e.target.elements.requirement.value,
//     seedBed: e.target.elements.seedBed.value,
//     sowing: e.target.elements.sowing.value,
//     pestAndDisease: e.target.elements.pestAndDisease.value,
//     harvest: e.target.elements.harvest.value,
//     postHarvest: e.target.elements.postHarvest.value,
//   };
//   return datas;
// };

// // dataFromUser;
