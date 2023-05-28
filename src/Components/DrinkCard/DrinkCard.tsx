import React from "react";
import "./DrinkCard.css";
import { Drink } from "../../Types/Drink";

export const DrinkCard = ({ strDrinkThumb: image, strDrink: name, idDrink: id }: Drink) => {
  return (
    <div id={id} className="drink-card" >
      <img className="drink-image" src={image} alt={name}/>
      <h2 className="drink-name">{name}</h2>
    </div>
  );
} 
