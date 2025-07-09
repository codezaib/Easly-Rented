const { StatusCodes } = require("http-status-codes");
const notFound = async (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({ msg: "page not found" });
};
module.exports = notFound;
