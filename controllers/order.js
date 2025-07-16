const { StatusCodes } = require("http-status-codes");
const pool = require("../db/connect");
const { BadRequestError } = require("../errors");

const placeOrder = async (req, res) => {
  const { orderObject, addressObject, orderItems } = req.body;
  // 1. Insert order
  const [orderResult] = await pool.execute(
    "INSERT INTO orders (user_id, payment_type, total_price) VALUES (?, ?, ?)",
    [req.user.userId, orderObject.payment_type, orderObject.total_price]
  );
  const order_id = orderResult.insertId;
  if (!order_id) {
    throw new BadRequestError("Order could not be created");
  }

  // 2. Insert order_items
  const itemsSql = `
      INSERT INTO order_items (order_id, product_id, quantity, total_price, duration)
      VALUES ?
    `;
  const itemValues = orderItems.map((i) => [
    order_id,
    i.product_id,
    i.quantity,
    i.total_price,
    i.duration,
  ]);

  await pool.query(itemsSql, [itemValues]);

  // 3. Insert address
  const { saveInfo, ...sanitizedAddress } = addressObject;
  const addressSql = `
      INSERT INTO address_details
      (phone, city, state, country, postalCode, address, email, full_name, order_id${
        saveInfo ? ", user_id" : ""
      })
      VALUES (${Array(saveInfo ? 10 : 9)
        .fill("?")
        .join(", ")})
    `;

  const values = [
    sanitizedAddress.phone,
    sanitizedAddress.city,
    sanitizedAddress.state,
    sanitizedAddress.country,
    sanitizedAddress.postalCode,
    sanitizedAddress.address,
    sanitizedAddress.email,
    sanitizedAddress.full_name,
    order_id,
    ...(saveInfo ? [req.user.userId] : []),
  ];
  try {
    const [addressResult] = await pool.execute(addressSql, values);
    if (!addressResult.insertId) {
      throw new BadRequestError("Address could not be added");
    }
  } catch (error) {
    console.log(error);
  }
  res.status(201).json({
    data: { orderId: order_id, total: orderObject.total_price },
  });
};

const getOrdersByUser = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM orders WHERE user_id = ?", [
    req.user.userId,
  ]);
  if (!rows) {
    throw new BadRequestError("No Orders found with this id");
  }
  res.status(StatusCodes.OK).json({ data: rows });
};

const getOrderDetails = async (req, res) => {
  const orderId = req.params.id;

  const itemsSql = `SELECT * FROM order_items WHERE order_id = ?`;
  const [order_items] = await pool.query(itemsSql, [orderId]);

  if (!order_items || order_items.length === 0) {
    throw new BadRequestError("No items exist in this order");
  }

  const productSql = `
    SELECT name, image, price, subcategory_id, duration_type 
    FROM product 
    WHERE id = ?
  `;
  const data = await Promise.all(
    order_items.map(async (order_item) => {
      const [[rows]] = await pool.execute(productSql, [order_item.product_id]);

      if (!rows || rows.length === 0) {
        throw new BadRequestError("No product found with this id");
      }

      return {
        ...order_item,
        ...rows,
      };
    })
  );

  res.status(StatusCodes.OK).json({ data });
};

const deleteOrder = async (req, res) => {
  const orderId = req.params.id;
  const [[order]] = await pool.execute("SELECT * FROM orders WHERE id = ?", [
    orderId,
  ]);
  if (!order) throw new BadRequestError("No Order found with this id");
  if (order.status == "shipped" || order.status == "delivered")
    throw new BadRequestError(
      `Order Could not be Cancelled as it is being ${order.status.toUpperCase()}`
    );
  const [result] = await pool.execute("DELETE FROM orders WHERE id = ?", [
    orderId,
  ]);
  if (result.rowsAffected == 0) {
    throw new BadRequestError("order could not be deleted");
  }
  res.status(StatusCodes.OK).json({ data: { orderId } });
};
module.exports = { placeOrder, getOrdersByUser, getOrderDetails, deleteOrder };
