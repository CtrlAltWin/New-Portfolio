import React from "react";

const Contact = () => {
  return (
    <div className="h-[calc(100%-7.5rem)] py-6">
      <div className="px-3 py-4">
        {/* contact me section ↑ */}
        <h2 className="font-semibold text-xl sm:text-[3vw] lg:text-3xl text-center">
          {/* message section ↑ */}
          Here are my contact details and coding profiles. Feel free to connect
          with me!
        </h2>
        <p className="font-extralight py-1 text-xl sm:text-[3vw] lg:text-3xl text-center">
          {/* message section ↑ */}
          I'll get back to you as soon as I can. Looking forward to connect with
          you!
        </p>
      </div>

      <div className="px-3 py-4">
        {/* for icons↑ */}

        {/* icon sections */}
        <div className="my-8 flex justify-center items-center gap-[10vw] py-5 px-3 bg-gray-100 opacity-70">
          {/* strip↑ */}
          <div className="flex justify-center items-center w-[14vw] h-[14vw] max-w-20 max-h-20 p-4 bg-gray-50 shadow-sm hover:shadow-md hover:scale-105 rounded-2xl ">
            <img
              src="/gmail.png"
              alt="Gamail"
              className="h-[10vw] w-[10vw] max-h-16 max-w-16"
            />
          </div>

          <div className="flex justify-center items-center w-[14vw] h-[14vw] max-w-20 max-h-20 p-4 bg-gray-50 shadow-sm hover:shadow-md hover:scale-105 rounded-2xl ">
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="h-[10vw] w-[10vw] max-h-16 max-w-16"
            />
          </div>

          <div className="flex justify-center items-center w-[14vw] h-[14vw] max-w-20 max-h-20 p-4 bg-gray-50 shadow-sm hover:shadow-md hover:scale-105 rounded-2xl ">
            <img
              src="/github.png"
              alt="Github"
              className="h-[10vw] w-[10vw]  max-h-16 max-w-16"
            />
          </div>
        </div>

        <div className="my-8 flex justify-center items-center gap-[10vw] py-5 px-3 bg-gray-100 opacity-70">
          {/* strip↑ */}
          <div className=" flex justify-center items-center w-[14vw] h-[14vw] max-w-20 max-h-20 p-4 bg-gray-50 shadow-sm hover:shadow-md hover:scale-105 rounded-2xl ">
            <img
              src="/leetcode.svg"
              alt="Gamail"
              className="h-[10vw] w-[10vw] max-h-16 max-w-16"
            />
          </div>

          <div className="flex justify-center items-center w-[14vw] h-[14vw] max-w-20 max-h-20 p-4 bg-gray-50 shadow-sm hover:shadow-md hover:scale-105 rounded-2xl ">
            <img
              src="/codechef.svg"
              alt="LinkedIn"
              className="h-[10vw] w-[10vw] max-h-16 max-w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
