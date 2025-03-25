import React from "react";
import "./App.css";

const petitions = [
  {
    title: "Protect Monkey Habitats from Deforestation!",
    description: "Call on governments and companies to stop deforestation and preserve natural habitats.",
    image: "monkey.jpg",
  },
  {
    title: "Support Wildlife Rescue Centers!",
    description: "More funding and support for rehabilitation centers caring for injured and orphaned animals.",
    image: "rescue.jpg",
  },
  {
    title: "Create More Wildlife Corridors!",
    description: "Push for wildlife corridors to prevent habitat fragmentation and protect species.",
    image: "corridor.jpg",
  },
];

const HorizontalScroll = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-wrapper">
        {petitions.map((petition, index) => (
          <div className="card" key={index}>
            <h2>{petition.title}</h2>
            <p>{petition.description}</p>
            <button>Sign Now</button>
            <img src={petition.image} alt={petition.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
