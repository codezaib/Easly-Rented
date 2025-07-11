export const userDetails = `CREATE TABLE IF NOT EXISTS userDetails (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT,
 address VARCHAR(255) NOT NULL,
 city VARCHAR(255) NOT NULL,
 state VARCHAR(255) NOT NULL,
 postalCode VARCHAR(255) NOT NULL,
 phone VARCHAR(100) NOT NULL,
 user_id INT NOT NULL UNSIGNED,
 PRIMARY KEY (id),
 FOREIGN KEY(user_id) REFERENCES user(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
)`;
