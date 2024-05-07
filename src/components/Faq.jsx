import React from "react";
import base from "../assets/Union.png";
import { Accordion, Card, Button } from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";
import CustomAccordion from "./CustomAccordian";
const Faq = () => {
  const items = [
    { header: "Do you offer freelancers?", content: "Content 1" },
    {
      header:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      content: "Content 2",
    },
    {
      header: "Can I hire multiple talents at once?",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      header: "Why should I not go to an agency directly?",
      content: "Content 4",
    },
    {
      header: "Who can help me pick a right skillset and duration for me?",
      content: "Content 5",
    },
  ];
  return (
    <div className="row m-0 p-4" style={{ backgroundColor: "#E8EEE7" }}>
      <div className="col-6">
        <div className="font-italic" style={{ color: "#9E9D9D" }}>
          What's on your mind
        </div>
        <span className="fw-bold font-heading text-center">Ask Questions</span>
        <img src={base} alt="union" />
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center" style={{height:'40vw'}}>
        {/* <Accordion flush >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
        <CustomAccordion items={items} />
      </div>
    </div>
  );
};

export default Faq;
