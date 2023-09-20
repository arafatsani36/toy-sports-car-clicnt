import { FaGrinHearts, FaHeadset, FaMoneyBillAlt, FaWallet } from "react-icons/fa";

const Service = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-4 px-4 service">
            <div className="service-box">
                 <FaGrinHearts className=" mx-auto items-center service-img text-pink-700 text-4xl"></FaGrinHearts>
                
                <div className="service-content">
                    <h2 className="text-center">100% Satisfaction</h2>
                    <p className=" text-center">If are you unable</p>
                </div>
            </div>
            <div className="service-box">
                <FaHeadset className=" mx-auto  text-pink-700 text-4xl"></FaHeadset>
                <div className="service-content">
                    <h2 className="text-center">Online Support</h2>
                    <p className="text-center">Any Time Support</p>
                </div>
            </div>
            <div className="service-box">
                <FaMoneyBillAlt className=" mx-auto  text-pink-700 text-4xl"></FaMoneyBillAlt>
                <div className="service-content">
                    <h2 className="text-center">Money Returns</h2>
                    <p className="text-center">Back Guarantee in 7 days</p>
                </div>
            </div>
            <div className="service-box">
                <FaWallet className=" mx-auto  text-pink-700 text-4xl"></FaWallet>
                <div className="service-content">
                    <h2 className="text-center">Member Discount</h2>
                    <p className="text-center">One Customer's first oder</p>
                </div>
            </div>
        </div>
    );
};

export default Service;