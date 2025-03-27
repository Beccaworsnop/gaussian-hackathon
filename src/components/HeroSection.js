import React from "react";
import "../App.css"; 

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="image-gallery">
        <img src={img1} alt="Animal 1" />
        <img src={img2} alt="Animal 2" />
        <img src={img3} alt="Animal 3" />
        <img src={img4} alt="Animal 4" />
      </div>
      <h1>Resources for a More Animal-Friendly and Sustainable World</h1>
      <p>
        Welcome to our resource center, where you'll find practical guides, interactive tools, and eco-friendly tips to help protect animals and the environment. Every action makes a difference!
      </p>
      <button className="learn-more">Learn more</button>
    </div>
  );
};

export default HeroSection;
