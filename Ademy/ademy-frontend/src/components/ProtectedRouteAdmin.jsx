import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouteAdmin = ({ user, children }) => {
  // If no user OR user is not admin, redirect to the Admin Login Required page
  if (!user || user.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRouteAdmin;
