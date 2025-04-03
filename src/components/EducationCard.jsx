const EducationCard = ({ degree, school, year, description }) => {
  console.log();
  return (
    <div className="p-8 text-white shadow shadow-white border-gray-500">
      <h2 className="text-xl">{degree}</h2>
      <h3 className="">{school}</h3>
      <p className="">{year}</p>
      <p className="font-thin mt-2">{description}</p>
    </div>
  );
};

export default EducationCard;
