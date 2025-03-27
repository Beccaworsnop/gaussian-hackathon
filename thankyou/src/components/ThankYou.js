import React from "react";
import "../styles.css"; 

console.log("ThankYou component loaded");

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h1>Thanks for your contribution for saving the wild life </h1>
      <img
        src="thnkyou.png" 
        alt="Happy Sloth"
        className="thank-you-image"
      />
      <p className="message">You just made a Bambi happy </p>
    </div>
  );
};

export default ThankYou;

