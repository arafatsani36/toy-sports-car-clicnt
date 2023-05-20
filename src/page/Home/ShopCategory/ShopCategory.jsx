import { useEffect, useState } from "react";
import ShopCategoryTab from "./ShopCategoryTab";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopCategory = () => {

     const [shops , allShops] = useState([]);
     const [activeShops, AllActiveShops] = useState("spider-man");

    useEffect(() => {
        fetch(`http://localhost:5000/category/${activeShops}`)
        .then(res => res.json())
        .then(data => allShops(data))
    }, [activeShops])
    const  handleShop = tabName => {
        AllActiveShops(tabName)
    }


    return (
        <div className="text-center">

            <Tabs>
                <TabList>
                    <Tab onClick={() => handleShop("spider-man")}>Spideman</Tab>
                    <Tab onClick={() => handleShop("iron-man")}>Iron man</Tab>
                    <Tab onClick={() => handleShop("hulk")}>Hulk</Tab>
                </TabList>
                { 
                shops.map(shop => <ShopCategoryTab key={shop._id} shop={shop}></ShopCategoryTab>) 
                }
            
            </Tabs>
            
        </div>
    );
};

export default ShopCategory;