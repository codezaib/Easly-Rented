import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./minor/Loader";

const CategoriesSection = () => {
  const { categories, isLoading } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        categories.length && (
          <div className="px-8 py-10 max-w-screen-xl mx-auto" id="categories">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 text-center sm:text-left">
              <h2 className="text-4xl text-[#3a001e] font-bold w-full sm:w-auto">
                Top Rented Categories
              </h2>
              <Link
                to={"categories"}
                className="bg-[#c10007] text-white px-4 py-2 rounded-lg cursor-pointer transition active:scale-95  @min-[685px]:mx-auto sm:mx-0"
              >
                Discover All Categories
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-[50px] gap-[30px]">
              {categories &&
                categories.map((category, index) => (
                  <Link
                    to={`rent-category/${category.name}/${category.id}`}
                    key={index}
                    className="p-4 flex flex-col items-center text-center group transition cursor-pointer"
                  >
                    <img
                      src={`/images/${category.name}.avif`}
                      alt={category.name}
                      className="object-cover mb-3 rounded-t-lg h-[200px] w-full overflow-hidden transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <p className="font-medium group-hover:font-bold">
                      {category.name}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default CategoriesSection;
