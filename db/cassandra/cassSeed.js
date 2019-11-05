const dataSources = require("../fakeDataSources.js");
const faker = require("faker");

class dataGenerator {
  constructor() {
    this.badges = ["Bestseller", "Badseller", null];
    this.productOptions = dataSources.productOptions;
  }
  generateProduct() {
    let product = {
      productId: this.generateProductId(),
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
  generateProductId() {
    return this.getRandomInt(1, 10000);
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
