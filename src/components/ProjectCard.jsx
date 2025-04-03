const ProjectCard = ({ title, stack, year, description }) => {
  return (
    <div className="p-8 flex flex-col text-white justify-between shadow-sm rounded border border-gray-400">
      <div>
        <h2 className="text-2xl leading-tight">{title}</h2>
        <h3 className="mt-1">{stack}</h3>
        <p className="mt-1">{year}</p>
      </div>
      <p className="font-thin mt-4 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProjectCard;
