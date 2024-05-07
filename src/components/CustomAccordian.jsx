import React, { useState } from 'react';
import { PlusSquareFill, DashSquareFill, Plus, Dash } from 'react-bootstrap-icons';

const CustomAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${openIndex === index ? 'open' : ''} d-flex justify-content-between fw-semibold`}
            onClick={() => toggleItem(index)}
            style={{height:'7vw'}}
          >
            {item.header}
            {openIndex === index ? <Dash /> : <Plus />}
          </div>
          {openIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
