import { AiOutlineLogin } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../../../Component/Responsive.css'
import '../../../Component/Style.css'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";


const Navber = () => {
    const{user,  logOut, isDarkTheme, setIsDarkTheme } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => {
          console.log(error)
        })
      }
    const item = <>
            <li  className='text-lg nav-item'><Link to='/'>Home</Link></li>
            <li  className='text-lg nav-item'><Link to='/alltoys'>All Toys</Link></li>
            <li  className='text-lg nav-item'><Link to='/addtoy'>Add Toys</Link></li>
            <li  className='text-lg nav-item'><Link to='/mytoy'>My Toys</Link></li> 
    </>



{/* theme change  */}

const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);




    return (
        <div className="navbar bg-base-100 header">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {item}
            </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl">Toy <span className="title-span">Stop</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {item}
            </ul>
        </div>
        <div className="navbar-end ">
        
        {/* theme change start */}
            
        <button className="btn btn-square btn-ghost">
              <label className="swap swap-rotate w-12 h-12">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={theme === "dark" ? false : true}
                />
                {theme === "light" ? (
                  <FaSun className=" text-rose-800 text-2xl" />
                ) : (
                  <FaMoon className=" text-black text-2xl" />
                )}
              </label>
            </button>
        {/* theme change end */}

        {
           user ? <div className="dropdown dropdown-end dropdown-hover">
                <img width={45} height={45} className="rounded-full cursor-pointer" src={user?.photoURL} alt="" />
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="myprofile">My Profile</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li onClick={handleLogOut} className="all-btn">Log Out</li>
                </ul>
            </div> : (
                <Link to='/login' className=" bg-zinc-200 p-3 text-lg text-pink-700 rounded-lg ease-out duration-300 hover:bg-black hover:text-white">Login {""} <AiOutlineLogin></AiOutlineLogin></Link>
            )
        }
        </div>
        </div>


    );
};

export default Navber;