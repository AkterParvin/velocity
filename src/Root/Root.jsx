import { Outlet } from "react-router-dom";
import Nav1 from "../Components/NavBar/Nav1";
import Nav2 from "../Components/NavBar/Nav2";

const Root = () => {
    return (
        <div className="bg-[#F7F7FA] ">
         
                <Nav1 />
                <Nav2/>
       
          
            <div className="max-w-screen-2xl mx-auto">
                <Outlet />
            </div>

        </div>
    );
};

export default Root;