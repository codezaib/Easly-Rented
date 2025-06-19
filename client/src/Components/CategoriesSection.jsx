import React from "react";

const categories = [
  {
    name: "Electronics",
    image: "https://placehold.co/100x100?text=Electronics",
  },
  { name: "Furniture", image: "https://placehold.co/100x100" },
  { name: "Books", image: "https://placehold.co/100x100" },
  { name: "Clothing", image: "https://placehold.co/100x100" },
  { name: "Tools", image: "https://placehold.co/100x100" },
  { name: "Sports", image: "https://placehold.co/100x100" },
  { name: "Toys", image: "https://placehold.co/100x100" },
  { name: "Kitchen", image: "https://placehold.co/100x100" },
  { name: "Outdoors", image: "https://placehold.co/100x100" },
  { name: "Music", image: "https://placehold.co/100x100" },
  { name: "Photography", image: "https://placehold.co/100x100" },
  { name: "Gaming", image: "https://placehold.co/100x100" },
  { name: "Travel", image: "https://placehold.co/100x100" },
  { name: "Health", image: "https://placehold.co/100x100" },
  { name: "Pets", image: "https://placehold.co/100x100" },
];

const CategoriesSection = () => {
  return (
    <div className="px-8 py-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 text-center sm:text-left">
        <h2 className="text-4xl text-[#3a001e] font-bold w-full sm:w-auto">
          Top Rented Categories
        </h2>
        <button className="bg-[#c10007] text-white px-4 py-2 rounded-lg cursor-pointer transition active:scale-95  @min-[685px]:mx-auto sm:mx-0">
          Discover All Categories
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-[50px] gap-[30px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-4 flex flex-col items-center text-center group transition cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="object-cover mb-3"
            />
            <p className="font-medium group-hover:font-bold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
