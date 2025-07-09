const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const showCurrentUser = async (req, res) => {
  const [[user]] = await pool.query(
    "SELECT id, name, email FROM user WHERE id = ?",
    [req.user.userId]
  );
  if (!user)
    return res.status(StatusCodes.NOT_FOUND).json({ error: "User Not found" });
  res.status(StatusCodes.OK).json({ user });
};
const getAll = async (_req, res, next) => {
  const [rows] = await pool.query("SELECT id, name, email FROM user");
  res.status(StatusCodes.OK).json({ data: rows });
  throw new BadRequestError("Error occured");
};

const getOne = async (req, res, next) => {
  const [[user]] = await pool.query(
    "SELECT id, name, email FROM user WHERE id = ?",
    [req.params.id]
  );
  if (!user)
    return res.status(StatusCodes.NOT_FOUND).json({ error: "User Not found" });
  res.status(StatusCodes.OK).json({ user });
};

const update = async (req, res, next) => {
  const fields = [];
  const values = [];
  const { name, email, password } = req.body;
  if (name) {
    fields.push("name = ?");
    values.push(name);
  }
  if (email) {
    fields.push("email = ?");
    values.push(email);
  }
  if (password) {
    fields.push("password = ?");
    values.push(password);
  }
  const [result] = await pool.execute(
    `UPDATE user SET ${fields.join(", ")} WHERE id = ?`,
    [...values, req.params.id]
  );
  if (!result) {
    throw new NotFoundError(`No user found with this id: ${req.params.id}`);
  }
  const [[user]] = await pool.query(
    "SELECT id, name, email FROM users WHERE id = ?",
    [req.params.id]
  );
  res.status(StatusCodes.CREATED).json({ user });
};

const remove = async (req, res, next) => {
  const [result] = await pool.execute("DELETE FROM user WHERE id = ?", [
    req.params.id,
  ]);
  if (!result) throw new NotFoundError("No user found with this id");
  res.json({ message: "User deleted" });
};

module.exports = { update, getAll, getOne, remove, showCurrentUser };
