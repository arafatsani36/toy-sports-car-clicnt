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
          element:<SingleToy></SingleToy>,
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