import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useSelector } from "react-redux";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const { user, isFetched } = useSelector((store) => store.user);
  const { categories } = useSelector((store) => store.categories);
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ type: "keyframes", duration: 0.3 }}
      style={{ originY: 0 }}
      className={`absolute left-0 mt-[12px] md:mt-[40px] w-[250px] h-[calc(100vh-90px)] md:h-[calc(100vh-110px)] bg-white shadow-md overflow-hidden z-50 flex flex-col justify-between pt-3`}
    >
      <ul className="text-gray-700 text-sm h-4/5 overflow-scroll overflow-x-hidden">
        {categories.map((category) => (
          <Link to={`/rent-category/${category.name}/${category.id}`}>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              {category.name}
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex items-center justify-between text-sm border-t border-gray-200 h-auto">
        <Link
          to={`${user && isFetched ? "/account" : "account/login"}`}
          className="flex-1 text-center py-2 text-slate-900 hover:text-[#c10007]"
        >
          My Account
        </Link>
        <div className="h-4 w-px bg-gray-300" />
        <Link
          to={"customer-support"}
          className="flex-1 text-center py-2 text-slate-900 hover:text-[#c10007] "
        >
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default DropdownMenu;
