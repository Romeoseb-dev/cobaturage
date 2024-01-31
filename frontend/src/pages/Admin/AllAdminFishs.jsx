import React from "react";

import { useLoaderData } from "react-router-dom";

function AllAdminFishs() {
  const allFishs = useLoaderData();

  return (
    <div>
      <div className="all-img-carousel-galerie">
        {allFishs.map((fish) => (
          <button
            key={fish.id}
            type="button"
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

export default AllAdminFishs;
