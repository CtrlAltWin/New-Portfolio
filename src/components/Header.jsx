import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center px-3 bg-gray-100">
      <Link className="font-semibold-thin text-lg sm:text-[2.7vw] lg:text-3xl">
        Portfolio
      </Link>
      <div className="flex gap-[4vw] text-[1.6vw] items-center font-extralight">
        <Link to={"/"} className="hidden sm:block">
          home
        </Link>
        <Link to={"/project"} className="hidden sm:block">
          projects
        </Link>
        <Link to={"/contact"} className="hidden sm:block">
          contacts
        </Link>
        <details className="sm:hidden">
          <summary className="list-none">
            <img className="bg-transparent" src="/menu-3-line.png"></img>
          </summary>
          <div className="absolute right-2 bg-gray-800 text-white font-semibold p-4 text-[3vw] rounded-lg">
            <ul className="">
              <li className="m-2">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="m-2">
                <Link to={"/project"}>Project</Link>
              </li>
              <li className="m-2">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Header;
