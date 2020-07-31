import React from "react";

const MarketingServices = (props) => {
  console.log(props);
  return (
    <div className="inner_wrapper">
      <h1>SERVICES FOR : {props.match.params.slug}</h1>
    </div>
  );
};

export default MarketingServices;
