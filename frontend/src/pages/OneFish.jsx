import React from "react";
import { useLoaderData } from "react-router-dom";

function OneFish() {
  const fish = useLoaderData();
  return (
    <div>
      <h2>{fish.name}</h2>
      <h2>de {fish.weight}</h2>
      <h2>prit {fish.method}</h2>
      <h2>en {fish.year}</h2>
      <img src={fish.picture} alt={fish.name} />
    </div>
  );
}

export default OneFish;
