import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

import "./Home.css";
import Wave from "../components/Wave";
import Description from "../components/Description";
import ImgScrool from "../components/ImgScrool";

function Home() {
  return (
    <div className="all-page">
      <Navbar />
      <h1 className="title-home">Embarquez avec moi en cobaturage !</h1>

      <Carousel />
      <ImgScrool />

      <Wave />

      <Description />
    </div>
  );
}

export default Home;
