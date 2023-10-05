import { Outlet, useLocation } from "react-router-dom";
import Navber from "../page/Shared/Navber/Navber";
import Footer from "../page/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes('myprofile')
    return (
        <div>
             {noNavbarFooter || <Navber></Navber>}

            <div className=" min-h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div>

            {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;