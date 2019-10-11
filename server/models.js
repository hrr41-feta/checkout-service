const mongoose = require('mongoose');
const productDetailsModel = require ('../db/index.js').productDetails;

class productDetails {
  constructor() {
    this.model = productDetailsModel;
  }

  async getProduct(productId) {
    let productData = await productDetailsModel.findOne({productId: productId})
    return productData;
  }
}

module.exports = productDetails;