import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar";
import connexion from "../../services/connexion";

const initialUserState = {
  mail: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [user, setUser] = useState(initialUserState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/users", user);
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
      toast.success("Vous êtes connecté en tant qu'administrateur");
    } catch (error) {
      toast.error("Erreur lors de la connexion !");
      setUser(initialUserState);
    }
  };

  return (
    <div className="all-page-reservation">
      <Navbar />
      <form onSubmit={handleSubmit} className="form-reserve">
        <h2 className="title-reserve">Inscription</h2>
        <label className="mail-reserve">
          Email
          <input
            className="input-mail-reserve"
            type="email"
            name="mail"
            required
            value={user.mail}
            onChange={handleChange}
          />
        </label>
        <label className="mail-reserve">
          Mot de passe
          <input
            className="input-pass-reserve"
            type="password"
            name="password"
            required
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <label className="mail-reserve">
          Confirmez le mot de passe
          <input
            className="input-pass-reserve"
            type="password"
            name="confirmPassword"
            required
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button className="sub-com" type="submit">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Signup;
