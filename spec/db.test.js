const dataGenerator = require('../db/seed.js');

let testGenerator = new dataGenerator();
test('seed data generator methods generate the desired output', () =>{
  let testProduct = testGenerator.generateProduct();

  expect(testProduct).toHaveProperty('sellerId');
  expect(testProduct).toHaveProperty('sellerName');
  expect(testProduct).toHaveProperty('averageReviewScore');
  expect(testProduct).toHaveProperty('numberReviews');
  expect(testProduct).toHaveProperty('itemName');
  expect(testProduct).toHaveProperty('badge');
  expect(testProduct).toHaveProperty('itemPrice');
  expect(testProduct).toHaveProperty('freeShipping');
  expect(testProduct).toHaveProperty('productOptions');
  expect(testProduct.productOptions).toBeDefined();
  expect(testProduct.productOptions[0]).toHaveProperty('choices');
  expect(testProduct).toHaveProperty('personalization');
  expect(testProduct).toHaveProperty('availableQuantity');
  expect(testProduct).toHaveProperty('onOrder');

});
