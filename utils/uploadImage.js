const { BadRequestError } = require("../errors");
const path = require("path");
const uploadImage = async (req) => {
  if (!req.files) {
    throw new BadRequestError("no file uploaded");
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("please upload image");
  }
  const imageSize = 1024 * 1024;
  if (productImage.size > imageSize) {
    throw new BadRequestError("please upload image smaller than 1 MB");
  }
  const safeName = productImage.name.replaceAll(" ", "-");
  const imagePath = path.join(
    __dirname,
    `../public/uploads/${productImage.name.replaceAll(" ", "-")}`
  );
  await productImage.mv(imagePath);
  return safeName;
};
module.exports = uploadImage;
