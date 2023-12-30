import React from "react";

import "./Home.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="all-page">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default Home;
