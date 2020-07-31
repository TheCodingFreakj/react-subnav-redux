import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/components/home";
import Products from "../src/components/products";
import Contact from "../src/components/contact";
import Portfolio from "./components/portfolio";
import Header from "../src/components/header";
//import { Link } from "react-router-dom";
import ReactCourses from "../src/components/react-courses";
import JsCourses from "../src/components/js-courses";
import MarketingCourses from "../src/components/marketing-courses";
//import NestedNav from "../src/components/nestednav";

class Routes extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />

          <Route path="/products/:" exact component={Products} />
          <Route path="/react-courses" exact component={ReactCourses} />
          <Route path="/js-courses" exact component={JsCourses} />
          <Route path="/marketing-courses" exact component={MarketingCourses} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/portfolio" exact component={Portfolio} />
        </Switch>

        {/* <NestedNav /> */}
      </div>
    );
  }
}

export default Routes;

//https://ui.dev/react-router-v4-nested-routes/
//https://stackblitz.com/edit/react-router-dom-4-nested-example
