const { Router } = require("express");
const productController = require("../controllers/product");
const listByUser = require("../controllers/productsListed");
const {
  authenticateUser,
  authorizePermissions,
} = require("../middlewares/authentication");
const router = Router();

router.get(
  "/allProducts",
  [authenticateUser, authorizePermissions("admin")],
  productController.getAllProducts
);
router.get(
  "/:id",
  [authenticateUser, authorizePermissions("admin", "user")],
  productController.getOneProduct
);
router.post(
  "/create",
  [authenticateUser, authorizePermissions("admin", "user")],
  productController.createProduct
);
router.patch(
  "/update/:id",
  [authenticateUser, authorizePermissions("admin", "user")],
  productController.updateProduct
);
router.post("/search", productController.searchProducts);
router.delete(
  "/delete/:id",
  [authenticateUser, authorizePermissions("admin", "user")],
  productController.deleteProduct
);
router.post("/sortproducts", productController.sortProducts);
router.get(
  "/list/user",
  [authenticateUser, authorizePermissions("admin", "user")],
  listByUser
);
module.exports = router;
