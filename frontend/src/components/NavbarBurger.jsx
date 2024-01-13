import React, { useState } from "react";
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
          <a href="/">Accueil</a>
          <a href="/en mer">Peche en mer</a>
          <a href="/bateau">Le bateau</a>
          <a href="/galerie">Galerie</a>
        </div>
      )}
    </div>
  );
}

export default NavbarBurger;
