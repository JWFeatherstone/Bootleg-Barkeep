import React, { Component } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { fetchRandom } from './apiCalls';

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
        <Home randomDrink={randomDrink} />
      </main>
    );
  }
}

export default App;
