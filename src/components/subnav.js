import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const SubNavigation = (props) => {
  // Here I’m trying to return if the props are not present

  console.log(props);

  //   return
  //  if(!props.items) return null;

  //  return props.items.map((item, i) => {
  //     return <Link key={i} to={item.path}>{item.name}</Link>
  //   })

  if (!props.subnav) return null;
  return props.items.map((item, index) => {
    return (
      <Link key={index} to={item.path}>
        {item.name}
      </Link>
    );
  });
};

export default SubNavigation;
