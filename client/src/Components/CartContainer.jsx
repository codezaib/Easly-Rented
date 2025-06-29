import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import RelatedSearch from "./RelatedSearch";
import { cartState } from "../features/Cart/CartSlice";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";
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
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.2 }}
      className={`flex flex-row-reverse h-[calc(100vh-90px)] md:h-[calc(100vh-110px)] gap-x-4 fixed top-[80px] md:top-[100px] right-4 z-25`}
      ref={cartRef}
    >
      <Cart />
      <RelatedSearch />
    </motion.div>
  );
};

export default CartContainer;
