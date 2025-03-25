import React from "react";
import "./App.css";

const TakeAction = () => {
  return (
    <div className="take-action-container">
      {/* Donation Projects */}
      <section className="donation-projects">
        <h2>Donation Projects</h2>
        <div className="project-card">
          <img src="/images/fox.jpg" alt="Fox in the snow" className="project-image" />
          <div className="project-info">
            <h3>Build sanctuary for wildlife</h3>
            <p>Help us build a sanctuary where wildlife can find safety, care, and a second chance at life.</p>
            <div className="progress-bar">
              <span className="raised">2,000$</span>
              <input type="range" min="0" max="40000" value="2000" readOnly />
              <span className="goal">40,000$</span>
            </div>
            <div className="donation-buttons">
              <button>20$</button>
              <button>50$</button>
              <button>100$</button>
              <button>150$</button>
              <button className="custom">Custom Money</button>
            </div>
            <button className="donate-now">Donate Now</button>
          </div>
          <img src="/images/monkeys.jpg" alt="Two monkeys" className="project-image" />
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="volunteer">
        <h2>Volunteer</h2>
        <div className="volunteer-card">
          <img src="/images/planting.jpg" alt="Hands holding a plant" className="volunteer-image" />
          <div className="volunteer-info">
            <h3>Habitat Restoration Volunteer</h3>
            <p>Plant trees and restore natural habitats for endangered species.</p>
            <p>Location: <span className="location">Franklin Farm</span></p>
            <p>Time: <span className="time">21.07.2025 at 10:00 am</span></p>
            <button className="take-part">Take part now</button>
          </div>
          <img src="/images/teaching.jpg" alt="Volunteer teaching kids" className="volunteer-image" />
        </div>
      </section>
    </div>
  );
};

export default TakeAction;

//import component petition here 