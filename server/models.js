const mongoose = require("mongoose");
const productDetails = require("../db/index.js");

class ProductDetailsModel {
  constructor() {
    this.model = productDetails;
  }

  async getProduct(productId) {
    let productData = await this.model.findOne({ productId });
    if (!productData) {
      throw new Error("product not found");
    }
    return productData;
  }

  //added
  async postProduct(product) {
    try {
      let productData = await this.model.create(product);
    } catch (e) {
      throw new Error(e);
    }
  }

  //added
  async putProduct(productId, update) {
    try {
      let product = await this.model.findOneAndUpdate(productId, update);
    } catch (err) {
      throw new err();
    }
  }

  //added
  async deleteProduct(productId) {
    try {
      let productData = await this.model.deleteOne(productId);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new ProductDetailsModel();
