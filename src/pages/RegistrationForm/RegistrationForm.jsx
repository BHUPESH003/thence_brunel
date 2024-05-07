import React, { useState } from "react";
import HeadingItalic from "../../components/HeadingItalic";
import { useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(""); // Clear error message when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    if (!validateEmail(email)) {
      console.log("here");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    navigate("/success");
    // Handle form submission logic
    console.log("Form submitted!");
  };

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <HeadingItalic title={"Registration Form"} />
        <div className="fw-bold font-heading text-center">
          Start your success <br /> Journey here!
        </div>
      </div>

      <form
        className="d-flex flex-column align-items-center gap-4 mt-4"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Enter your name"
          type="text"
          style={{
            width: "25vw",
            height: "3vw",
            padding: "24px 36px",
            borderRadius: "64px",
            backgroundColor: "#EFEFEF",
            border: "0px",
          }}
          onChange={(e) => e.target.value}
        />
        <input
          placeholder="Enter your email"
          type="text"
          style={{
            width: "25vw",
            height: "3vw",
            padding: "24px 36px",
            borderRadius: "64px",
            backgroundColor: "#EFEFEF",
            border: "0px",
          }}
          value={email}
          onChange={handleEmailChange}
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button
          type="submit"
          className="button text-center p-0"
          style={{ width: "25vw", height: "4vw" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
