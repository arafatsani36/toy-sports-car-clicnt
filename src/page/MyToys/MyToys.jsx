import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToy from "./MyToy";

const MyToys = () => {
    const {user} = useContext(AuthContext);

    const [toys, setToys] = useState([]);

    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
    },[])

    return (
        <div className="overflow-x-auto">
        <table className="table table-compact w-full">
            <thead>
            <tr>
                <th></th> 
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
                    toys.map(toy => <MyToy key={toy._id} toy={toy}></MyToy>)
                }


            
            
            </tbody> 
        </table>
        </div>
    );
};

export default MyToys;