import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import insta from "../assets/insta.svg";
import "./Navbar.css";
import NavbarBurger from "./NavbarBurger";

function Navbar() {
  const handlePhoneClick = () => {
    const phoneNumber = "06.25.16.81.28";
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleInstaClick = (e) => {
    e.preventDefault();
    const urlPageInstagram = "https://www.instagram.com/seb_fishingfr/";
    window.open(urlPageInstagram, "_blank");
  };
  return (
    <div className="navbar">
      <ul className="navbar-burger">
        <NavbarBurger />
      </ul>
      <ul className="list-navbar">
        <li>ACCUEIL</li>
        <li>PECHE EN MER</li>
        <li>LE BATEAU</li>
        <li>GALERIE</li>
      </ul>
      <ul className="list-contact">
        <a
          className="number-phone"
          href="tel:06.25.16.81.28"
          onClick={handlePhoneClick}
        >
          <FaPhoneAlt className="phone" />
          <span>06.25.16.81.28</span>
        </a>
        <li>
          <a
            href="https://www.instagram.com/seb_fishingfr/"
            onClick={handleInstaClick}
          >
            <img src={insta} alt="insta" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
