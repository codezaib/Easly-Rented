const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const upsert = async (req, res, next) => {
  const { address, city, state, postalCode, phone } = req.body;
  const { userId } = req.user;
  const fields = [];
  const values = [];
  if (address) {
    fields.push("address = ?");
    values.push(address);
  }
  if (city) {
    fields.push("city = ?");
    values.push(city);
  }
  if (state) {
    fields.push("state = ?");
    values.push(state);
  }
  if (postalCode) {
    fields.push("postalCode = ?");
    values.push(postalCode);
  }
  if (phone) {
    fields.push("phone = ?");
    values.push(phone);
  }
  const [[row]] = await pool.query(
    "SELECT id FROM userdetails WHERE user_id = ?",
    [userId]
  );

  const [result] = await pool.execute(
    row
      ? `UPDATE userdetails SET ${fields.join(" = ?, ")} WHERE user_id = ?`
      : "INSERT INTO userdetails (user_id, address, city, state, postalCode, phone) VALUES (?, ?, ?)",
    row
      ? [...values, userId]
      : [userId, address, city, state, postalCode, phone]
  );
  if (!result) {
    throw new NotFoundError("No user found with this id");
  }
  const [[data]] = await pool.query(
    "SELECT * FROM userdetails WHERE user_id = ?",
    [userId]
  );
  res.status(StatusCodes.CREATED).json({ data });
};

module.exports = upsert;
