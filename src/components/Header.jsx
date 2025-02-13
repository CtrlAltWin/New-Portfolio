import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center px-3">
      <Link className="font-thin text-lg sm:text-[2.7vw] lg:text-3xl">
        Portfolio
      </Link>
      <div className="flex gap-[4vw] text-[1.6vw] items-center font-extralight">
        <Link to={"/"} className="hidden sm:block">
          Home
        </Link>
        <Link to={"/project"} className="hidden sm:block">
          Project
        </Link>
        <Link to={"/contact"} className="hidden sm:block">
          Contact
        </Link>
        <details className="sm:hidden z-10">
          <summary className="list-none">
            <img className="mix-blend-multiply" src="/menu-3-line.png"></img>
          </summary>
          <div className="absolute right-2 bg-gray-50 h-auto w-auto shadow-xl text-black font-semibold text-[2vmin] px-2 rounded-lg m-2">
            <ul className="">
              <li className="m-2 p-1 rounded-md">
                <Link to={"/"}>
                  <h3 className="hover:bg-gray-200 px-3 py-1 rounded-md">
                    Home
                  </h3>
                </Link>
              </li>
              <li className="m-2 p-1 rounded-md">
                <Link to={"/project"}>
                  <h3 className="hover:bg-gray-200 px-3 py-1 rounded-md">
                    Project
                  </h3>
                </Link>
              </li>
              <li className="m-2 p-1 rounded-md">
                <Link to={"/contact"}>
                  <h3 className="hover:bg-gray-200 px-3 py-1 rounded-md">
                    Contact
                  </h3>
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
