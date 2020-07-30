import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../components/header.css";

const Dropdown = (props) => {
  console.log(props);
  const [Products, setProducts] = useState(false);
  const [selection, setselection] = useState([]);
  const toggle = () => setProducts(!Products);

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!props.multiSelect) {
        setselection([item]);
      } else if (props.multiSelect) {
        setselection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setselection([...selectionAfterRemoval]);
    }
  };

  return (
    <div className="dd_wrapper">
      <div
        className="dd_header"
        role="button"
        // onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!Products)}
      >
        <div className="dd_header_title">
          <div className="dd_header_title-bold">{props.value}</div>
        </div>
        <div>
          <div>{Products ? "Products" : "Products"}</div>
        </div>
      </div>

      {Products && (
        <div className="dd_list">
          {props.items.map((item, i) => (
            <div className="dd_lst_item" key={i}>
              <Link to={item.path} onClick={() => handleOnClick(item)}>
                <div>{item.value}</div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
