import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AllToys from "../page/AllToys/AllToys";
import SingleToy from "../page/SingleToy/SingleToy";
import AddToy from "../page/AddToy/AddToy";
import MyToys from "../page/MyToys/MyToys";
import PrivetRoutes from "./PrivetRoutes";
import SingleToyDetails from "../page/SingleToyDetails/SingleToyDetails";
import Dashboard from "../Layouts/Dashboard";
import UserToysAnalysis from "../page/Dashboard/AdminDashboard/UserToysAnalysis/UserToysAnalysis";
import UserManagement from "../page/Dashboard/AdminDashboard/UserManagement/UserManagement";
import SingleMyToy from "../page/MyToys/SingleMyToy";
import AllToy from "../page/AllToys/AllToy";
import SingleAllProducat from "../page/Home/AllProducat/SingleAllProducat";
import MyToyManegement from "../page/Dashboard/SellerDashboard/MyToyManegement/MyToyManegement";
import UpdateToy from "../page/Dashboard/SellerDashboard/MyToyManegement/UpdateToy";
import MyProfile from "../page/MyProfile/MyProfile";

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
          path : 'singleallproducat/:_id',
          element: <PrivetRoutes> <SingleAllProducat></SingleAllProducat></PrivetRoutes>,
          loader:({params}) => fetch(`https://toy-sports-car-server-nine.vercel.app/category`)
        },
        {
          path:'alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'alltoys/:_id',
          element:<AllToy></AllToy>,
          loader:({params}) => fetch(`https://toy-sports-car-server-nine.vercel.app/toys`)
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
          element:<PrivetRoutes><MyToys></MyToys></PrivetRoutes>,
        },
        {
          path:'mytoy/:_id',
          element:<PrivetRoutes><SingleMyToy></SingleMyToy></PrivetRoutes>,
          loader:({params}) => fetch(`https://toy-sports-car-server-nine.vercel.app/toys`) 
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
        },
        {
          path: 'myprofile',
          element:<MyProfile></MyProfile>
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

        {
          path:'mytoymanegement',
          element:<MyToyManegement></MyToyManegement>,
        },
        {  
          path:'mytoymanegement/updatetoy/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params}) => fetch(`https://toy-sports-car-server-nine.vercel.app/toys/${params.id}`)       
        },

        
      ]
    }

  ]);

export default router;