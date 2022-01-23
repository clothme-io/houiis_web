import React from "react";
import { Link } from "react-router-dom";
import { PagesRoutes } from "../../route/RouteOptions";

export const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col items-start w-72 h-screen pl-16 pt-10 text-white font-medium">
        <div className="flex text-xl">
          <h2>houiis</h2>
        </div>
        {/* <div className="flex flex-row pt-12 text-base">
          <Link to={PagesRoutes.dashboard}>Dashboard</Link>
        </div> */}
        {/* <div className="flex flex-row pt-10 text-base uppercase">
          <Link to={PagesRoutes.courses}>My Courses</Link>
        </div> */}
        <div className="flex flex-row pt-10 text-base uppercase">
          <Link to={PagesRoutes.showAllBadges}>Properties</Link>
        </div>
        {/* <div className="flex flex-row pt-10 text-base uppercase">
          <Link to={PagesRoutes.createLindedInPage}>LinkedIn Page</Link>
        </div> */}
        {/* <div className="flex flex-row pt-10 text-base">
          <Link to={PagesRoutes.account}>Account</Link>
        </div> */}
      </div>
    </>
  );
};
