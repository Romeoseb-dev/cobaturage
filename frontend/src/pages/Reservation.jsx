import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/Auth";
import connexion from "../services/connexion";
import "./Reservation.css";

const initialUserState = {
  mail: "",
  password: "",
};

function Reservation() {
  const [identification, setIdentification] = useState(initialUserState);
  const { setConnected } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleIdentification = (event) => {
    setIdentification((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleRequest = async (event) => {
    event.preventDefault();
    try {
      const { data: adminData } = await connexion.get("/admins");
      const { data: userData } = await connexion.get("/users");

      const adminMatch = adminData.find(
        (admin) =>
          admin.mail === identification.mail &&
          admin.password === identification.password
      );

      const userMatch = userData.find(
        (user) =>
          user.mail === identification.mail &&
          user.password === identification.password
      );

      if (adminMatch) {
        setConnected("admin"); // Définir la valeur à "admin"
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
        toast.success("vous êtes connecté en tant qu'administrateur");
      } else if (userMatch) {
        toast.success("vous êtes connecté en tant qu'utilisateur");
        // Peut-être définir un contexte utilisateur ici si nécessaire
      } else {
        toast.error("Adresse email ou mot de passe incorrect !");
        setIdentification(initialUserState);
      }
    } catch (error) {
      toast.error("Erreur lors de la connexion !");
      setIdentification(initialUserState);
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
        <Link to="/inscription">
          <button className="sub-inscr" type="button">
            S'inscrire
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Reservation;
