const mongoose = require('mongoose');
const productDetails = require('./index.js').productDetails;
const dataSources = require('./fakedataSources.js');

class dataGenerator {
  constructor() {
    //defining valid inputs to pull fake data from
    this.sellerNames = ['Michael Flinn', 'James Dunn', 'Silin Dang', 'Cyrus Ghiassi', 'Robin Kim', 'Annah Patterson'];
    this.productNames = dataSources.productNames;
    this.badges = ['Bestseller', 'Poorseller'];
    this.productOptions = dataSources.productOptions;
  }

  generateProduct() {
    let product = {
      productId: this.generateProductId(),
      sellerId: this.generateSellerId(),
      sellerName: this.generateSellerName(),
      averageReviewScore: this.generateAverageReviewScore(),
      numberReviews: this.generateNumReviews(),
      itemName: this.generateProductName(),
      badge: this.generateBadge(),
      itemPrice: this.generateItemPrice(10,301),
      freeShipping: this.generateBoolean(),
      productOptions: this.generateProductOptions(),
      personalization: this.generateBoolean(),
      availableQuantity: this.generateAvailableQuantity(),
      onOrder: this.generateOnOrderQuantity()
    };
    return product;
  }

  getRandomInt(lowerLimit, upperLimit) { // returns integer between lower limit and upper limit - 1
    return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
  }

  generateProductId() {
    return this.getRandomInt(1, 10000);
  }
  generateSellerId() {
    return this.getRandomInt(1,1000);
  }
  generateSellerName() {
    let nameIdx = this.getRandomInt(0, this.sellerNames.length);
    return this.sellerNames[nameIdx];
  }
  generateAverageReviewScore() {
    return this.getRandomInt(1, 6)
  }
  generateNumReviews() {
    return this.getRandomInt(0, 5001);
  }
  generateProductName() {
    let nameIdx = this.getRandomInt(0, this.productNames.length);
    return this.productNames[nameIdx];
  }
  generateBadge() {
    let badgeIdx = this.getRandomInt(0,this.badges.length);
    return this.badges[badgeIdx];
  }
  generateItemPrice(lowerLimit, upperLimit) {
    let price = Math.random() * (upperLimit - lowerLimit) + lowerLimit
    return Number(price.toFixed(2));
  }
  generateBoolean() {
    return Boolean(this.getRandomInt(0,2));
  }
  generateProductOptions() {
    let numOptions = this.getRandomInt(1,4);
    let optionIdxs = [];
    let idx = this.getRandomInt(0, this.productOptions.length);
    optionIdxs.push(idx);
    while (optionIdxs.length < numOptions) {
      do {
        idx = this.getRandomInt(0, this.productOptions.length);
      } while (optionIdxs.includes(idx));
      optionIdxs.push(idx);
    }
    let options = optionIdxs.map((idx) => this.productOptions[idx]);
    options.forEach((option) => {
      if (option.optionName === 'Size' || option.optionName === 'Material') {
        option.choices.forEach((choice) => {
          choice.adjustedPrice = this.generateItemPrice(10, 301);
        })
      }
    })
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
products = [];
let product;
for (let i = 0; i < 150; i++) {
  product = generator.generateProduct();
  products.push(product);
}
productDetails.create(products)
  .then(() => mongoose.connection.close())
  .catch((err) => console.log(err));