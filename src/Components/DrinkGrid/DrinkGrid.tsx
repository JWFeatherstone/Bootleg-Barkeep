import React, { useEffect, useState } from 'react';
import './DrinkGrid.css';
import { NavLink, useParams } from 'react-router-dom';
import { DrinkCard } from '../DrinkCard/DrinkCard';
import { Drink } from '../../Types/Drink';
import { fetchCocktails } from '../API/apiCalls';

export const DrinkGrid = () => {
  const {alcohol} = useParams<{alcohol: string}>();
  const [drinks, setDrinks] = useState<Drink[]>([]);
  useEffect(() => {
    fetchCocktails(alcohol).then(drinkData => {
      setDrinks(drinkData)
    })
  }, [alcohol]);

  const drinkDisplay = drinks.map(drink => {
    return (
      <NavLink className="drink-nav" key={drink.idDrink} to={`/drink/${drink.idDrink}`} >
        <DrinkCard 
          idDrink={drink.idDrink} 
          strDrinkThumb={drink.strDrinkThumb} 
          strDrink={drink.strDrink} 
        />
      </NavLink>
    )
  })

  let alcoholName = alcohol.charAt(0).toUpperCase() + alcohol.slice(1);
  return (
    <div className="drink-wrapper">
      <h1 className="drink-title">{`${alcoholName} Cocktails`}</h1>
      <main className="drink-display">
        {drinkDisplay}
      </main>
    </div>
  )
}