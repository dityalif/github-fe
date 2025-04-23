import React, { useState } from "react";

export default function SearchBar({ placeholder, onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center items-center py-6">
      <div
        className="backdrop-blur-md bg-white/30 items-center justify-between w-full max-w-4xl flex rounded-full shadow-lg p-4"
      >
        <input
          className="font-bold uppercase rounded-full w-full py-3 px-6 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline lg:text-base text-sm placeholder-gray-400"
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
        />

        <div
          className="bg-[#4682B4] hover:bg-[#3B6E98] p-3 cursor-pointer mx-2 rounded-full"
          onClick={handleSearch}
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}