const Progressbar = ({ progress }) => {
    return (
      <div className="w-56 bg-white h-2 overflow-hidden relative">
        <div
          className="bg-gray-500 h-full transition-all duration-300 text-xs text-white flex items-center justify-center"
          style={{ width: `${progress}%` }}
        >
        </div>
      </div>
    );
  };
  
  export default Progressbar;
  