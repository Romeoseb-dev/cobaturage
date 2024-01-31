import React from "react";
import { Link } from "react-router-dom";
import "./Administration.css";
import Navbar from "../../components/Navbar";

function Administration() {
  return (
    <div>
      <Navbar />
      <nav className="all-page-admin">
        <Link className="admin-prises" to="/admin/prises">
          Prises
        </Link>
      </nav>
    </div>
  );
}

export default Administration;
