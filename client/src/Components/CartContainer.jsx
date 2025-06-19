import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import RelatedSearch from "./RelatedSearch";
import { cartState } from "../features/Cart/CartSlice";

import { useRef, useEffect } from "react";
const CartContainer = () => {
  const cartRef = useRef(null);
  const dispatch = useDispatch();
  const { cartShown } = useSelector((state) => state.cart);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        dispatch(cartState(false));
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [cartShown]);
  return (
    <div
      className={`flex flex-row-reverse h-[calc(100vh-90px)] md:h-[calc(100vh-110px)] gap-x-4 fixed top-[80px] md:top-[100px] right-4 transition-all duration-300 ease-in-out transform z-25 ${
        cartShown
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
      ref={cartRef}
    >
      <Cart />
      <RelatedSearch />
    </div>
  );
};

export default CartContainer;
