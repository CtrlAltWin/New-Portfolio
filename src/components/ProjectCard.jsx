const ProjectCard = ({ title, stack, year, description }) => {
  return (
    <div className="p-8 flex flex-col max-w-96 text-white justify-start shadow bg-gray-500 rounded hover:scale-98 duration-200 ease-in-out">
      <div>
        <h2 className="text-2xl leading-tight">{title}</h2>
        <h3 className="mt-1 text-sm">{stack}</h3>
        <p className="text-sm">{year}</p>
      </div>
      <p className="font-thin mt-4 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProjectCard;
