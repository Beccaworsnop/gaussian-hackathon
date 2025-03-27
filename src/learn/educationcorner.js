import React from "react";
import "./education.css";

const EducationCorner = () => {
  return (
    <section className="education-corner">
      <div className="text-content">
        <h2 className="title">ANIMALS</h2>
        <p className="description">
          Discover fascinating facts about different animal species, their roles
          in ecosystems, and the challenges they face. Our easy-to-understand
          content makes learning engaging for all ages.
        </p>
        <button className="learn-more">Learn More</button>
      </div>

      <div className="image-gallery">
        <img src="/INFO4.jpg" alt="Monkey" />
        <img src="/INFO3.jpg" alt="Penguin" />
        <img src="/INFO2.jpg" alt="Red Panda" />
        <img src="/INFO1.jpg" alt="Snow Leopard" />
      </div>

      {/* Information Section */}
      <div className="info-section">
        <h3 className="info-title">INFORMATION :</h3>
        <p className="info-text">
          Did you know? Owls can rotate their heads up to 270 degrees! This
          incredible flexibility allows them to spot prey from all angles
          without moving their bodies.
        </p>
      </div>

      {/* Climate Change Section */}
      <div className="climate-section">
        <img
          src="climate.jpg"
          alt="Climate Change"
          className="climate-image"
        />
        <div className="climate-text">
          <h2>Climate Change & Wildlife:</h2>
          <p>
            Climate change is one of the biggest threats to wildlife and natural
            ecosystems. Rising temperatures, extreme weather, and habitat
            destruction are forcing many species to adapt—or face extinction.
          </p>
          <button className="learn-more">Learn more</button>
        </div>
      </div>

      {/* How You Can Help Section */}
      <div className="help-section">
        <div className="help-text">
          <h2>How You Can Help</h2>
          <p>
            Small actions can make a big difference! Here are some easy ways to
            protect animals and live more sustainably.
          </p>
          <button className="learn-more">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default EducationCorner;