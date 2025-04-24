import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between p-4 px-8 text-md text-white tracking-wider sticky top-0 z-50 bg-transparent">
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

      {/* Navigation Links */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 top-0 md:static md:transform-none md:top-auto w-full md:w-auto bg-[#161B22] 
          md:bg-transparent md:flex md:space-x-6 items-center font-normal transition-all duration-500 ease-in-out z-50 ${
          isMenuOpen ? "block opacity-100 translate-y-0" : "hidden md:flex opacity-100 translate-y-0"
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
      </div>

      {/* Sign In/Up Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <ul className="flex space-x-6 items-center font-semibold">
          <li className="transition duration-200 hover:text-gray-400 active:scale-90 cursor-pointer">
            <Link to="/">Sign In</Link>
          </li>
          <Button text="Sign Up" />
        </ul>
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
    </nav>
  );
}