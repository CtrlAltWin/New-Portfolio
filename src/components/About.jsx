import React from "react";
import EducationCard from "./EducationCard";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";
const frontendTechs = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "TypeScript",
  "JavaScript",
];

const backendTechs = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "GraphQL",
];
const About = () => {
  return (
    <div className="flex-col text-white mt-6 gap-2">
      <div className="about-section">
        <div className="experience flex flex-col items-center px-1">
          <h3 className="text-sm border-gray-600 w-[90vw] py-1 text-center mt-24 font-thin">
            Explore My
          </h3>
          <h3 className="text-4xl border-gray-600 w-[90vw] py-1 text-center font-thin">
            Experience
          </h3>
          <div className="education-cards flex justify-center flex-wrap gap-2 w-full mt-10">
            <ExperienceCard
              title="Frontend Experience"
              techStacks={frontendTechs}
            />
            <ExperienceCard
              title="Backend Experience"
              techStacks={backendTechs}
            />
          </div>
        </div>

        <div className="education flex flex-col items-center px-1">
          <h3 className="text-sm border-gray-600 w-[90vw] py-1 text-center mt-40 font-thin">
            My
          </h3>
          <h3 className="text-4xl border-gray-600 w-[90vw] py-1 text-center font-thin">
            Education
          </h3>
          <div className="education-cards flex justify-center flex-wrap gap-2 w-full mt-10">
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
          <div className="flex justify-center mt-10">
            <button className="py-2 px-4 font-thin rounded-full text-2xl border border-white shadow-sm shadow-white active:shadow-none">
              Resume
            </button>
          </div>
        </div>

        <div className="Projects flex flex-col items-center border-blue-500 px-1">
          <h3 className="text-sm border-gray-600 w-[90vw] py-1 text-center mt-40 font-thin">
            Browse My Recent
          </h3>
          <h3 className="text-4xl border-gray-600 w-[90vw] py-1 text-center font-thin">
            Projects
          </h3>
          <div className="project-cards flex justify-center flex-wrap gap-2 w-full mt-10">
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
          <div className="flex justify-center mt-10">
            <button className="py-2 px-4 font-thin rounded-full text-2xl border border-white shadow-sm shadow-white active:shadow-none">
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
