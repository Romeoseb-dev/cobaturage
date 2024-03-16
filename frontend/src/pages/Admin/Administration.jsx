import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
import "./Administration.css";
import Navbar from "../../components/Navbar";

function Administration() {
  const { connected } = useContext(AuthContext);
  if (connected !== "admin") {
    return <Navigate to="/" replace />;
  }
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
