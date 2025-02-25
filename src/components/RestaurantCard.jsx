import React from "react";

const RestaurantCard = ({ name, cuisine, image, restaurantLink }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3 className="card-title">{name}</h3>
      <p className="card-cuisine">{cuisine}</p>
      <a
        href={restaurantLink}
        className="card-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Restaurant
      </a>
    </div>
  );
};

export default RestaurantCard;
