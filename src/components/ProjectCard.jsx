const ProjectCard = ({ title, stack, year, description }) => {
    return (
      <div className="bg-gray-800 p-6 flex flex-col justify-between shadow-sm rounded">
        <div>
          <h2 className="text-2xl font-semibold text-white leading-tight">{title}</h2>
          <h3 className="text-lg text-gray-500 mt-1">{stack}</h3>
          <p className="text-md text-gray-500 mt-1">{year}</p>
        </div>
        <p className="text-gray-500 mt-4 leading-relaxed">{description}</p>
      </div>
    );
  };
  
  export default ProjectCard;
  