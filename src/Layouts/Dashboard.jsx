import { BsFillPeopleFill, BsFillPersonFill, BsGraphUpArrow, BsHouseDoorFill } from "react-icons/bs";
import {NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { Helmet} from 'react-helmet-async';


const Dashboard = () => {

    // admin 
    //  const isAdmin = true;
     const[isAdmin] = useAdmin();



    return (
        <div className="drawer drawer-mobile">
            <Helmet>
              <title>ToyShop | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full">
                {/* Page content here */}
                
                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden cursor-pointer flex items-center gap-3 font-playfair border  px-5 py-2 absolute left-2 md:left-5 top-5"><AiOutlineAlignLeft /> <span>Open Menu</span></label>
                <Outlet></Outlet>
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
                        
                        <li className="font-bold text-base"><NavLink to="/"><BsFillPersonFill className="title-span"></BsFillPersonFill>Seller Home</NavLink></li>
                        <li className="font-bold text-base"><NavLink to="/dashboard/mytoymanegement"><BsFillPeopleFill className="title-span"></BsFillPeopleFill > My All Toys Management</NavLink></li>
                        
                        <li className="font-bold text-base"><NavLink to="/"><BsHouseDoorFill className="title-span"></BsHouseDoorFill>Home</NavLink></li>
                    </>
                }
                    
                </ul>
            
        </div>
         </div>
    );
};

export default Dashboard;