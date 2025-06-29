import React, { useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

const menuItems = [
  { key: "account", label: "Account Details" },
  { key: "products", label: "List Products for Rent" },
  { key: "orders", label: "My Orders" },
  { key: "wishlist", label: "Saved Listings" },
  { key: "messages", label: "Messages" },
  { key: "settings", label: "Settings" },
];

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const renderComponent = () => {
    switch (activeTab) {
      case "account":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Account Details</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 w-full rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-2 w-full rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 w-full rounded"
            />
            <button className="py-2 px-3 rounded-md bg-[#fff5f1] text-[#c10007] cursor-pointer transition-all ease active:scale-95">
              Update Info
            </button>
          </div>
        );
      case "products":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">List a Product for Rent</h3>
            <input
              type="text"
              placeholder="Product Title"
              className="border p-2 w-full rounded"
            />
            <textarea
              placeholder="Description"
              className="border p-2 w-full rounded"
            ></textarea>
            <input
              type="text"
              placeholder="Location of Product"
              className="border p-2 w-full rounded"
            />
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Price"
                className="border p-2 w-full rounded"
              />
              <select className="border p-2 rounded">
                <option value="day">Per Day</option>
                <option value="month">Per Month</option>
              </select>
            </div>
            <input type="file" className="border p-2 w-full rounded" />
            <button className="py-2 px-3 rounded-md bg-[#fff5f1] text-[#c10007] cursor-pointer transition-all ease active:scale-95">
              List Product
            </button>
          </div>
        );
      case "orders":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">My Orders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((order) => (
                <div
                  key={order}
                  className="border rounded shadow p-4 space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Order #{order}</span>
                    <span className="text-sm text-gray-500">Delivered</span>
                  </div>
                  <p className="text-sm">Projector Rental</p>
                  <p className="text-xs text-gray-500">3 Days · Rs 4500</p>
                  <button className="text-blue-600 text-sm underline">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "wishlist":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Saved Listings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["MacBook Pro", "Camera"].map((product, index) => (
                <div
                  key={index}
                  className="border rounded p-4 flex items-center gap-4"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded" />
                  <div className="flex-1">
                    <p className="font-semibold">{product}</p>
                    <p className="text-sm text-gray-500">
                      Rs {index === 0 ? 1500 : 1000}/day
                    </p>
                    <button className="text-blue-600 text-sm underline mt-1">
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "messages":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Messages</h3>
            <p>No new messages yet. Check back later.</p>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Settings</h3>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" /> Enable
              Notifications
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" /> Two-Factor
              Authentication
            </label>

            <div className="space-y-2">
              <h4 className="font-semibold">Change Password</h4>
              <input
                type="password"
                placeholder="Current Password"
                className="border p-2 w-full rounded"
              />
              <input
                type="password"
                placeholder="New Password"
                className="border p-2 w-full rounded"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="border p-2 w-full rounded"
              />
              <button className="py-2 px-3 rounded-md bg-[#fff5f1] text-[#c10007] cursor-pointer transition-all ease active:scale-95">
                Update Password
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Theme</h4>
              <select className="border p-2 rounded">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={(e) => setShowAddressForm(e.target.checked)}
                />
                Add Your Address Details
              </label>
              {showAddressForm && (
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="border p-2 w-full rounded"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="border p-2 w-full rounded"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="border p-2 w-full rounded"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="border p-2 w-full rounded"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="border p-2 w-full rounded"
                  />
                  <button className="py-2 px-3 rounded-md bg-[#fff5f1] text-[#c10007] cursor-pointer transition-all ease active:scale-95">
                    Save Address
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto min-h-screen py-10 px-4 gap-6">
      {/* Sidebar */}
      <div className="hidden md:block w-full md:w-1/4 bg-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-2">Dashboard</h2>
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`w-full text-left p-2 rounded-md transition ${
              activeTab === item.key
                ? "bg-[#fff5f1] text-[#c10007]"
                : "hover:bg-[#fff5f1] text-gray-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {/* Dropdown for small devices */}
      <div className="md:hidden w-full mb-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full flex justify-between p-2 rounded-md bg-white text-left"
        >
          {menuItems.find((item) => item.key === activeTab)?.label}
          {!showDropdown ? <LiaAngleDownSolid /> : <LiaAngleUpSolid />}
        </button>
        {showDropdown && (
          <div className="mt-2 space-y-1 bg-white  rounded-md p-2">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setShowDropdown(false);
                  setActiveTab(item.key);
                }}
                className={`w-full text-left p-2 rounded-md transition ${
                  activeTab === item.key
                    ? "bg-[#fff5f1] text-[#c10007]"
                    : "hover:bg-[#fff5f1] text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Content */}
      <div className="w-full md:w-3/4 bg-white md:shadow rounded-md p-6">
        {renderComponent()}
      </div>
    </div>
  );
};

export default AccountPage;
