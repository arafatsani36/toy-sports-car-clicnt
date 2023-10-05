import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useToy from "../../../../hooks/useToy";
import useAuth from "../../../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../../../Home/Pagination/Pagination";
import { MdOutlineEditNote } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToyManegement = () => {
    const[refetch] = useToy();
    const{user} = useAuth();

     // Pagination
     const[allMyToys , setAllMyToys] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const [postPerPage, setPostPerPage] = useState(6);
 
     const lastPostIndex = currentPage * postPerPage;
     const fastPostIndex = lastPostIndex - postPerPage;
     const currentPosts = allMyToys.slice(fastPostIndex, lastPostIndex);

       const url = `https://toy-sports-car-server-nine.vercel.app/toys?email=${user?.email}`
       useEffect(()=> {
           fetch(url)
          .then(res => res.json())
          .then(data => {
            setAllMyToys(data)

          })
      },[url])

     

    //   console.log(allMyToys)
    
    // delete toy 
    const handleDelete = (_id) => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete the toy this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your toy has been deleted.',
                'success',
                fetch(`https://toy-sports-car-server-nine.vercel.app/toys/${_id}`,{
                method : 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                         })
                         
                          Toast.fire({
                            icon: 'success',
                            title: 'Delete in successfully'
                          })

                          refetch()
                    }
                })


              )
            }
          })

    }

    return (
        <div>
             <h1 className="text-center font-bold mt-16 text-2xl">My Toy Manegement</h1>
            
            <div className="myToyManegement-cart overflow-x-auto p-5  grid  md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    currentPosts.map(item => 
                    <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-32 mt-5" src={item.picture} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto text-2xl font-bold">{item.toyname}</h2>
                        <p className="text-lg">Status: {item.status}</p>
                    </div>
                       <div className="flex edit">
                         <Link to={`updatetoy/${item._id}`}><p className=" cursor-pointer text-3xl hover:text-rose-600 hover:transition-all hover:delay-75"><MdOutlineEditNote></MdOutlineEditNote></p></Link> 
                        <p onClick={() => handleDelete(item._id)} className=" cursor-pointer text-2xl hover:text-rose-600 hover:transition-all hover:delay-75"><AiTwotoneDelete></AiTwotoneDelete></p>
                       </div>

                    </div>
                    
                
                )
                }
            </div>
           

                <Pagination totalPosts={allMyToys.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>    
             
        </div>
    );
};

export default MyToyManegement;