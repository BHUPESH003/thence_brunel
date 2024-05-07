import React, { useEffect } from "react";
import HeadingItalic from "../../components/HeadingItalic";
import IconButton from "../../components/IconButton";
import HomeSlider from "../../components/HomeSlider";
import Homebanner from "../../components/Homebanner";
import Faq from "../../components/Faq";
import { useSetAtom } from "jotai";
import { navbarAtom } from "../../store";

const Home = () => {
  const setAtomNav = useSetAtom(navbarAtom);
  useEffect(() => {
    setAtomNav(false);
  }, []);
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <HeadingItalic title={"Success Stories"} />
        <div className="fw-bold font-heading text-center">
          Every success journey
          <br /> we've encountered.
        </div>
      </div>
      <div className="row m-0 px-5 mt-5" style={{ height: "40vw" }}>
        <div className="col-md-6">
          <Homebanner />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <HomeSlider />
          <IconButton title="Explore More" link="/" />
        </div>
      </div>
      <Faq />
    </>
  );
};

export default Home;
