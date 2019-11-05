CREATE TABLE products (
  product_id int,
  seller_id int,
  seller_name text,
  average_review_score int,
  number_reviews int,
  product_options text,
  item_name text,
  badge text,
  item_price int,
  free_shipping boolean,
  personalization boolean,
  available_quantity int,
  on_order int,
  PRIMARY KEY(product_id)
);

CREATE TABLE size (
  product_id INT,
  size_id INT
  size TEXT,
  PRIMARY KEY(product_id, size_id)
)

CREATE TABLE font (
  product_id INT,
  font_id INT,
  font TEXT,
  PRIMARY KEY(product_id, font_id)

  )

CREATE TABLE material (
  product_id INT,
  material_id INT,
  material TEXT,
  PRIMARY KEY(product_id, material_id)
)
CREATE TABLE pattern (
  product_id INT,
  pattern_id INT,
  pattern TEXT,
  PRIMARY KEY(product_id, pattern_id)
)

UDT
Frozen keyword
adding ID number to both products table
and other tables to connect all of themn