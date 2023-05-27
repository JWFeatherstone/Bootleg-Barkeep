import React from "react";
import "../Home/Home.css";
import RandomDrink from "../RandomDrink/RandomDrink";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface HomeProps {
  randomDrink: Drink[]; 
}

const Home: React.FC<HomeProps> = ({ randomDrink }) => {
  const randomDrinkInfo = randomDrink.map(({ idDrink, strDrink, strDrinkThumb }) => (
    <RandomDrink
      drinkId={idDrink}
      key={idDrink}
      randomImg={strDrinkThumb}
      title={strDrink}
    />
  ));

  return (
    <section className="home-page">
      {randomDrinkInfo}
      <section>Some text.</section>
    </section>
  );
};

export default Home;
