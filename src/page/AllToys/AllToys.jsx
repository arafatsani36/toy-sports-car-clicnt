import { useEffect, useState } from "react";
 import AllToy from "./AllToy";

const AllToys = () => {

  const [allToys, setAllToys] = useState([]);
 
  useEffect(() => {
    fetch('https://toy-sports-car-server-nine.vercel.app/toys')
    .then(res => res.json())
    .then(data => setAllToys(data) )
  },[])

  return (
        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>Seller Info</th> 
        <th>Toy Name</th> 
        <th>Sub-category</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Details</th>
      </tr>
    </thead> 
    <tbody>
      {
        allToys.map(toy => <AllToy key={toy._id} toy={toy}></AllToy>)
      }
    </tbody>
    
    
  </table>
</div>
    );
};

export default AllToys;