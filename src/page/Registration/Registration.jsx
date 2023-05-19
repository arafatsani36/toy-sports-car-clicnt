import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Registration = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegistration = event => {
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
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
            <form onSubmit={handleRegistration}>
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                    <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                    <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Registration</button>
                    </div>
                    <p>Already have an account? <Link to='/login' className="text-blue-700">Login</Link></p>
                    
                </div>
            </form>
        </div>
        </div>
    );
};

export default Registration;