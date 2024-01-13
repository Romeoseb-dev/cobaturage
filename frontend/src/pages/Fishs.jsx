import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Fishs() {
  const allFishs = useLoaderData();

  return (
    <div>
      <Navbar />
      <h1>Toutes les prises :</h1>
      {allFishs.map((fish) => (
        <Link to={`/fishs/${fish.id}`} key={fish.id}>
          <h2>{fish.name}</h2>
          <h2>{fish.weight}</h2>
          <h2>{fish.year}</h2>
          <img src={fish.picture} alt={fish.name} />
        </Link>
      ))}
    </div>
  );
}

export default Fishs;
