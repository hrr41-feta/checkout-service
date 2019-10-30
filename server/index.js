const express = require("express");
const morgan = require("morgan");
const Model = require("./models.js");
const productDetails = require("../db/index.js");

const PORT = 1234;

const app = express();

app.use(morgan("combined"));
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});
//res.setheader

app.get("/api/checkout/:productId/details", (req, res) => {
  const { productId } = req.params;
  Model.getProduct(productId)
    .then(product => res.json(product))
    .catch(() => {
      res.status(404);
      res.send("Product not found");
    });
});

// added
app.post("/api/checkout/post", (req, res) => {
  const data = new productDetails(req.body);
  Model.postProduct(data)
    .then(res.send(req.body))
    .catch(err => {
      throw err;
    });
});

//added
app.delete("/api/checkout/delete/:productId", (req, res) => {
  const productId = req.params;
  Model.deleteProduct(productId)
    .then(product => res.json("Deleted"))
    .catch(err => {
      throw err;
    });
});

//added
app.put("/api/checkout/put/:productId", (req, res) => {
  const productId = req.params;
  const update = req.body;

  Model.putProduct(productId, update)
    .then(product => res.json("Updated"))
    .catch(err => {
      throw err;
    });
});

// app.post('/api/checkout', (req, res) => {
//   console.log('this is a post', req.params)
//   let data = new productDetails(req.body);
//   Model.postProduct(data)
//     .then(res.send('item saved to db'))
//     .catch((err) => {
//       throw err;
//     });
// }

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
