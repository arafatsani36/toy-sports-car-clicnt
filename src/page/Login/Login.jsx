import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {singIn, googleSingIn} = useContext(AuthContext);

    const handleSingIn = event => {
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGoogleSingIn = () => {
        googleSingIn()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }





    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSingIn}>
                <div className="card-body">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <button onClick={handleGoogleSingIn} className="btn btn-info">Google Sign-in</button>
                    <p>Don't have an account? <Link to='/registration' className="text-blue-700">Registration</Link></p>
                    
                </div>
            </form>
        </div>
        </div>
        );
        };

export default Login;