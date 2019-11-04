CREATE TABLE products (
  id serial PRIMARY KEY,
  product_id INTEGER NOT NULL,
  seller_id SMALLINT NOT NULL,
  seller_name VARCHAR (50) NOT NULL,
  average_review_score SMALLINT NOT NULL,
  number_reviews SMALLINT NOT NULL,
  item_name VARCHAR (255) NOT NULL,
  badge VARCHAR (50),
  item_price DECIMAL NOT NULL,
  free_shipping BOOLEAN NOT NULL,
  personalization BOOLEAN NOT NULL,
  available_quantity SMALLINT NOT NULL,
  on_order SMALLINT NOT NULL
)

CREATE TABLE size (
  id serial PRIMARY KEY,
  sizes VARCHAR (255) NOT NULL
)
CREATE TABLE products_size (
  id serial PRIMARY KEY,
  product_id INTEGER NOT NULL,
  size_id INTEGER NOT NULL
)

CREATE TABLE material (
  id serial PRIMARY KEY,
  materials VARCHAR (255) NOT NULL
)
CREATE TABLE products_material (
  id serial PRIMARY KEY,
  product_id INTEGER NOT NULL,
  material_id INTEGER NOT NULL
)

CREATE TABLE pattern (
  id serial PRIMARY KEY,
  patterns VARCHAR (255) NOT NULL
)

CREATE TABLE products_pattern (
  id serial PRIMARY KEY,
  product_id INTEGER NOT NULL,
  pattern_id INTEGER NOT NULL
)

CREATE TABLE font (
  id serial PRIMARY KEY,
  fonts VARCHAR (255) NOT NULL
)
CREATE TABLE products_font (
  id serial PRIMARY KEY,
  product_id INTEGER NOT NULL,
  font_id INTEGER NOT NULL
)

COPY products_size (product_id,size_id) FROM '/Users/robnolan/HRR41/senior/checkout-service/products_sizes.csv' DELIMITER ',' CSV HEADER;

COPY products_pattern (product_id,pattern_id) FROM '/Users/robnolan/HRR41/senior/checkout-service/products_pattern.csv' DELIMITER ',' CSV HEADER;

COPY products_font (product_id,font_id) FROM '/Users/robnolan/HRR41/senior/checkout-service/products_font.csv' DELIMITER ',' CSV HEADER;

COPY products_material (product_id,material_id) FROM '/Users/robnolan/HRR41/senior/checkout-service/products_material.csv' DELIMITER ',' CSV HEADER;

