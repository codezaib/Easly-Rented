const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const path = require("path");
const fs = require("fs");
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require("../errors");
const uploadImage = require("../utils/uploadImage");
const getAllProducts = async (req, res) => {
  const [products] = await pool.query("Select * from product");
  if (!products) {
    throw new UnauthenticatedError("invalid credentials");
  }
  res.status(StatusCodes.OK).json({ data: products });
};

const getOneProduct = async (req, res) => {
  const [[product]] = await pool.execute("SELECT * FROM product where id = ?", [
    req.params.id,
  ]);
  if (!product) {
    throw new NotFoundError("No product found with this id");
  }
  res.status(StatusCodes.OK).json({ data: product });
};

const createProduct = async (req, res) => {
  const imageName = await uploadImage(req);
  const {
    name,
    description,
    price,
    duration_type,
    subcategory_id,
    product_location,
  } = req.body;
  const [result] = await pool.execute(
    "INSERT into product (name, description, price, duration_type, subcategory_id, product_location, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      name,
      description,
      price,
      duration_type,
      subcategory_id,
      product_location,
      imageName,
    ]
  );

  if (!result) {
    throw new BadRequestError("Product could not be created");
  }
  const [r] = await pool.execute(
    `INSERT INTO products_listed (user_id, product_id) VAlUES (?, ?)`,
    [req.user.userId, result.insertId]
  );
  if (r.affectedRows == 0) {
    console.log("list could not be updated");
  }
  res.status(StatusCodes.CREATED).json({
    msg: "product created successfully",
    data: { id: result.insertId },
  });
};
const updateProduct = async (req, res) => {
  const { id } = req.params;

  const {
    name,
    description,
    price,
    duration_type,
    duration_time,
    subcategory_id,
    product_location,
  } = req.body;

  let fields = [];
  let values = [];

  if (name) {
    fields.push("name = ?");
    values.push(name);
  }
  if (product_location) {
    fields.push("product_location = ?");
    values.push(product_location);
  }
  if (description) {
    fields.push("description = ?");
    values.push(description);
  }
  if (price) {
    fields.push("price = ?");
    values.push(price);
  }
  if (duration_type) {
    fields.push("duration_type = ?");
    values.push(duration_type);
  }
  if (duration_time) {
    fields.push("duration_time = ?");
    values.push(duration_time);
  }
  if (subcategory_id) {
    fields.push("subcategory_id = ?");
    values.push(subcategory_id);
  }

  if (req.files) {
    const imageName = await uploadImage(req);
    fields.push("image = ?");
    values.push(imageName);
  }

  if (fields.length === 0) {
    return res.status(400).json({ msg: "No fields provided to update" });
  }

  values.push(id);

  const [result] = await pool.execute(
    `UPDATE product SET ${fields.join(", ")} WHERE id = ?`,
    values
  );

  if (result.affectedRows === 0) {
    throw new BadRequestError("Product not found or not updated");
  }

  res.status(StatusCodes.OK).json({ msg: "Product updated successfully" });
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const [[product]] = await pool.execute(
    "SELECT image FROM product WHERE id = ?",
    [id]
  );
  if (product) {
    console.log(product);
    const imagePath = path.join(
      __dirname,
      `../public/uploads/${product.image}`
    );
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }
  const [result] = await pool.execute("DELETE FROM product WHERE id = ?", [id]);

  if (result.affectedRows === 0) {
    throw new BadRequestError("Product not found or could not be deleted");
  }

  res.status(StatusCodes.OK).json({ msg: "Product deleted successfully" });
};

const sortProducts = async (req, res) => {
  const { sortBy = "price", order = "asc", limit } = req.query;
  const { category_id, subcategory_id } = req.body;
  const allowedFields = ["price", "name", "duration_time"];
  const allowedOrder = ["asc", "desc"];
  if (
    !allowedFields.includes(sortBy) ||
    !allowedOrder.includes(order.toLowerCase())
  ) {
    return res.status(400).json({ msg: "Invalid sorting parameters" });
  }
  let query = "SELECT * FROM product";
  const conditions = [];
  const values = [];

  if (category_id) {
    const [subcategories] = await pool.execute(
      `SELECT id FROM subcategory WHERE category_id = ?`,
      [category_id]
    );
    const ids = subcategories.map((s) => s.id);
    if (ids.length > 0) {
      conditions.push(`subcategory_id IN (${ids.map(() => "?").join(",")})`);
      values.push(...ids);
    }
  }

  if (subcategory_id) {
    conditions.push(`subcategory_id = ?`);
    values.push(subcategory_id);
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  query += ` ORDER BY ${sortBy} ${order.toUpperCase()}`;

  if (limit && !isNaN(limit)) {
    query += " LIMIT ?";
    values.push(parseInt(limit));
  }

  const [rows] = await pool.execute(query, values);
  res.status(200).json({ data: rows });
};

const searchProducts = async (req, res) => {
  const { name } = req.query;
  const [rows] = await pool.execute("SELECT * FROM product WHERE name LIKE ?", [
    `%${name}%`,
  ]);

  res.status(StatusCodes.OK).json({ data: rows });
};
module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  sortProducts,
  searchProducts,
};
