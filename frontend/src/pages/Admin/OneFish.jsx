import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connexion from "../../services/connexion";
import "./OneFish.css";

function OneFish() {
  const navigate = useNavigate();
  const fish = useLoaderData();

  const deleteFish = async (event) => {
    event.preventDefault();

    try {
      await connexion.delete(`/fishs/${fish.id}`);
      toast.success("Poisson supprimé!");
      navigate("/admin/prises");
    } catch (error) {
      console.error("Erreur lors de la suppression du poisson:", error);
      toast.error("Erreur, Poisson non supprimé!");
    }
  };

  const editFish = () => {
    navigate(`/admin/prises/modifier/${fish.id}`);
  };

  return (
    <div>
      <ToastContainer />
      <form>
        <h2>{fish.name}</h2>
        <h2>de {fish.weight}</h2>
        <h2>prit {fish.method}</h2>
        <h2>en {fish.year}</h2>
        <img className="img-one-fish" src={fish.picture} alt={fish.name} />
        <button type="button" onClick={editFish}>
          Modifier
        </button>
        <button type="submit" onClick={deleteFish}>
          Supprimer
        </button>
      </form>
    </div>
  );
}

export default OneFish;
