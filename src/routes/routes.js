import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import CoAppoinment from "../pages/appoinment/CoAppoinment";

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
            }
        ]
    }
]);
export default router