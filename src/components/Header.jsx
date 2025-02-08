import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center px-3">
      <Link className="font-bold sm:text-[3vw]">Portfolio</Link>
      <div className="flex gap-[4vw] text-[1.6vw] items-center font-extralight">
        <Link className="hidden sm:block">About</Link>
        <Link className="hidden sm:block">Projects</Link>
        <Link className="hidden sm:block">Education</Link>
        <img className="sm:hidden bg-white" src="/menu-3-line.png"></img>
      </div>
    </div>
  );
};

export default Header;
