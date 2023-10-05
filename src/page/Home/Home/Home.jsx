import { useContext } from "react";
import AllProducat from "../AllProducat/AllProducat";
import Banner from "../Banner/Banner";
import ExtraBanner from "../ExtraBanner/ExtraBanner";
import Feedback from "../Feedback/Feedback";
import Gallery from "../Gallery/Gallery";
import LetestBlog from "../LetestBlog/LetestBlog";
import Review from "../Review/Review";
import Service from "../Service/Service";
import ShopCategory from "../ShopCategory/ShopCategory";
import { AuthContext } from "../../../Providers/AuthProvider";

const Home = () => {
    const { isDarkTheme, setIsDarkTheme } = useContext(AuthContext);
    return (
        <div className={`${isDarkTheme ? ' dark-theme' : 'light-theme'}`}>
            <Banner></Banner>
            <Gallery></Gallery>
            <Service></Service>
            <ShopCategory></ShopCategory>
            <ExtraBanner></ExtraBanner>
            <LetestBlog></LetestBlog>
            <AllProducat></AllProducat>
            <Review></Review>
           <Feedback></Feedback> 
           
        </div>
    );
};

export default Home;