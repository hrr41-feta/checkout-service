CREATE TABLE products (
  id serial PRIMARY KEY,
  product_id INTEGER NOT NULL,
  seller_id SMALLINT NOT NULL,
  seller_name VARCHAR (50) NOT NULL,
  average_review_score SMALLINT NOT NULL,
  number_reviews SMALLINT NOT NULL,
  item_name VARCHAR (25) NOT NULL,
  badge VARCHAR (25),
  item_price DECIMAL NOT NULL,
  free_shipping BOOLEAN NOT NULL,
  personalization BOOLEAN NOT NULL,
  available_quantity SMALLINT NOT NULL,
  on_order SMALLINT NOT NULL
);

CREATE TABLE size (
  id serial PRIMARY KEY,
  sizes VARCHAR (20) NOT NULL
);
CREATE TABLE products_size (
  product_id INTEGER REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
  size_id SMALLINT REFERENCES size (id) ON UPDATE CASCADE NOT NULL,
  constraint id PRIMARY KEY (product_id, size_id)
);

CREATE TABLE material (
  id serial PRIMARY KEY,
  materials VARCHAR (20) NOT NULL
);

CREATE TABLE products_material (
  product_id INTEGER REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
  material_id SMALLINT REFERENCES material (id) ON UPDATE CASCADE NOT NULL,
  constraint pr_id PRIMARY KEY (product_id, material_id)
);

CREATE TABLE pattern (
  id serial PRIMARY KEY,
  patterns VARCHAR (20) NOT NULL
);

CREATE TABLE products_pattern (
  product_id INTEGER REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
  pattern_id SMALLINT REFERENCES pattern (id) ON UPDATE CASCADE NOT NULL,
  constraint pa_id PRIMARY KEY (product_id, pattern_id)
);

CREATE TABLE font (
  id serial PRIMARY KEY,
  fonts VARCHAR (20) NOT NULL
);
CREATE TABLE products_font (
  product_id INTEGER REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
  font_id SMALLINT REFERENCES font (id) ON UPDATE CASCADE NOT NULL,
  constraint f_id PRIMARY KEY (product_id, font_id)
);

insert into size (sizes) values('extra-small');
insert into size (sizes) values('small');
insert into size (sizes) values('medium');
insert into size (sizes) values('large');
insert into size (sizes) values('extra-large');

insert into material (materials) values('ash'), ('walnut'), ('ebony'), ('alumnium'), ('brushed_steel'), ('glass'), ('solid_titanium'), ('pure_gold'), ('solid_diamond');

insert into pattern (patterns) values('checkerboard'),('argile'),('striped_vertical'),('striped_horizontal'),('stars'),('bars'),('tie-dye');

insert into font (fonts) values('serif'),('comic_sans'),('typewriter'),('cursive'),('star_wars');


\COPY products (product_id,seller_id,seller_name,average_review_score,number_reviews,item_name,badge,item_price,free_shipping,personalization,available_quantity,on_order) FROM '/home/ec2-user/checkout-service/productData.csv' DELIMITER ',' CSV HEADER;

\COPY products_size (product_id,size_id) FROM '/home/ec2-user/checkout-service/products_sizes.csv' DELIMITER ',' CSV HEADER;

\COPY products_pattern (product_id,pattern_id) FROM '/home/ec2-user/checkout-service/products_pattern.csv' DELIMITER ',' CSV HEADER;

COPY products_font (product_id,font_id) FROM '/home/ec2-user/checkout-service/products_font.csv' DELIMITER ',' CSV HEADER;

COPY products_material (product_id,material_id) FROM '/home/ec2-user/checkout-service/products_material.csv' DELIMITER ',' CSV HEADER;

