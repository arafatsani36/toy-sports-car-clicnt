import {FaShareSquare} from "react-icons/fa";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShopCategoryTab = ({shop}) => {
    const {_id,picture, name, price, rating,status} = shop;
    const {user} = useContext(AuthContext);
    return (
        <div className="mx-auto p-10">
           <div className="shop-categoty mx-auto" data-aos="zoom-in">
            <img className="mx-auto mb-4" src={picture} alt="" />
            <p className="status badge badge-outline">{status}</p> 
            <h2 className=" text-xl font-bold mb-4 red-violet">{name}</h2>
            <div className="flex">
                <p className="mr-8 text-lg">Price: ${price}</p>
                <p className=" text-lg">Rating: {rating}</p>
            </div>
                      
            <Link to={`/singletoy/${_id}`}><p className="mt-5 shop-categoty-btn">View Details <FaShareSquare className="ml-2"></FaShareSquare></p></Link>
                
            <ToastContainer />
                
           </div>
        </div>
    );
};

export default ShopCategoryTab;