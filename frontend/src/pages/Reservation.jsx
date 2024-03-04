import React, { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import connexion from "../services/connexion";
import "./Reservation.css";

const user = {
  mail: "",
  password: "",
};

function Reservation() {
  const [identification, setIdentification] = useState(user);

  const handleIdentification = (event) => {
    setIdentification((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleRequest = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/admins", identification);
      toast.success("vous êtes connecté !");
    } catch (error) {
      toast.error("Erreur lors de la connexion !");
    }
  };

  return (
    <div className="all-page-reservation">
      <Navbar />
      <form onSubmit={handleRequest} className="form-reserve">
        <h2 className="title-reserve">Se connecter pour réserver</h2>
        <label className="mail-reserve">
          email
          <input
            className="input-mail-reserve"
            type="email"
            name="mail"
            required
            onChange={handleIdentification}
            value={identification.mail}
          />
        </label>
        <label className="mail-reserve">
          mot de passe
          <input
            className="input-pass-reserve"
            type="password"
            name="password"
            required
            onChange={handleIdentification}
            value={identification.password}
          />
        </label>
        <button className="sub-com" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Reservation;
