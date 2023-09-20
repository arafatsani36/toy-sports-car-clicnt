import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
   const {user} = useAuth();
   const [instance] = useAxiosSecure();
   const {data: isAdmin , isLoading: isAdminLoading} = useQuery({
        queryKey : ['isAdmin', user?.email],
        queryFn : async () => {
            const res = await instance.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
   })

   return[isAdmin, isAdminLoading]
};

export default useAdmin;