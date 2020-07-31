import React from "react";
import { Route, Switch } from "react-router-dom";

import Page2 from "./components/subnav/page2";
import Page1 from "./components/subnav/page1";
import Services from "./components/subnav/services";
import SubNav from "./components/subnav";
import Home from "./components/home";

import MarketingServices from "./components/subnav/marketing-services";
import ContentServices from "./components/subnav/content-services";
import WebDev from "./components/subnav/webdev-services";
import Fbmarketing from "./components/subnav/facebook-marketing-services";

const Routes2 = () => {
  return (
    <div>
      <SubNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page1" exact component={Page1} />

        <Route path="/page2" exact component={Page2} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/:slug" exact component={MarketingServices} />
        <Route
          path="/services/content-services"
          exact
          component={ContentServices}
        />

        <Route path="/services/webdev-services" exact component={WebDev} />

        <Route
          path="/services/facebook-marketing-services"
          exact
          component={Fbmarketing}
        />
      </Switch>
    </div>
  );
};

export default Routes2;
