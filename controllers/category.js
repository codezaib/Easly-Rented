const pool = require("../db/connect");
const { BadRequestError, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const list = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM category");
    if (!rows) {
      throw new NotFoundError("Categories not found");
    }
    res.status(StatusCodes.OK).json(rows);
  } catch (error) {
    res.json({ error });
  }
};

const create = async (req, res) => {
  const { name } = req.body;
  const [r] = await pool.execute("INSERT INTO category (name) VALUES (?)", [
    name,
  ]);
  if (!r) throw new BadRequestError("Category could not be created");
  res.status(StatusCodes.CREATED).json({ data: { id: r.insertId, name } });
};
const update = async (req, res, next) => {
  await pool.execute("UPDATE category SET name = ? WHERE id = ?", [
    req.body.name,
    req.params.id,
  ]);
  const [[cat]] = await pool.query("SELECT * FROM category WHERE id = ?", [
    req.params.id,
  ]);
  if (!cat)
    throw new NotFoundError(`No category found with this id: ${req.params.id}`);
  res.status(StatusCodes.CREATED).json(cat);
};
const remove = async (req, res, next) => {
  await pool.execute("DELETE FROM categories WHERE id = ?", [req.params.id]);
  res.json({ message: "Category deleted" });
};
module.exports = { list, update, remove, create };
