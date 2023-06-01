import React from "react";
import "./DrinkCard.css";
import { Drink } from "../../Types/Drink";
import { NavLink } from 'react-router-dom';



export const DrinkCard = ({ strDrinkThumb: image, strDrink: name, idDrink: id }: Drink) => {
  return (
    <NavLink to={`/drink/${id}`} key={id} >
      <div id={id} className="drink-card" >
        <img className="drink-image" src={image} alt={name} />
        <h2 className="drink-name">{name}</h2>
      </div>
    </NavLink >
  );
} 
