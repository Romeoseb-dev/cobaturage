import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRatings from "react-star-ratings";
import Navbar from "../components/Navbar";
import connexion from "../services/connexion";
import "./Comment.css";

const commentType = {
  mail: "",
  name: "",
  comment: "",
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
      await connexion.post("/avis", comment);
      toast.success("Commentaire ajouté!");
    } catch (error) {
      toast.error("Erreur, Non ajouté!");
    }
  };
  return (
    <div className="all-page-comment">
      <Navbar />
      <div className="container-comment">
        <h2 className="add-comment">AJOUTER UN AVIS :</h2>
        <ToastContainer />
        <form className="form-comment" onSubmit={postComment}>
          <label>
            Mail
            <input
              className="mail"
              type="text"
              name="mail"
              required
              value={comment.mail}
              onChange={handleComment}
            />
          </label>
          <label>
            Nom
            <input
              className="name"
              type="text"
              name="name"
              required
              value={comment.name}
              onChange={handleComment}
            />
          </label>
          <label>
            Commentaire (facultatif)
            <input
              className="comment"
              type="text"
              name="comment"
              value={comment.comment}
              onChange={handleComment}
            />
          </label>
          <label className="notation" htmlFor="notation">
            Note
            <StarRatings
              rating={comment.notation}
              starRatedColor="gold"
              changeRating={handleNotation}
              numberOfStars={5}
              name="rating"
            />
          </label>
          <button className="form-contact-submit" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comment;
