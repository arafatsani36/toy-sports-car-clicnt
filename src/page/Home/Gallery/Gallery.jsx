import fast from "../../../assets/g1.jpg";
import secend from "../../../assets/g2.jpg";
import third from "../../../assets/g3.jpg";
import fourd from "../../../assets/g4.jpg";
import five from "../../../assets/g5.jpg";
import six from "../../../assets/g6.jpg";
import seven from "../../../assets/g7.jpg";
import eight from "../../../assets/g8.jpg"

import Marquee from "react-fast-marquee";


const Gallery = () => {
    return (
      <div className="mt-10">
        <Marquee>
            <img className="ml-4" src={ fast} alt="" />
            <img className="ml-4" src={secend} alt="" />
            <img className="ml-4" src={third} alt="" />
            <img className="ml-4" src={fourd} alt="" />
            <img className="ml-4" src={five} alt="" />
            <img className="ml-4" src={six} alt="" />
            <img className="ml-4" src={seven} alt="" />
            <img src={ eight} alt="" />
      </Marquee>
      </div>
    );
};

export default Gallery;