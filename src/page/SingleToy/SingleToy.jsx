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
        <div>
            <div className="card card-side bg-base-100 shadow-xl mx-auto ">
            <figure><img src={toys.picture} alt="Movie"/></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title">Name: {toys.name}</h2>
                <div className="flex">
                    <div className="mr-20">
                        <p>Price: {toys.price}</p>
                    </div>
                    <div>
                    <p>Rating: {toys.rating}</p>
                    </div>
                </div>
                <p>Seller Name: {toys.seller_name}</p>
                <p>Seller Email: {toys.seller_email}</p>
                <p>Available Quantity: {toys.available_quantity}</p>
                <p>Detail Description: {toys.detail_description}</p>

                
                <div className="card-actions justify-start">
                <button className="btn btn-primary">Bye Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleToy;