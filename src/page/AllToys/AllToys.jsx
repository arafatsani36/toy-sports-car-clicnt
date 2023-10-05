import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Home/Pagination/Pagination";
import {FaShareSquare } from "react-icons/fa";
import { Helmet} from 'react-helmet-async';

const AllToys = () => {

  // const [allToys, setAllToys] = useState([]);
  // search 
  const [query, setQuery] = useState("");

  // Pagination
  const[allProduct , setAllProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const fastPostIndex = lastPostIndex - postPerPage;
  const currentPosts = allProduct.slice(fastPostIndex, lastPostIndex);

  // const currentToy =  currentPosts.filter(toy => toy.status === 'approved');
 
  useEffect(() => {
    fetch('https://toy-sports-car-server-nine.vercel.app/toys')
    .then(res => res.json())
    .then(data => setAllProduct(data) )
  },[])

  return (
        <div className="overflow-x-auto all-toy p-10 mb-10">

            <Helmet>
              <title>ToyShop | All Toys</title>
            </Helmet>

           <h1 className="text-center font-bold mb-5 text-2xl">All Toys</h1>

           {/* search */}
           <div>
                <div className="rounded-lg px-4 py-2 flex items-end justify-end w-full">
                  <input

                    type="text"
                    placeholder="Search Toy..."
                    className=" h-10 border rounded-md px-3  focus:outline-none focus:ring"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>

          <div className="grid p-10 mb-10 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {
             currentPosts.filter(user => user.toyname.toLowerCase().includes(query)).map(toy => 
                <div data-aos="zoom-in" key={toy._id} className="card w-96 bg-base-100 shadow-xl">
                 <figure><img className="h-32 mt-5" src={toy.picture} alt="" /></figure>
                  <div className="card-body">
                   <h2 className="card-title mx-auto text-2xl font-bold">{toy.toyname}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 justify-between">
                    <p className="text-lg">Price: ${toy.price}</p>
                     <p className="text-lg">rating: {toy.rating}</p>
                  </div>
                      <p className="text-lg">Status: {toy.status}</p>
                      <Link to={`/alltoys/${toy._id}`}><p className="mt-5 shop-categoty-btn">View Details <FaShareSquare className="ml-2"></FaShareSquare></p></Link>
                  </div>
                  </div>
                )
                }
          </div>
          <Pagination totalPosts={allProduct.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
        </div>
    );
};

export default AllToys;