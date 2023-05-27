import React from 'react';
import './DrinkGrid.css';
import { NavLink } from 'react-router-dom';
import { DrinkCard } from '../DrinkCard/DrinkCard';
import { Drink } from '../../Types/Drink';
// import { Header } from '../../Header/Header';

export const DrinkGrid = ({ drinks }: {drinks: Drink[]}) => {
  const drinkDisplay = drinks.map(drink => {
    return (
      <NavLink key={drink.idDrink} to={`/drink/${drink.idDrink}`} >
        <DrinkCard 
          idDrink={drink.idDrink} 
          strDrinkThumb={drink.strDrinkThumb} 
          strDrink={drink.strDrink} 
        />
      // </NavLink>
    )
  })
  return (
    <div>
      {/* <Header /> */}
      <main className="drink-display">
        {drinkDisplay}
      </main>
    </div>
  )
}