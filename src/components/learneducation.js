import React from "react";
import "./learneducation.css";



const ClimateCard = ({ image, title, description }) => {
  return (
    <div className="climate-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="learn-more">Learn more</button>
      </div>
    </div>
  );
};

const ClimateCards = () => {
  const cardData = [
    {
      image: "/deer.jpg",
      title: "How Climate Change Disrupts Ecosystems",
      description: "Explanation of climate shifts and their effects on habitats."
    },
    {
      image: "/white.jpg",
      title: "Key Statistics",
      description: "Eye-opening facts about rising temperatures and species extinction."
    },
    {
      image: "/kid.jpg",
      title: "The Greenhouse Effect & Global Warming",
      description: "A simple visual representation of global warming."
    }
  ];

  return (
    <div className="climate-cards-container">
      {cardData.map((card, index) => (
        <ClimateCard key={index} {...card} />
      ))}
    </div>
  );
};

export default ClimateCards;

//this is the component that comes at the end of education corner in learn add it later