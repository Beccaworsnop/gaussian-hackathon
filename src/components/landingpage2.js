import React from "react";
import "./landingpage2.css";

const Page2 = () => {
  return (
    <div className="page2-container">
      <h2 className="title">From Despair to Hope</h2>
      <p className="quote">
        <span className="quote-symbol">❝</span>
        Bambi was found lost and alone, but thanks to people like you, he got a second chance. 
        His story is one of many waiting to be told.
        <span className="quote-symbol">❞</span>
      </p>
      <div className="images-container">
        <div className="image-wrapper">
          <img src="/before.png" alt="Bambi before recovery" className="image" />
          <p className="image-caption">Before</p>
        </div>
        <div className="image-wrapper">
          <img src="/after.png" alt="Bambi after recovery" className="image" />
          <p className="image-caption">After</p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
