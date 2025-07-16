const {
  placeOrder,
  getOrdersByUser,
  getOrderDetails,
  deleteOrder,
} = require("../controllers/order");
const { authenticateUser } = require("../middlewares/authentication");

const { Router } = require("express");
const router = Router();

router.post("/create", authenticateUser, placeOrder);
router.get("/allOrders", authenticateUser, getOrdersByUser);
router.get("/details/:id", authenticateUser, getOrderDetails);
router.delete("/delete/:id", authenticateUser, deleteOrder);
module.exports = router;
