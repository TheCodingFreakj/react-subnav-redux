import React from "react";
import { Link } from "react-router-dom";

import "./subnav/style.css";
class SubNav extends React.Component {
  render() {
    return (
      <div
        className="sub_nav"
        //  onClick={event => }
      >
        <Link to="/services">Services</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </div>
    );
  }
}

export default SubNav;

// Each component which is a main route has these things

// //match
// //location
// //history
