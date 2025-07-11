const { Router } = require("express");
const { login, logout, register } = require("../controllers/auth");
const router = Router();
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
