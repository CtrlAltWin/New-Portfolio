import React from "react";

const Contact = () => {
  return (
    <div className="flex  flex-col  h-[calc(100%-5rem)] py-8">
      <div className="flex justify-center items-center gap-[13vw] py-5">
        {/* find me online */}
        <div className=" flex justify-center items-center w-[14vw] h-[14vw] max-w-20 max-h-20 p-4 bg-gray-50 shadow-sm hover:shadow-md hover:scale-105 rounded-2xl ">
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
      <div className="flex flex-col  h-auto px-3  items-start py-8 ">
        <h2 className="font-semibold text-gray-700 text-2xl sm:text-[3.5vw] md:text-4xl py-2">
          Whether you have a <span className="text-yellow-500"> project</span>{" "}
          idea, a <span className="text-yellow-500">collaboration </span>
          opportunity, or just want to say hello,
          <span className="text-blue-400"> feel free</span> to reach out.
        </h2>
      </div>

      <div className="flex flex-col h-52 px-3 mt-10 ">
        <h2 className="font-mono text-gray-600 underline text-xl sm:text-[3vw] md:text-3xl py-2 ">
          Coding Profiles:
        </h2>

        <div className="flex flex-col sm:flex-row gap-5 py-6 justify-start ">
          <button className="h-10 sm:w-[40vw] sm:max-w-72 bg-blue-500 rounded-sm text-white">
            LeetCode
          </button>
          <button className="h-10 sm:w-[40vw] sm:max-w-72 bg-green-400 rounded-sm text-white">
            CodeChef
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
