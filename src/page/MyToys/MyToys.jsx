
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { FaShareSquare } from "react-icons/fa";
import Pagination from "../Home/Pagination/Pagination";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet} from 'react-helmet-async';

const MyToys = () => {
    const {user} = useAuth();

    // search 
    const [query, setQuery] = useState("");


     // Pagination
     const[allProduct , setAllProfuct] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const [postPerPage, setPostPerPage] = useState(6);
 
     const lastPostIndex = currentPage * postPerPage;
     const fastPostIndex = lastPostIndex - postPerPage;
     const currentPosts = allProduct.slice(fastPostIndex, lastPostIndex);

    // const currentToy =  currentPosts.filter(toy => toy.status === 'approved');


     // pending toy filter and length 
  const pending =  allProduct.filter(toy => toy.status === 'pending');
  const totalPending =  pending.length;

  // approved toy filter and length 
  const approved =  allProduct.filter(toy => toy.status === 'approved');
  const totalApproved =  approved.length;

  // denied toy filter and length 
  const denied =  allProduct.filter(toy => toy.status === 'denied');
  const totalDenied =  denied.length;




      const url = `https://toy-sports-car-server-nine.vercel.app/toys?email=${user?.email}`
       useEffect(()=> {
           fetch(url)
          .then(res => res.json())
          .then(data => {
            setAllProfuct(data)

          })
      },[url])

console.log(allProduct)
    
    
    return (
        <div className="overflow-x-auto p-10 mb-10 my-toy">

            <Helmet>
              <title>ToyShop | My All Toy</title>
            </Helmet>

            <h1 className="text-center font-bold mb-5 text-2xl">My All Toy</h1>

            <div className="lg:flex justify-between mx-3 ">
            
            {/* search */}
              <div>
                <div className="flex items-end justify-end w-full  rounded-lg px-4 py-2  bg-slate-100">
                  <input

                    type="text"
                    placeholder="Search Toy..."
                    className="w-full h-10 border rounded-md px-3 lg:pr-96 focus:outline-none focus:ring"
                     onChange={(e) => setQuery(e.target.value)}
                    
                  />
                </div>
              </div>

              <div className="flex gap-5 mt-5">
                <h2 className="text-2xl md:text-sm lg:text-sm">Pending: <span className=" text-rose-700">{totalPending}</span></h2>
                <h2 className="text-2xl md:text-sm lg:text-sm">Approved: <span className=" text-rose-700">{totalApproved}</span></h2>
                <h2 className="text-2xl md:text-sm lg:text-sm">Denied: <span className=" text-rose-700">{totalDenied}</span></h2>
              </div>
             
            </div>

            <div className="overflow-x-auto p-10 mb-10 grid  md:grid-cols-3 lg:grid-cols-3 gap-5">
            
                {
                    currentPosts.filter(user => user.toyname.toLowerCase().includes(query)).map(toy => 
                        <div data-aos="zoom-in" key={toy._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="h-32 mt-5" src={toy.picture} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto text-2xl font-bold">{toy.toyname}</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 justify-between">
                                <p className="text-lg">Price: ${toy.price}</p>
                                <p className="text-lg">rating: {toy.rating}</p>
                            </div>
                            <p className="text-lg">Status: {toy.status}</p>
                            <Link to={`/mytoy/${toy._id}`}><p className="mt-5 shop-categoty-btn">View Details <FaShareSquare className="ml-2"></FaShareSquare></p></Link>
                        </div>
                        </div>
                        )
                }
           
               
            </div>
        
            <Pagination totalPosts={allProduct.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
        </div>
    );
};

export default MyToys; 