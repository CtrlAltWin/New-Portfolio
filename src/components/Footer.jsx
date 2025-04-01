import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-28 text-blue-500 bg-gray-800 text-sm flex justify-between items-center px-8 border-t">
      {/* First Section: Email */}
      <div className="flex flex-col gap-2 text-center">
        <a
          href="mailto:raunak@example.com"
          className="hover:underline"
        >
          Gmail
        </a>
        <a
          href="https://www.linkedin.com/in/raunak"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>

      {/* Second Section: Social Links */}

      <div className="flex flex-col gap-2 text-center">
        <a
          href="https://github.com/CtrlAltWin"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/raunak_1611"
          className="hover:underline"
        >
          LeetCode
        </a>
      </div>

      {/* Third Section: Quote or Message */}
      <div className="flex flex-col items-center">
        <p className="">Made with ❤️</p>
        <p>by Raunak</p>
      </div>
    </div>
  );
};

export default Footer;
