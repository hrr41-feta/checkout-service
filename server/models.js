const mongoose = require('mongoose');
const productDetails = require('../db/index.js');

class ProductDetailsModel {
  constructor() {
    this.model = productDetails;
  }

  async getProduct(productId) {
    let productData = await this.model.findOne({productId})
    if (!productData) {
      throw new Error('product not found');
    }
    return productData;
  }
}


module.exports = new ProductDetailsModel();
