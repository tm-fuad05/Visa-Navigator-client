import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home";
import Auth from "../Components/Authentication/Auth";
import Register from "../Components/Authentication/Register";
import Login from "../Components/Authentication/Login";
import Error from "../Layouts/Error";
import AboutUs from "../Layouts/AboutUs";
import PrivateLayouts from "../Layouts/PrivateLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: (
          <PrivateLayouts>
            <AboutUs></AboutUs>
          </PrivateLayouts>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/sign-in",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
