import React from "react";
import "./landingpage3.css";
import LandingPage2 from "./landingpage2";

const LandingPage3 = () => {
  return (
    <div className="animal-decline-container">
      <h2>Why Animals Need Us Now More Than Ever?</h2>
      <div className="stats-container">
        <div className="stats">
          <div className="stat-item">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Turtle_icon.svg/512px-Turtle_icon.svg.png" 
              alt="Turtle" 
              width={50} 
            />
            <div>
              <p>85%</p>
              <p>Freshwater Species</p>
            </div>
          </div>
          <div className="stat-item">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Elephant.svg/512px-Elephant.svg.png" 
              alt="Elephant" 
              width={50} 
            />
            <div>
              <p>70%</p>
              <p>Terrestrial Species</p>
            </div>
          </div>
          <div className="stat-item">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Fish_icon.svg/512px-Fish_icon.svg.png" 
              alt="Fish" 
              width={50} 
            />
            <div>
              <p>50%</p>
              <p>Freshwater Species</p>
            </div>
          </div>
        </div>
        <div className="chart-container">
          <div className="chart">
            <div className="circle">
              <span className="percentage">85%</span>
              <p>Overall decline in the wildlife population</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage3 ;

//this is incomplete yet 