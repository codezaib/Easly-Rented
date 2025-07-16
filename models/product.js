export const product = `
CREATE TABLE IF NOT EXISTS product (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(255) NOT NULL,
  duration_type ENUM('days', 'months') NOT NULL,
  duration_time INT UNSIGNED NOT NULL,
  total_price DECIMAL(10,2) GENERATED ALWAYS AS (price * duration_time) STORED,
  subcategory_id INT UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  products_listed_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (subcategory_id) REFERENCES subcategory(id)
  ON DELETE RESTRICT
  ON UPDATE CASCADE
  FOREIGN KEY (products_listed_id) REFERENCES products_listed(id)
  ON DELETE RESTRICT
  ON UPDATE CASCADE
)
`;
