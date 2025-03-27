import React from "react";
import "./App.css";


const MainSections = () => {
  return (
    <div className="main-container">
      {/* Animals Section */}
      <section className="animals-section">
        <h2 className="section-title">
          <span className="stories-text">STORIES</span> <br /> ANIMALS
        </h2>
        <p className="section-description">
          Welcome to our Stories Section! Here, we share heartfelt stories of rescued animals, conservation victories, and the incredible people working to protect wildlife.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </section>

      {/* Learn Section */}
      <section className="learn-section">
        <h2 className="learn-title">
          <span className="underline"></span> <strong>LEARN</strong> <span className="light-text">with us</span>
        </h2>
        <p className="learn-description">
          Explore our available stories and resources, specially catered to every level and learn with us!
        </p>
      </section>
      <div className="stories-container">
      <h2>Explore our available stories and resources, specially catered to every level and learn with us!</h2>
      <div className="stories-grid">
        <div className="story-card">
          <h3>Preschool stories</h3>
          <img src="./adem.png" alt="Preschool stories" />
          <button>See More!</button>
        </div>
        <div className="story-card">
          <h3>Primary stories</h3>
          <img src="./tiger.png" alt="Primary stories" />
          <button>See More!</button>
        </div>
        <div className="story-card">
          <h3>Secondary stories</h3>
          <img src="./fatthing.png" alt="Secondary stories" />
          <button>See More!</button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default MainSections;