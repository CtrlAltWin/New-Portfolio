const ExperienceCard = ({ title, techStacks }) => {
  return (
    <div className="border border-gray-400 p-6 text-white w-full max-w-md rounded-3xl">
      <h2 className="text-xl mb-4 text-center">{title}</h2>
      <ul className="list-disc list-inside space-y-2">
        {techStacks.map((tech, index) => (
          <li key={index} className="font-thin">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
