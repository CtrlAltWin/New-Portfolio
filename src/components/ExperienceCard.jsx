import Progressbar from "./Progressbar";

const ExperienceCard = ({ title, techStacks }) => {
  return (
    <div className="p-6 text-white w-full max-w-md rounded-3xl shadow-sm shadow-white">
      <h2 className="text-xl mb-4 text-center">{title}</h2>
      <div className="list-disc list-inside space-y-2">
        {techStacks.map((tech, index) => (
        
          <div key={index} className="font-thin flex justify-between items-center">
            {tech}
            <Progressbar progress={80}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
