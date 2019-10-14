const productModel = require('../server/models.js');
const axios = require('axios');

describe('Product Model', () => {

  test('it should retrive product data from the database', async () => {
    let result = await productModel.getProduct(2);
    expect(result).toBeDefined();
    expect(result.sellerName).toBe('Dennis Kim');
    expect(result.itemPrice).toBe(222.18);
    expect(result.productOptions[0].choices[0].choice).toBe('serif');
  });

});

describe('API Routes', () => {
  test('A get request to /api/checkout/:productId/details should return the requested product', async () => {
    try {
      var response = await axios.get('http://127.0.0.1:1234/api/checkout/3/details');
    } catch (err){
      console.error(err);
    }
    expect(response.data.productId).toBe(3);
    expect(response.data.sellerName).toBe('Kai Dong');
  });

  test('A get request for an invalid product id should 404', async () => {
    try {
      var response = await axios.get('http://127.0.0.1:1234/api/checkout/2345/details');
    } catch (err) {
      var response = err;
    }
    expect(response.response.status).toBe(404);
    expect(response.response.statusText).toBe('Not Found');
  });
})