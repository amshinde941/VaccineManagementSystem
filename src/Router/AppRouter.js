import React from "react";
import HomePage from "../pages/Home";
import { Switch, Route, Redirect} from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminSignupPage from "../pages/AdminSignupPage";
import AdminPage from "../pages/Admin";
const AppRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={HomePage} exact={true} />
      <Route path="/login" component={AdminLoginPage} exact={true} />
      <Route path="/signup" component={AdminSignupPage} exact={true} />
      <Route path="/admin" component={AdminPage} exact={true} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default AppRouter;
