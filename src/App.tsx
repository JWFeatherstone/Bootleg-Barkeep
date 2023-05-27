import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import { fetchRandom } from './Components/API/apiCalls';
import Header from "./Components/Header/Header";
import { DrinkGrid } from './Components/DrinkGrid/DrinkGrid';
import { Drink } from './Types/Drink';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [randomDrink, setRandomDrink] = useState<Drink[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const getRandomDrink = useCallback(async () => {
    try {
      const jsonData = await fetchRandom();
      setRandomDrink(jsonData.drinks);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("An error occurred");
      }
    }
  }, []);

  useEffect(() => {
    getRandomDrink();
  }, [getRandomDrink]);

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home randomDrink={randomDrink} />
        </Route>
        <Route exact path="/drinks/:alcohol">
          <DrinkGrid />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
