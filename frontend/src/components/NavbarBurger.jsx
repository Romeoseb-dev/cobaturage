import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import "./NavbarBurger.css";

function NavbarBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleMenu();
    }
  };

  return (
    <div
      onClick={toggleMenu}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {isOpen ? (
        <RxCross2 className="cross" />
      ) : (
        <IoIosMenu className="burger" />
      )}
      {isOpen && (
        <div className="menu">
          <Link to="/">Accueil</Link>
          <Link to="/peche-en-mer">Peche en mer</Link>
          <Link to="/bateau">Le bateau</Link>
          <Link to="/galerie">Galerie</Link>
          <Link to="/réservation">Réservation</Link>
          <Link to="/avis">Avis</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default NavbarBurger;
