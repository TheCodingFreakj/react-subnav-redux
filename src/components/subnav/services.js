import React from "react";

import { Link } from "react-router-dom";

const Services = ({ match }) => {
  console.log({ match }); //you will find history match location

  //in histrry has location with pathname url
  //in match you get params url and path of the webpage
  // isExact
  // params is the chid route or url

  return (
    <div className="sub_nav_wrapper">
      <h2>Services</h2>
      <Link to={`${match.path}/marketing-services`}>Marketing </Link>
      <Link to={`${match.path}/content-services`}>Content </Link>
      <Link to={`${match.path}/webdev-services`}>Webdev </Link>
      <Link to={`${match.path}/facebook-marketing-services`}>Fbmarketing </Link>
    </div>
  );
};

export default Services;
