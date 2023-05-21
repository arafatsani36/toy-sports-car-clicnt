import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

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
                <th>Favorite Color</th>
            </tr>
            </thead> 
            <tbody>
            <tr>
                <th>1</th> 
                <td>Cy Ganderton</td> 
                <td>Quality Control Specialist</td> 
                <td>Littel, Schaden and Vandervort</td> 
                <td>Canada</td> 
                <td>12/16/2020</td> 
                <td>Blue</td>
            </tr>
            
            </tbody> 
        </table>
        </div>
    );
};

export default MyToys;