import { FaCheckCircle } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useToy from "../../../../hooks/useToy";
import {MdOutlineRunningWithErrors } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import Pagination from "../../../Home/Pagination/Pagination";
import { AiFillDelete } from "react-icons/ai";

const UserToysAnalysis = () => {
  const[toys,  refetch] = useToy();

  // pagination state 
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const lastPostIndex = currentPage * postPerPage;
  const fastPostIndex = lastPostIndex - postPerPage;
  const currentPosts = toys.slice(fastPostIndex, lastPostIndex);

  // pending toy filter and length 
  const pending =  toys.filter(toy => toy.status === 'pending');
  const totalPending =  pending.length;

  // approved toy filter and length 
  const approved =  toys.filter(toy => toy.status === 'approved');
  const totalApproved =  approved.length;

  // denied toy filter and length 
  const denied =  toys.filter(toy => toy.status === 'denied');
  const totalDenied =  denied.length;

  // axios use 
  const [axiosSecure] = useAxiosSecure();


  // handleApprove function 
  const handleApprove = (item) =>{
    axiosSecure.patch(`/toys/approved/${item._id}`).then((res) => {
      if(res.data.modifiedCount){
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `${item.toyname} is Approved!`,
          showConfirmButton: false,
          timer: 1500
        })

        refetch()
       
      }
    })
  }


  // handleDenied function 
  const handleDenied = (item) => {
    axiosSecure.patch(`/toys/denied/${item._id}`).then((res) => {
      if(res.data.modifiedCount){
       
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `${item.toyname} is Denie!`,
          showConfirmButton: false,
          timer: 1500
        })

        refetch()
       
      }
    })
  }


  // handle delete 

  const handleDelete =(_id) => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this Toy!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'Your Service has been deleted.',
            'success',

             fetch(`https://toy-sports-car-server-nine.vercel.app/toys/${_id}`, {
             method: 'DELETE'
             })
            .then(res => res.json())
            .then(data =>{
                 console.log(data);
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

                    //   const remaining = toys.filter(toy => toy._id !== id);
                     //   setToys(remaining);
                     refetch()
                 }
             } 
             )
      )}
  })



}
    return (
        <div className="mt-10">
            <h1 className="text-center font-bold mb-5 mt-16 text-2xl">User Toys Analysis</h1>

           

            <div className="">

              <table className="table w-full table-auto">
                {/* head */}
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>Toy Image</th>
                    <th>Seller Name</th>
                    <th>Status</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    currentPosts.map((item, idx) => (
                      <tr  key={item._id}>
                      <th>
                      {idx + 1}
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.picture} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {item.sellerName}
                      </td>
                      <td className="flex gap-5">
                      <div
                        className={`badge ${
                          (item.status === 'pending' && 'badge-secondary') ||
                          (item.status === 'approved' && 'badge-success') ||
                          (item.status === 'denied' && ' badge-warning')
                          
                        }`}>
                        {item.status}
                      </div>
                      <div>
                        <button onClick={() => handleApprove(item)}  disabled={(item.status === 'approved' && true) || (item.status === 'denied' && true)}  className="btn btn-ghost btn-xs"> <FaCheckCircle></FaCheckCircle> Approve</button>
                          <button
                          onClick={() => handleDenied(item)}
                          disabled={(item.status === 'approved' && true) || (item.status === 'denied' && true)}
                          className="btn btn-error btn-xs">
                          <MdOutlineRunningWithErrors></MdOutlineRunningWithErrors> Denied
                          </button>
                      </div>
                      </td>
                      <td>
                      <button onClick={() => handleDelete(item._id)} className="all-btn"><AiFillDelete className=" text-lg"></AiFillDelete></button>
                      </td>
                    </tr>
                    ))
                  
                  }
  
                </tbody>
              </table>
              <Pagination totalPosts={toys.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
              


              <div className="lg:flex md:flex gap-10 mt-10 lg:ml-8 md:ml-8">
                  <h1 className="text-2xl font-semibold">Total Pending Toy : <span className=" text-rose-700">{totalPending}</span> </h1>
                  <h1 className="text-2xl font-semibold">Total Approved Toy : <span className=" text-rose-700">{totalApproved}</span></h1>
                  <h1 className="text-2xl font-semibold">Total Denied Toy : <span className=" text-rose-700">{totalDenied}</span></h1>
              </div>
            </div>

            
        </div>
    );
};

export default UserToysAnalysis;