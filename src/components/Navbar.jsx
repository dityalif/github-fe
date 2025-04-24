import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center p-4 px-8 text-md text-white tracking-wider sticky top-0 z-50 bg-transparent">
      {/* Logo */}
      <div className="flex items-center transition duration-200 active:scale-95">
        <Link to="/" className="flex items-center">
          <img
            src="/img/GithubTextWhite.png"
            alt="Logo"
            className="h-9 mr-3 transition"
          />
        </Link>
      </div>

      {/* Burger Menu for Small Screens */}
      <div className="ml-auto md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Overlay for Burger Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleMenu} 
        ></div>
      )}

      {/* Options */}
      <div
        className={`absolute md:static left-0 top-16 w-full md:w-auto bg-[#161B22] md:bg-transparent md:flex md:space-x-6 items-center font-normal transition-all duration-500 ease-in-out z-50 ${
          isMenuOpen ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-5"
        }`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center font-normal p-4 md:p-0 text-white md:text-gray-300">
          <li className="transition duration-200 hover:text-gray-400 active:scale-90 cursor-pointer">
            <Link to="/dmj">Product</Link>
          </li>
          <li className="transition duration-200 hover:text-gray-400 active:scale-90 cursor-pointer">
            <Link to="/os">Solutions</Link>
          </li>
          <li className="transition duration-200 hover:text-gray-400 active:scale-90 cursor-pointer">
            <Link to="/sbd">Resources</Link>
          </li>
          <li className="transition duration-200 hover:text-gray-400 active:scale-90 cursor-pointer">
            <Link to="/dmj">Open Source</Link>
          </li>
          <li className="transition duration-200 hover:text-gray-400 active:scale-90 cursor-pointer">
            <Link to="/os">Enterprise</Link>
          </li>
          <li className="transition duration-200 hover:text-gray-400 active:scale-90 cursor-pointer">
            <Link to="/sbd">Pricing</Link>
          </li>
        </ul>

        {/* Sign In/Up Buttons for Small Screens */}
        <div className="flex flex-col items-center space-y-4 mt-4 md:hidden mb-6">
          <Link
            to="/signin"
            className="w-full text-center py-2 px-4 text-white hover:text-gray-400 transition duration-200"
          >
            Sign In
          </Link>
          <Button text="Sign Up" />
        </div>
      </div>

      {/* Sign In/Up for Large Screens */}
      <div className="hidden md:flex items-center space-x-3 ml-auto">
        <ul className="flex space-x-6 items-center font-semibold">
          <li className="transition duration-200 hover:text-gray-400 active:scale-90 cursor-pointer">
            <Link to="/">Sign In</Link>
          </li>
          <Button text="Sign Up" />
        </ul>
      </div>
    </nav>
  );
}