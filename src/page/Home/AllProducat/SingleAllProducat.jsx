import { FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AiOutlineHeart } from 'react-icons/ai';

const SingleAllProducat = ({a}) => {
    const {_id,picture, name, price, rating,status} = a;
    return (
        <div className="mx-auto p-10">
           <div className="shop-categoty mx-auto">
            <img className="mx-auto" src={picture} alt="" />
            <p className="bookmark badge badge-outline"><AiOutlineHeart></AiOutlineHeart></p> 
            <h2 className=" text-xl font-bold mb-4 red-violet text-base">{name}</h2>
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

export default SingleAllProducat;