import React from "react";
import SidebarButtons from "./SidebarButtons";
const titles = [
  "Projects",
  "Coding",
  "Resume",
  "Experience",
  "Education",
  "Cetifications",
];
const Sidebar = () => {
  return (
    <div className="absolute sm:static flex flex-col gap-2 h-[80vh] px-2 border-r border-blue-500 bg-gray-800">
      {titles.map((title) => (
        <SidebarButtons title={title} />
      ))}
    </div>
  );
};

export default Sidebar;
