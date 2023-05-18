import fast from "../../../assets/third.jpg";
import secend from "../../../assets/secend.jpg";
import fourd from "../../../assets/fourd.jpg";

const Gallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 mb-4">
        <img src={ fast} alt="" />
        <img src={secend} alt="" />
        <img src={ fast} alt="" />
        <img src={fourd} alt="" />
      </div>
    );
};

export default Gallery;