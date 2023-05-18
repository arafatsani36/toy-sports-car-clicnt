import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const ShopCategory = () => {

     const [shops , allShops] = useState([]);
     const [activeShops, AllActiveShops] = useState("spider-man");

    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => allShops(data))
    }, [activeShops])

    //  const result = shops?.filter (shop => shop.status == activeShops);
    //  allShops(result)
    // useEffect(() => {
    //     fetch('result')

    // },[])
   
    const  handleShop = tabName => {
        AllActiveShops(tabName)
    }


    return (
        <div className="text-center">
            <Tabs>
            <TabList>
            <Tab onClick={() => handleShop("spider-man")}>Spider Man</Tab> 
            <Tab onClick={() => handleShop("iron-man")}>Iron Man</Tab>
            <Tab onClick={() => handleShop("hulk")}>Hulk</Tab>
            </TabList>

            <TabPanel>
             <h2>{activeShops.name}</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 3</h2>
            </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;