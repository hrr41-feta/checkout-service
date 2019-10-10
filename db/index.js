const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BTetsy' ,{useNewUrlParser: true, useUnifiedTopology: true});

const productDetailsSchema = new mongoose.Schema({
  productId: {type: Number, index: {unique: true}},
  sellerId: Number,
  sellerName: String,
  averageReviewScore: Number,
  numberReviews: Number,
  itemName: String,
  badge: String,
  sellerLocation: String,
  itemPrice: Number,
  freeShipping: Boolean,
  productOptions: [
    {
      optionName: String,
      choices: [
        {choice: String, adjustedPrice: Number}
      ]
    }
  ],
  personalization: Boolean,
  availableQuantity: Number,
  onOrder: Number,
});
console.log(productDetailsSchema);