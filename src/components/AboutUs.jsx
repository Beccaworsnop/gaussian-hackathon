import React from "react";
import "../styles/AboutUs.css";
import tiger from "../assets/Donation.png"; 
import MissionAndPartners from "./MissionAndPartners"; 



const AboutUs = () => {
  return (
    <div>
      {/* Section About */}
      <div className="about-container">
        <div className="about-text">
          <h2>
            <span className="underline">_____</span> About <span className="gray">Us</span>
          </h2>
          <p>
            At Bambi’s Vision, we are dedicated to protecting wildlife and preserving natural ecosystems through education, awareness, and action...
          </p>
          <button className="see-more">See More</button>
        </div>

        {/* Image avec overlay */}
        <div className="about-image">
          <img src={tiger} alt="Tiger" />
          <div className="overlay">
            <p>Donations</p>
            <h3>HELP US PROTECT</h3>
            <p>MORE ANIMALS</p>
            <button className="donate"></button>
          </div>
        </div>
      </div>

      {/* Ajout de la section Our Mission & Partnerships */}
      <MissionAndPartners />
    </div>
  );
};

export default AboutUs;
