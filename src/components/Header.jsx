import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 text-white flex justify-between items-center px-8 border-b border-gray-700">
      <Link className="text-lg sm:text-[2.8vmin]">Portfolio</Link>
      <div className="flex gap-[4vw] text-[2.4vmin] items-center font-extralight">
        <Link
          to={"/"}
          className="hidden sm:block hover:text-white ease-in duration-200"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="hidden sm:block hover:text-white ease-in duration-200"
        >
          About
        </Link>

        <details className="sm:hidden z-10 cursor-pointer">
          <summary className="list-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={25}
            >
              <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"></path>
            </svg>
          </summary>
          <div className="absolute right-1 text-white font-thin bg-gray-800 z-10 text-[3.5vmin] rounded mt-2">
            <ul className="">
              <li className="hover:bg-gray-700 duration-200 ease-in-out py-2 px-4 border-b border-gray-500">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:bg-gray-700 duration-200 ease-in-out mt-2 py-2 px-4 border-b border-gray-500">
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Header;
