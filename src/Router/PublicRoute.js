import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AdminContext);
  const isAuthenticated = user.type === "admin";
  return (
    <Route
      {...rest}
      component={(props) => {
        if (!isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/${user.type}/me`} />;
        }
      }}
    />
  );
};

export default PublicRoute;
