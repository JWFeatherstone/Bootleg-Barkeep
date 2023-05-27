import React from "react";
import "../RandomDrink/RandomDrink.css";

interface RandomDrinkProps {
  drinkId: string;
  randomImg: string;
  title: string;
}

const RandomDrink: React.FC<RandomDrinkProps> = ({ drinkId, randomImg, title }) => {
  return (
    <div className="diamond-container">
      <div className="diamond-container-inner">
        <h2>Lucky Libations</h2>
        <h2 className="title">{title}</h2>
        <img src={randomImg} alt={title} id={drinkId} />
        <h4>Try Something New</h4>
      </div>
    </div>
  );
};

export default RandomDrink;