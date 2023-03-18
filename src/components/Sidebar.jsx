import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="hide-sidebar">
      <div className="hide-icons">
        <FaBars onClick={handleToggleSidebar}>
          {showSidebar ? "Hide Sidebar" : "Show Sidebar"}
        </FaBars>
      </div>
      {showSidebar && (
        <div className="sidebar">
          <Navbar />
          <Search />
          <Chats />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
