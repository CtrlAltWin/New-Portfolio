import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col h-[calc(100%-5rem)] py-5">
      <div className="md:flex px-3 items-center">
        {/* image */}

        <div className="flex justify-center items-center min-h-44 min-w-44 max-h-52 max-w-52 w-[18vw] h-[18vw] rounded-full overflow-clip">
          <img src="/coder.jpg" alt="" />
        </div>
        {/* hero-content */}
        <h3 className="font-semibold opacity-60 text-2xl sm:text-[3vw] lg:text-3xl py-5 md:py-0">
          Turning Ideas Into Reality with
          <span className="text-blue-400"> {"<Code/>"}</span>
        </h3>
      </div>

      <p className="flex font-mono py-5 px-3 text-gray-600 text-xl sm:text-[2.5vw] md:text-2xl">
        Hey, I'm Raunak, a Full-Stack Developer specializing in MERN, C++, and
        Problem Solving. I build scalable web applications, interactive UI, and
        robust backend systems.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 py-6 px-3 justify-start">
        <button className="h-10 sm:w-[40vw] sm:max-w-72 bg-blue-500 rounded-sm text-white">
          View My Work
        </button>
        <button className="h-10 sm:w-[40vw] sm:max-w-72 bg-green-400 rounded-sm text-white">
          Lets Connect
        </button>
      </div>
    </div>
  );
};

export default Home;
