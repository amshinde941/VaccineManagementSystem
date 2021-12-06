import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import {AdminContext} from '../context/AdminContext';

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AdminContext);
  const isAuthenticated = user.type === "admin";
  return (
    <Route
      {...rest}
      component={(props) => 
      isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin/login" />
        )}
    />
  );
};

export default PrivateAdminRoute;
