import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center h-[calc(100%-7.5rem)] py-6 px-4">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6">
        {/* Profile Image */}
        <div className="flex justify-center items-center w-[18vw] h-[18vw] min-w-44 min-h-44 max-w-52 max-h-52 rounded-full overflow-hidden shadow-lg border-4 border-gray-200">
          <img src="/coder.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Hero Content */}
        <h3 className="font-semibold text-gray-800 text-2xl sm:text-[3vw] lg:text-3xl">
          Turning Ideas Into Reality with
          <span className="text-blue-500"> {" <Code/>"}</span>
        </h3>
      </div>

      {/* Introduction */}
      <p className="font-light text-gray-700 text-xl sm:text-[3vw] lg:text-2xl text-center max-w-3xl mt-6 px-4 bg-gray-100 py-4 rounded-lg shadow-md">
        Hey, I'm <span className="font-semibold">Raunak</span>, a Full-Stack Developer
        specializing in <span className="font-medium text-blue-500">MERN</span>,
        <span className="font-medium text-gray-800"> C++</span>, and Problem Solving.
        I build scalable web applications, interactive UI, and robust backend systems.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 mt-6">
        <button className="h-12 sm:w-48 px-6 bg-blue-600 hover:bg-blue-700 transition text-white font-medium rounded-lg shadow-md">
          View My Work
        </button>
        <button className="h-12 sm:w-48 px-6 bg-green-500 hover:bg-green-600 transition text-white font-medium rounded-lg shadow-md">
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default Home;

