import loginImg from "../../assets/login-regester img/login.png"
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
    const {singIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSingIn = event => {
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        

        singIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Congratulations Toy Shop Login successfully',
                showConfirmButton: false,
                timer: 1500
              })
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='pt-10 login-registration'>
            <h1 className=' text-3xl mb-5 text-center font-bold'><span className='section-header'>ToyShop</span> Login</h1>

            <div className='grid md:grid-cols-2 max-w-7xl mx-auto items-center mb-6'>
           
                <div className="hidden md:block w-[85%] mx-auto">
                        <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-2xl md:mx-auto">
                <div className="card-body">
                    <form onSubmit={handleSingIn}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base mt-2">Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base mt-2">Your Password</span>
                        </label>
                        <input type="text" name="password" placeholder="Your Password" className="input input-bordered" />
                        <Link to="#" className="label-text-alt link link-hover text-base mt-2">Forgot password?</Link>
                        </div>
                        <div className="mt-6">
                            <input className="all-btn w-full" type="submit" value="Login" />
                        </div>
                        <p className=" text-lg mt-2"> Don't have an account? <Link to='/registration' className=" text-pink-700">Registration</Link></p>
                        <SocialLogin></SocialLogin>
                        
                    </form>
           </div>
           </div>
       
            </div>
        </div>
           
        );
    };

export default Login;