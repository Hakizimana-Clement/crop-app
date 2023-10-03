const cropForm = document.querySelector(".crop-form");
// array of crop data
const cropInfo = savedData();
// search
const filters = { searchText: "" };

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
