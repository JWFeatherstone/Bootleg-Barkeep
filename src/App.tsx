import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import { fetchRandom } from './Components/API/apiCalls';
import Header from "./Components/Header/Header";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { DrinkGrid } from './Components/DrinkGrid/DrinkGrid';
import DrinkDetails from './Components/DrinkDetails/DrinkDetails';
import { Drink } from './Types/Drink';
import { Details } from './Types/Details';
import { Route, Switch, Redirect, useParams } from 'react-router-dom';
import { error } from 'console';



const App = () => {
  const [randomDrink, setRandomDrink] = useState<Drink[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRandomDrink = useCallback(async () => {
    try {
      setIsLoading(true);
      const jsonData = await fetchRandom();
      setRandomDrink(jsonData);
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
      {errorMsg ? (
        <ErrorPage message={errorMsg} />
      ) : (
        <>
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
            <Route exact path="/drink/:id" render={({ match }) => (
              <main>
                <Header />
                <DrinkDetails id={match.params.id} />
              </main>
            )} />
            <Route exact path="/error">
              <ErrorPage message={errorMsg} />
            </Route>
            <Route path="*">
              <Redirect to="/error" />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
};

export default App;
