import Banner from "../Banner/Banner";
import BestSell from "../BestSell/BestSell";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <BestSell></BestSell>
        </div>
    );
};

export default Home;