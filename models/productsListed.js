export const productsListed = ` CREATE TABLE IF NOT EXISTS products_listed (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
user_details_id INT UNSIGNED NOT NULL,
FOREIGN KEY(user_details_id) REFERENCES userdetails(id)
)
`;
