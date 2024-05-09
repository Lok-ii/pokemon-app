import FrontPage from "../Home/FrontPage";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <FrontPage />
      <Outlet />
    </>
  );
};

export default Layout;
