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
        //   id: 1,
        //   type: null,
        //   qty: null,
        //   unitPrice: null,
        //   total: null,
        // },
      ],
    };
    // password verification
    if (datas.password.length < 8) {
      throw Error(
        `New password is weak, use strong password that have more 8 character`
      );
    }

    // add new user info
    const newLength = this.users.push(datas);
    console.log(`😊 You have successfully create account ${datas.userName}.`);

    return newLength;
  },

  // ################################################################################################
  //User buys something
  // ################################################################################################
  // userPurchase(user_id, typeOfProduct, qty, unitPrice) {
  //   console.log(user_id, typeOfProduct, qty, unitPrice);
  //   // throw error
  //   try {
  //     const user = this.users.find((user) => user.id == user_id);
  //     console.log(user);
  //   } catch (error) {
  //     console.log({ error: "Nooooooot found" });
  //   }
  //   const yup = this.users.map((user) => {
  //     if (user.id == user_id) {
  //       user.transactions = user.transactions.push({
  //         id: 1,
  //         type: typeOfProduct,
  //         qty: qty,
  //         unitPrice: unitPrice,
  //         total: qty * unitPrice,
  //       });
  //     }
  //   });
  //   return yup;
  // },

  userPurchase(user_id, typeOfProduct, qty, unitPrice) {
    const datas = {
      id: user_id,
      type: typeOfProduct,
      qty: qty,
      unitPrice: unitPrice,
      total: qty * unitPrice,
    };

    this.users.forEach((data) => {
      if (data.id === user_id) {
        const trans = data.transaction;
        trans.push(datas);
        console.log(data);
      } else {
        console.log("no found");
      }
      // if (user.id === user_id) {

      //   const trans = data.transaction;
      //   trans.push(datas);
      //   console.log(data);
      // } else {
      //   console.log("No found");
      // }
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
      (user) =>
        user.userName.toLowerCase() == userName.toLowerCase() &&
        user.password.toLowerCase() == password.toLowerCase()
    );
    if (user == null) {
      throw Error("User is not found");
    }

    console.log({ user });
    console.log("You have successfully logged in");
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
    return ` => ${cropFound.summary}. for more details about this crop, run getMefullInfo( write here Name of crop)`;
  },

  // ################################################################################################
  // DELETING
  // ################################################################################################
  deleteCrop: function (cropArray, cropName) {
    const cropIndexToDelete = cropArray.findIndex((data) => {
      return data.name.toLowerCase() === cropName.toLowerCase();
    });
    if (cropIndexToDelete === -1) {
      throw Error("Crop not found");
    }

    cropArray.splice(cropIndexToDelete, 1);
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
    return `Here manure product we have: name:${dataToPush.fertilizeName}, brand is ${dataToPush.brand}, it's have ${dataToPush.percentOfFertilize}, about how we apply it: ${dataToPush.percentApplication}, ⚠ N.B: ${dataToPush.warnings}., It's only cost:${dataToPush.price}`;
  },

  // ################################################################################################
  // Buy It
  // ################################################################################################
  buyIt: function (nameOfManure, amount, priceManure) {
    // console.log("hello");
  },
};
// #########|||||||||||||||||###########
// 1. add data (create)
// #########|||||||||||||||||###########

crops.addCropInfoData(
  "maize",
  "Legumes",
  "Beans are warm season crops that are cultivated for their immature pods (snap beans), immature seeds (shell beans), or mature seeds (dry beans). Beans can be classified into two types based on their growth habit: bush beans, which grow as low plants that do not need support, and pole beans, which grow as vines that need support. Beans are rich in protein, fiber, iron, and other nutrients. They can be eaten fresh, canned, frozen, or dried12.",
  "Beans are one of the oldest crops in the world. They have been cultivated for thousands of years in different regions of the world, such as Africa, Asia, Europe, and the Americas. Beans have played an important role in human history as a staple food and a source of income for many civilizations. Beans have also been used for medicinal purposes and as symbols of fertility and luck34.",
  "Food: Beans can be cooked and eaten as a vegetable or a main dish. They can also be processed into products such as flour, oil, milk, tofu, tempeh, miso, and natto. Beans can be combined with other foods such as rice, corn, wheat, or meat to create balanced meals. Beans can also be used to make soups, salads, dips, spreads, sauces, and desserts",
  "Climate: Beans prefer warm weather for the most part, though this may depend on the variety. The ideal temperature range for beans is 20-25°C. High temperatures may cause poor flower development and pod formation. Low temperatures may cause slow germination and growth. Frost may damage or kill the plants. Beans also need adequate rainfall or irrigation during the flowering and pod-filling stages2 .Soil: Beans prefer well-drained soil with a pH of 6.0-6.5. The soil should be rich in organic matter and have good aeration and water-holding capacity. The soil should also be free of weeds, pests, diseases, and nematodes that may affect the bean plants2 .Sunlight: Beans need at least 6 hours of full sun per day for optimal photosynthesis and growth. Shading may reduce the yield and quality of the beans",
  "Keep the soil somewhat moist after planting your seeds. In 4-10 days, the seeds should start to germinate.",
  "Plant the bean seeds directly into the soil about 9-12 inches away from each other",
  "Plant disease free seed or treat seed with an antibiotic to reduce levels of bacterium; rotate crops to non-hosts every 2 years; plow bean debris deeply in soil after harvest",
  "Beans should be ready to harvest as soon as 65 days after planting. When beans are ready to harvest, the seeds inside the pod are not quite full size. Harvestable beans should snap easily off the plant, and stored in airtight containers for up to four days after harvest",
  "pods when the crop begins maturing to a yellow-ripe stage.For varieties such as NABE 12C that fetch good prices for fresh pods, harvest the harvesting. A crop being harvested for seed should be left to dry completely before  Beans should not over stay in the feld after maturing, as pests such as bean bruchids may gain entry into the pods or pods may start shattering in the feld.  Harvests should be done when conditions are dry and cool. of a farm.Harvesting in wet conditions may transfer disease pathogens to uninfested areas yield losses"
);

