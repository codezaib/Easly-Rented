import { useState } from "react";
import { categories } from "../../utils/data";
import BreadCrumb from "../../Components/minor/BreadCrumb";
import { Link } from "react-router-dom";

export default function Categories() {
  const [activeIndx, setActiveIndx] = useState(0);
  const active = categories[activeIndx];
  return (
    <div className="min-h-screen flex flex-col mt-10">
      <BreadCrumb />
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="w-[calc(100%-50px)] md:w-48 max-h-[500px] bg-white overflow-x-scroll md:overflow-y-scroll md:overflow-hidden mx-auto md:sticky md:top-0">
          <ul className="w-full mb-2 flex md:flex-col">
            {categories.map((cat, i) => (
              <li
                key={cat.name}
                onClick={() => setActiveIndx(i)}
                className={`cursor-pointer px-4 py-3 text-sm transition
                ${
                  i === activeIndx
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 p-6">
          {/* Image */}
          <div className="mb-6">
            <img
              src={
                active.img || `https://placehold.co/500x300?text=${active.name}`
              }
              alt={active.name}
              className="w-full max-h-64 object-cover rounded-lg shadow"
            />
          </div>

          {/* Sub‑categories */}
          <h2 className="text-2xl font-bold mb-6">
            Subcategories of {active.name}
          </h2>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mb-6">
            {active["subs"].map((sub) => (
              <Link
                to={`/rent-category/${active.name}/${sub}`}
                key={sub}
                className="block bg-white text-center text-md space-y-2
                         hover:-translate-y-1 hover: transition"
              >
                <img
                  src={`https://placehold.co/300x200?text=${sub}`}
                  alt={sub}
                  className="w-full object-cover rounded-md"
                />
                <big>{sub}</big>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
