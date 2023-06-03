import React from "react";
import "../RandomDrink/RandomDrink.css";
import { Drink } from "src/Types/Drink";
import { NavLink } from "react-router-dom";

const RandomDrink: React.FC<Drink> = ({ strDrink, strDrinkThumb, idDrink:id }) => {
  return (
    <NavLink className="random-card-nav" to={`/drink/${id}`} key={id} >
    <div className="random-page-wrapper">
    <div className="lucky-line">
    <h2 className="lucky">LUCKY LIBATIONS</h2>
    </div>
      <div className="random-container">
        <img className="random-img" src={strDrinkThumb} alt={strDrink} id={id} />
        <h2 className="title title-two">{strDrink}</h2>
      </div>
      </div>
    </NavLink >
  );
};

export default RandomDrink;