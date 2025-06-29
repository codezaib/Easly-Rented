import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function SearchInput({ query, setQuery }) {
  const [touched, setTouched] = useState(false);

  const handleSearchAttempt = () => {
    setTouched(true);
    if (!query.trim()) {
      console.log("Show warning or handle empty search");
    } else {
      console.log("Searching for:", query);
    }
  };

  const handleClear = () => {
    setQuery("");
    setTouched(false);
  };

  return (
    <div
      className={`flex items-center gap-2 border-b ${
        touched && !query.trim()
          ? "border-dashed border-red-500"
          : "border-gray-300"
      } pb-2 mb-6`}
    >
      <FiSearch className="text-gray-500 text-lg" />
      <input
        type="text"
        placeholder="Search items..."
        className="flex-1 outline-none text-base"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button
          onClick={handleClear}
          className="text-gray-400 hover:text-red-500"
        >
          <MdClose size={20} />
        </button>
      )}
      <button
        onClick={handleSearchAttempt}
        className="ml-2 px-2 py-1 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded"
      >
        Go
      </button>
    </div>
  );
}
