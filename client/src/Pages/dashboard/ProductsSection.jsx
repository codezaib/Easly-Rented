import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../../Components/minor/BreadCrumb";
import { useState } from "react";
import ProductCard from "../../Components/minor/ProductCard";
const mockProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 1200,
    per: "month",
    image: "https://placehold.co/250x200?text=iPhone+14",
    category: "electronics",
    subCategory: "smartphones",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: 1000,
    per: "month",
    image: "https://placehold.co/250x200?text=Galaxy+S22",
    category: "electronics",
    subCategory: "smartphones",
  },
  {
    id: 3,
    name: "Canon DSLR Camera",
    price: 250,
    per: "day",
    image: "https://placehold.co/250x200?text=Canon+DSLR",
    category: "electronics",
    subCategory: "cameras",
  },
  // Add more products as needed
];

const ProductsSection = () => {
  const { categoryName, subCategoryName } = useParams();
  const [sort, setSort] = useState("default");
  const [tenure, setTenure] = useState("all");
  const filtered = mockProducts.filter((product) => {
    return subCategoryName
      ? product.subCategory.toLowerCase() === subCategoryName.toLowerCase() &&
          (tenure === "all" || product.per === tenure)
      : product.category.toLowerCase() === categoryName.toLowerCase() &&
          (tenure === "all" || product.per === tenure);
  });
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });
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
          <option value="day">Per Day</option>
          <option value="month">Per Month</option>
        </select>
      </div>
      {sorted.length === 0 ? (
        <p className="text-gray-600">No products found in this category.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {sorted.map((product) => {
            return (
              <ProductCard
                key={product.name}
                product={product}
                categoryName={categoryName}
                subCategoryName={subCategoryName}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
