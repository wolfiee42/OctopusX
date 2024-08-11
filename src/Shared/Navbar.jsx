import { useState } from "react";
import logo from "../assets/octopuslogo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-full">
      <div className="max-w-7xl h-full mx-auto">
        <div className="w-full h-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="">
            <img src={logo} alt="Logo" className="w-48 mr-2" />
          </a>
          {/* Primary Nav for lg screens */}
          <div className="hidden md:flex items-center space-x-14">
            <a
              href="#"
              className="py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
            >
              About
            </a>
            <a
              href="#"
              className="py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
            >
              Contact
            </a>
            <a
              href="#"
              className="py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
            >
              Projects
            </a>
            <a
              href="#"
              className="py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
            >
              Career
            </a>
          </div>

          {/* Mobile/ Tablet Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div className={`md:hidden ${menuOpen ? "" : "hidden"}`}>
        <ul>
          <li>
            <a
              href="#"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
