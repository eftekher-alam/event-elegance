import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/home/Home";
import About from "../components/about/About";
import ServiceDetails from "../components/serviceDetails/ServiceDetails";
import OurServices from "../components/outServices/OurServices";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import PrivateRoute from './PrivateRoute';
import ErrorPage from './../components/errorPage/ErrorPage';
import Shop from './../components/shop/Shop';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: "/serviceDetails/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: async () => fetch("/services.json")
            },
            {
                path: "/services",
                element: <OurServices></OurServices>
            },
            {
                path: "/shop",
                element: <PrivateRoute><Shop></Shop></PrivateRoute>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);


export default router;