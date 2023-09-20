import { Swiper, SwiperSlide } from 'swiper/react';
import bannerOne from  '../../../assets/banner/banner1.png';
import bannerTwo from  '../../../assets/banner/banner2.png';
import bannerThree from  '../../../assets/banner/banner3.png';
import bannerFour from  '../../../assets/banner/banner4.png';
import bannerFive from  '../../../assets/banner/banner5.png';

// Import Swiper styles
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (     
      <div className='banner md:px-10'>
           
                <Swiper
                    
                     autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                     }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
          <div className='flex justify-between items-center'>
              <div>
                <img src={bannerOne} alt="" />
              </div>
              <div>
                <p className='mb-4'>Exclusive Offer On Toys</p>
                <h1 className='font-bold md:text-2xl lg:text-4xl md:w-80 mb-6'>Kids Playing With Block Toy</h1>
                <button className='feedback-btn'>Shop Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className='flex justify-between items-center'>
              <div>
               <img src={bannerTwo} alt="" />
              </div>
              <div>
              <div>
                <p className='md:mb-4'>Exclusive Offer On Toys</p>
                <h1 className='font-bold md:text-2xl lg:text-4xl md:w-80 mb-6'>Kids Playing With Block Toy</h1>
                <button className='feedback-btn'>Shop Now</button>
              </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-between items-center'>
                <div>
                  <img src={bannerThree} alt="" />
                </div>
                <div>
                  <p className='mb-4'>Exclusive Offer On Toys</p>
                  <h1 className='font-bold md:text-2xl lg:text-4xl md:w-80 mb-6'>Kids Playing With Block Toy</h1>
                  <button className='feedback-btn'>Shop Now</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-between items-center'>
                <div>
                  <img src={bannerFour} alt="" />
                </div>
                <div>
                  <p className='mb-4'>Exclusive Offer On Toys</p>
                  <h1 className='font-bold md:text-2xl lg:text-4xl md:w-80 mb-6'>Kids Playing With Block Toy</h1>
                  <button className='feedback-btn'>Shop Now</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-between items-center'>
                <div>
                  <img src={bannerFive} alt="" />
                </div>
                <div>
                  <p className='mb-4'>Exclusive Offer On Toys</p>
                  <h1 className='font-bold md:text-2xl lg:text-4xl md:w-80 mb-6'>Kids Playing With Block Toy</h1>
                  <button className='feedback-btn'>Shop Now</button>
              </div>
            </div>
        </SwiperSlide>    
                    
                   
                   
                    </Swiper>
           
        </div>
      
          
            


    );
};

export default Banner;