import React from "react";
import FrontPage from "./Home/FrontPage";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <FrontPage />
      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
