import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blog/Blog";

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
        }
        
      ]
    },
  ]);

export default router;