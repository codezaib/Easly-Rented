import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import BreadCrumb from "../../Components/minor/BreadCrumb";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/minor/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/Products/ProductSlice";

const ProductsSection = () => {
  const { categoryName, subCategoryName, category_id, subcategory_id } =
    useParams();
  const { products, isLoading } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      let obj =
        subcategory_id && category_id ? { subcategory_id } : { category_id };
      await dispatch(getProducts(obj)).unwrap();
    })();
  }, [category_id, subcategory_id]);
  const [sort, setSort] = useState("default");
  const [tenure, setTenure] = useState("all");
  const filtered = Array.isArray(products)
    ? products.filter(
        (product) => tenure === "all" || product.duration_type === tenure
      )
    : [];

  const sorted = filtered.length
    ? [...filtered].sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        return 0;
      })
    : [];

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-15">
      <BreadCrumb />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="border rounded px-2 py-2 text-sm"
        >
          <option>Sort By</option>
          <option value="price-asc">Price — Low to High</option>
          <option value="price-desc">Price — High to Low</option>
        </select>

        <select
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="border rounded px-2 py-2 text-sm"
        >
          <option>Select Tenure</option>
          <option value="days">Per Day</option>
          <option value="months">Per Month</option>
        </select>
      </div>
      {isLoading ? (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      ) : sorted.length === 0 ? (
        <p className="text-gray-600">No products found in this category.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {sorted.map((product) => {
            return (
              <ProductCard
                key={product.name}
                product={product}
                category_id={category_id}
                categoryName={categoryName}
                subCategoryName={subCategoryName}
                subcategory_id={subcategory_id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
