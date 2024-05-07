import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    console.log(props)
  return (
    <div style={{ width: "223px", height: "77px" }}>
        <Link to={`/${props.link}`}>

      <button
        style={{
          borderRadius: "107px",
          padding: "26.11px 49.61px 26.11px 41.78px",
          backgroundColor: "#FFFF",
          color:'#1C1C1C',
          fontSize:'18x',
          fontWeight:'500',
          border:'1.31px solid #EAEAEA'
        }}
      >
        {props.title}
      </button>
      </Link>
    </div>
  );
};

export default Button;
