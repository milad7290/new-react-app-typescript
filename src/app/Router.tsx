import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import Home from "../pages/Home/Home";
import Whoops404 from "../pages/Whoops404/Whoops404";

const AppRouter = () => {
  useEffect(() => {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/404" component={Whoops404} />
        <Redirect from="*" to="/404" />
      </Switch>
    </div>
  );
};
export default AppRouter;
