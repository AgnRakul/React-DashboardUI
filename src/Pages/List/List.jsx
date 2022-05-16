import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
      </div>
    </div>
  );
};

export default List;
