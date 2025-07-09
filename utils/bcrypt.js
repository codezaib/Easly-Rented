const bcrypt = require("bcryptjs");
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};
const comparePassword = async ({ password, hashedPassword }) => {
  return bcrypt.compare(password, hashedPassword);
};
module.exports = { hashPassword, comparePassword };
