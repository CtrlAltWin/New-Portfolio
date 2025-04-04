import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full items-center px-4 bg-gray-600 min-h-[calc(100vh-5rem)]">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center md:text-left gap-6 mt-12">
        {/* Profile Image */}
        <div className="flex justify-center items-center w-[18vw] h-[18vw] min-w-44 min-h-44 max-w-52 max-h-52 rounded-full overflow-hidden">
          <img
            src="/coder.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <h3 className="text-white text-2xl sm:text-[3vw] lg:text-3xl">
          Turning Ideas Into Reality with
          {" <Code/>"}
        </h3>
      </div>
      {/* Introduction */}
      <p className="font-thin text-white text-xl md:text-2xl text-center max-w-3xl mt-6 md:mt-10">
        Hey, I'm Raunak, a Full-Stack Developer specializing in MERN, C++, and
        Problem Solving. I build scalable web applications, interactive UI, and
        robust backend systems.
      </p>
      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 mt-10">
        <button
          className="h-12 sm:w-48 px-6 border-2 border-gray-400 bg-gray-400 hover:scale-95 duration-200 ease-in text-white rounded-lg"
          onClick={() =>
            (window.location.href =
              "mailto:raunakkumar7245@gmail.com?subject=Hiring Inquiry&body=Hi Raunak, I came across your portfolio and would love to discuss a job opportunity with you.")
          }
        >
          Hire Me
        </button>
        <button
          className="h-12 sm:w-48 px-6 border-2 border-gray-400 hover:bg-gray-400 hover:scale-95 duration-200 ease-in text-white rounded-lg"
          onClick={() => navigate("/about")}
        >
          Know Me
        </button>
      </div>
    </div>
  );
};

export default Home;
