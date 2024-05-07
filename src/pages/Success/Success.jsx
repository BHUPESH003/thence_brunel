import React, { useEffect, useState } from "react";
import HeadingItalic from "../../components/HeadingItalic";
import success from "../../assets/Tick + round.png";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, countdown * 1000);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [countdown, navigate]);

  return (
    <div className="container w-50 text-center p-0">
      <img src={success} alt="success" />
      <div className="d-flex flex-column align-items-center">
        <HeadingItalic title={"Success Submitted"} />
        <div className="fw-bold font-heading text-center">Congratulations</div>
        <p style={{ fontSize: "27px", color: "#727272" }}>
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
        <p style={{ fontSize: "18px", color: "#727272" }} className="mt-5">
          Redirecting in <b>{countdown}</b>seconds...
        </p>
      </div>
    </div>
  );
};

export default Success;
