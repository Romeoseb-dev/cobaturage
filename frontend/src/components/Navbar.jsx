import React from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
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
        <li>
          <Link to="/">ACCUEIL</Link>
        </li>
        <li>
          <Link to="/peche-en-mer">PECHE EN MER</Link>
        </li>
        <li>
          <Link to="/bateau">LE BATEAU</Link>
        </li>
        <li>
          <Link to="/galerie">GALERIE</Link>
        </li>
        <li>
          <Link to="/réservation">RÉSERVATION</Link>
        </li>
        <li>
          <Link to="/avis">AVIS</Link>
        </li>
      </ul>

      <ul className="list-contact">
        <li>
          <Link to="/contact">
            <FiMail className="contact-mail" />
          </Link>
        </li>
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
