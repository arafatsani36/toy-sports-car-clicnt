import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { BsFillChatRightQuoteFill} from 'react-icons/bs';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Review = () => {

  const[review, setReview] = useState([]);

  useEffect(() =>{
    fetch('review.json')
    .then(res => res.json())
    .then(data => setReview(data))
  })


  return (
    <div className='mx-10 mt-10'>
     <h1 className=' text-3xl text-center font-bold'><span className='section-header'>Toy Shop</span> Review</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        {
          review.map((reviews , index) => <SwiperSlide key={`${review._id}_${index}`} reviews={reviews}>
            <div className=''>
                <div className='flex items-center mx-auto mt-10 mb-5' data-aos="zoom-in">
                      <img className=' rounded-full w-28 mx-auto review-img' src={reviews.authorImage} alt="" />
                </div>
                  
                  <div className='' data-aos="zoom-in-up">
                      <h2><BsFillChatRightQuoteFill></BsFillChatRightQuoteFill> {reviews.description}</h2>
                      
                      <div className='flex justify-between  mt-3'>
                        <h2 className=' text-lg font-semibold'>{reviews.name}</h2>
                        <Rating 
                        style={{maxWidth :100}}
                        value={reviews.rating}
                        readOnly
                        
                        ></Rating>
                      </div> 
                  </div>
                
            </div>
                

          </SwiperSlide>)
        } 
        

      </Swiper>
    </div>
  );
};

export default Review;