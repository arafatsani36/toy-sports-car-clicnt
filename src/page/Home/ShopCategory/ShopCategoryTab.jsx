import { Link } from "react-router-dom";
import { TabPanel } from "react-tabs";


const ShopCategoryTab = ({shop}) => {
    const {picture, name, price, rating } = shop;
    return (
        <div className=" w-1/2 mx-auto">
           <div className="flex items-center mb-4 bg-base-100 shadow-xl mx-auto gap-6">
            <img src={picture} alt="" />
                <div>
                    <h2 className=" text-xl font-bold mb-4 red-violet">{name}</h2>
                    <div className="flex">
                        <p className="mr-8 text-lg">Price: {price}</p>
                        <p className=" text-lg">Rating: {rating}</p>
                    </div>
                    <Link><button className="btn btn-outline btn-error mt-5">View Details button</button></Link>
                   
                </div>
           </div>
        </div>
    );
};

export default ShopCategoryTab;