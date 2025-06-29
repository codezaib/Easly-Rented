import React from "react";
import RelatedProductCard from "./home/RelatedProductCard";

const products = [
  {
    name: "Wireless Headphones",
    price: "49.99",
    image: "https://placehold.co/300x200?text=Headphones",
  },
  {
    name: "Office Chair",
    price: "89.99",
    image: "https://placehold.co/300x200?text=Chair",
  },
  {
    name: "Smart Watch",
    price: "99.99",
    image: "https://placehold.co/300x200?text=Watch",
  },
  {
    name: "Electric Drill",
    price: "59.99",
    image: "https://placehold.co/300x200?text=Drill",
  },
];

const RelatedSearch = () => {
  return (
    <div className="w-[200px] px-2 py-3 overflow-scroll overflow-x-hidden bg-white flex flex-col gap-y-1 hidden md:block">
      <h2 className="text-lg font-bold mb-6 text-slate-900">
        Related Products
      </h2>
      <div className="grid gap-3 grid-cols-1">
        {products.map((product, index) => (
          <RelatedProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSearch;
