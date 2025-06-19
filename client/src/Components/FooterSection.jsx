import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const FooterSection = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white pt-12 relative">
      {/* Top Grid */}
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Products */}
        <div>
          <h4 className="font-bold text-lg mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Books</li>
            <li>Clothing</li>
            <li>Tools</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold text-lg mb-4">About Easily Rented</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Company Info</li>
            <li>How It Works</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Support</li>
            <li>FAQ</li>
            <li>Renting Guide</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Updates */}
        <div>
          <h4 className="font-bold text-lg mb-4">Get Updates</h4>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-white focus:outline-none border-1 border-white"
            />
            <p className="text-sm text-gray-400">
              Stay informed about new items and offers.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-6 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          {/* Left */}
          <div className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Easily Rented. All rights
            reserved.
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            <img src="/Visa.svg" alt="Visa" className="w-10 h-auto" />
            <img
              src="/mastercard.svg"
              alt="Mastercard"
              className="w-10 h-auto"
            />
            <img src="/PayPal.svg" alt="PayPal" className="w-12 h-auto" />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-5 cursor-pointer left-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform -translate-x-1/2"
        // aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>
    </footer>
  );
};

export default FooterSection;
