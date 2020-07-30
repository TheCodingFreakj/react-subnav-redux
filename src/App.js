import React from "react";
import { BrowserRouter } from "react-router-dom";
import Dropdown from "../src/components/dropdown";
import Routes from "./routes";

const items = [
  { id: 1, value: "Home" },
  { id: 2, value: "Contact" },
  { id: 3, value: "Services" },
  { id: 4, value: "Portfolio" },
];

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Dropdown items={items} />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
