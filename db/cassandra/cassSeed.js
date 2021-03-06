const dataSources = require("../fakeDataSources.js");
const faker = require("faker");
const fs = require("fs");

class dataGenerator {
  constructor() {
    this.badges = ["Bestseller", "Badseller", null];
    this.productOptions = dataSources.productOptions;
  }
  generateProduct() {
    let product = {
      sellerId: this.generateSellerId(),
      sellerName: faker.name.findName(),
      averageReviewScore: this.generateAverageReviewScore(),
      numberReviews: this.generateNumReviews(),
      itemName: faker.lorem.word(),
      badge: this.generateBadge(),
      itemPrice: this.generateItemPrice(10, 301),
      freeShipping: this.generateBoolean(),
      productOptions: this.generateProductOptions(),
      personalization: this.generateBoolean(),
      availableQuantity: this.generateAvailableQuantity(),
      onOrder: this.generateOnOrderQuantity()
    };
    return product;
  }

  getRandomInt(lowerLimit, upperLimit) {
    // returns integer between lower limit and upper limit - 1
    return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
  }
  generateSellerId() {
    return this.getRandomInt(1, 10000);
  }
  generateAverageReviewScore() {
    return this.getRandomInt(1, 6);
  }
  generateNumReviews() {
    return this.getRandomInt(0, 5001);
  }
  generateBadge() {
    const badgeIdx = this.getRandomInt(0, this.badges.length);
    return this.badges[badgeIdx];
  }
  generateItemPrice(lowerLimit, upperLimit) {
    let price = Math.random() * (upperLimit - lowerLimit) + lowerLimit;
    return Number(price.toFixed(2));
  }
  generateBoolean() {
    return Boolean(this.getRandomInt(0, 2));
  }
  generateProductOptions() {
    let numOptions = this.getRandomInt(1, 4);
    let optionIdxs = [];
    let idx = this.getRandomInt(0, this.productOptions.length);
    optionIdxs.push(idx);
    while (optionIdxs.length < numOptions) {
      do {
        idx = this.getRandomInt(0, this.productOptions.length);
      } while (optionIdxs.includes(idx));
      optionIdxs.push(idx);
    }
    let options = optionIdxs.map(idx => this.productOptions[idx]);
    options.forEach(option => {
      if (option.optionName === "Size" || option.optionName === "Material") {
        option.choices.forEach(choice => {
          choice.adjustedPrice = this.generateItemPrice(10, 301);
        });
      }
    });
    return options;
  }
  generateAvailableQuantity() {
    return this.getRandomInt(1, 201);
  }
  generateOnOrderQuantity() {
    return this.getRandomInt(0, 26);
  }
}
let generator = new dataGenerator();

const writeData = fs.createWriteStream("cass_products.csv");
writeData.write(
  "product_id,seller_id,seller_name,average_review_score,number_reviews,item_name,badge,item_price,free_shipping,personalization,available_quantity,on_order\n",
  "utf8"
);
const writeTenMil = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  let write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const gd = generator.generateProduct();
      const productId = id;
      const sellerId = gd.sellerId;
      const sellerName = gd.sellerName;
      const averageReviewScore = gd.averageReviewScore;
      const numberReviews = gd.numberReviews;
      const itemName = gd.itemName;
      const badge = gd.badge;
      const itemPrice = gd.itemPrice;
      const freeShipping = gd.freeShipping;
      const personalization = gd.personalization;
      const availableQuantity = gd.availableQuantity;
      const onOrder = gd.onOrder;
      const data = `${productId},${sellerId},${sellerName},${averageReviewScore},${numberReviews},${itemName},${badge},${itemPrice},${freeShipping},${personalization},${availableQuantity},${onOrder}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  };
  write();
};
// writeTenMil(writeData, "utf-8", () => {
//   writeData.end();
// });

let sizes = ["extra_small", "small", "medium", "large", "extra_large"];
const writeSizes = fs.createWriteStream("cass_sizes.csv");
writeSizes.write("product_id,size,\n", "utf8");
const tenMilSizes = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  let write = () => {
    let ok = true;
    do {
      id++;
      i--;
      for (j = 0; j < sizes.length; j++) {
        let randomBool = Math.random() >= 0.5;
        if (randomBool === true) {
          let data = `${id},${sizes[j]}\n`;
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        }
      }
    } while (i > 0 && ok);
    {
      if (i > 0) {
        writer.once("drain", write);
      }
    }
  };
  write();
};
// tenMilSizes(writeSizes, "utf-8", () => {
//   writeSizes.end();
// });

let materials = [
  "ash",
  "walnut",
  "ebony",
  "alumnium",
  "brushed_steel",
  "glass",
  "solid_titanium",
  "pure_gold",
  "solid_diamond"
];
const writeMaterials = fs.createWriteStream("cass_material.csv");
writeMaterials.write("product_id,material\n", "utf8");
const tenMilMaterials = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  let write = () => {
    let ok = true;
    do {
      id++;
      i--;
      for (j = 0; j < materials.length; j++) {
        let randomBool = Math.random() >= 0.5;
        if (randomBool === true) {
          let data = `${id},${materials[j]}\n`;
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        }
      }
    } while (i > 0 && ok);
    {
      if (i > 0) {
        writer.once("drain", write);
      }
    }
  };
  write();
};
// tenMilMaterials(writeMaterials, "utf-8", () => {
//   writeMaterials.end();
// });

let patterns = [
  "checkerboard",
  "argile",
  "striped_vertical",
  "striped_horizontal",
  "stars",
  "bars",
  "tie_dye"
];
const writePatterns = fs.createWriteStream("cass_pattern.csv");
writePatterns.write("product_id,pattern\n", "utf8");
const tenMilPatterns = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  let write = () => {
    let ok = true;
    do {
      id++;
      i--;
      for (var j = 0; j < patterns.length; j++) {
        let randomBool = Math.random() >= 0.5;
        if (randomBool === true) {
          let data = `${id},${patterns[j]}\n`;
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        }
      }
    } while (i > 0 && ok);
    {
      if (i > 0) {
        writer.once("drain", write);
      }
    }
  };
  write();
};
// tenMilPatterns(writePatterns, "utf-8", () => {
//   writePatterns.end();
// });

let fonts = ["serif", "comic_sans", "typewriter", "cursive", "star_wars"];
const writeFonts = fs.createWriteStream("cass_font.csv");
writeFonts.write("product_id,font\n", "utf8");
const tenMilFonts = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  let write = () => {
    let ok = true;
    do {
      id++;
      i--;
      for (var j = 0; j < fonts.length; j++) {
        let randomBool = Math.random() >= 0.5;
        if (randomBool === true) {
          let data = `${id},${fonts[j]}\n`;
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        }
      }
    } while (i > 0 && ok);
    {
      if (i > 0) {
        writer.once("drain", write);
      }
    }
  };
  write();
};
// tenMilFonts(writeFonts, "utf-8", () => {
//   writeFonts.end();
// });
