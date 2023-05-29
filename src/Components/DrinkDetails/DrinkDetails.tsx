//create initial HTML framework for drink details component

import React from 'react';
import '../DrinkDetails/DrinkDetails.css';
import { fetchDetails } from '../API/apiCalls';
import { Details } from "../../Types/Details"


const DrinkDetails = ({ strDrinkThumb: image, strDrink: name, idDrink: id, strGlass: glass, strInstructions: instructions, strIngredients: ingredients, strMeasures: amount }: Details) => {
    return (
        <div id={id} className="drink-details">
            <div className="left-side">
                <h2 className="detail-name">{name}</h2>
                <img className="detail-image" src={image} alt={name} />
            </div>
            <div className="right-side">
                <h4 className="glass">{glass}</h4>
                <p className="ingredients">{ingredients}{amount}</p>
                <p className="instructions">{instructions}</p>
            </div>
        </div>
    )
}


export default DrinkDetails










