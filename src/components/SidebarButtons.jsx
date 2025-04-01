import React from "react";

const SidebarButtons = ({title}) => {
  return (
    <buttons className="border border-gray-500 p-2 rounded-l rounded-full hover:border-blue-500 hover:bg-blue-500 duration-200 ease-in px-8">
      {title}
    </buttons>
  );
};

export default SidebarButtons;
