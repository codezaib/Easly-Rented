const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const listByUser = async (req, res, next) => {
  const [rows] = await pool.query(
    "SELECT * FROM products_listed WHERE user_id = ?",
    [req.user.userId]
  );
  if (!rows) throw new NotFoundError("No products list found by this id");
  const list = [];
  for (let i = 0; i < rows.length; i++) {
    const [[r]] = await pool.execute(`SELECT * FROM PRODUCT WHERE id = ?`, [
      rows[i]["product_id"],
    ]);
    if (!r) throw new NotFoundError("No Product found with this id");
    list.push(r);
  }
  res.status(StatusCodes.OK).json({ data: list });
};
module.exports = listByUser;
