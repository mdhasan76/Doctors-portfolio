import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import CoAppoinment from "../pages/appoinment/CoAppoinment";
import SingUp from "../pages/singup/SingUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/appoinment',
                element: <CoAppoinment />
            },
            {
                path: "/signup",
                element: <SingUp />
            }
        ]
    }
]);
export default router