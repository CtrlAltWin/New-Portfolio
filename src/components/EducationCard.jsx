const EducationCard = ({ degree, school, year, description }) => {
  console.log();
  return (
    <div className="p-8 flex flex-col max-w-96 text-white shadow bg-gray-500 rounded hover:scale-98 duration-200 ease-in-out justify-start">
      <h2 className="text-xl">{degree}</h2>
      <h3 className="mt-1 text-sm">{school}</h3>
      <p className="text-sm">{year}</p>
      <p className="font-thin mt-2">{description}</p>
    </div>
  );
};

export default EducationCard;
