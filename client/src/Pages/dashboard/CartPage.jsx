import React from "react";
import BreadCrumb from "../../Components/minor/BreadCrumb";
import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Projector",
    image: "/images/projector.jpg",
    tenure: "3 months",
    rent: 5000,
    startDate: "2025-07-01",
    quantity: 1,
  },
  {
    id: 2,
    name: "Office Chair",
    image: "/images/chair.jpg",
    tenure: "6 months",
    rent: 2500,
    startDate: "2025-07-05",
    quantity: 2,
  },
];

export default function CartPage() {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.rent * item.quantity,
    0
  );

  return (
    <div className="px-10 py-15">
      <BreadCrumb />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold mb-4">Your Rental Cart</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex gap-4 items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Tenure: {item.tenure}</p>
                <p>Start Date: {item.startDate}</p>
                <p>Quantity: {item.quantity}</p>
                <p className="mt-1 font-semibold text-blue-600">
                  Price: Rs {item.rent}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col justify-between h-fit">
          <div>
            <h3 className="text-xl font-semibold mb-4">Summary</h3>
            <p className="text-gray-700">Total Items: {cartItems.length}</p>
            <p className="text-gray-700 mt-2 text-lg font-semibold">
              Total Price: Rs {totalPrice}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              * Taxes and shipping will be calculated at checkout.
            </p>
          </div>
          <Link
            to={"/checkout"}
            className="mt-6 w-full text-center bg-red-700 text-white py-2 rounded-xl transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
