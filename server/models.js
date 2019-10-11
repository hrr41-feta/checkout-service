const mongoose = require('mongoose');
const productDetailsModel = require ('../db/index.js').productDetails;

class productDetails {
  constructor() {
    this.model = productDetailsModel;
  }

  async getProduct(productId) {
    let productData = await this.model.findOne({productId: productId})
    if (!productData) {
      throw new Error('product not found');
    }
    return productData;
  }
}


module.exports = new productDetails();
