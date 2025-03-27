import React from "react";
import "../styles/MissionAndPartners.css";


import zooLogo from "../assets/g_ZNElogo.gif"; 
import wwfLogo from "../assets/wwf.png"; 
import sanctuaryLogo from "../assets/partner.png"; 
import protectIcon from "../assets/hand-heart.svg";
import rescueIcon from "../assets/hospital.svg";
import awarenessIcon from "../assets/megaphone.svg";
import engageIcon from "../assets/hand-shake.png";

import instagramIcon from "../assets/instagram.svg"; 
import facebookIcon from "../assets/facebook.svg"; 
import tiktokIcon from "../assets/tiktok.svg"; 




const MissionAndPartners = () => {
  return (
    <div className="mission-partners-container">
      {/* Section "Our Mission" */}
      <section className="mission">
        <h2><span className="underline">_____</span> Our <span className="gray">Mission</span></h2>
        <div className="mission-cards">
          <div className="mission-card">
            <img src={protectIcon} alt="Protect Animals Habitats" className="icon" />
            <h3>Protect Animals Habitats</h3>
         </div>
          <div className="mission-card">
             <img src={rescueIcon} alt="Support Rescue & Rehabilitation" className="icon" />
            <h3>Support Rescue & Rehabilitation</h3>
          </div>
          <div className="mission-card">
            <img src={awarenessIcon} alt="Raise Awareness & Educate" className="icon" />
            <h3>Raise Awareness & Educate</h3>
          </div>
          <div className="mission-card">
             <img src={engageIcon} alt="Engage Volunteers & Activists" className="icon" />
            <h3>Engage Volunteers & Activists</h3>
          </div>
        </div>
      </section>

      {/* Section "Partnerships" */}
      <section className="partners">
        <h2><span className="underline">_____</span> Partnerships</h2>
        <div className="partners-logos">
          <img src={zooLogo} alt="Zoo New England" className="zoo-logo" />
          <img src={wwfLogo} alt="WWF" className="wwf-logo" />
          <img src={sanctuaryLogo} alt="The Wild Animal Sanctuary" className="sanctuary-logo" />
        </div>
      </section>

      {/* Section "Contact Us" */}
      <section className="contact">
        <p>Contact us: +12369800348 | Bambi's Vision</p>
        <div className="social-icons">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
            <img src={tiktokIcon} alt="TikTok" className="social-icon" />
        </div>
      </section>
    </div>
  );
};

export default MissionAndPartners;
