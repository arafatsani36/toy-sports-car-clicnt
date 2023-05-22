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
          loader: ({params}) => fetch('http://localhost:5000/category')
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
          loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)       
        },
        {  
          path:'alltoys/singletoydetails/:id',
          element:<PrivetRoutes><SingleToyDetails></SingleToyDetails></PrivetRoutes>,
          loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)       
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

  ]);

export default router;