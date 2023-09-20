import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { googleSingIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSingIn = () => {
        googleSingIn()
        .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser)

        // database inserted
        const saveUser = {name : loggedInUser.displayName , email: loggedInUser.email} 
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
                // reset();
               
                  navigate(from, {replace: true})
            }
        })

    })
}



    return (
        <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="">
                 <button onClick={handleGoogleSingIn} className="all-btn w-full">Google Sign-in</button>
            </div>
            <div>
             <button onClick="" className="all-btn w-full">Facebook Sign-in</button>
            </div>
        </div>
    );
};
export default SocialLogin;