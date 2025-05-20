import React, { useState } from "react";
import { Link } from "react-scroll";

import { FiCalendar, FiHome, FiMenu, FiX } from "react-icons/fi";
import { LuNotebookPen, LuSquareUserRound } from "react-icons/lu";

const Navbar = () => {
  const [navShadow, setNavShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 transition-all duration-500">
      {/* Navbar Background */}
      <div className={`bg-white backdrop-blur-2xl ${navShadow ? "shadow-xl" : "shadow-md"}`}>
        <nav className="border-b border-pink-400/20">
          <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center">
              <span className="cursor-pointer text-2xl md:text-3xl font-bold 
                bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent 
                font-[Poppins] tracking-tighter">
                Beauty Nation 
              </span>
            </div>

            {/* Center Desktop Menu */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 lg:space-x-10">
              {/* Home */}
              <Link
                to="home"
                spy={true}
                smooth={true}
                className="flex items-center cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300 
                  relative group font-[Poppins] font-medium text-base lg:text-lg"
              >
                <FiHome className="mr-1 lg:mr-2" />
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Services */}
              <Link
                to="services"
                spy={true}
                smooth={true}
                className="flex items-center cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300 
                  relative group font-[Poppins] font-medium text-base lg:text-lg"
              >
                <LuNotebookPen className="mr-1 lg:mr-2" />
                Our Services
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* About Us */}
              <Link
                to="aboutus"
                spy={true}
                smooth={true}
                className="flex items-center cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300 
                  relative group font-[Poppins] font-medium text-base lg:text-lg"
              >
                <LuSquareUserRound className="mr-1 lg:mr-2" />
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Book Now Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              {/* Book Button (desktop only) */}
              <div className="hidden md:block">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  className="flex items-center bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 lg:px-6 rounded-lg
                    hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer
                    font-[Poppins] font-semibold border border-pink-300 text-sm lg:text-base"
                >
                  <FiCalendar className="mr-1 lg:mr-2" />
                  Book Now
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-gray-800 hover:text-pink-700 transition-colors duration-300 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-pink-200/95 backdrop-blur-lg">
          <button
            className="absolute top-4 right-4 text-gray-800 hover:text-pink-700 transition-colors duration-300 p-2"
            onClick={() => {
                //   console.log("Close clicked");
                  setIsMenuOpen(false);
            }}
          >
            <FiX size={30} />
          </button>

          <div className="bg-pink-100/90 border border-pink-300/20 rounded-xl shadow-2xl p-8 space-y-8 w-11/12 max-w-sm">
            {/* Mobile Nav Links */}
            <Link
              to="home"
              spy={true}
              smooth={true}
              className="flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[Poppins] text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiHome className="mb-2 text-2xl" />
              Home
            </Link>

            <Link
              to="services"
              spy={true}
              smooth={true}
              className="flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[Poppins] text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <LuNotebookPen className="mb-2 text-2xl" />
              Our Services
            </Link>

            <Link
              to="aboutus"
              spy={true}
              smooth={true}
              className="flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[Poppins] text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <LuSquareUserRound className="mb-2 text-2xl" />
              About Us
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              className="flex flex-col items-center bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300 font-[Poppins] text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiCalendar className="mb-2 text-2xl" />
              Book Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
