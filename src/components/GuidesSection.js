import React from "react";
import "./GuidesSection.css";
import guide1 from "../assets/guide1.png";
import guide2 from "../assets/guide2.png";
import guide3 from "../assets/guide3.png";

const GuidesSection = () => {
  return (
    <div className="guides-section">
      <h2><span>DISCOVER YOUR</span> <strong>Guides</strong></h2>
      <div className="guides-container">
        <div className="guide-card">
          <img src={guide1} alt="Living Cruelty-Free" />
          <div className="guide-label">Living Cruelty-Free</div>
        </div>
        <div className="guide-card">
          <img src={guide2} alt="Helping Local Wildlife" />
          <div className="guide-label">Helping Local Wildlife</div>
        </div>
        <div className="guide-card">
          <img src={guide3} alt="Plant-Based Eating" />
          <div className="guide-label">Plant-Based Eating</div>
        </div>
      </div>
    </div>
  );
};

export default GuidesSection;
