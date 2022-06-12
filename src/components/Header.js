import React from "react";
import Sidebar from "./Sidebar";
import bmwlogo from "../images/bmwlogo.png";

const header = () => {
  return (
    <div class="container">
      <nav class="header">
        <div class="logo">
          <a href="#sidebar">
            <img src={bmwlogo} alt="moja firma" title="moja firma" />
          </a>
        </div>
        <ul class="nav">
          <li>
            <a href="#o nas"> o nas</a>
          </li>
          <li>
            <a href="#oferta"> oferta</a>
          </li>
          <li>
            <a class="kontakt" href="#">
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
