import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import CoAppoinment from "../pages/appoinment/CoAppoinment";
import SingUp from "../pages/singup/SingUp";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Allusers from "../pages/dashboard/Allusers";
import AdminRoute from "./AdminRouts";
import AddDoctors from "../pages/dashboard/AddDoctors";
import ManageDoctors from "../pages/dashboard/ManageDoctors";
import BookingPayment from "../pages/dashboard/payment/BookingPayment";

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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><Allusers /></AdminRoute>
            },
            {
                path: '/dashboard/adddoctors',
                element: <AdminRoute><AddDoctors /></AdminRoute>
            },
            {
                path: '/dashboard/managdoctors',
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`https://doctors-portal-server-mdhasan76.vercel.app/dashboard/payment/${params.id}`),
                element: <AdminRoute><BookingPayment /></AdminRoute>
            },
        ]
    }
]);
export default router