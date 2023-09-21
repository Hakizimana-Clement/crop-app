const crops = {
  users: [],
  cropInfo: [],
  product_manure: [],
  // ################################################################################################
  // CREATE USER ACCOUNT
  // ################################################################################################
  createUser: function (userName, password) {
    const datas = {
      id: this.users.length + 1,
      userName,
      password,
      transaction: [
        // {
        //   id: 0,
        //   type: "Manure",
        //   qty: 1,
        //   unitPrice: 100,
        //   total: 100,
        // }
      ],
    };
    let checkingPassword = "";
    // password verification
    if (datas.password.length < 8) {
      checkingPassword = `New password is weak, use strong password that have more 8 character.`;
      throw Error(checkingPassword);
    }

    const newLength = this.users.push(datas);
    console.log(`😊 You have successfully create account ${datas.userName}.`);

    return newLength;
  },

  //User buys something
  userPerchase(user_id, typeOfProduct, qty, unitPrice) {
    const user = this.users.find((user) => user.id == user_id);
    // throw error

    this.users = this.users.map((user) => {
      if (user.id == user_id) {
        user.transactions = user.transactions.push({
          id: 0,
          type: typeOfProduct,
          qty: qty,
          unitPrice: unitPrice,
          total: qty * unitPrice,
        });

        return user;
      }
    });
  },
  // ################################################################################################
  // USER ACCOUNT
  // ################################################################################################
  userAccountInfo: function (
    userName,
    password,
    manure_purchased,
    accountSummary
  ) {
    // Login
    let user = this.users.find(
      (user) => user.userName == userName && user.password == password
    );
    if (user == null) {
      throw Error("User is not found");
    }

    console.log({ user });
    console.log("You have successfully logged in");

    // display user account
    // this.users.push({ summary: `you purchase ${250} kg of N.P.K` });
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
    return cropArray.find((crop) => {
      return crop.name.toLowerCase() === cropName.toLowerCase();
    });
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

  // ################################################################################################
  // DELETING
  // ################################################################################################
  deleteCrop: function (cropArray, cropName) {
    const index = cropArray.findIndex((data) => {
      return data.name.toLowerCase() === cropName.toLowerCase();
    });

    const cropToDelete = index;

    cropArray.splice(cropToDelete, 1);
  },

  // ################################################################################################
  // PURCHASE
  // ################################################################################################
  purchase_manure: function (
    fertilizeName = "",
    brand = "",
    percentOfFertilize = "",
    fertilizeApplication = "",
    warnings = "",
    price = 0
  ) {
    const dataToPush = {
      fertilizeName,
      brand,
      percentOfFertilize,
      fertilizeApplication,
      warnings,
      price,
    };

    // console.log(dataToPush);
    this.product_manure.push(dataToPush);
    return `Here manure product we have: name:${dataToPush.fertilizeName}, brand is ${dataToPush.brand}, it's have ${dataToPush.percentOfFertilize}, about how we apply it: ${dataToPush.percentApplication}, N.B: ${dataToPush.warnings}., It's only cost:${dataToPush.price}`;
    // verify account
    // state
    // const isAccountFound = false;
    // if (this.createUser === isAccountFound) {
    //   return `Create account first to processed to purchase manure.`;
    // }
  },

  // ################################################################################################
  // Buy It
  // ################################################################################################
  buyIt: function (nameOfManure, amount, priceManure) {
    // console.log("hello");
  },
};
// #########
// 1. add data
// #########
crops.addCropInfoData(
  "bean",
  "Legumes",
  "Beans are warm season crops that are cultivated for their immature pods (snap beans), immature seeds (shell beans), or mature seeds (dry beans). Beans can be classified into two types based on their growth habit: bush beans, which grow as low plants that do not need support, and pole beans, which grow as vines that need support. Beans are rich in protein, fiber, iron, and other nutrients. They can be eaten fresh, canned, frozen, or dried12.",
  "Beans are one of the oldest crops in the world. They have been cultivated for thousands of years in different regions of the world, such as Africa, Asia, Europe, and the Americas. Beans have played an important role in human history as a staple food and a source of income for many civilizations. Beans have also been used for medicinal purposes and as symbols of fertility and luck34.",
  "Food: Beans can be cooked and eaten as a vegetable or a main dish. They can also be processed into products such as flour, oil, milk, tofu, tempeh, miso, and natto. Beans can be combined with other foods such as rice, corn, wheat, or meat to create balanced meals. Beans can also be used to make soups, salads, dips, spreads, sauces, and desserts",
  "Climate: Beans prefer warm weather for the most part, though this may depend on the variety. The ideal temperature range for beans is 20-25°C. High temperatures may cause poor flower development and pod formation. Low temperatures may cause slow germination and growth. Frost may damage or kill the plants. Beans also need adequate rainfall or irrigation during the flowering and pod-filling stages2 .Soil: Beans prefer well-drained soil with a pH of 6.0-6.5. The soil should be rich in organic matter and have good aeration and water-holding capacity. The soil should also be free of weeds, pests, diseases, and nematodes that may affect the bean plants2 .Sunlight: Beans need at least 6 hours of full sun per day for optimal photosynthesis and growth. Shading may reduce the yield and quality of the beans"
);
// crops.addCropInfoData("maize");

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

try {
  crops.createUser("monit", "helloworld");
  crops.userAccountInfo("monit", "helloworld");
} catch (error) {
  console.error(error.message);
}
// crops.createUser("adam", "12345678");
// crops.createUser("morgan", "qwerfds98443234");

// console.log(crops.createUser("adam", "12345678"));
// console.log(crops.createUser("morgan", "qwerfds98443234"));

// #########
// 6. user account
// #########
console.log(crops.userAccount("adam", "12345678"));
// console.log(crops.userAccountInfo("adam", "12345678"));

// #########
// purchase
// #########
// console.log(
//   crops.purchase_manure(
//     "AgroThrive Organic General Purpose",
//     "AgroThrive",
//     "3% N, 2% P, 2% K",
//     "his is a liquid fertilizer that can be used for vegetables, fruits, flowers, trees, shrubs, and lawns. It can be applied every 2 to 4 weeks during the growing season. It can be mixed with water at a rate of 2 to 4 ounces per gallon and applied with a watering can, hose-end sprayer, or drip irrigation system",
//     "This product contains organic materials that may have an unpleasant odor. Avoid contact with eyes and skin. Wash hands after use. Keep out of reach of children and pets. Do not apply to edible parts of plants or crops.",
//     29.992
//   )
// );
// #########
// Buy It
// #########
// console.log(crops.buyIt("agroTheive", 500, 29.992));
// console.log(crops);
