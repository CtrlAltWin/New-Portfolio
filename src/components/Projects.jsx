import React, { useState } from "react";

const Project = ({
  index,
  name,
  description,
  github,
  live,
  techStack,
  features,
  setOpenIndex,
  OpenIndex,
}) => {
  return (
    <div className="shadow-md rounded-lg ease-in-out border">
      {/* Accordion Header */}
      <button
        onClick={() =>
          setOpenIndex((OpenIndex) => (OpenIndex != index ? index : null))
        }
        className="w-full text-left p-4 transition-all flex justify-between items-center rounded-full border"
        aria-controls={`project-${name.replace(/\s+/g, "-")}`}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between w-full">
          <span className="font-semibold text-lg">{name}</span>
          <span className="text-gray-600 text-sm sm:ml-4">
            {techStack.join(" • ")}
          </span>
        </div>
      </button>

      {/* Accordion Content */}
      {OpenIndex == index && (
        <div
          id={`project-${name.replace(/\s+/g, "-")}`}
          className="p-4 ease-in-out"
        >
          <p className="text-gray-700">{description}</p>

          <div className="mt-3 flex gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
            >
              View GitHub
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md"
              >
                Live Demo
              </a>
            )}
          </div>

          <p className="mt-4 font-semibold">Key Features:</p>
          <ul className="list-disc ml-5 text-gray-600">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [OpenIndex, setOpenIndex] = useState(null);
  return (
    <div className="flex flex-col h-[calc(100%-7.5rem)] py-8 text-white">
      <h2 className="font-bold text-2xl sm:text-[3vw] lg:text-3xl text-center">
        My Projects
      </h2>

      <div className="w-full max-w-[600px] mx-auto space-y-4 mt-8 border border-blue-500">
        <Project
          index={1}
          name="Foodie"
          description="A food delivery app frontend built with React using Swiggy's API."
          github="https://github.com/CtrlAltWin/Foodie"
          live=""
          techStack={["React", "Tailwind CSS", "Swiggy API"]}
          features={[
            "Real-time menu fetching",
            "Optimized UI/UX",
            "Search & Filter functionality",
          ]}
          setOpenIndex={setOpenIndex}
          OpenIndex={OpenIndex}
        />

        <Project
          index={2}
          name="Coder'sMedia"
          description="A full-stack MERN app for developers to connect, share profiles, and network."
          github="https://github.com/CtrlAltWin/CodersMedia"
          live=""
          techStack={["MERN Stack", "Express", "MongoDB", "Tailwind"]}
          features={[
            "User authentication & profiles",
            "Connect with similar interests",
            "Edit profile, send requests",
          ]}
          setOpenIndex={setOpenIndex}
          OpenIndex={OpenIndex}
        />

        <Project
          index={4}
          name="YouTube Clone"
          description="My personal portfolio showcasing my work, skills, and coding profiles."
          github="https://github.com/CtrlAltWin/New-Portfolio"
          live="https://new-portfolio-lyart-sigma.vercel.app/"
          techStack={["React", "Tailwind CSS"]}
          features={[
            "Minimalist responsive design",
            "Contact & project sections",
            "Dynamic animations",
          ]}
          setOpenIndex={setOpenIndex}
          OpenIndex={OpenIndex}
        />

        <Project
          index={5}
          name="StudySync"
          description="My personal portfolio showcasing my work, skills, and coding profiles."
          github="https://github.com/CtrlAltWin/New-Portfolio"
          live="https://new-portfolio-lyart-sigma.vercel.app/"
          techStack={["React", "Tailwind CSS"]}
          features={[
            "Minimalist responsive design",
            "Contact & project sections",
            "Dynamic animations",
          ]}
          setOpenIndex={setOpenIndex}
          OpenIndex={OpenIndex}
        />
        <Project
          index={6}
          name="Portfolio"
          description="My personal portfolio showcasing my work, skills, and coding profiles."
          github="https://github.com/CtrlAltWin/New-Portfolio"
          live="https://new-portfolio-lyart-sigma.vercel.app/"
          techStack={["React", "Tailwind CSS"]}
          features={[
            "Minimalist responsive design",
            "Contact & project sections",
            "Dynamic animations",
          ]}
          setOpenIndex={setOpenIndex}
          OpenIndex={OpenIndex}
        />
      </div>
      <div className="absolute h-40 bottom-0 w-full border"></div>
    </div>
  );
};

export default Projects;
