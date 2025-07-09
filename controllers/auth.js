const pool = require("../db/connect");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const createTokenUser = require("../utils/createToken");
const { attachCookiesToResponse } = require("../utils/jwt");
const register = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const hash = await hashPassword(password);

  const [result] = await pool.execute(
    "INSERT INTO user (name, email, hash_password, role) VALUES (?, ?, ?, ?)",
    [name, email, hash, role]
  );
  if (!result) {
    throw new BadRequestError("couldn't signup");
  }
  const tokenUser = createTokenUser({ ...req.body, id: result.insertId });
  attachCookiesToResponse({ res, user: tokenUser });
  res
    .status(StatusCodes.CREATED)
    .json({ user: { id: result.insertId, name, email } });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const [[user]] = await pool.execute(
    "SELECT id, name, role, hash_password FROM user WHERE email = ?",
    [email]
  );
  if (!user)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Invalid credentials" });
  const ok = await comparePassword({
    password,
    hashedPassword: user.hash_password,
  });
  if (!ok)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Invalid credentials" });
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};
const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    maxAge: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

module.exports = { logout, login, register };
