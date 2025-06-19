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

const DropdownMenu = () => {
  return (
    <div
      className={`absolute left-0 mt-[12px] md:mt-[40px] w-[250px] h-[calc(100vh-90px)] md:h-[calc(100vh-110px)] bg-white shadow-md overflow-hidden z-50 flex flex-col justify-between pt-3`}
    >
      <ul className="text-gray-700 text-sm h-4/5 overflow-scroll overflow-x-hidden">
        {categories.map((category) => (
          <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
            {category.name}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between text-sm border-t border-gray-200 h-auto">
        <button className="flex-1 text-center py-2 text-slate-900 hover:text-[#c10007]">
          My Account
        </button>
        <div className="h-4 w-px bg-gray-300" />
        <button className="flex-1 text-center py-2 text-slate-900 hover:text-[#c10007] ">
          Contact
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;
