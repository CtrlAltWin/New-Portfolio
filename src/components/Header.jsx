import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center px-3">
      <Link className="font-extralight text-lg sm:text-[3vmin]">Portfolio</Link>
      <div className="flex gap-[4vw] text-[2.4vmin] items-center font-extralight">
        <Link to={"/"} className="hidden sm:block">
          Home
        </Link>
        <Link to={"/project"} className="hidden sm:block">
          Project
        </Link>
        <Link to={"/contact"} className="hidden sm:block">
          Contact
        </Link>
        <details className="sm:hidden z-10 cursor-pointer">
          <summary className="list-none">
            <img className="mix-blend-multiply" src="/menu-3-line.png"></img>
          </summary>
          <div className="absolute right-2 bg-gray-50 h-auto w-auto shadow-xl text-black font-extralight text-[4vmin] rounded-lg m-2 py-1 px-2">
            <ul className="">
              <li className="">
                <Link to={"/"}>
                  <button className="hover:bg-gray-100 p-2 rounded-md">
                    Home
                  </button>
                </Link>
              </li>
              <li className="">
                <Link to={"/project"}>
                  <button className="hover:bg-gray-100 p-2 rounded-md">
                    Project
                  </button>
                </Link>
              </li>
              <li className="">
                <Link to={"/contact"}>
                  <button className="hover:bg-gray-100 p-2 rounded-md">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Header;
