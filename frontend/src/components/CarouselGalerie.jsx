import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./CarouselGalerie.css";

function CarouselGalerie() {
  const allFishs = useLoaderData();
  const [selectedFish, setSelectedFish] = useState(allFishs[0]);

  const handleClick = (fish) => {
    setSelectedFish(fish);
  };

  return (
    <div>
      {selectedFish && (
        <div className="selected-fish-container">
          <img
            src={selectedFish.picture}
            alt={selectedFish.name}
            className="img-selected-fish"
          />
        </div>
      )}
      {allFishs.map((fish) => (
        <button key={fish.id} type="button" onClick={() => handleClick(fish)}>
          <img
            src={fish.picture}
            alt={fish.name}
            className="img-carousel-galerie"
          />
        </button>
      ))}
    </div>
  );
}

export default CarouselGalerie;
