import React from "react";
import "./Card.css";

const Card = ({ image, title, location, description }) => {
  return (
    <div className="travel-card">
      <img src={image} alt={title} className="travel-image" />
      <div className="travel-content">
        <h2 className="travel-title">{title}</h2>
        <p className="travel-location">{location}</p>
        <p className="travel-description">{description}</p>
        <button className="travel-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default Card;
