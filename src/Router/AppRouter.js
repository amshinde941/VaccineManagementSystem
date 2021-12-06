import React from "react";
import HomePage from "../pages/Home";
import { Switch, Route, Redirect} from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminSignupPage from "../pages/AdminSignupPage";
import AdminPage from "../pages/Admin";
import PrivateAdminRoute from './PrivateAdminRoute';
import PublicRoute from "./PublicRoute";
const AppRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={HomePage} exact={true} />
      <PublicRoute path="/admin/login" component={AdminLoginPage} exact={true} />
      <PublicRoute path="/admin/signup" component={AdminSignupPage} exact={true} />
      <PrivateAdminRoute path="/admin/me" component={AdminPage} exact={true} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default AppRouter;
