import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRatings from "react-star-ratings";
import Navbar from "../components/Navbar";
import connexion from "../services/connexion";

const commentType = {
  mail: "",
  name: "",
  commentaire: "",
  rating: 5,
};

function Comment() {
  const [comment, setComment] = useState(commentType);
  const handleComment = (event) => {
    setComment((previouState) => ({
      ...previouState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNotation = (nouvelleNotation) => {
    setComment((etatPrecedent) => ({
      ...etatPrecedent,
      notation: nouvelleNotation,
    }));
  };

  const postComment = async (event) => {
    event.preventDefault();

    try {
      await connexion.post("/comments", comment);
      toast.success("Commentaire ajouté!");
    } catch (error) {
      toast.error("Erreur, Non ajouté!");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container-admin">
        <h2>Ajouté un commentaire :</h2>
        <ToastContainer />
        <form onSubmit={postComment} className="form-admin">
          Ajout d'un(e)
          <label>
            mail
            <input
              type="text"
              name="mail"
              required
              value={comment.mail}
              onChange={handleComment}
            />
          </label>
          <label>
            name
            <input
              type="text"
              name="name"
              required
              value={comment.name}
              onChange={handleComment}
            />
          </label>
          <label>
            comment
            <input
              type="text"
              name="commentaire"
              required
              value={comment.commentaire}
              onChange={handleComment}
            />
          </label>
          <label htmlFor="notation">
            Notation
            <StarRatings
              rating={comment.notation}
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

export default Comment;
