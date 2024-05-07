import React from "react";
import logo from "../assets/logo.png";
import SolidButton from "./SolidButton";
// import Button from "./Button";
import { Link } from "react-router-dom";
import { useSetAtom } from "jotai";
import { navbarAtom } from "../store";

const HomeNavbar = () => {
  const setAtom = useSetAtom(navbarAtom);
  const handlenavChange = () => {
    setAtom(true);
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
          {/* <Button title={"Get Projects"} link={"registration"} /> */}
          <Link to={"/registration"}>
            <button
              type="submit"
              className="button-light text-center"
              style={{ width: "17vw" }}
              onClick={handlenavChange}
            >
              Get Projects
            </button>
          </Link>
          <SolidButton title={"Onboared Talent"} link={""} />
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
