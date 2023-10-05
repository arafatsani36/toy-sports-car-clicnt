import React from 'react';
import feedbackBanner from "../../../assets/feedback.gif"

const Feedback = () => {
    return (
        <div className='my-10'>
            <h1 className=' text-3xl mb-5 text-center font-bold'><span className='section-header'>Your</span> Feedback</h1>

            <div className='feedback'>
            <div className=' md:flex  items-center'>
           
           <div className="text-center lg:text-left" data-aos="fade-right">
                   <img src={feedbackBanner} alt="" />
           </div>
           <div className="card flex-shrink-0 w-full max-w-2xl">
           <from className="card-body" data-aos="fade-left">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Your name" className="input input-bordered" />
               </div>
               <div className="form-control">
               <label className="label">
                   <span className="label-text">Your Email</span>
               </label>
               <input type="text" placeholder="Your Email" className="input input-bordered" />
               </div>
               <div className="form-control">
               <label className="label">
                   <span className="label-text">Your Massage</span>
               </label>
                <textarea  cols="35" rows="10" placeholder="Your Massage" className=' p-2 feedback-textarea'></textarea>
               </div>
               <div className="form-control mt-6">
               <button className="feedback-btn">Login</button>
               </div>
           </from>
           </div>
       
            </div>
            </div>
        </div>
        
    );
};

export default Feedback;