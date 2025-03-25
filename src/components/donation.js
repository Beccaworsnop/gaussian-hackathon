import React from "react";
import "./donation.css";

const WildlifeDonation = () => {
  return (
    <div className="donation-container">
      <img src="/images/fox.jpg" alt="Fox" className="wildlife-image left" />
      <div className="donation-card">
        <h2>Build sanctuary for wildlife</h2>
        <p>
          Help us build a sanctuary where wildlife can find safety, care, and a second chance at life.
        </p>
        <div className="progress-bar">
          <div className="progress" style={{ width: "5%" }}></div>
        </div>
        <div className="donation-info">
          <div>
            <span>Raised Money</span>
            <strong>2,000$</strong>
          </div>
          <div>
            <span>Goal</span>
            <strong>40,000$</strong>
          </div>
        </div>
        <div className="amount-options">
          <button>20$</button>
          <button>50$</button>
          <button>100$</button>
          <button>150$</button>
        </div>
        <div className="custom-donation">
          <button className="custom-money">Custom Money</button>
          <button className="donate-now">Donate Now</button>
        </div>
      </div>
      <img src="/images/bear.jpg" alt="Bear" className="wildlife-image right" />
    </div>
  );
};

export default WildlifeDonation;

//again link pics later