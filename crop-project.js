const crops = {
  user: [],
  cropInfo: [],
  // ################################################################################################
  // CREATE USER ACCOUNT
  // ################################################################################################
  createUser: function (userName, password) {
    const datas = {
      userName,
      password,
    };
    // password verification
    if (datas.password.length < 8) {
      console.log(
        `New password is weak, use strong password that have more 8 character.`
      );
    } else {
      console.log(`😊 You have successfully create account ${datas.userName}.`);
    }

    return this.user.push(datas);
  },
  // ################################################################################################
  // USER ACCOUNT
  // ################################################################################################
  userAccount: function (userName, password, manure_purchased, accountSummary) {
    console.log(this.user);
    // if(userName === this.user){

    // }
    // const datas = {

    //   userName,
    //   manure_purchased,
    //   accountSummary,
    // };
  },

  // ################################################################################################
  // CROP INFO
  // ################################################################################################
  addCropInfoData: function (
    name,
    category = "coming soon...",
    summary = "coming soon...",
    background = "coming soon...",
    usability = "coming soon...",
    requirement = "coming soon...",
    sedBeed_preparation = "coming soon...",
    sowing_method = "coming soon...",
    pest_and_pest_management = "coming soon...",
    harvesting = "coming soon...",
    post_harvesting = "coming soon..."
  ) {
    // Data to push in the crop info array
    const datas = {
      name,
      category,
      summary,
      background,
      usability,
      requirement,
      sedBeed_preparation,
      sowing_method,
      pest_and_pest_management,
      harvesting,
      post_harvesting,
    };
    this.cropInfo.push(datas);
  },

  // ################################################################################################
  // GET ME FULL INFO
  // ################################################################################################
  getMeFullInfo: function (cropArray, cropName) {
    // return this.cropInfo.find((crop) => {
    // console.log(cropName);
    return cropArray.find((crop) => {
      // console.log(crop);
      return crop.name.toLowerCase() === cropName.toLowerCase();
    });
  },

  // ################################################################################################
  // PURCHASE
  // ################################################################################################
  purchase_manure: function () {
    // verify account
    // state
    const isAccountFound = false;
    if (this.createUser === isAccountFound) {
      return `Create account first to processed to purchase manure.`;
    }
  },

  // ################################################################################################
  // SEARCHING
  // ################################################################################################
  searching: function (cropArray, cropName) {
    // console.log(cropName);
    const index = cropArray.findIndex((data) => {
      return data.name.toLowerCase() === cropName.toLowerCase();
    });

    const cropFound = cropArray[index];
    return `Here the result we found about ${cropFound.name}, it's about  the ${cropFound.summary}. for more details about this crop, run getMefullInfo( write here Name of crop)`;
  },

  // DELETING
  deleteCrop: function (cropArray, cropName) {
    const index = cropArray.findIndex((data) => {
      return data.name.toLowerCase() === cropName.toLowerCase();
    });

    const cropToDelete = index;

    cropArray.splice(cropToDelete, 1);
  },
};
// #########
// 1. add data
// #########
crops.addCropInfoData("bean");
crops.addCropInfoData("maize");

// #########
// 2. search
// #########
// console.log(crops.searching(crops.cropInfo, "bean"));

// #########
// 3. get summary
// #########
// console.log(crops.getMeFullInfo(crops.cropInfo, "maize"));

// #########
// 4. delete
// #########
// crops.deleteCrop(crops.cropInfo, "maize");
// console.log(crops);

// #########
// 5. create account
// #########
console.log(crops.createUser("adam", "12345678"));
console.log(crops.createUser("morgan", "qwerfds98443234"));

// #########
// 6. user account
// #########
console.log(crops.userAccount("adam", "12345678"));

// #########
// purchase
// #########
console.log(crops);
