import React from "react";

const Person = () => {
  return (
    <div className="person" id="o nas">
      <p className="spec">Nasi specjaliści</p>

      <div className="elipse"></div>
      <span>
        <h1 className="imie1">Bartek Gruby (inżynier)</h1>
        <p className="lorem1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
          massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
          nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum
          lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non
          tincidunt libero ultrices in.
        </p>
      </span>

      <div className="elipse"></div>
      <span>
        <h2 className="imie2">
          Barbara Cegła (psycholog)
          <p className="lorem2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
            nunc, id malesuada ex lobortis a. Integer felis nisi, tempor
            elementum lorem in, varius pellentesque ligula. Duis efficitur
            lacinia enim, non tincidunt libero ultrices in.
          </p>
        </h2>
      </span>
    </div>
  );
};

export default Person;
