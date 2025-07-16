const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require("../errors");
const uploadImage = require("../utils/uploadImage");

const list = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM subcategory WHERE category_id = ?`,
    [req.params.id]
  );
  if (!rows) throw BadRequestError("couldn't get subcategories");
  res.status(StatusCodes.OK).json({ data: rows });
};

const create = async (req, res, next) => {
  // const imageName = await uploadImage(req);
  const { name, image } = req.body;
  const [r] = await pool.execute(
    "INSERT INTO subcategory (name, category_id, image) VALUES (?, ?, ?)",
    [name, Number(req.params.id), image]
  );
  if (!r) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  res
    .status(StatusCodes.CREATED)
    .json({ data: { id: r.insertId, name, category_id: req.params.id } });
};
const update = async (req, res, next) => {
  const { name, category_id } = req.body;
  const fields = [];
  const values = [];
  if (name) {
    fields.push("name = ?");
    values.push(name);
  }
  if (category_id) {
    fields.push("category_id = ?");
    values.push(category_id);
  }
  if (req.files) {
    const imageName = await uploadImage({ req });
    fields.push("image = ?");
    values.push(imageName);
  }
  const [r] = await pool.execute(
    `UPDATE subcategory set ${fields.join(", ")} WHERE id = ?`,
    [...values, req.params.id]
  );
  if (!r) {
    throw new UnauthenticatedError("Could Not be Updated");
  }
  res.status(StatusCodes.CREATED).json({ data: { name, category_id } });
};
const remove = async (req, res, next) => {
  const [r] = await pool.execute("DELETE FROM subcategory WHERE id = ?", [
    req.params.id,
  ]);
  if (!r) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  res.status(StatusCodes.OK).json({ data: "subcategory deleted" });
};

module.exports = { list, update, remove, create };
