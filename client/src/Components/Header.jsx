import { useDispatch, useSelector } from "react-redux";
import { cartState } from "../features/Cart/CartSlice";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropDownMenu";
import { useEffect, useState, useRef } from "react";
const Header = ({ setInputFocus }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useSelector((store) => store.cart);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });
  return (
    <div className="sticky md:top-[20px] z-50 w-full md:w-[300px] md:rounded lg:w-[500px] h-auto p-3 flex justify-between items-center mx-auto bg-red-700 text-amber-50 ">
      <div
        className="text-lg cursor-pointer hover:text-blue-100 ease-in"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <i className={`fa-solid fa-bars-staggered`}></i>
        <div ref={menuRef}>{isOpen && <DropdownMenu />}</div>
      </div>
      <Link
        to={"/"}
        className="font-Nunito text-xl lg:text-2xl tracking-widest cursor-pointer font-bold"
      >
        Easly Rented
      </Link>
      <span className="flex space-x-3 items-center">
        <i
          className={`fa-solid fa-magnifying-glass cursor-pointer hover:text-blue-50 ease-in`}
          onClick={() => setInputFocus(true)}
        ></i>
        <span>
          <i
            className="fa-solid fa-bag-shopping cursor-pointer hover:text-blue-50 ease-in relative"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(cartState(true));
            }}
          ></i>
          <p className="absolute top-3 right-1 z-10 text-shadow-amber-100 text-sm">
            {cartItems.length > 0 && cartItems.length}
          </p>
        </span>
      </span>
    </div>
  );
};

export default Header;
