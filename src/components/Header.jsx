import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center px-3">
      <Link className="font-bold text-gray-800 sm:text-[3vw]">Portfolio</Link>
      <div className="flex gap-[4vw] text-[1.6vw] items-center font-extralight">
        <Link to={"/"} className="hidden sm:block">home</Link>
        <Link to={"/project"} className="hidden sm:block">projects</Link>
        <Link to={"/contact"} className="hidden sm:block">contacts</Link>
        <img className="sm:hidden bg-white" src="/menu-3-line.png"></img>
      </div>
    </div>
  );
};

export default Header;
