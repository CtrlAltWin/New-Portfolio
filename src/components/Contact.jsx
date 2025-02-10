import React from "react";

const Contact = () => {
  return (
    <div className="h-[calc(100%-7.5rem)] py-6 flex flex-col items-center">
      <div className="px-4 text-center">
        {/* Heading */}
        <h2 className="font-bold text-2xl sm:text-[3vw] lg:text-3xl">
          Here are my contact details and coding profiles. <br />
          <span className="text-gray-700 text-lg">
            Feel free to connect with me!
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-2 text-gray-500 text-lg sm:text-xl">
          I'll get back to you as soon as I can. Looking forward to connecting!
        </p>
      </div>

      {/* Contact Icons Section */}
      <div className="w-full mt-8 px-4">
        <h3 className="text-xl font-semibold text-center">Contacts</h3>
        <div className="mt-4 flex flex-col gap-4 px-6 py-5 bg-gray-100 rounded-lg shadow-md max-w-3xl mx-auto">
          {/* Contact Icons Strip */}
          <div className="flex justify-center items-center gap-10 py-3 bg-white rounded-lg shadow-sm">
            {[
              {
                src: "/gmail.png",
                link: "mailto:raunakkumar7245@gmail.com",
                alt: "Gmail",
              },
              {
                src: "/linkedin.png",
                link: "https://www.linkedin.com/in/raunak-kumar-065289266/",
                alt: "LinkedIn",
              },
              {
                src: "/github.png",
                link: "https://github.com/CtrlAltWin",
                alt: "GitHub",
              },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => window.open(item.link, "_blank")}
                className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 shadow-md hover:shadow-lg hover:scale-110 rounded-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coding Profiles Section */}
      <div className="w-full mt-6 px-4">
        <h3 className="text-xl font-semibold text-center">Coding Profiles</h3>
        <div className="mt-4 flex flex-col gap-4 px-6 py-5 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
          {/* Coding Profile Icons Strip */}
          <div className="flex justify-center items-center gap-10 py-3 bg-white rounded-lg shadow-sm">
            {[
              {
                src: "/leetcode.svg",
                link: "https://leetcode.com/raunak_1611/",
                alt: "LeetCode",
              },
              {
                src: "/codechef.svg",
                link: "https://www.codechef.com/users/raunak58",
                alt: "CodeChef",
              },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => window.open(item.link, "_blank")}
                className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 shadow-md hover:shadow-lg hover:scale-110 rounded-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
