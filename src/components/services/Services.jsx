import React from "react";
import "./Services.css";
const Services = ({title, desc, price}) => {
  return (
    <div className="service-container">
      <div className="check">
        <input type="checkbox" id="vehicle1" />
      </div>
      <div className="service-description">
        <span className="service-description-span">{title}</span>
        <p className="service-description-p">{desc}</p>
      </div>
      <span className="service-price">+${price}</span>
    </div>
  );
};

export default Services;
