const jwt = require("jsonwebtoken");

const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

const verifyToken = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);
const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT(user);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24,
    signed: true,
  });
};
module.exports = { verifyToken, attachCookiesToResponse };
