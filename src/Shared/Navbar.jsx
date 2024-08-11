import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/octopuslogo.svg";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full h-full">
      <div className="max-w-7xl h-full mx-auto">
        <div className="w-full h-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <NavLink to="/" className="">
            <img src={logo} alt="Logo" className="w-48 mr-2" />
          </NavLink>
          {/* Nav Links for lg screens */}
          <div className="hidden md:flex items-center space-x-14">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700"
              }
            >
              Career
            </NavLink>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <MdOutlineCancel className="text-3xl" />
              ) : (
                <IoMdMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <div className={`md:hidden ${menuOpen ? "" : "hidden"}`}>
        <ul className="absolute right-0 w-full bg-white flex flex-col items-end p-4 gap-5">
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700 transition duration-300"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700 transition duration-300"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700 transition duration-300"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700 transition duration-300"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700 transition duration-300"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700 transition duration-300"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700 transition duration-300"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "py-1 font-semibold text-gray-700 border-b-[1px] border-b-gray-700 transition duration-300"
                  : "py-1 font-semibold text-gray-700 hover:border-b-[1px] hover:border-b-gray-700 transition duration-300"
              }
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
