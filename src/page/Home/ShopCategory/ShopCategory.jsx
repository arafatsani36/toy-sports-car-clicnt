import { useEffect, useState } from "react";
import ShopCategoryTab from "./ShopCategoryTab";
import { Tab, Tabs, TabList} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopCategory = () => {

     const [shops , allShops] = useState([]);
     const [activeShops, AllActiveShops] = useState("dc");

    useEffect(() => {
        fetch(`http://localhost:5000/category/${activeShops}`)
        .then(res => res.json())
        .then(data => allShops(data))
    }, [activeShops])
    const  handleShop = tabName => {
        AllActiveShops(tabName)
    }


    return (
        <div className="text-center mt-10">
            <h1 className=' text-3xl text-center my-10 font-bold'><span className='section-header'>Toy Shop</span> Category</h1>

            <Tabs>
                <TabList>
                    <Tab onClick={() => handleShop("dc")}>DC</Tab>
                    <Tab onClick={() => handleShop("marvel")}>Marvel</Tab>
                    <Tab onClick={() => handleShop("avengers")}>Avengers</Tab>
                </TabList>
                
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        { 
                        shops.map(shop => <ShopCategoryTab key={shop._id} shop={shop}></ShopCategoryTab>) 
                        }
                    </div>

               
                
            
            </Tabs>
            
        </div>
    );
};

export default ShopCategory;