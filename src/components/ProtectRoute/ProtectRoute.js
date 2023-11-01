import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectRoute = ({ element: Component, isAuthenticated }) => {
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectRoute;