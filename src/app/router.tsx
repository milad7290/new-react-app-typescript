import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutUs from '../pages/about-us/about-us';
import Home from '../pages/home/home';
import NotFound from '../pages/not-found/not-found';

const AppRouter = () => {
   useEffect(() => {
      const jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
         jssStyles.parentNode.removeChild(jssStyles);
      }
   }, []);

   return (
      <div>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
         </Switch>
      </div>
   );
};
export default AppRouter;
