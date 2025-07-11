import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FaLock, FaCheckCircle, FaUserShield, FaUndo } from "react-icons/fa";
import ProductCard from "../../Components/minor/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/Products/ProductSlice";
import BreadCrumb from "../../Components/minor/BreadCrumb";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState(1);
  const { categoryName, subCategoryName, category_id } = useParams();
  const location = useLocation();
  const { product } = location.state || {};
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => store.products);
  useEffect(() => {
    (async function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      await dispatch(getProducts({ category_id })).unwrap();
    })();
  }, [product]);
  const relatedProducts = Array.isArray(products)
    ? products.filter((pro) => pro.id !== product.id)
    : [];
  return (
    <div className="px-10 py-15 space-y-10">
      <BreadCrumb />
      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-2">
          <img
            src={product.image}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="p-4 rounded-md space-y-2 bg-gray-100">
            <div>
              <p className="font-semibold mb-3">
                Price per Duration:{" "}
                <span className="text-[#c10007]">$ {product.price}</span>
              </p>
            </div>

            <div>
              <span className="flex gap-x-3 items-center">
                <label className="font-semibold">Duration Type:</label>
                <input type="radio" checked name={product.duration_type} />
                <label for={product.duration_type}>
                  {product.duration_type}
                </label>
              </span>
              <div>
                <label className="font-semibold mb-3">
                  {product.duration_type}:
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setDuration((d) => Math.max(1, d - 1))}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{duration}</span>
                  <button
                    onClick={() => setDuration((d) => d + 1)}
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
                <span className="font-semibold">Available in:</span>{" "}
                {product.location}
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
              category_id={category_id}
              categoryName={categoryName}
              subCategoryName={subCategoryName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
