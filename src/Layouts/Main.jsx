import { Outlet } from "react-router-dom";
import Navber from "../page/Shared/Navber/Navber";
import Footer from "../page/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
             <Navber></Navber> 

            <div className=" min-h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div>
             <Footer></Footer> 
        </div>
    );
};

export default Main;