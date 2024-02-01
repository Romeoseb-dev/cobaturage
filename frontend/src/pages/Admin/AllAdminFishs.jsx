import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import "./AllAdminFishs.css";

function AllAdminFishs() {
  const allFishs = useLoaderData();

  return (
    <div>
      <div className="all-img-admin">
        {allFishs.map((fish) => (
          <Link key={fish.id} to={`/fish/${fish.id}`}>
            <img className="img-admin" src={fish.picture} alt={fish.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllAdminFishs;
