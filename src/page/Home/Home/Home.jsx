import Banner from "../Banner/Banner";
import BestSell from "../BestSell/BestSell";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <BestSell></BestSell>
            <Review></Review>
           
        </div>
    );
};

export default Home;