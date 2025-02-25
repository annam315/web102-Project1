import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import "./index.css";

const restaurants = [
  {
    name: "Levain Bakery",
    cuisine: "Bakery",
    image: "/images/levainbakery.jpg",
    restaurantLink: "https://www.levainbakery.com/",
  },
  {
    name: "Katz’s Delicatessen",
    cuisine: "Deli",
    image: "/images/katzdeli.jpg",
    restaurantLink: "https://katzsdelicatessen.com/",
  },
  {
    name: "Peter Luger",
    cuisine: "Steakhouse",
    image: "/images/peterluger.jpg",
    restaurantLink: "https://peterluger.com/",
  },
  {
    name: "John's of Bleecker Street",
    cuisine: "Pizza",
    image: "/images/johnsbleecker.jpg",
    restaurantLink: "https://johnsofbleecker.com/",
  },
  {
    name: "Balthazar",
    cuisine: "French",
    image: "/images/balthazar.jpg",
    restaurantLink: "https://balthazarny.com/",
  },
  {
    name: "L'Industrie Pizzeria",
    cuisine: "Pizza",
    image: "/images/lindustrie.jpeg",
    restaurantLink: "https://www.lindustriebk.com/",
  },
  {
    name: "Raku",
    cuisine: "Udon",
    image: "/images/rakunyc.webp",
    restaurantLink: "https://www.rakunyc.com/",
  },
  {
    name: "Chongqing Lao Zao",
    cuisine: "Chinese Hotpot",
    image: "/images/chongqing.jpeg",
    restaurantLink: "https://www.chongqinglaozao.com/",
  },
  {
    name: "Carbone",
    cuisine: "Italian",
    image: "/images/carbone.webp",
    restaurantLink: "https://carbonenewyork.com/",
  },
  {
    name: "Great NY Noodletown",
    cuisine: "Chinese",
    image: "/images/noodletown.jpeg",
    restaurantLink: "https://www.greatnewyorknoodletown.com/",
  },
];

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Must Try Restaurants in NYC</h1>
      <div className="card-container">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default App;
