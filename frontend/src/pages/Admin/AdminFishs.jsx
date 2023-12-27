import React, { useState, useEffect } from "react";
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
    } catch (error) {
      /* empty */
    }
  };
  return (
    <div className="container-admin">
      <h2>Administration d'une prise:</h2>
      <form onSubmit={postFishs} className="form-admin">
        Ajout d'un(e)
        <label>
          name
          <input
            type="text"
            name="name"
            required
            value={fishs.name}
            onChange={handleFishs}
          />
        </label>
        <label>
          weight
          <input
            type="text"
            name="weight"
            required
            value={fishs.weight}
            onChange={handleFishs}
          />
        </label>
        <label>
          picture
          <input
            type="text"
            name="picture"
            required
            value={fishs.picture}
            onChange={handleFishs}
          />
        </label>
        <label>
          year
          <input
            type="number"
            name="year"
            required
            value={fishs.year}
            onChange={handleFishs}
          />
        </label>
        <label>
          methods_id
          <select name="methods_id" onChange={handleFishs} required>
            <option value={null}>votre choix</option>
            {methods.map((method) => (
              <option value={method.id}>{method.method}</option>
            ))}
          </select>
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AdminFishs;
