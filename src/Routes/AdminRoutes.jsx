import { useQuery } from '@tanstack/react-query';

const adminRoutes = ({children}) => {
    const {user, loder} = useAuth();
    const[isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loder || isAdminLoading){
        return <progress className="progress w-56 progress-error mx-auto text-center"></progress>
    }

    if(user || isAdmin){
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default adminRoutes;