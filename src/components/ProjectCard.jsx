const ProjectCard = ({ title, stack, year, description }) => {
  return (
    <div className="p-8 flex flex-col justify-between shadow-sm rounded border border-gray-700">
      <div>
        <h2 className="text-2xl text-white leading-tight">{title}</h2>
        <h3 className="text-lg text-gray-500 mt-1">{stack}</h3>
        <p className="text-md text-gray-500 mt-1">{year}</p>
      </div>
      <p className="font-thin text-gray-400 mt-4 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProjectCard;
