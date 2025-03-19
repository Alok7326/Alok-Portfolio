import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Contact" },
  ];
  return (
    <>
      <div className="max-w-full container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              src="/photo.avif"
              className="h-12 w-12 rounded-full"
              alt="Profile"
            />
            <h1 className="font-semibold text-xl cursor-pointer bg-gradient-to-r from-[#ADF542] via-blue-500 to-purple-600 text-transparent bg-clip-text">
              ALOK PATEL
              <p className="text-sm font-bold bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
                Web Developer
              </p>
            </h1>
          </div>
          {/* Desktop Navbar */}
          <div>
            {/* <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul> */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="group hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-200"
                  >
                    {text}{" "}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      ✨
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
