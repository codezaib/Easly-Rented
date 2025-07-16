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
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
