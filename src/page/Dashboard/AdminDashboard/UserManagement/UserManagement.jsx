import { useQuery } from "@tanstack/react-query";
import { AiFillDelete, AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";

const UserManagement = () => {

    // tanstack use data fetching 
    const {data: users =[], refetch} = useQuery(['users'], async() => {
        const res =await fetch('http://localhost:5000/users')
        return res.json()
    })

    // make admin 
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
    const handleDelete =(user) => {

    }


    return (
        <div>
            <h1 className="text-center font-bold mb-5 text-2xl">User Management</h1>

            <table className="table"> 
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
            users.map((user, index) => <tr key={user._id}>
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
                <button onClick={() => handleDelete(user)} className="all-btn"><AiFillDelete className=" text-lg"></AiFillDelete></button>
                </td>
            </tr>)
        }


        
        
        </tbody>
    
   
    
  </table>
        </div>
    );
};

export default UserManagement;