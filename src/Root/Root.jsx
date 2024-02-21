import { Outlet } from "react-router-dom";

import Banner from "../Components/Header/Banner";
import Nav1 from "../Components/Header/Nav1";
import Nav2 from "../Components/Header/Nav2";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-[#F7F7FA] ">
      <Nav1 />
      <Nav2/>
      <Banner />

      <div className="max-w-screen-2xl mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Root;
