import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { FaShareSquare } from "react-icons/fa";
import { AiOutlineHeart } from 'react-icons/ai';
import Pagination from "../Pagination/Pagination";

const AllProducat = () => {

    const[allProduct , setAllProfuct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);
    useEffect(() => {
        fetch('https://toy-sports-car-server-nine.vercel.app/category')
        .then(res => res.json())
        .then(data => setAllProfuct(data))
    })

    const lastPostIndex = currentPage * postPerPage;
    const fastPostIndex = lastPostIndex - postPerPage;
    const currentPosts = allProduct.slice(fastPostIndex, lastPostIndex)



    return (
        <div>
            <h1 className=' text-3xl text-center my-10 font-bold'><span className='section-header'>Toy Shop</span> All Product</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                currentPosts.map(a => <div key={a._id} className="mx-auto p-10">
                <div className="shop-categoty mx-auto" data-aos="zoom-in">
                 <img className="mx-auto" src={a.picture} alt="" />
                 <p className="bookmark badge badge-outline"><AiOutlineHeart></AiOutlineHeart></p> 
                 <h2 className=" text-xl font-bold mb-4 red-violet text-base">{a.name}</h2>
                 <div className="flex">
                     <p className="mr-8 text-lg">Price: ${a.price}</p>
                     <p className=" text-lg">Rating: {a.rating}</p>
                 </div>
                           
                 <Link to={`/singleallproducat/${a._id}`}><p className="mt-5 shop-categoty-btn">View Details <FaShareSquare className="ml-2"></FaShareSquare></p></Link>
                     
                 <ToastContainer />
                     
                </div>
             </div>)
                }
                
            </div> 
            <Pagination totalPosts={allProduct.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
        </div>
    );
};

export default AllProducat;