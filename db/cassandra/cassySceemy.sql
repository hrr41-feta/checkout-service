CREATE TABLE products (
  product_id int,
  seller_id int,
  seller_name text,
  average_review_score int,
  number_reviews int,
  item_name text,
  badge text,
  item_price decimal,
  free_shipping boolean,
  personalization boolean,
  available_quantity int,
  on_order int,
  PRIMARY KEY(product_id)
);

COPY checkout.products (product_id, seller_id, seller_name, average_review_score, number_reviews, item_name, badge, item_price, free_shipping, personalization, available_quantity, on_order) FROM '/Users/robnolan/HRR41/senior/checkout-service/cass_products.csv' WITH DELIMITER=',' AND HEADER=TRUE;



CREATE TABLE size (
  product_id INT,
  size TEXT,
  PRIMARY KEY(product_id, size)
)

CREATE TABLE font (
  product_id INT,
  font TEXT,
  PRIMARY KEY(product_id, font)
  )

CREATE TABLE material (
  product_id INT,
  material TEXT,
  PRIMARY KEY(product_id, material)
)
CREATE TABLE pattern (
  product_id INT,
  pattern TEXT,
  PRIMARY KEY(product_id, pattern)
)

UDT
Frozen keyword
adding ID number to both products table
and other tables to connect all of themn