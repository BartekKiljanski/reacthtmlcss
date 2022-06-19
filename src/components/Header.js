import React from "react";
// import Sidebar from "./Sidebar";
import bmwlogo from "../images/bmwlogo.png";

const header = () => {
  return (
    <div className="container">
      <nav className="header">
        <div className="logo">
          <a href="#sidebar">
            <img src={bmwlogo} alt="moja firma" title="moja firma" />
          </a>
        </div>
        <ul className="nav">
          <li>
            <a href="#o nas"> o nas</a>
          </li>
          <li>
            <a href="#oferta"> oferta</a>
          </li>
          <li>
            <a className="kontakt" href="#">
              {" "}
              kontakt
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
