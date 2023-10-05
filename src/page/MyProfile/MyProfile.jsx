import React from 'react';
import {  BsFillArrowLeftCircleFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Helmet} from 'react-helmet-async';

const MyProfile = () => {
    return (
        <div className=' text-center'>
            <Helmet>
              <title>ToyShop | My Profile</title>
            </Helmet>

           <h2 className='text-5xl font-bold mt-20 mb-10'>Commin soon......</h2>
           <Link to='/' className=' text-center text-2xl mt-10'><button><BsFillArrowLeftCircleFill className="title-span"></BsFillArrowLeftCircleFill> Go To Home</button></Link>
        </div>
    );
};

export default MyProfile;