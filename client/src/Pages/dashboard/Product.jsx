import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaLock, FaCheckCircle, FaUserShield, FaUndo } from "react-icons/fa";
import ProductCard from "../../Components/minor/ProductCard";

const relatedProducts = [
  { id: 1, name: "Study Table", image: "/table.jpg" },
  { id: 2, name: "Bookshelf", image: "/bookshelf.jpg" },
  { id: 3, name: "Laptop", image: "/laptop.jpg" },
  { id: 4, name: "Air Conditioner", image: "/ac.jpg" },
];

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const { categoryName, subCategoryName } = useParams();

  return (
    <div className="px-10 py-15 space-y-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="border rounded-xl p-4">
          <img src={relatedProducts.image} className="object-cover" />
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold">Premium Office Chair</h1>

          <div className="p-4 rounded-md space-y-2 bg-gray-100">
            <div>
              <label className="font-semibold mb-3">Select Duration:</label>
              <select className="p-1 w-full border border-gray-600 rounded">
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
              </select>
            </div>

            <div>
              <p className="font-semibold mb-3">
                Price per Duration:{" "}
                <span className="text-blue-600">Rs 2500</span>
              </p>
            </div>

            <div>
              <span className="flex gap-x-3 items-center">
                <label className="font-semibold">Duration Type:</label>
                <input type="radio" checked name={"days"} />
                <label for="days">days</label>
              </span>
              <div>
                <label className="font-semibold mb-3">Days:</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="font-semibold mb-3">Quantity:</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="font-semibold  mb-3">
                Select Delivery Date
              </label>
              <input
                type="date"
                className="rounded border border-gray-600  p-2 w-full"
              />
            </div>

            <div>
              <p>
                <span className="font-semibold">Available in:</span> Lahore
              </p>
              <p>
                <span className="font-semibold">Security Deposit:</span> Rs 1500
              </p>
              <p className="text-sm text-gray-600">
                This is a fully refundable amount provided there is no damage.
              </p>
            </div>

            <button className="bg-red-700 text-white py-2 px-6 rounded transition">
              Rent Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-gray-100 p-6 rounded-xl text-sm">
        <div className="flex flex-wrap items-center gap-2 text-4 md:text-xl">
          <FaUndo className="text-green-600" /> 100% Refundable Security
        </div>
        <div className="flex flex-wrap items-center gap-2 text-4 md:text-xl">
          <FaLock className="text-blue-600" /> Secure Payment
        </div>
        <div className="flex flex-wrap items-center gap-2 text-4 md:text-xl">
          <FaCheckCircle className="text-green-600" /> Verified Product
        </div>
        <div className="flex flex-wrap items-center gap-2 text-4 md:text-xl">
          <FaUserShield className="text-purple-600" /> From Verified User
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.name}
              product={item}
              categoryName={categoryName}
              subCategoryName={subCategoryName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
