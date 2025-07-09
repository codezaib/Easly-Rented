const axios = require("axios");
const data = require("./utils/categories.json");
async function dataToDB() {
  for (let i = 123; i <= 180; i++) {
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/api/v1/product/update/${i}`,
        {
          product_location: "Lahore",
        }
      );
      if (!data) {
        console.log(product.name + "not added");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

dataToDB();
