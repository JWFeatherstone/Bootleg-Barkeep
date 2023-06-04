import React from "react";
import "../Home/Home.css";
import RandomDrink from "../RandomDrink/RandomDrink";
import { cleanDrinkData } from "../API/utilities";
import { HomeProps } from "src/Types/HomeProps";
import { RandomQuote } from "../RandomQuote/RandomQuote";

const Home: React.FC<HomeProps> = ({ randomDrink }) => {
  const cleanedDrinkData = cleanDrinkData(randomDrink);

  const randomDrinkInfo = cleanedDrinkData.map(
    ({ drinkId, randomImg, title }) => (
      <RandomDrink
        idDrink={drinkId}
        key={drinkId}
        strDrinkThumb={randomImg}
        strDrink={title}
      />
    )
  );

  return (
    <section className="home-page">
      {randomDrinkInfo}
      <RandomQuote />
    </section>
  );
};

export default Home;
