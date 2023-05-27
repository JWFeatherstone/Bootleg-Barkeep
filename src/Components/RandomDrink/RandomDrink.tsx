import React from "react";
import "../RandomDrink/RandomDrink.css";

interface RandomDrinkProps {
  drinkId: string;
  randomImg: string;
  title: string;
}

const RandomDrink: React.FC<RandomDrinkProps> = ({ drinkId, randomImg, title }) => {
  return (
    <>
    <h2>Lucky Libations</h2>
    <div className="diamond-container">
      <div className="diamond-container-inner">
        <img src={randomImg} alt={title} id={drinkId} />
      </div>
    </div>
    <h2 className="title">{title}</h2>
    </>
  );
};

export default RandomDrink;