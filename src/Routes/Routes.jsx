import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blog/Blog";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AllToys from "../page/AllToys/AllToys";
import SingleToy from "../page/SingleToy/SingleToy";
import AddToy from "../page/AddToy/AddToy";
import MyToys from "../page/MyToys/MyToys";
import PrivetRoutes from "./PrivetRoutes";
import UpdateToys from "../page/UpdateToys/UpdateToys";
import SingleToyDetails from "../page/SingleToyDetails/SingleToyDetails";
import Dashboard from "../Layouts/Dashboard";
import UserToysAnalysis from "../page/Dashboard/AdminDashboard/UserToysAnalysis/UserToysAnalysis";
import UserManagement from "../page/Dashboard/AdminDashboard/UserManagement/UserManagement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/singletoy/:_id',
          element:<PrivetRoutes><SingleToy></SingleToy></PrivetRoutes>,
          loader: ({params}) => fetch('https://toy-sports-car-server-nine.vercel.app/category')
        },
        {
          path:'addtoy',
          element:<PrivetRoutes><AddToy></AddToy></PrivetRoutes>
        },
        {
          path:'mytoy',
          element:<PrivetRoutes><MyToys></MyToys></PrivetRoutes>
        },
        {  
          path:'mytoy/updatetoys/:id',
          element:<PrivetRoutes><UpdateToys></UpdateToys></PrivetRoutes>,
          loader:({params}) => fetch(`https://toy-sports-car-server-nine.vercel.app/toys/${params.id}`)       
        },
        {  
          path:'alltoys/singletoydetails/:id',
          element:<PrivetRoutes><SingleToyDetails></SingleToyDetails></PrivetRoutes>,
          loader:({params}) => fetch(`https://toy-sports-car-server-nine.vercel.app/toys/${params.id}`)       
        },
        
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'registration',
          element:<Registration></Registration>
        }
        
      ]
    },

    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'usertoysanalysis',
          element:<UserToysAnalysis></UserToysAnalysis>,
        },
        {
          path:'usermanagement',
          element:<UserManagement></UserManagement>,
        },
        
      ]
    }

  ]);

export default router;