import banner from '../../../assets/banner.avif'
import './Banner.css'
const Banner = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl flex items-center">
        <figure><img className='banner p-10' src={banner} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title text-4xl mb-4 red-violet">Best Toy Store & Online Shop</h2>
            <p className='mb-4 text-lg'>Give Your Gift Of Your Children Everyday</p>
            <div className="card-actions justify-start">
            <button className="btn orange-bg">Shop Now</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;