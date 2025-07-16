const { Router } = require("express");
const { login, logout, register } = require("../controllers/auth");
const router = Router();
const rateLimiter = require("express-rate-limit");
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: "Too many requests from this IP, please try again after 15 minutes",
  },
});
router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.get("/logout", logout);

module.exports = router;
