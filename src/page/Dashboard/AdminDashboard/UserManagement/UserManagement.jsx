import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AiFillDelete} from "react-icons/ai";
import Swal from "sweetalert2";
import Pagination from "../../../Home/Pagination/Pagination";
import { useEffect } from "react";
import useUsers from "../../../../hooks/useUsers";

const UserManagement = () => {

    const [refetch] = useUsers();
    // Pagination
    const[allProduct , setAllProfuct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);

    const lastPostIndex = currentPage * postPerPage;
    const fastPostIndex = lastPostIndex - postPerPage;
    const currentPosts = allProduct.slice(fastPostIndex, lastPostIndex);


    // tanstack use data fetching 
    // const {data: users =[], refetch} = useQuery(['users'], async() => {
    //     const res =await fetch('https://toy-sports-car-server-nine.vercel.app/users')
    //     return res.json()
    // })


    useEffect(() => {
        fetch('https://toy-sports-car-server-nine.vercel.app/users')
        .then(res => res.json())
        .then(data => setAllProfuct(data))
    })

    // make admin 
    const handleMakeAdmin = (user) => {
        fetch(`https://toy-sports-car-server-nine.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: `${user.name} is an admin now`,
                showConfirmButton: false,
                timer: 1500
              })
           }
        })
    }

    // delete user 
    const handleDelete =(_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this user!",
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

                 fetch(`http://localhost:5000/users/${_id}`, {
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
        <div className="mt-10 overflow-x-auto">
            <h1 className="text-center font-bold mb-5 mt-8 text-2xl">User Management</h1>

            <div className="overflow-x-auto px-10  text-center">
            <table className="table w-full whitespace-nowrap"> 
            {/* head */}
            <thead>
            <tr>
                <th>#</th>
                <th>Use Name</th>
                <th>Use Email</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
            currentPosts.map((user, index) => <tr key={user._id}>
                <th>
                    {index + 1}
                </th>
                <td>
                   {user.name}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    {
                        user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="">User</button>
                    }
                </td>
                <td>
                <button onClick={() => handleDelete(user._id)} className="all-btn"><AiFillDelete className=" text-lg"></AiFillDelete></button>
                </td>
            </tr>)
            }

            </tbody>
            </table>
            </div>

    <Pagination totalPosts={allProduct.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
        </div>
    );
};

export default UserManagement;