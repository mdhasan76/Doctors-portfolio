import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../pages/shared/AuthProvider';
import useAdmin from '../pages/shared/hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    const location = useLocation()
    if (loading || adminLoading) {
        return <p className='text-5xl pt-10 text-center'>Loading...</p>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;