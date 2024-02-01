import React from "react";
import leurre from "../assets/leurre.png";
import moule from "../assets/moule.png";
import "./ImgFishing.css";

function ImgFishing() {
  return (
    <div>
      <div className="container-nav">
        <img className="nav-leurre" src={leurre} alt="leurre" />
        <h1 className="nav-title-fishing">
          Les différentes pêches en bateau:{" "}
        </h1>
        <img className="nav-moule" src={moule} alt="moule" />
      </div>
    </div>
  );
}

export default ImgFishing;
