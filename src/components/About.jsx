import React from "react";
import Sidebar from "./Sidebar";
import EducationCard from "./EducationCard";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
const About = () => {
  return (
    <div className="flex-col text-white mt-6 gap-2">
      {/* <div className="flex flex-col items-center">
        <h3 className="text-4xl py-3 w-full text-center">About</h3>
        <p className="text-center text-2xl text-gray-400">
          I'm a passionate full-stack developer with expertise in the MERN stack
          and a strong background in DSA.
        </p>
      </div> */}

      <div className="about-section">
        <div className="education flex flex-col items-center mt-8 py-4">
          <h3 className="text-4xl sm:border-b border-gray-600 w-[90vw] text-center py-3">
            Education
          </h3>
          <div className="education-cards flex justify-center flex-wrap gap-2 w-full py-4">
            <EducationCard
              degree="Bachelor of Technology in Computer Science"
              school="XYZ University"
              year="2020 - 2024"
              description="Focused on Software Development, Data Structures, and Algorithms."
            />
            <EducationCard
              degree="Bachelor of Technology in Computer Science"
              school="XYZ University"
              year="2020 - 2024"
              description="Focused on Software Development, Data Structures, and Algorithms."
            />
            <EducationCard
              degree="Bachelor of Technology in Computer Science"
              school="XYZ University"
              year="2020 - 2024"
              description="Focused on Software Development, Data Structures, and Algorithms."
            />
          </div>
          <div className="flex justify-center my-4">
            <button className="py-2 px-4 font-thin rounded-full border">
              Resume
            </button>
          </div>
        </div>

        <div className="Projects flex flex-col items-center border-blue-500 mt-8 py-4">
          <h3 className="text-4xl sm:border-b border-gray-600 w-[90vw] text-center py-3">
            Projects
          </h3>
          <div className="education-cards flex justify-center flex-wrap gap-2 w-full py-4">
            <ProjectCard
              title="CodersMedia"
              stack="MERN Stack (MongoDB, Express, React, Node.js)"
              year="2025"
              description="A developer networking platform to connect, share profiles, and collaborate on projects."
            />{" "}
            <ProjectCard
              title="CodersMedia"
              stack="MERN Stack (MongoDB, Express, React, Node.js)"
              year="2025"
              description="A developer networking platform to connect, share profiles, and collaborate on projects."
            />{" "}
            <ProjectCard
              title="CodersMedia"
              stack="MERN Stack (MongoDB, Express, React, Node.js)"
              year="2025"
              description="A developer networking platform to connect, share profiles, and collaborate on projects."
            />
          </div>
          <div className="flex justify-center my-4">
            <button className="py-2 px-4 font-thin rounded-full border">
              Github
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
