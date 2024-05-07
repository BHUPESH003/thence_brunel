import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { navbarAtom } from "../store";
const LogoNavbar = () => {
  const navigate = useNavigate();
  const setAtomNav = useSetAtom(navbarAtom);
  const handleClick = () => {
    setAtomNav(false);
    navigate("/");
  };
  return (
    <div className="container-fluid">
      <div className="row py-4">
        <div className="col-6 d-flex align-items-center">
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="img-fluid mx-4"
              style={{ height: "30px", width: "121px" }}
            />
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <X
            size={42}
            className="p-1 border border-2 rounded-circle mx-5 cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoNavbar;
