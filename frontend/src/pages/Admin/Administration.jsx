import React from "react";
import { Link } from "react-router-dom";

function Administration() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/prises">Prises</Link>
      </nav>
    </div>
  );
}

export default Administration;
