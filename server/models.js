const mongoose = require('mongoose');
const productDetailsModel = require ('../db/index.js').productDetails;

class productDetails {
  constructor() {
    this.model = productDetailsModel;
  }
}