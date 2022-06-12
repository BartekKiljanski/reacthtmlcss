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
      isNew: false,
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
    <div class="oferta" id="oferta">
      <p class="firma">Czym zajmuje się nasza firma ?</p>
      <div class="box">
        {services.map((service) => {
          return <Service name={service.name} isNew={service.isNew} />;
        })}
      </div>
    </div>
  );
};

export default ListServices;
