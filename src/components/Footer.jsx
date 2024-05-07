import React from "react";
const Footer = () => {
  return (
    <div className="container-fluid text-body p-4">
      <div className="row py-4 rounded" style={{backgroundColor:'#F5f5f5'}}>
        <div className="col-6 d-flex align-items-center">
          <a href={"/"} className="text-body">© Talup 2023. All rights reserved</a>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <a href={"/"} className="text-body mx-2">Terms & Conditions</a>
          <a href={"/"} className="text-body mx-2">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
