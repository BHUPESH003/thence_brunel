import React from "react";
import { Link } from "react-router-dom";

const SolidButton = (props) => {
  return (
    <div style={{ width: "223px", height: "77px" }}>
      <Link to={`/${props.link}`}>
        <button className="button">{props.title}</button>
      </Link>
    </div>
  );
};

export default SolidButton;
