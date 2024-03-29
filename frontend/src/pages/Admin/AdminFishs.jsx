import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../contexts/Auth";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";
import AllAdminFishs from "./AllAdminFishs";
import connexion from "../../services/connexion";

import "./AdminFishs.css";

const fishsType = {
  name: "",
  weight: "",
  picture: "",
  year: 0,
  methods_id: null,
};

function AdminFishs() {
  const { connected } = useContext(AuthContext);
  if (connected !== "admin") {
    return <Navigate to="/" replace />;
  }

  const [fishs, setFishs] = useState(fishsType);
  const [methods, setMethods] = useState([]);

  const getMethods = async () => {
    try {
      const myMethods = await connexion.get("/methods").then((res) => res.data);
      setMethods(myMethods);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMethods();
  }, []);

  const handleFishs = (event) => {
    setFishs((previouState) => ({
      ...previouState,
      [event.target.name]: event.target.value,
    }));
  };

  const postFishs = async (event) => {
    event.preventDefault();

    try {
      await connexion.post("/fishs", fishs);
      toast.success("Prise ajouté!");
    } catch (error) {
      toast.error("Erreur, Non ajouté!");
    }
  };
  return (
    <div>
      <Navbar />

      <div className="all-page-admin-fish">
        <h2>Administration d'une prise:</h2>
        <AllAdminFishs />
        <ToastContainer />
        <form onSubmit={postFishs} className="form-admin">
          Ajout d'un(e)
          <label>
            Name:
            <input
              className="input-admin"
              type="text"
              name="name"
              required
              value={fishs.name}
              onChange={handleFishs}
            />
          </label>
          <label>
            Weight:
            <input
              className="input-admin"
              type="text"
              name="weight"
              required
              value={fishs.weight}
              onChange={handleFishs}
            />
          </label>
          <label>
            Picture:
            <input
              className="input-admin"
              type="text"
              name="picture"
              required
              value={fishs.picture}
              onChange={handleFishs}
            />
          </label>
          <label>
            Year:
            <input
              className="input-admin"
              type="number"
              name="year"
              required
              value={fishs.year}
              onChange={handleFishs}
            />
          </label>
          <label>
            Methods_id:
            <select
              name="methods_id"
              onChange={handleFishs}
              required
              className="input-admin-method"
            >
              <option value={null}>votre choix</option>
              {methods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.style}
                </option>
              ))}
            </select>
          </label>
          <button className="form-contact-submit" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminFishs;
