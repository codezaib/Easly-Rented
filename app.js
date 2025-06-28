const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`server is listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
