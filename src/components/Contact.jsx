import React from "react";

const Contact = () => {
  return (
    <div className="flex  flex-col  h-[calc(100%-5rem)] py-5">
      <div className="flex flex-col  h-auto items-start py-8 px-8">
        {/* heading section */}
        <h2 className="font-semibold opacity-60 text-2xl sm:text-[3vw] lg:text-3xl text-center">
          {/* message */}
          I'd love to hear from you! Whether you have a{" "}
          <span className="">project </span> in mind, want to
          <span className=""> collaborate</span>, or just want to talk tech,{" "}
          <span className=""> feel free to reach out.</span>
        </h2>
      </div>

      <div className="my-2 flex justify-center items-center gap-[13vw] py-5 px-3 bg-gray-100 opacity-70">
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

      <div className=" mt-8 flex justify-center items-center gap-[13vw] py-5 px-3 bg-gray-100 opacity-70">
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
      </div>
    </div>
  );
};

export default Contact;
