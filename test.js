const axios = require("axios");
const data = require("./utils/categories.json");
data.forEach((cat) => {
  return cat["subs"].forEach(async (sub) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/api/v1/category/update/subcategory/${sub.subcategory_id}`,
        {
          image: sub.products[1].image,
        }
      );
      if (!data) {
        console.log(product.name + "not added");
      }
    } catch (error) {
      console.log(error);
    }
  });
});
