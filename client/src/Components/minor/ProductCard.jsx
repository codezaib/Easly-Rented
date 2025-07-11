import { Link } from "react-router-dom";
const ProductCard = ({
  product,
  categoryName,
  subCategoryName,
  category_id,
  subcategory_id,
}) => {
  return (
    <Link
      to={`/rented-category/${categoryName}${
        subCategoryName ? "/" + subCategoryName : ""
      }/${product.name.replaceAll(" ", "-")}${
        subcategory_id ? "/" + subcategory_id : ""
      }/${category_id}`}
      state={{ product }}
      key={product.id}
      className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700 font-medium">
          $ {product.price}{" "}
          <span className="text-sm">
            / {product.duration_type.slice(0, product.duration_type.length - 1)}
          </span>
        </p>
        <button className="mt-2 w-full bg-[#c10007] text-white py-2 rounded hover:bg-red-700 transition">
          Take on Rent
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
