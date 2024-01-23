import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

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
    const intervalId = setInterval(handleNext, 5000);

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
      <h1 className="coboaturage">COBATURAGE</h1>
    </div>
  );
}

export default Carousel;
