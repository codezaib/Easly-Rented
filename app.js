require("dotenv").config();
const express = require("express");
const path = require("path");
const xss = require("xss-clean");
const helmet = require("helmet");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFoundMiddleware = require("./middlewares/not-found");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const userDetailsRouter = require("./routes/userDetails");
const categoryRouter = require("./routes/category");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");
const app = express();
const fileUpload = require("express-fileupload");
app.set("trust proxy", 1);
app.use(express.static(path.resolve(__dirname, "./dist")));

app.use(require("cors")());
app.use(xss());
app.use(helmet());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());
app.use(fileUpload());
//* ROUTES
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/userdetails", userDetailsRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);
app.use(
  "/api/v1/uploads",
  express.static(path.join(__dirname, "public/uploads"))
);
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});
//* MIDDLEWARES
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = 3000 || process.env.PORT;
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
