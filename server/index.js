const nr = require("newrelic");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
// const Model = require("./models.js");
// const productDetails = require("../db/mongoDB/index.js");
const PORT = process.env.PORT;
const app = express();
const postgreSQL = require("../db/postgreSQL/index.js");
// const cors = require("cors");
// const cassDB = require("../db/cassandra/index.js");

// app.use(cors());
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

//PostgreSQL Routes
// app.get("/api/checkout/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   postgreSQL
//     .getProductById(id)
//     .then(product => res.json(product))
//     .catch(() => {
//       res.send("Error");
//     });
// });
app.get("/api/checkout/:id", postgreSQL.getProductById);
app.post("/api/checkout/", postgreSQL.addProduct);
app.put("/api/checkout/:id", postgreSQL.updateProductById);
app.delete("/api/checkout/:id", postgreSQL.deleteProductById);

app.get("/test", (req, res) => {
  res.send("yes");
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

//Cassandra Routes with sample dev keyspace, emp table
// app.get("/employees", cassDB.getEmp);
// app.post("/employees", cassDB.addEmp);
// app.delete("/employees", cassDB.deleteEmpById);
// app.put("/employees", cassDB.updateFirst);

// Mongo HTTP requests, including Mike's GET from above
// app.get("/mapi/checkout/:productId", (req, res) => {
//   const { productId } = req.params;
//   Model.getProduct(productId)
//     .then(product => res.json(product))
//     .catch(() => {
//       res.status(404);
//       res.send("Product not found");
//     });
// });
// app.post("/api/checkout", (req, res) => {
//   const data = new productDetails(req.body);
//   Model.createProduct(data)
//     .then(res.send(req.body))
//     .catch(err => {
//       throw err;
//     });
// });
// app.delete("/api/checkout/:productId", (req, res) => {
//   const productId = req.params;
//   Model.deleteProduct(productId)
//     .then(product => res.json("Deleted"))
//     .catch(err => {
//       throw err;
//     });
// });
// app.put("/api/checkout/:productId", (req, res) => {
//   const productId = req.params;
//   const update = req.body;
//   Model.updateProduct(productId, update)
//     .then(product => res.json("Updated"))
//     .catch(err => {
//       throw err;
//     });
// });
