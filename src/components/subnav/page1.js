import React from "react";

import { Link } from "react-router-dom";

const Page1 = ({ match }) => {
  console.log({ match });
  return (
    <div>
      <div className="sub_nav_wrapper-page">
        <h2>Page1</h2>
        <Link to={`${match.path}/marketing-services`}>Marketing </Link>
        <Link to={`${match.path}/content-services`}>Content </Link>
        <Link to={`${match.path}/webdev-services`}>Webdev </Link>
        <Link to={`${match.path}/facebook-marketing-services`}>
          Fbmarketing{" "}
        </Link>
      </div>
    </div>
  );
};

export default Page1;
