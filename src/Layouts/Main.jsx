import { Outlet } from "react-router-dom";
import Navber from "../page/Shared/Navber/Navber";
import Footer from "../page/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;