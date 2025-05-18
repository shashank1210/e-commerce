import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const AdminRoute: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user);

    // Only allow access if user is logged in and has role 'admin'
    return user && user.role === 'admin' ? <Outlet /> : <Navigate to="/auth" />;
};

export default AdminRoute;
