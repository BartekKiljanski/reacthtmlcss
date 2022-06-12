import React from "react";
import "./service.css";
const Service = ({ name, isNew }) => {
  return (
    <div className="u1">
      <div className="wheel"></div>
      <p className="p1">{name}</p>
    </div>
  );
};

export default Service;
