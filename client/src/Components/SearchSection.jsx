import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import SearchInput from "./minor/SearchInput";
import { MdClose } from "react-icons/md";

const mostSearchedItems = [
  "iPhone 14",
  "MacBook Air",
  "Wireless Headphones",
  "Smart Watch",
  "Gaming Chair",
  "Mechanical Keyboard",
  "Running Shoes",
];

function SearchSection({ onClose }) {
  const [query, setQuery] = useState("");
  const panelRef = useRef(null);
  const filteredResults = mostSearchedItems.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
  return (
    <motion.div
      ref={panelRef}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-[25px] right-[25px] w-[calc(100vw-50px)] sm:w-[500px] h-[calc(100vh-50px)] bg-white shadow-lg z-50 flex flex-col p-6"
    >
      <div className="flex justify-between items-center pb-4 mb-4">
        <h2 className="text-2xl font-semibold">Search</h2>
        <button
          onClick={onClose}
          className="text-2xl font-bold hover:text-red-600"
        >
          <MdClose />
        </button>
      </div>
      <SearchInput query={query} setQuery={setQuery} />
      <div>
        <h3 className="text-md font-bold mb-3">
          {query ? "Search Results" : "Most Searched"}
        </h3>
        <ul className="space-y-2">
          {(query ? filteredResults : mostSearchedItems).map((item, idx) => (
            <li key={idx} className="cursor-pointer">
              {item}
            </li>
          ))}
          {query && filteredResults.length === 0 && (
            <p className="text-gray-500">No results found.</p>
          )}
        </ul>
      </div>
    </motion.div>
  );
}

export default SearchSection;
