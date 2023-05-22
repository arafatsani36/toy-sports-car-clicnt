import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
    const singletoydetails = useLoaderData();
    const {picture, toyname, sellerName, email, price, rating, quantity, description} = singletoydetails;
    console.log(singletoydetails)

    return (
        <div className=" mx-auto">
           <div className="flex items-center bg-base-100 shadow-xl mx-auto gap-6 p-20">
            <img className="w-60" src={picture} alt="" />
                <div>
                    <h2 className=" text-xl font-bold mb-4 red-violet">{singletoydetails.category}</h2>
                    <p><span className=" text-lg mr-2">Seller Name :</span> {sellerName}</p>
                    <p><span className=" text-lg  mr-2">Seller Email :</span> {email}</p>
                    <div className="flex mt-2">
                        <p className="mr-8 text-lg ">Price: {price}</p>
                        <p className=" text-lg ">Rating: {rating}</p>
                    </div>
                    <p className="mt-2"><span className=" text-lg   mr-2">Available Quantity :</span> {quantity}</p>
                    <p className="mt-2"><span className=" text-lg  mr-2">Detail Description :</span> {description}</p>
                    
                   
                </div>
           </div>
        </div>
    );
};

export default SingleToyDetails;