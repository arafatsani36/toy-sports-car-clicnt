import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToy from "./MyToy";
import Swal from "sweetalert2";

const MyToys = () => {
    const {user} = useContext(AuthContext);

    const [toys, setToys] = useState([]);

    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
    },[url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
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


                fetch(`http://localhost:5000/toys/${id}`, {
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

                          const remaining = toys.filter(toy => toy._id !== id);
                          setToys(remaining);
                          
                    }
                } 
                )
          )}
          })
    }

    return (
        <div className="overflow-x-auto p-10 mb-10">
        <table className="table table-compact w-full">
            <thead>
            <tr>
                <th>Seller Info</th> 
                <th>Toy Name</th> 
                <th>Sub-category</th> 
                <th>Price</th> 
                <th>Available Quantity</th> 
                <th>Detail description</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead> 
            <tbody>

                {
                    toys.map(toy => <MyToy key={toy._id} toy={toy} handleDelete={handleDelete}></MyToy>)
                }


            
            
            </tbody> 
        </table>
        </div>
    );
};

export default MyToys;