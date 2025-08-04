// components/ProtectedRoute.js
// This component checks if the user is authenticated before allowing access to protected routes.
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { userId } = useAuth(AuthContext);
  return userId ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;