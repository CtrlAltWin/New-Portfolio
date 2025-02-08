import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col h-[calc(100%-5rem)] py-8">
      <div className="md:flex px-4 py-5 items-center">
        {/* image */}

        <div className="justify-center items-center min-h-44 min-w-44 max-h-52 max-w-52 w-[18vw] h-[18vw] rounded-full overflow-clip">
          <img src="src\assets\coder.jpg" alt="" />
        </div>
        {/* hero-content */}
        <h3 className="font-semibold text-2xl sm:text-[3.5vw] md:text-4xl py-5 md:py-0 md:px-6">
          Turning Ideas Into Reality with{" "}
          <span className="text-blue-400">Code</span>🚀
        </h3>
      </div>

      <div className="flex font-mono py-8 px-4 md:p-5  text-[3.8vw]/[5vw] md:text-2xl/10">
        Hey, I'm Raunak, a Full-Stack Developer specializing in MERN, C++, and
        Problem Solving. I build scalable web applications, interactive UI, and
        robust backend systems.
      </div>
      <div className="flex flex-col sm:flex-row gap-5 py-6 px-4 justify-start">
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
