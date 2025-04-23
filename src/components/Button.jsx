import React from "react";

export default function Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 bg-[#4682B4] hover:bg-[#3B6E98] active:scale-95 text-white rounded-lg duration-200 ${className}`}
    >
      {text}
    </button>
  );
}