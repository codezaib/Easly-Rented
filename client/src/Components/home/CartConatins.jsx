import InputNumber from "./InputNumber";
import bike from "../../assets/images/bike.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartConatins = ({ cartState }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="h-full flex flex-col ">
      <div className="flex flex-col gap-y-2 h-4/6 overflow-y-scroll">
        {cartItems.map((item) => {
          return (
            <div className="flex">
              <img
                src={bike}
                alt="bike"
                className="w-2/6 h-full rounded object-cover"
              />
              <div className="w-2/6 flex flex-col ml-2">
                <h4 className="text-[16px] font-semibold">Bike Rented</h4>
                <p className="text-sm mt-0.4">little description</p>
                <span className="flex flex-col gap-y-1 text-xs">
                  Quantity: <InputNumber />
                </span>
                <span className="flex flex-col gap-y-1 text-xs">
                  Days: <InputNumber />
                </span>
              </div>
              <div className="flex w-2/6 flex-col justify-between items-end">
                <large className="text-lg font-semibold">$24.5</large>
                <button className="text-red-600">remove</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between cartTotal relative">
        <large className="text-lg">Total</large>
        <large className="text-lg">$24.5 USD</large>
      </div>
      <div className="flex gap-x-1 mt-8">
        <Link
          to={"cart"}
          onClick={() => dispatch(cartState(false))}
          className="w-1/2 h-[45px] leading-[45px] text-center text-xl rounded border-1 border-black cursor-pointer"
        >
          Go to Cart
        </Link>
        <Link
          onClick={() => dispatch(cartState(false))}
          to={"checkout"}
          className="w-1/2 h-[45px] leading-[45px] text-center rounded text-xl text-amber-50 bg-slate-900  cursor-pointer"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartConatins;
