import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import coboaturage from "../assets/coboaturage.png";
import "./Carousel.css";

function Carousel() {
  const allFishs = useLoaderData();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allFishs.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // Défile toutes les 3 secondes

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      {allFishs.map((fish, index) => (
        <img
          key={fish.id}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
          src={fish.picture}
          alt={fish.name}
        />
      ))}
      <img className="coboaturage" src={coboaturage} alt="coboaturage" />
    </div>
  );
}

export default Carousel;
