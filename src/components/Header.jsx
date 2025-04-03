import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 text-white flex justify-between items-center px-8 border-b border-gray-700">
      <Link className="text-lg sm:text-[2.8vmin]">Portfolio</Link>
      <div className="flex gap-[3.5vw] sm:text-[2.7vmin] items-center font-extralight">
        <Link to={"/"} className="hover:underline ease-in duration-200">
          Home
        </Link>
        <Link to={"/about"} className="hover:underline text-white ease-in duration-200">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
