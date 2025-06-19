import { useDispatch, useSelector } from "react-redux";
import CartConatins from "./Minor/CartConatins";
import CartEmpty from "./Minor/CartEmpty";
import { cartState } from "../features/Cart/CartSlice";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="h-full w-[400px] bg-white px-4 py-2">
      <div className="flex justify-between items-center mb-[20px]">
        <span className="flex items-end gap-x-2">
          <large className="text-lg">Cart</large>
          <small className="text-sm mb-[1.5px]">
            {cartItems.length > 0
              ? cartItems.length + ` Item${cartItems.length > 1 ? "s" : ""}`
              : ""}{" "}
          </small>
        </span>
        <i
          className="fa-solid fa-xmark cursor-pointer hover:text-red-600"
          onClick={() => dispatch(cartState(false))}
        ></i>
      </div>
      {cartItems.length > 0 ? <CartConatins /> : <CartEmpty />}
    </div>
  );
};

export default Cart;
