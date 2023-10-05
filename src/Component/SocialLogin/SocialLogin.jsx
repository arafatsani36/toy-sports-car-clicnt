import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SocialLogin = () => {
    const { googleSingIn , facebookLogin} = useContext(AuthContext);
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
        fetch('https://toy-sports-car-server-nine.vercel.app/users', {
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
            }
            navigate(from, {replace: true});
        })

    })
}

    return (
        <div className="mt-4">
            <div className="">
                 <button onClick={handleGoogleSingIn} className="all-btn w-full">Google Sign-in</button>
            </div>
        </div>
    );
};
export default SocialLogin;