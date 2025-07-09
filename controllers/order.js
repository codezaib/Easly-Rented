const pool = require("../db/connect");
const { BadRequestError, NotFoundError } = require("../errors");

const placeOrder = async (req, res, next) => {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // 1. pull user’s cart
    const [cartItems] = await conn.query(
      "SELECT * FROM cart WHERE user_id = ?",
      [req.user.id]
    );
    if (!cartItems.length) {
      await conn.rollback();
      return res.status(400).json({ error: "Cart is empty" });
    }

    // 2. calc total
    const total = cartItems.reduce(
      (sum, i) => sum + i.price * i.duration_time * i.quantity,
      0
    );

    // 3. insert into orders
    const [order] = await conn.execute(
      "INSERT INTO orders (user_id, total_price) VALUES (?, ?)",
      [req.user.id, total]
    );

    // 4. order_items
    const itemsSql = `
      INSERT INTO order_items
      (order_id, product_id, quantity, price, duration_type, duration_time)
      VALUES ?`;
    const values = cartItems.map((i) => [
      order.insertId,
      i.product_id,
      i.quantity,
      i.price,
      i.duration_type,
      i.duration_time,
    ]);
    await conn.query(itemsSql, [values]);

    // 5. clear cart
    await conn.execute("DELETE FROM cart WHERE user_id = ?", [req.user.id]);

    await conn.commit();
    res.status(201).json({ orderId: order.insertId, total });
  } catch (err) {
    await conn.rollback();
    next(err);
  } finally {
    conn.release();
  }
};

const getOrdersByUser = async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM orders WHERE user_id = ?", [
      req.params.userId,
    ]);
    res.json(rows);
  } catch (err) {
    next(err);
  }
};
module.exports = { placeOrder, getOrdersByUser };
