import React, { useEffect, useState } from 'react';
import './DrinkGrid.css';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import { DrinkCard } from '../DrinkCard/DrinkCard';
import { Drink } from '../../Types/Drink';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { fetchCocktails } from '../API/apiCalls';

export const DrinkGrid = () => {
  const { alcohol } = useParams<{ alcohol: string }>();
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    fetchCocktails(alcohol).then(drinkData => {
      setDrinks(drinkData)
    }).catch(error => {
      if (error instanceof Error) {
        setErrorMsg("Server error.");
      } else {
        setErrorMsg("Unknown error.");
      }
    }
    )
  }, [alcohol]);

  const drinkDisplay = drinks.map(drink => {
    return (
        <DrinkCard
          idDrink={drink.idDrink}
          strDrinkThumb={drink.strDrinkThumb}
          strDrink={drink.strDrink}
        />
    )
  })

  let title = alcohol.charAt(0).toUpperCase() + alcohol.slice(1) + " Cocktails";
  return (
    <>

    {errorMsg ? (
      <Redirect push to="/error" />
    ) : (
    <div className="drink-wrapper">
      <div className="title-wrapper">
      <h1 className="drink-title">{title}</h1>
      </div>
      <main className="drink-display">
        {drinkDisplay}
      </main>
    </div>
    )}

    </>
  )
}