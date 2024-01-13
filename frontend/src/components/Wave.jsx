import React from "react";
import wave from "../assets/vague1.png";
import boat from "../assets/boat.png";
import "./Wave.css";

function Wave() {
  return (
    <div className="container-wave">
      <img src={wave} alt="vague" className="wave" />
      <img src={boat} alt="boat" className="boat" />
    </div>
  );
}

export default Wave;
