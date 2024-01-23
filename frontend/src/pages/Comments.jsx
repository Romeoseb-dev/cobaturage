import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRatings from "react-star-ratings";
import Navbar from "../components/Navbar";
import connexion from "../services/connexion";

const com = {
  mail: "",
  name: "",
  avis: "",
  rating: 5,
};
function Comments() {
  const [formValue, setFormValue] = useState(com);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await connexion.post("/comments", formValue);
      toast.success("Commentaire envoyé avec succès!");
      setFormValue(com);
    } catch (error) {
      toast.error("Erreur lors de l'envoi du commentaire");
    }
  };
  const handleNotation = (nouvelleNotation) => {
    setFormValue((etatPrecedent) => ({
      ...etatPrecedent,
      rating: nouvelleNotation,
    }));
  };
  return (
    <div>
      <Navbar />
      <div className="container-admin">
        <h2>Ajouté un commentaire :</h2>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="form-admin">
          Ajout d'un(e)
          <label>
            mail
            <input
              type="text"
              name="mail"
              required
              value={formValue.mail}
              onChange={handleChange}
            />
          </label>
          <label>
            name
            <input
              type="text"
              name="name"
              required
              value={formValue.name}
              onChange={handleChange}
            />
          </label>
          <label>
            comment
            <input
              type="text"
              name="avis"
              required
              value={formValue.avis}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="notation">
            Notation
            <StarRatings
              rating={formValue.rating}
              starRatedColor="gold"
              changeRating={handleNotation}
              numberOfStars={5}
              name="rating"
            />
          </label>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
