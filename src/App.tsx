import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import { fetchRandom } from './Components/API/apiCalls';
import Header from "./Components/Header/Header";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { DrinkGrid } from './Components/DrinkGrid/DrinkGrid';
import DrinkDetails from './Components/DrinkDetails/DrinkDetails';
import { Drink } from './Types/Drink';
import { Route, Switch } from 'react-router-dom';



const App = () => {
  const [randomDrink, setRandomDrink] = useState<Drink[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const getRandomDrink = useCallback(async () => {
    try {
      const jsonData = await fetchRandom();
      setRandomDrink(jsonData);
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
        <ErrorPage/>
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
          <Route exact path='/drink/:id' render={({ match }) => (
            <main>
              <Header />

              <DrinkDetails id={match.params.id} />
            </main>

          )} />
          <Route exact path="/error">
            <ErrorPage />
          </Route>
        </Switch >)
      }

    </>
  );
}

export default App;
