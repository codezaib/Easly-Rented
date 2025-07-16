const { Router } = require("express");
const userControllers = require("../controllers/user");
const {
  authenticateUser,
  authorizePermissions,
} = require("../middlewares/authentication");
const router = Router();

router.get("/showMe", authenticateUser, userControllers.showCurrentUser);
router.get(
  "/:id",
  [authenticateUser, authorizePermissions("admin")],
  userControllers.getOne
);
router.get(
  "/",
  [authenticateUser, authorizePermissions("admin")],
  userControllers.getAll
);
router.patch("/updateUser/:id", authenticateUser, userControllers.update);
router.delete(
  "/deleteUser/:id",
  authenticateUser,
  authorizePermissions("admin", "user"),
  userControllers.remove
);
module.exports = router;
