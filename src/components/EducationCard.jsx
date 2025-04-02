const EducationCard = ({ degree, school, year, description }) => {
  return (
    <div className="bg-gray-800 p-6 shadow-sm rounded">
      <h2 className="text-xl font-semibold text-white">{degree}</h2>
      <h3 className="text-xl text-gray-500">{school}</h3>
      <p className="text-lg text-gray-500">{year}</p>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
};

export default EducationCard;
