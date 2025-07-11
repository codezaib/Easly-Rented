import React, { useState, useEffect } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaPaypal,
  FaLock,
} from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const cartItems = [
  {
    id: 1,
    name: "Office Chair",
    category: "Furniture",
    image: "/images/chair.jpg",
    price: 2500,
    quantity: 2,
  },
  {
    id: 2,
    name: "Study Table",
    category: "Furniture",
    image: "/images/table.jpg",
    price: 3000,
    quantity: 1,
  },
];

export default function CheckoutPage() {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const shipping = 500;
  const total = subtotal + tax + shipping;
  const [showCart, setShowCart] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col-reverse md:flex-row">
      {/* Left Section - 60% */}
      <form className="w-full md:w-3/5 space-y-10 px-10 py-10 md:px-20 md:py-15">
        {/* Contact Section */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Contact</h2>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
          />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="border-gray-200" />
            Email me with news and information
          </label>
        </div>

        {/* Delivery Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Delivery</h2>
          <select className="border text-gray-400 border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full">
            <option>Pakistan</option>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Company (optional)"
            className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-fulll"
          />
          <input
            type="text"
            placeholder="Address"
            className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-fulll"
          />
        </div>

        {/* Shipping Method */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Shipping Method</h2>
          <p className="text-sm text-gray-600">
            Standard Delivery (3–5 business days)
          </p>
        </div>

        {/* Payment Section */}
        <div className="relative space-y-4 bg-white p-4 rounded-md">
          <h2 className="text-xl font-semibold">Payment</h2>

          {/* Credit Card Option */}
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" defaultChecked />
            <span className="flex items-center gap-2">
              Credit Card <FaCcVisa /> <FaCcMastercard /> <FaCcAmex />
            </span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Card Number"
              className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Security Code"
              className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Name on Card"
              className="border border-gray-200 outline-none focus-within:ring-1 focus-within:ring-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked />
            Use the same billing address as shipping address
          </label>

          {/* PayPal Option */}
          <label className="flex items-center gap-2 mt-4">
            <input type="radio" name="payment" />
            <span className="flex items-center gap-2">
              PayPal <FaPaypal className="text-blue-600 text-xl" />
            </span>
          </label>
          <label className="absolute left-0 -bottom-7 flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Save my information for a faster checkout
          </label>
        </div>

        {/* Remember Me */}

        {/* Security Info */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <FaLock /> Secured and encrypted
          </div>
          <img src="/images/stripe-logo.svg" alt="Stripe" className="h-6" />
        </div>

        {/* Pay Now Button */}
        <button className="w-full bg-red-800 text-white py-3 rounded transition">
          Pay Now
        </button>
      </form>
      {/* Right Section - 40% */}
      <div
        className={`w-full md:w-2/5 md:h-screen md:sticky md:top-0 bg-white px-6 pt-6 ${
          showCart && "pb-6"
        } md:p-6 flex flex-col justify-between`}
      >
        {/* Header */}
        <div className={`flex justify-between items-center mb-4`}>
          <Link to={"/cart"}>
            <IoBagOutline className="text-2xl font-light text-gray-300 hover:text-gray-400" />
          </Link>
          <Link
            to={"/"}
            className="text-xl p-2 rounded-tl-[9px] bg-red-800 text-white font-Nunito"
          >
            Easly Rented
          </Link>
        </div>
        <div className="flex justify-between px-3 py-3 border-t-1 border-gray-200 md:hidden">
          <small
            className="text-gray-300 text-md hover:text-gray-400 flex items-center gap-x-1 cursor-pointer"
            onClick={() => setShowCart((prev) => isMobile && !prev)}
          >
            order summary{" "}
            {!showCart ? <LiaAngleDownSolid /> : <LiaAngleUpSolid />}
          </small>
          <big>Rs. {total}</big>
        </div>
        {/* Cart Products */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isMobile
              ? showCart
                ? "mt-2 max-h-[999px]"
                : "max-h-0 overflow-hidden"
              : "max-h-full"
          }`}
        >
          <div className="space-y-4 overflow-y-auto max-h-72">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded shadow flex justify-between items-start"
              >
                <div className="w-24 h-24 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                  <span className="absolute top-1 right-1 bg-black text-white text-xs px-2 py-0.5 rounded-full">
                    x{item.quantity}
                  </span>
                </div>
                <div className="flex-1 px-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <div className="text-right font-semibold">Rs {item.price}</div>
              </div>
            ))}
          </div>
          {/* Discount Code */}
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Discount Code"
              className="border p-2 rounded w-full"
            />
            <button className="bg-gray-800 text-white px-4 rounded">
              Apply
            </button>
          </div>

          {/* Summary */}
          <div className="text-sm text-gray-700 space-y-2 mt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>Rs {tax}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Rs {shipping}</span>
            </div>
            <div className="flex justify-between text-lg font-extrabold border-t pt-2">
              <span>Total</span>
              <span>Rs {total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
