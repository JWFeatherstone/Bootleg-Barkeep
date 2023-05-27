import React, { useEffect, useState } from 'react';
import './DrinkGrid.css';
import { NavLink, useParams } from 'react-router-dom';
import { DrinkCard } from '../DrinkCard/DrinkCard';
import { Drink } from '../../Types/Drink';
import { fetchCocktails } from '../../apiCalls';

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
      <NavLink key={drink.idDrink} to={`/drink/${drink.idDrink}`} >
        <DrinkCard 
          idDrink={drink.idDrink} 
          strDrinkThumb={drink.strDrinkThumb} 
          strDrink={drink.strDrink} 
        />
      </NavLink>
    )
  })

  return (
    <div>
      <main className="drink-display">
        {drinkDisplay}
      </main>
    </div>
  )
}