import React from "react";
import "../RandomDrink/RandomDrink.css";
import { Drink } from "src/Types/Drink";

const RandomDrink: React.FC<Drink> = ({ strDrink, strDrinkThumb, idDrink }) => {
  return (
    <>
    <div className="random-page-wrapper">
    <div className="lucky-line">
    <h2 className="lucky">Lucky Libations</h2>
    </div>
      <div className="random-container">
        <img className="random-img" src={strDrinkThumb} alt={strDrink} id={idDrink} />
        
        <h2 className="title title-two">{strDrink}</h2>
       
      </div>
      </div>
    </>
  );
};

export default RandomDrink;