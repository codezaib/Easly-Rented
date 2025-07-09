const { Router } = require("express");
const upsert = require("../controllers/userDetails");
const { authenticateUser, authorizePermissions } = require(
  "../middlewares/authentication"
);
const router = Router();

router.post("/insert", authenticateUser, upsert);
router.patch("/update", authenticateUser, upsert);
module.exports = router;
