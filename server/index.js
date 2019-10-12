const express = require('express');
const morgan = require('morgan');
const Model = require('./models.js');
const PORT = 1234;

const app = express();

app.use(morgan('combined'));
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/checkout/:productId/details', (req, res) => {
  let productId = req.params.productId;
  Model.getProduct(productId)
    .then((product) => res.json(product))
    .catch((err) => {
      res.status(404)
      res.send('Product not found');
    });
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
