import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({children}) => {
    const {user, loder} = useContext(AuthContext);

    if(){
        return <progress className="progress w-56 progress-error"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to='/login' replace></Navigate> ;
};

export default PrivetRoutes;