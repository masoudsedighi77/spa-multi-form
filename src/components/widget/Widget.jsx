import React from "react";
import "./Widget.css";
const Widget = ({ img, title, plan }) => {
  return (
    <div className="widget-container">
      <img src={img} className="widget-logo" />
      <span className="widget-title">{title}</span>
      <span className="widget-plan">{plan}</span>
    </div>
  );
};

export default Widget;
