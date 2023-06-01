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
    <div className="random-page-wrapper">
    <div className="lucky-line">
    <h2 className="lucky">Lucky Libations</h2>
    </div>
      <div className="random-container">
        <img className="random-img" src={randomImg} alt={title} id={drinkId} />
        
        <h2 className="title title-two">{title}</h2>
       
      </div>
      </div>
    </>
  );
};

export default RandomDrink;