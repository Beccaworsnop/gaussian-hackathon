import './landingpage1.css';
import React from 'react';

export default function LandingPage1() {
  return (
    <div className="landing-page">

      <header className="hero-section">
        <div className="hero-text">
          <h1>
            Bambi’s Vision:
            <br /> A Future for Animals
          </h1>
          <p>Join us in creating a world where animals are safe and free.</p>
          <div className="hero-buttons">
            <button className="get-started">Get Started</button>
            <button className="watch-video">▶ Watch Video</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/LION.png" alt="Lion" />
        </div>
      </header>
    </div>
  );
}