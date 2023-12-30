import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

import "./Home.css";
import Wave from "../components/Wave";

function Home() {
  return (
    <div className="all-page">
      <Navbar />

      <Carousel />

      <Wave />
    </div>
  );
}

export default Home;
