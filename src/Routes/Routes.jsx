import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blog/Blog";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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