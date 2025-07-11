import { act, useEffect, useState } from "react";
import BreadCrumb from "../../Components/minor/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getSubCategories } from "../../features/Category/CategorySlice";
import SubCard from "../../Components/minor/SubCard";
import PicLoader from "../../Components/minor/PicLoader";
export default function Categories() {
  const { categories, subcategories } = useSelector(
    (store) => store.categories
  );
  const [picLoading, setPicLoading] = useState(true);
  const [activeIndx, setActiveIndx] = useState(0);
  const active = categories.length && categories[activeIndx];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubCategories(active.id));
  }, [active]);
  return (
    <div className="min-h-screen flex flex-col mt-10">
      <BreadCrumb />
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="w-[calc(100%-50px)] md:w-48 max-h-[500px] overflow-x-scroll md:overflow-y-scroll md:overflow-hidden mx-auto md:sticky md:top-0">
          <ul className="w-full mb-2 flex md:flex-col">
            {categories.map((cat, i) => (
              <li
                key={cat.name}
                onClick={() => setActiveIndx(i)}
                className={`cursor-pointer px-4 py-3 text-sm transition
                ${
                  i === activeIndx
                    ? "bg-gray-50 text-[#c10007] font-semibold"
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
          <div className="mb-6 relative w-full h-64 rounded-xl overflow-hidden">
            {picLoading && <PicLoader height={256} />}

            <img
              src={`images/${active.name}.avif`}
              alt={active.name}
              loading="lazy"
              onLoad={() => setPicLoading(false)}
              className={`transition-opacity duration-500 ease-in-out w-full h-full object-cover rounded-xl shadow-md filter brightness-50 ${
                picLoading
                  ? "opacity-0 absolute top-0 left-0"
                  : "opacity-100 relative"
              }`}
            />

            {/* Centered category name */}
            {!picLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl font-semibold tracking-wide drop-shadow-lg">
                  {active.name}
                </h2>
              </div>
            )}
          </div>

          {/* Sub‑categories */}
          <h2 className="text-2xl font-bold mb-6">
            Subcategories of {active.name}
          </h2>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mb-6">
            {subcategories.length &&
              subcategories.map((sub) => <SubCard active={active} sub={sub} />)}
          </div>
        </main>
      </div>
    </div>
  );
}
