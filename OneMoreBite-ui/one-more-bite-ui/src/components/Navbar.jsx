import { useState } from "react";

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { LuFilePenLine } from "react-icons/lu";
import { MdFavorite, MdOutlineRestaurantMenu,MdOutlineHelpOutline } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";

const Navbar = () => {
    const [sideBar, setSideBar] = useState(false);
  return (
    <div className="max-w-[1400px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setSideBar(!sideBar)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-3  text-amber-600">
          One More <span className="font-bold text-black">Bite</span>
        </h1>
        <div className="hidden lg:flex items-center bg-amber-600 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2 capitalize">
            delivery
          </p>
          <p className="p-2 capitalize">
            take-away
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-3 w-full sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} className="text-gray-500" />
        <input
          className="bg-transparent p-2 pl-3 flex-grow focus:outline-none  rounded-full"
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        {" "}
        <BsCartCheckFill size={20} className="mr-3" /> Cart{" "}
      </button>
      
      {/* Mobile Menu */}
      {/* Overlay */}
      {
        sideBar ? <div className="bg-black/80 backdrop-blur-sm fixed w-full h-screen z-10 top-0 left-0  transition-opacity duration-100 ease-in-out"></div> : ''
      }

      
      {/* Side drawer menu */}
      <div className={sideBar ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose onClick={() => setSideBar(!sideBar)} size={25} className="absolute right-4 top-4 cursor-pointer"/>
        <h2 className="text-2xl p-4 text-amber-600">One More <span className="font-bold text-black">Bite</span></h2>
        <nav>
            <ul className="flex flex-col p-4 text-shadow-gray-900">
                <li className="text-xl py-4 flex"><IoPricetags size={25} className='mr-4'/>Promotions</li>
                <li className="text-xl py-4 flex"><LuFilePenLine size={25} className='mr-4'/>Orders</li>
                <li className="text-xl py-4 flex"><MdFavorite size={25} className='mr-4'/>Favorites</li>
                <li className="text-xl py-4 flex"><FaWallet size={25} className='mr-4'/>Wallet</li>
                <li className="text-xl py-4 flex"><MdOutlineRestaurantMenu size={25} className='mr-4'/>Special Food</li>
                <li className="text-xl py-4 flex"><MdOutlineHelpOutline size={25} className='mr-4'/>Help</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
