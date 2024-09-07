import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ButtonsList from "./ButtonsList";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  console.log(isMenuOpen);
  return (
    <div className="grid grid-flow-col ">
     <div className="col-span-1 "><Sidebar/></div>
      <div className="col-span-11 pl-5 ">
        {/* <ButtonsList /> */}
        <div className="">
          <Outlet/>
            {/* <Videos /> */}
        </div>
      </div>
    </div>
  );
};

// const sidebarIcons = []

export default Body;
