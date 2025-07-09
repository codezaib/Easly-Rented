const mysql = require("mysql2/promise");
// import { user } from "../models/user.model.js";
// import { userDetails } from "../models/userDetails.model.js";
// import { product } from "../models/product.js";
// import { subcategory } from "../models/subcategory.js";
// import { category } from "../models/category.js";
// import { order } from "../models/order.js";
// import { orderItem } from "../models/orderItem.js";
// import { productsListed } from "../models/productsListed.js";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "easly-rented",
  waitForConnections: true,
  poolLimit: 10,
  queueLimit: 0,
});

// export const initDB = async () => {
//   await pool.query(category);
//   await pool.query(subcategory);
//   await pool.query(product);
//   await pool.query(userDetails);
//   await pool.query(user);
//   await pool.query(order);
//   await pool.query(orderItem);
//   await pool.query(productsListed);
// };
module.exports = pool;
