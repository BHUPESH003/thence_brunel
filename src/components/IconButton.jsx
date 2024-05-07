import React from "react";
import {  ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const IconButton = (props) => {
  return (
    <div style={{ width: "223px", height: "77px" }}>
    <Link to={`/${props.link}`}>
      <button
        style={{
          borderRadius: "107px",
          padding: "26.11px 49.61px 26.11px 41.78px",
          backgroundColor: "#1C1C1C",
          color:'#FFFF',
          fontSize:'18x',
          fontWeight:'500'
        }}
      >
        {props.title}
        <ArrowRight color="#FFFF" style={{backgroundColor:'#1C1C1C',marginLeft:'8px'}} size={18}/>
      </button>
      </Link>
    </div>
  );
};

export default IconButton;
