import { BsFillPeopleFill, BsFillPersonFill, BsGraphUpArrow, BsHouseDoorFill } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    // admin 
    // const isAdmin = true;
    const[isAdmin] = useAdmin();


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <h1 className=" text-center text-2xl font-semibold">Toy <span className="title-span">Shop</span></h1>
                <div className="divider"></div> 
                {
                    isAdmin ? <>
                        <li className="font-bold text-base"><NavLink to="/dashboard/admin"><BsFillPersonFill className="title-span"></BsFillPersonFill>Admin Home</NavLink></li>
                        <li className="font-bold text-base"><NavLink to="/dashboard/usermanagement"><BsFillPeopleFill className="title-span"></BsFillPeopleFill >User Management</NavLink></li>
                        <li className="font-bold text-base"><NavLink to="/dashboard/usertoysanalysis"><BsGraphUpArrow className="title-span"></BsGraphUpArrow>User Toys Analysis</NavLink></li>
                        <li className="font-bold text-base"><NavLink to="/"><BsHouseDoorFill className="title-span"></BsHouseDoorFill>Home</NavLink></li>
                    
                    </> : <>
                        
                        <li className="font-bold text-base"><NavLink to="/dashboard/admin"><BsFillPersonFill className="title-span"></BsFillPersonFill>User Home</NavLink></li>
                        <li className="font-bold text-base"><NavLink to="/dashboard/usermanagement"><BsFillPeopleFill className="title-span"></BsFillPeopleFill > Management Toy</NavLink></li>
                        <li className="font-bold text-base"><NavLink to="/dashboard/usertoysanalysis"><BsGraphUpArrow className="title-span"></BsGraphUpArrow>My All Toys Analysis</NavLink></li>
                        <li className="font-bold text-base"><NavLink to="/"><BsHouseDoorFill className="title-span"></BsHouseDoorFill>Home</NavLink></li>
                    </>
                }
                    
                </ul>
            
        </div>
         </div>
    );
};

export default Dashboard;