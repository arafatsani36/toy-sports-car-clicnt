import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blog/Blog";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AllToys from "../page/AllToys/AllToys";
import SingleToy from "../page/SingleToy/SingleToy";

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