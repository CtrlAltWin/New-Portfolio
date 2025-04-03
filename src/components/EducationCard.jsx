const EducationCard = ({ degree, school, year, description }) => {
  return (
    <div className="p-8 shadow-sm rounded border text-white border-gray-400">
      <h2 className="text-xl">{degree}</h2>
      <h3 className="">{school}</h3>
      <p className="">{year}</p>
      <p className="font-thin mt-2">{description}</p>
    </div>
  );
};

export default EducationCard;
