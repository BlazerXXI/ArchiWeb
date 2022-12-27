import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const link = "./";
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="container m-auto">
      <div className=" md:flex items-center md:text-center justify-between mx-2  min-h-[50px] mt-12 mb-20 ">
        <a href={link} className="font-[Barlow] text-[42px] font-semibold">
          ArchiWeb
        </a>

        <div
          onClick={handleNav}
          className="fixed z-50 top-0 rounded-full w-[30px] h-[30px] text-center justify-center items-center active:opacity-40 drop-shadow-md right-0 m-5 mt-14 flex md:hidden cursor-pointer hover:opacity-60 duration-300 ease-in-out"
        >
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className="w-[30px] h-[30px] bg-[#ffffff80] z-40 rounded-full fixed top-0 right-0 m-5 mt-14"></div>

        <nav className="md:gap-16 md:flex hidden mt-10 md:mt-0 justify-center items-center">
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:gap-24 gap-10 p-2 text-center">
            <li>
              <a
                href={link}
                className="hover:opacity-80 hover:underline active:opacity-40 duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={link}
                className="hover:opacity-80 hover:underline active:opacity-40 duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href={link}
                className="hover:opacity-80 hover:underline active:opacity-40 duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href={link}
                className="hover:opacity-80 hover:underline active:opacity-40 duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
          <AiOutlineSearch
            className="sm:block hidden cursor-pointer hover:opacity-80 active:opacity-40 duration-300 ease-in-out"
            size={25}
          />
        </nav>

        <div
          className={
            !nav
              ? "fixed z-50 left-0 top-0 w-[60%] ease-in-out duration-500 h-full border-r border-r-gray-900 bg-[#2c2c2cf9]"
              : "fixed left-[-100%] top-0 duration-500 linear h-full z-50"
          }
        >
          <nav className="md:gap-16  md:hidden flex flex-col mt-10 md:mt-0 justify-center items-center">
            <a
              href={link}
              className="font-[Barlow] text-[42px] font-semibold text-white mb-4"
            >
              ArchiWeb
            </a>
            <ul className="p-2 text-center">
              <li className="mb-5 ">
                <a
                  href={link}
                  className="text-white  hover:opacity-80  active:opacity-40 duration-300 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li className="mb-5  ">
                <a
                  href={link}
                  className="text-white  hover:opacity-80  active:opacity-40 duration-300 ease-in-out"
                >
                  Projects
                </a>
              </li>
              <li className="mb-5 ">
                <a
                  href={link}
                  className="text-white  hover:opacity-80  active:opacity-40 duration-300 ease-in-out"
                >
                  About
                </a>
              </li>
              <li className="mb-5 ">
                <a
                  href={link}
                  className="text-white  hover:opacity-80  active:opacity-40 duration-300 ease-in-out"
                >
                  Contact
                </a>
              </li>
            </ul>
            <AiOutlineSearch
              className="sm:block hidden cursor-pointer hover:opacity-80 active:opacity-40 duration-300 ease-in-out"
              size={25}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
