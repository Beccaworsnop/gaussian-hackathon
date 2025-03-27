import React from 'react';
import './EcoTipsSection.css';
import ecoTipsImage from '../assets/eco-tips.jpg';

const EcoTipsSection = () => {
  return (
    <section className="eco-tips">
      <h2>Eco-Tips: Small Changes, Big Impact</h2>
      <img src={ecoTipsImage} alt="Eco Tips" className="eco-image" />

      <div className="eco-grid">
        <div className="eco-card">
          <h3>Reduce Plastic Waste</h3>
          <p>Plastic pollution is one of the biggest threats to marine life and the environment...</p>
          <a href="/">Check out our guide to a zero-waste lifestyle!</a>
        </div>

        <div className="eco-card">
          <h3>Choose Sustainable Transportation</h3>
          <p>Cars and planes contribute significantly to greenhouse gas emissions...</p>
          <a href="/">Calculate your transportation impact!</a>
        </div>

        <div className="eco-card">
          <h3>Shop Responsibly</h3>
          <p>Every purchase we make has an environmental cost...</p>
          <a href="/">Discover our list of ethical brands!</a>
        </div>

        <div className="eco-card">
          <h3>Eco-Friendly Gardening</h3>
          <p>A sustainable garden benefits both the environment and local wildlife...</p>
          <a href="/">Learn how to create a sustainable garden!</a>
        </div>
      </div>
    </section>
  );
};

export default EcoTipsSection;
