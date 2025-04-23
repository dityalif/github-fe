import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
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

      {/* Options */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-6 items-center font-normal">
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

      {/* Sign In/Up */}
      <div className="flex items-center space-x-3 ml-auto">
        <ul className="flex space-x-6 items-center font-semibold">
            <li className="transition duration-200 hover:text-gray-400 active:scale-90 cursor-pointer">
                <Link to="/dmj">Sign In</Link>
            </li>
            <Button text="Sign Up"/>
        </ul>
      </div>
    </nav>
  );
}