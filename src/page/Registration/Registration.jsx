import registrationImg from "../../assets/login-regester img/regester.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Registration = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
   

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
                   const user = result.user;
                   console.log(user)
                    updateUserProfile(data.name, data.photourl)
                     .then(() => {
                        
                        // database inserted
                        const saveUser = {name : data.name, email: data.email} 
                        fetch('http://localhost:5000/users', {
                            method:'POST',
                            headers:{
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if(data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'User Registration Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                   
                                  })
                                  navigate(from, {replace: true})
                            }
                        })
                        
                          
                     })
                     .catch(error => console.log(error))
                 })
                 .catch(error => {
                     console.log(error)
             })
    };

    // const handleRegistration = event => {
    //     event.preventDefault();
    //     const form =event.target;
    //     const name = form.name.value;
    //     const photo = form.photo.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name, photo, email, password);

    //     if(password.length < 6){
    //         setError('Password most be 6 characters or longer');
    //         return;
    //     }

    //     createUser(email, password)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user)
    //         updateUserProfile(event.name, event.photoURL)
    //         .then(() => {
    //             console.log("user profile info update")
    //             Swal.fire({
    //                 position: 'top-center',
    //                 icon: 'success',
    //                 title: 'User Registration Successfully',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               })
    //         })
    //         .catch(error => console.log(error))
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })


    // }

    return (
        <div className='pt-10 login-registration'>
            <h1 className=' text-3xl mb-5 text-center font-bold'><span className='section-header'>ToyShop</span> Registration</h1>

            <div className='grid md:grid-cols-2 max-w-7xl mx-auto  items-center mb-6'>
           
                <div className="hidden md:block w-[85%] mx-auto">
                        <img src={registrationImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-2xl md:mx-auto">
                <div className="card-body">



                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base mt-2">Your Name</span>
                            </label>
                            <input  type="text" placeholder="Your Name" name="name" className="input input-bordered" {...register("name")} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                            <span className="label-text text-base mt-2">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" {...register("photo")} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base mt-2">Your Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" name="email" className="input input-bordered" {...register("email")}/>
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base mt-2">Your Password</span>
                        </label>
                        <input type="text" placeholder="Your Password" name="password" className="input input-bordered" {...register("password")}/>
                        </div>
                        <div className="mt-6">
                            <input className="all-btn w-full" type="submit" value="Registration" />
                        </div>
                        <p className=" text-lg mt-2"> Already have an account? <Link to='/login' className=" text-pink-700">Login</Link></p>
                        <SocialLogin></SocialLogin>
                        
                    </form>
           </div>
           </div>
       
            </div>
        </div>
    );
};

export default Registration;