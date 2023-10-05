import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const SingleToy = () => {
   
    const singleToys = useLoaderData();
    let{_id} = useParams()
    // console.log(_id)

    const[toys, setToys] = useState({});
    useEffect(() => {
        if(singleToys){
            const toysData = singleToys.find(td => td._id == _id);
            setToys(toysData)
        }
    })



    // console.log(c)
    return (
        <div className="my-toy">
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 items-center justify-center">
          <div className="ml-5" data-aos="fade-right">
              <img className=" w-80 my-5 ml-4" src={toys.picture} alt="" />
          </div>
          <div data-aos="fade-left">
              <h1 className="text-2xl font-bold mb-2">Toy Name: <span className=" text-pink-600">{toys.name}</span></h1>
              <h4 className="text-lg font-bold">Seller Name: <span className=" text-pink-600">{toys.seller_name}</span> </h4>
              <h4 className="text-lg font-bold">Seller Email: <span className=" text-pink-600">{toys.seller_email}</span></h4>
              <p className="text-lg font-bold">price: <span className=" text-pink-600">${toys.price}</span></p>
              <p className="text-lg font-bold">Rating: <span className=" text-pink-600">{toys.rating}</span> </p>
              <h3 className="text-lg font-bold">Available Quantity: <span className=" text-pink-600">{toys.available_quantity}</span></h3>
              <p className=" text-lg font-bold w-90">Description: <span className=" text-slate-700 text-base">{toys.detail_description}</span></p>
          </div>
        </div>
         
      </div>
    );
};

export default SingleToy;