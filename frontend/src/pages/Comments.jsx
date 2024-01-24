import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRatings from "react-star-ratings";
import Navbar from "../components/Navbar";
import connexion from "../services/connexion";
import "./Comments.css";

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
    <div className="all-page-comments">
      <Navbar />
      <div className="container-com">
        <h2 className="add-comment">AJOUTER UN COMMENTAIRE:</h2>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="form-com">
          <label className="label-mail">
            Mail:
            <input
              className="input-com"
              type="email"
              name="mail"
              required
              value={formValue.mail}
              onChange={handleChange}
            />
          </label>
          <label className="label-name">
            Nom:
            <input
              className="input-com"
              type="text"
              name="name"
              required
              value={formValue.name}
              onChange={handleChange}
            />
          </label>
          <label className="label-comment">
            <span className="span-com">Commentaire:</span>
            <textarea
              className="textarea-form-comment"
              name="avis"
              onChange={handleChange}
              maxLength={250}
              value={formValue.avis}
              required
            />
          </label>
          <label htmlFor="notation" className="note">
            Note:
            <div className="star-com">
              <StarRatings
                rating={formValue.rating}
                starRatedColor="gold"
                changeRating={handleNotation}
                numberOfStars={5}
                name="rating"
              />
            </div>
          </label>
          <button className="sub-com" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;