crops.addCropInfoData(
  "bean",
  "Legumes",
  "Beans are warm season crops that are cultivated for their immature pods (snap beans), immature seeds (shell beans), or mature seeds (dry beans). Beans can be classified into two types based on their growth habit: bush beans, which grow as low plants that do not need support, and pole beans, which grow as vines that need support. Beans are rich in protein, fiber, iron, and other nutrients. They can be eaten fresh, canned, frozen, or dried12.",
  "Beans are one of the oldest crops in the world. They have been cultivated for thousands of years in different regions of the world, such as Africa, Asia, Europe, and the Americas. Beans have played an important role in human history as a staple food and a source of income for many civilizations. Beans have also been used for medicinal purposes and as symbols of fertility and luck34.",
  "Food: Beans can be cooked and eaten as a vegetable or a main dish. They can also be processed into products such as flour, oil, milk, tofu, tempeh, miso, and natto. Beans can be combined with other foods such as rice, corn, wheat, or meat to create balanced meals. Beans can also be used to make soups, salads, dips, spreads, sauces, and desserts",
  "Climate: Beans prefer warm weather for the most part, though this may depend on the variety. The ideal temperature range for beans is 20-25°C. High temperatures may cause poor flower development and pod formation. Low temperatures may cause slow germination and growth. Frost may damage or kill the plants. Beans also need adequate rainfall or irrigation during the flowering and pod-filling stages2 .Soil: Beans prefer well-drained soil with a pH of 6.0-6.5. The soil should be rich in organic matter and have good aeration and water-holding capacity. The soil should also be free of weeds, pests, diseases, and nematodes that may affect the bean plants2 .Sunlight: Beans need at least 6 hours of full sun per day for optimal photosynthesis and growth. Shading may reduce the yield and quality of the beans",
  "Keep the soil somewhat moist after planting your seeds. In 4-10 days, the seeds should start to germinate.",
  "Plant the bean seeds directly into the soil about 9-12 inches away from each other",
  "Plant disease free seed or treat seed with an antibiotic to reduce levels of bacterium; rotate crops to non-hosts every 2 years; plow bean debris deeply in soil after harvest",
  "Beans should be ready to harvest as soon as 65 days after planting. When beans are ready to harvest, the seeds inside the pod are not quite full size. Harvestable beans should snap easily off the plant, and stored in airtight containers for up to four days after harvest",
  "pods when the crop begins maturing to a yellow-ripe stage.For varieties such as NABE 12C that fetch good prices for fresh pods, harvest the harvesting. A crop being harvested for seed should be left to dry completely before  Beans should not over stay in the feld after maturing, as pests such as bean bruchids may gain entry into the pods or pods may start shattering in the feld.  Harvests should be done when conditions are dry and cool. of a farm.Harvesting in wet conditions may transfer disease pathogens to uninfested areas yield losses"
);

// #########|||||||||||||||||###########
// 2. search
// #########|||||||||||||||||###########
try {
  console.log(crops.searching(crops.cropInfo, "bean"));
} catch (error) {
  console.log("no found");
}

// #########|||||||||||||||||###########
// 3. get summary
// #########|||||||||||||||||###########
// try {
//   console.log(crops.getMeFullInfo(crops.cropInfo, "maize"));
// } catch (error) {
//   console.log({ error: "no found" });
// }

// #########|||||||||||||||||###########
// 4. delete
// #########|||||||||||||||||###########
try {
  crops.deleteCrop(crops.cropInfo, "maie");
  console.log(crops);
} catch (error) {
  console.error(error);
}
console.log();
// #########|||||||||||||||||###########
// 5. create account
// #########|||||||||||||||||###########

try {
  crops.createUser("Miles", "helloworld");
  crops.createUser("adam", "12345678");
  // console.log(crops.users);
} catch (error) {
  console.error(error.message);
}

// #########|||||||||||||||||###########
// 6. user account
// #########|||||||||||||||||###########
// try {
//   // crops.userAccountInfo("morgan", "qwerfds98443234");
//   crops.userAccountInfo("adam", "12345678");
// } catch (error) {
//   console.log(error.message);
// }

// #########|||||||||||||||||###########
// purchase (add manure info)
// #########|||||||||||||||||###########
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
try {
  crops.userPurchase(1, "npk", 2, 500);
  crops.userPurchase(2, "agroTheive", 500, 29.992);

  // crops.userPurchase(2, "npk", 2, 500);
} catch (error) {
  console.log(error);
}
// console.log(crops.users[0].transaction);
console.log(crops.userPurchase(1, "npk", 34, 500));
// console.log(crops.cropInfo);
