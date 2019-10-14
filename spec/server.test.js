const productModel = require('../server/models.js');
//const mongoose = require('mongoose');

describe('Product Model', () => {

  test('it should retrive product data from the database', async () => {
    let result = await productModel.getProduct(2);
    expect(result).toBeDefined();
    expect(result.sellerName).toBe('Dennis Kim');
    expect(result.itemPrice).toBe(222.18);
    expect(result.productOptions[0].choices[0].choice).toBe('serif');
  });

});