import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./header.css";
import Dropdown from "./dropdown";

class Header extends React.Component {
  state = {
    nav: [],
  };

  componentWillMount() {
    axios.get(` http://localhost:3007/navigation`).then((res) => {
      console.log(res.data);

      this.setState({
        nav: res.data,
      });
    });
  }

  renderNavbar = () => {
    return this.state.nav.map((item, i) => (
      <div key={i} className="navigation_items">
        {item.subnav ? (
          <Link to={item.path}>
            <Dropdown items={item.subnav} />
          </Link>
        ) : (
          <Link to={item.path}>{item.name}</Link>
        )}
      </div>
    ));
  };
  render() {
    //console.log(this.state.nav);
    console.log(this.state.nav);

    return (
      <div className="navigation_wrapper">
        {this.renderNavbar()}
        <hr></hr>
      </div>
    );
  }
}
export default Header;

// npx json-server --watch db.json --port 3007
