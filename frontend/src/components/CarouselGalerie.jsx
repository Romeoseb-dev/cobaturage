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
    <div className="all-page-galerie">
      {selectedFish && (
        <div className="selected-fish-container">
          <img
            src={selectedFish.picture}
            alt={selectedFish.name}
            className="img-selected-fish"
          />
          <div className="name-methode">
            <h2>
              {selectedFish.name} {selectedFish.weight}
            </h2>
            <h2>
              pêché {selectedFish.methods_id} en {selectedFish.year}
            </h2>
          </div>
        </div>
      )}
      <div className="all-img-carousel-galerie">
        {allFishs.map((fish) => (
          <button
            key={fish.id}
            type="button"
            onClick={() => handleClick(fish)}
            className="button-carousel-galerie"
          >
            <img
              src={fish.picture}
              alt={fish.name}
              className="img-carousel-galerie"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default CarouselGalerie;
