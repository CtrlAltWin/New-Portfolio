import React from "react";
import SidebarButtons from "./SidebarButtons";
const titles = [
  "Projects",
  "Education",
  "Resume",
];
const Sidebar = () => {
  return (
    <div className="flex  border-blue-500 justify-center w-[100vw] overflow-x-scroll hide-scrollbar">
      {titles.map((title) => (
        <SidebarButtons title={title} />
      ))}
    </div>
  );
};

export default Sidebar;
