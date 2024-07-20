import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/admin/login" />;
  }

  // If the user is authenticated, render the children components
  return children;
};

export default PrivateRoute;
