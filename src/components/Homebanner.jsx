import React from "react";
import herobanner from "../assets/hero_banner.png";
import sparkle from "../assets/spark, sparkle, 26.png";
const Homebanner = () => {
  return (
    <div className="position-relative">
      <img
        src={herobanner}
        alt="herobanner"
        style={{ width: "25vw", left: "18%" }}
        className="position-absolute"
      />
      <div
        className="position-absolute p-2"
        style={{
          width: "16vw",
          left: "-2vw",
          top: "4vw",
          borderRadius: "27px",
          backgroundColor:'#FFFF'
        }}
      ><img src={sparkle} alt="sparkle" className="position-absolute" style={{left:'-4vw', top:'-4vw',zIndex:'1'}}/>
        <span style={{fontSize:'36px',zIndex:'100'}} className="fw-bold position-relative">40%</span>
        <p className="font-body">
          Achieved reduction in project execution time by optimising team
          availability
        </p>
      </div>
      <div
        className="position-absolute p-3"
        style={{
          width: "17vw",
          left: "24vw",
          top: "18vw",
          borderRadius: "27px",
          backgroundColor: "#002E18",
          color:'#FFFF'
          
        }}
        
      >
        <span style={{background:'none'}} className="font-heading">$0.5</span>
        <span style={{background:'none',color:'#A6A3A0'}}>MILLION</span>
        <p style={{background:'none'}} className="font-body">Reduced client expenses by saving on hiring and employee costs.</p>
      </div>
    </div>
  );
};

export default Homebanner;
