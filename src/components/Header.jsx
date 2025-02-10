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
          Projects
        </Link>
        <Link to={"/contact"} className="hidden sm:block">
          Contacts
        </Link>
        <details className="sm:hidden z-10">
          <summary className="list-none">
            <img className="mix-blend-multiply" src="/menu-3-line.png"></img>
          </summary>
          <div className="absolute right-2 bg-gray-600 h-auto w-auto text-white font-semibold p-4 text-[4vmin] rounded-lg">
            <ul className="">
              <li className="m-2">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="m-2">
                <Link to={"/project"}>Projects</Link>
              </li>
              <li className="m-2">
                <Link to={"/contact"}>Contacts</Link>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Header;
