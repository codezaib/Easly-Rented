const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/category");
const subCategoryController = require("../controllers/subcategory");
const {
  authenticateUser,
  authorizePermissions,
} = require("../middlewares/authentication");

router.get("/allCategories", categoryController.list);
router.post(
  "/insert",
  [authenticateUser, authorizePermissions("admin")],
  categoryController.create
);
router.patch(
  "/update/:id",
  [authenticateUser, authorizePermissions("admin")],
  categoryController.update
);
router.delete(
  "/delete/:id",
  [authenticateUser, authorizePermissions("admin")],
  categoryController.remove
);
router.get("/allSubcategories/:id", subCategoryController.list);
router.post(
  "/create/subcategory/:id",
  [authenticateUser, authorizePermissions("admin")],
  subCategoryController.create
);
router.patch(
  "/update/subcategory/:id",
  [authenticateUser, authorizePermissions("admin")],
  subCategoryController.update
);
router.delete(
  "/delete/subcategory/:id",
  [authenticateUser, authorizePermissions("admin")],
  subCategoryController.remove
);
module.exports = router;
