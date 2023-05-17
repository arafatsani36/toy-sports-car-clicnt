import banner from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl flex items-center">
        <figure><img src={banner} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title text-4xl mb-4 red-violet">Best Super Car Toy Store 
            <br />
             & Online Shop</h2>
            <p className='mb-4 text-lg'>Give Your Gift Of Your Children Everyday</p>
            <div className="card-actions justify-start">
            <button className="btn orange-bg">Shop Now</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;