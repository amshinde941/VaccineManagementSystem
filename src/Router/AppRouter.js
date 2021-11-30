import React from "react";
import Home from "../pages/Home";
import { Switch, Route, Redirect} from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminSignupPage from "../pages/AdminSignupPage";
const AppRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} exact={true} />
      <Route path="/login" component={AdminLoginPage} exact={true} />
      <Route path="/signup" component={AdminSignupPage} exact={true} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default AppRouter;
