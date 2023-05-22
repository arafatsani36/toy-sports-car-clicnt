import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({children}) => {
    const {user, loder} = useContext(AuthContext);
    const location = useLocation();
    if(loder){
        return <progress className="progress w-56 progress-error mx-auto"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivetRoutes;