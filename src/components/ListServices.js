import React from "react";
import Service from "./Service";

const ListServices = () => {
  const services = [
    {
      name: "serwis bieżący",
      isNew: true,
    },
    {
      name: "MECHANIKA I AUTO NAPRAWA",
      isNew: true,
    },
    {
      name: "HAMOWANIA 4x4",
      isNew: false,
    },
    {
      name: "KOMPUTEROWA DIAGNOSTYKA SAMOCHODOWA",
      isNew: false,
    },
    {
      name: "DPF/FAP/EGR",
      isNew: false,
    },
    {
      name: "KLAPY WIROWE",
      isNew: false,
    },
  ];
  return (
    <div className="oferta" id="oferta">
      <p className="firma">Czym zajmuje się nasza firma ?</p>
      <div className="box">
        {services.map((service, index) => {
          return (
            <Service name={service.name} isNew={service.isNew} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default ListServices;
