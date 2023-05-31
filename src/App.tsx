import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import { fetchRandom } from './Components/API/apiCalls';
import Header from "./Components/Header/Header";
import { Error } from "./Components/Error/Error";
import { DrinkGrid } from './Components/DrinkGrid/DrinkGrid';
import DrinkDetails from './Components/DrinkDetails/DrinkDetails';
import { Drink } from './Types/Drink';
import { Details } from './Types/Details';
import { Route, Switch, Redirect } from 'react-router-dom';
import { error } from 'console';

const App = () => {
  const [randomDrink, setRandomDrink] = useState<Drink[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRandomDrink = useCallback(async () => {
    try {
      setIsLoading(true);
      const jsonData = await fetchRandom();
      setRandomDrink(jsonData.drinks);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg("Server error.");
      } else {
        setErrorMsg("Unknown error.");
      }
    }
  }, []);

  useEffect(() => {
    getRandomDrink();
  }, [getRandomDrink]);

  return (
    <>
      {(errorMsg) ? (
        <Error message={errorMsg} />
      ) : (
        <Switch>
          <Route exact path="/">
            <main>
              <Header />
              <Home randomDrink={randomDrink} />
            </main>
          </Route>
          <Route exact path="/drinks/:alcohol">
            <main>
              <Header />
              <DrinkGrid />
            </main>
          </Route>
          <Route exact path='/drink/:id'>
            <main>
              <Header />
              <DrinkDetails />
            </main>
          </Route>
          <Route exact path="/error">
            <Error message={errorMsg} />
          </Route>
        </Switch>)}
    </>
  );
}

export default App;
