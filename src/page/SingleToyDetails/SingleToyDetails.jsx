
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
    const singletoydetails = useLoaderData();
    const {picture, toyname, sellerName, email, price, rating, quantity, description, category} = singletoydetails;
    console.log(singletoydetails)

    return (
        <div className="my-toy">
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 items-center justify-center">
            <div className="ml-5" data-aos="fade-right">
                <img className=" w-80 my-5 ml-4" src={picture} alt="" />
            </div>
            <div data-aos="fade-left">
                <h1 className="text-2xl font-bold mb-2">Toy Name: <span className=" text-pink-600">{toyname}</span></h1>
                <h4 className="text-lg font-bold">Seller Name: <span className=" text-pink-600">{sellerName}</span> </h4>
                <h4 className="text-lg font-bold">Seller Email: <span className=" text-pink-600">{email}</span></h4>
                <p className="text-lg font-bold">Category: <span className=" text-pink-600">{category}</span></p>
                <p className="text-lg font-bold">Quantity: <span className=" text-pink-600">{quantity}</span></p>
                <p className="text-lg font-bold">price: <span className=" text-pink-600">${price}</span></p>
                <p className="text-lg font-bold">Rating: <span className=" text-pink-600">{rating}</span> </p>               
                <p className=" text-lg font-bold w-90">Description: <span className=" text-slate-700 text-base">{description}</span></p>
            </div>
        </div>
        </div>
    );
};

export default SingleToyDetails;