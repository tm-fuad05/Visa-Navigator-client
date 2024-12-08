import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home";
import Auth from "../Components/Authentication/Auth";
import Register from "../Components/Authentication/Register";
import Login from "../Components/Authentication/Login";
import Error from "../Layouts/Error";
import AboutUs from "../Layouts/AboutUs";
import PrivateLayouts from "../Layouts/PrivateLayouts";
import Contact from "../Layouts/Contact";
import AddVisa from "../Layouts/AddVisa";
import AllVisas from "../Layouts/AllVisas";
import VisaDetails from "../Layouts/VisaDetails";
import MyAddedVisas from "../Layouts/MyAddedVisas";
import MyVisaApplication from "../Layouts/MyVisaApplication";

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
        path: "/add-visa",
        element: (
          <PrivateLayouts>
            <AddVisa></AddVisa>
          </PrivateLayouts>
        ),
      },
      {
        path: "/all-visas",
        element: (
          <PrivateLayouts>
            <AllVisas />
          </PrivateLayouts>
        ),
        loader: () =>
          fetch("https://assignment-10-server-five-rose.vercel.app/visa"),
      },
      {
        path: "/visa/:id",
        element: (
          <PrivateLayouts>
            <VisaDetails />
          </PrivateLayouts>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-five-rose.vercel.app/visa/${params.id}`
          ),
      },
      {
        path: "/my-added-visas",
        element: (
          <PrivateLayouts>
            <MyAddedVisas></MyAddedVisas>
          </PrivateLayouts>
        ),
      },
      {
        path: "/my-visa-application",
        element: (
          <PrivateLayouts>
            <MyVisaApplication />
          </PrivateLayouts>
        ),
        loader: () =>
          fetch(
            "https://assignment-10-server-five-rose.vercel.app/applied-visas"
          ),
      },

      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
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
