import React, { Component } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { fetchRandom } from './apiCalls';
import { DrinkGrid } from './Components/DrinkGrid/DrinkGrid';
import { Route } from 'react-router-dom';

interface AppState {
  randomDrink: any[];
  error: string;
  isLoading: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      randomDrink: [],
      error: '',
      isLoading: true,
    };
  }

  componentDidMount(): void {
    this.getRandomDrink();
  }

  getRandomDrink = () => {
    fetchRandom()
      .then((jsonData) => {
        this.setState({ randomDrink: jsonData.drinks, isLoading: false });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    const { randomDrink } = this.state;
    return (
      <main>
        <Header></Header>
        <Route exact path="/">
          <Home randomDrink={randomDrink} />
        </Route>
        <Route exact path="/drinks/:alcohol">
          <DrinkGrid />
        </Route>
      </main>
      
    );
  }
}

export default App;
