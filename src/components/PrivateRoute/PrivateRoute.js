import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
    console.log('User:', user);
    return user ? <Route {...rest} element={<Component />} /> : <Navigate to="/Login" />;
  };
  

export default PrivateRoute;
