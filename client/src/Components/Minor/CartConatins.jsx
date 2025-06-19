import InputNumber from "./InputNumber";
import bike from "../../assets/images/bike.jpg";
import { useSelector } from "react-redux";
const CartConatins = () => {
  const { cartItems } = useSelector((state) => state.cart);
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
      <div className="flex gap-x-1 mt-6">
        <button className="w-1/2 h-[50px] leading-[50px] text-center text-xl rounded border-2 border-black cursor-pointer">
          Go to Cart
        </button>
        <button className="w-1/2 h-[50px] leading-[50 cursor-pointerpx] text-center rounded text-xl text-amber-50 bg-slate-900  cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartConatins;
