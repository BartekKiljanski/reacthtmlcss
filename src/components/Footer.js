import React from "react";

const Footer = () => {
  return (
    <footer className="stopka">
      <p className="text_stopka">
        Fuszerka Garage - wszelkie prawa zastrzeżone, 2022
      </p>
      <ul className="icon">
        <li>
          <a
            className="instagram"
            href="https://www.instagram.com/fuszerkaa_garage/?hl=pl">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            className="fb"
            href="https://www.facebook.com/Fuszerka-Garage-105561255301735/">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
