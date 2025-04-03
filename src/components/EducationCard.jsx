const EducationCard = ({ degree, school, year, description }) => {
  return (
    <div className="p-8 shadow-sm rounded border border-gray-700">
      <h2 className="text-xl text-white">{degree}</h2>
      <h3 className="text-xl text-gray-500">{school}</h3>
      <p className="text-lg text-gray-500">{year}</p>
      <p className="font-thin mt-2 text-gray-400">{description}</p>
    </div>
  );
};

export default EducationCard;
