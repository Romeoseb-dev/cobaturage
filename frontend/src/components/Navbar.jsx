import { FaPhoneAlt } from "react-icons/fa";
import insta from "../assets/insta.svg";

import "./Navbar.css";
import NavbarBurger from "./NavbarBurger";

function Navbar() {
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
        <FaPhoneAlt className="phone" />
        <li className="number-phone">06.25.16.81.28</li>
        <li>
          <img src={insta} alt="insta" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
