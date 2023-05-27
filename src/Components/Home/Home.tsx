import React from "react";
import "../Home/Home.css";
import RandomDrink from "../RandomDrink/RandomDrink";
import { cleanDrinkData } from "../API/utilities";
import { Drink } from "../../Types/Drink";

interface HomeProps {
  randomDrink: Drink[]; 
}

const Home: React.FC<HomeProps> = ({ randomDrink }) => {
  const cleanedDrinkData = cleanDrinkData(randomDrink); 

  const randomDrinkInfo = cleanedDrinkData.map(({ drinkId, randomImg, title }) => (
    <RandomDrink
      drinkId={drinkId}
      key={drinkId}
      randomImg={randomImg}
      title={title}
    />
  ));

  return (
    <section className="home-page">
      {randomDrinkInfo}
      <section className="section-class">Some text.</section>
    </section>
  );
};

export default Home;