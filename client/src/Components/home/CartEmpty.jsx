import React from "react";
import { useDispatch } from "react-redux";
import { cartState } from "../../features/Cart/CartSlice";

const CartEmpty = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl">Your cart is empty</h1>
      <button
        className="w-full h-[50px] leading-[50 cursor-pointerpx] text-center rounded text-xl text-amber-50 bg-slate-900  cursor-pointer mt-10"
        onClick={() => dispatch(cartState())}
      >
        Start Renting
      </button>
    </div>
  );
};

export default CartEmpty;
