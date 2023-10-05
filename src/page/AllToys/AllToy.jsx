import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AllToy = () => {

    const singleToy = useLoaderData();
    let {_id} = useParams();
  
    const[toys, setToys] = useState({});
  
    useEffect(() => {
      if(singleToy){
        const toysData = singleToy.find(td => td._id === _id);
        setToys(toysData);
      }
    })
    return (
        <div className="all-toy">
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 items-center justify-center">
            <div className="ml-5" data-aos="fade-right">
                <img className=" w-80 my-5 ml-4" src={toys.picture} alt="" />
            </div>
            <div data-aos="fade-left">
                <h1 className="text-2xl font-bold mb-2">Toy Name: <span className=" text-pink-600">{toys.toyname}</span></h1>
                <h4 className="text-lg font-bold">Seller Name: <span className=" text-pink-600">{toys.sellerName}</span> </h4>
                <h4 className="text-lg font-bold">Seller Email: <span className=" text-pink-600">{toys.email}</span></h4>
                <p className="text-lg font-bold">Category: <span className=" text-pink-600">{toys.category}</span></p>
                <p className="text-lg font-bold">Quantity: <span className=" text-pink-600">{toys.quantity}</span></p>
                <p className="text-lg font-bold">price: <span className=" text-pink-600">${toys.price}</span></p>
                <p className="text-lg font-bold">Rating: <span className=" text-pink-600">{toys.rating}</span> </p>
                <h3 className="text-lg font-bold">status: <span className=" text-pink-600">{toys.status}</span></h3>
                <p className=" text-lg font-bold w-90">Description: <span className=" text-slate-700 text-base">{toys.description}</span></p>
            </div>
        </div>
       
        </div>
    );
};

export default AllToy;