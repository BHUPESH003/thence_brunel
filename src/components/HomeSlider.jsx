import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        pause={false}
      >
        <Carousel.Item>
          <p className="font-subheading">Enhance fortune 50 company's insights teams research capabilities</p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="font-subheading">Lorem ipsum dolar sit, ammet comit</p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="font-subheading"> companys insights teams research, Lorem ipsum dolar sit</p>
        </Carousel.Item>
      </Carousel>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {[...Array(3)].map((_, idx) => (
          <span
            key={idx}
            style={{
              display: "inline-block",
              margin: "0 7px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: idx === index ? "#2DA950" : "#E4E3E3",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HomeSlider;
