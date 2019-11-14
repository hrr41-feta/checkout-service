const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432
});

//PostgreSQL Sample HTTP requests
const getProductById = (req, res) => {
  console.log(req.query, req.body, req.params);
  const id = req.query.id;
  pool.query(
    "SELECT products.*, size.sizes, material.materials, font.fonts, pattern.patterns FROM products INNER JOIN products_size ON products.id = products_size.product_id INNER JOIN size ON products_size.size_id = size.id INNER JOIN products_material ON products.id = products_material.product_id INNER JOIN material ON products_material.material_id = material.id INNER JOIN products_font ON products.id = products_font.product_id INNER JOIN font ON products_font.font_id = font.id INNER JOIN products_pattern ON products.id = products_pattern.product_id INNER JOIN pattern ON products_pattern.pattern_id = pattern.id WHERE products.id = $1",
    [id],
    (err, results) => {
      if (err) {
        res.send(err);
        throw err;
      }
      res.status(200).json(results.rows);
    }
  );
};
const addProduct = (req, res) => {
  const id = req.body.id;
  const product_id = req.body.product_id;
  const seller_id = req.body.seller_id;
  const seller_name = req.body.seller_name;
  const average_review_score = req.body.average_review_score;
  const number_reviews = req.body.number_reviews;
  const item_name = req.body.item_name;
  const badge = req.body.badge;
  const item_price = req.body.item_price;
  const free_shipping = req.body.free_shipping;
  const personalization = req.body.personalization;
  const available_quantity = req.body.available_quantity;
  const on_order = req.body.on_order;
  pool.query(
    `INSERT INTO products (id, product_id, seller_id, seller_name, average_review_score, number_reviews, item_name, badge, item_price, free_shipping, personalization, available_quantity, on_order) VALUES ($1, $2,$3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
    [
      id,
      product_id,
      seller_id,
      seller_name,
      average_review_score,
      number_reviews,
      item_name,
      badge,
      item_price,
      free_shipping,
      personalization,
      available_quantity,
      on_order
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(201).send(`Product added`);
    }
  );
};
const updateProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const { seller_name, item_name } = req.body;
  pool.query(
    "UPDATE products SET seller_name = $1, item_name = $2 WHERE id = $3",
    [seller_name, item_name, id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send(`Product modified with ID: ${id}`);
    }
  );
};

const deleteProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM products WHERE id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(`Product deleted with ID: ${id}`);
  });
};

module.exports = {
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
  pool
};
