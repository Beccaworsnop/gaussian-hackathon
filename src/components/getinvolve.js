import React from "react";
import "./getinvolved.css";

const waysToHelp = [
  { icon: "./hand-coins.svg", text: "Become a monthly donor" },
  { icon: "/gift.svg", text: "Wildlife saving" },
  { icon: "/icons/money.png", text: "Corporate Partnerships" }, //add the logo when design team send it 
  { icon: "./hand_shake.svg", text: "Volunteer Your time" },
];

const WaysToHelp = () => {
  return (
    <div className="help-container">
      <h2>
        How You Can Help – Ways to Get Involved{" "}
        <img src="/icons/heart.png" alt="Heart Icon" className="header-icon" />
      </h2>
      <p>Be Part of the Solution</p>
      <div className="cards-container">
        {waysToHelp.map((way, index) => (
          <div key={index} className="card">
            <div className="icon">
              <img src={way.icon} alt={way.text} />
            </div>
            <p>{way.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaysToHelp;

//link the pictures !