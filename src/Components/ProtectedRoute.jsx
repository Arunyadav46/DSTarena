import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('userId'); // Check if userId exists
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
