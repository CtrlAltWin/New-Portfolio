import React from "react";
import EducationCard from "./EducationCard";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";
const frontendTechs = [
  { skill: "React.js", progress: 90 },
  { skill: "Next.js", progress: 85 },
  { skill: "Tailwind CSS", progress: 95 },
  { skill: "Redux", progress: 80 },
  { skill: "TypeScript", progress: 75 },
  { skill: "JavaScript", progress: 95 },
];

const backendTechs = [
  { skill: "Node.js", progress: 90 },
  { skill: "Express.js", progress: 88 },
  { skill: "MongoDB", progress: 85 },
  { skill: "PostgreSQL", progress: 70 },
  { skill: "Firebase", progress: 80 },
  { skill: "GraphQL", progress: 75 },
];

const About = () => {
  return (
    <div className="flex-col text-white pt-6 gap-2 bg-gray-600">
      <div className="about-section">
        <div className="experience flex flex-col items-center px-1">
          <h3 className="text-sm border-gray-600 w-[90vw] py-1 text-center mt-28 font-thin">
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
              degree="B.Tech in IT"
              school="MMM University of Technology"
              year="2022 - 2026"
              description="Studied core subjects like Data Structures, Algorithms, and Full Stack Development. Gained experience in C++ and JavaScript, building web apps with React and Express. Participated in coding contests and built projects to improve problem-solving skills."
            />
            <EducationCard
              degree="Intermediate in Science"
              school="Trident Public School"
              year="2019 - 2021"
              description="Studied core subjects including Physics, Chemistry, Mathematics, and Computer Science. Developed a strong foundation in analytical thinking, problem-solving, and logical reasoning, which later helped in software development and programming."
            />
            <EducationCard
              degree="MS Memorial Public School"
              school="ABC Senior Secondary School"
              year="2018 - 2019"
              description="Completed foundational education with a focus on Mathematics, Science, and Computer Applications. Developed early interest in technology and programming, participating in various school-level coding competitions and science projects."
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="py-2 px-4 font-thin rounded-full text-2xl border border-white shadow-sm shadow-white active:shadow-none"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1p4qZgUWKShIRehJlSwY7Y54TFdx55iEs/view",
                  "_blank"
                )
              }
            >
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
              stack="MongoDB, Express, React, Node.js"
              year="2024"
              description="A developer networking platform where users can create profiles, connect with like-minded developers, and collaborate on projects. Features include authentication, profile management, networking requests, and a future chat system."
            />
            <ProjectCard
              title="YouTube Clone"
              stack="React, Redux, TailwindCSS"
              year="2025"
              description="A video streaming platform replicating YouTube functionalities. Users can upload, watch, like, comment, and subscribe to channels. Includes video uploads, live chat, and engagement features."
            />
            <ProjectCard
              title="StudySync"
              stack="React, Redux, TailwindCSS"
              year="2025"
              description="An online learning platform with course management, quizzes, and real-time discussions. Instructors can create courses, students can enroll, and interactive quizzes provide certifications upon completion."
            />
          </div>
          <div className="flex justify-center mt-10">
            <button className="py-2 px-4 font-thin rounded-full text-2xl border border-white shadow-sm shadow-white active:shadow-none"  
            onClick={() =>
              window.open(
                "https://github.com/CtrlAltWin",
                "_blank"
              )
            }
            
            >
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
