import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";
import connexion from "../../services/connexion";

const fishsType = {
  name: "",
  weight: "",
  picture: "",
  year: 0,
  methodsId: null,
};

function EditFishs() {
  const { id } = useParams();
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
  const getFish = async () => {
    try {
      const oneFish = await connexion
        .get(`/fishs/${id}`)
        .then((res) => res.data);
      setFishs(oneFish);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMethods();
    getFish();
  }, []);

  const handleFishs = (event) => {
    setFishs((etatPrecedent) => ({
      ...etatPrecedent,
      [event.target.name]: event.target.value,
    }));
  };

  const updateFishs = async (event) => {
    event.preventDefault();

    try {
      if (!fishs.id) {
        toast.error("L'ID du poisson est manquant !");
        return;
      }
      const body = {
        id: fishs.id,
        name: fishs.name,
        weight: fishs.weight,
        picture: fishs.picture,
        year: fishs.year,
        methodsId: fishs.methods_id,
      };
      await connexion.put(`/fishs/${fishs.id}`, body);
      toast.success("Prise modifiée!");
    } catch (error) {
      console.error("Erreur lors de la modification de la prise :", error);
      toast.error("Erreur, Non modifiée!");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="all-page-admin-fish">
        <h2>Administration d'une prise:</h2>
        <ToastContainer />
        <form onSubmit={updateFishs} className="form-admin">
          Ajout d'un(e)
          <label>
            name
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
            weight
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
            picture
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
            year
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
            methods_id
            <select
              name="methods_id"
              onChange={handleFishs}
              required
              className="input-admin"
            >
              <option value={null}>votre choix</option>
              {methods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.style}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">modifier</button>
        </form>
      </div>
    </div>
  );
}

export default EditFishs;
