export const orderItem = `
CREATE TABLE IF NOT EXISTS order_items (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  order_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  quantity INT UNSIGNED NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration_type ENUM('days', 'months') NOT NULL,
  duration_time INT UNSIGNED NOT NULL,
  total_price DECIMAL(10,2) GENERATED ALWAYS AS (price * duration_time * quantity) STORED,
  PRIMARY KEY (id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (product_id) REFERENCES product(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
)
`;
