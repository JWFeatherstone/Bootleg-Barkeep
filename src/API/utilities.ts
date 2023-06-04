import { RandomDrinkProps } from "src/Types/RandomDrinkProps";
import { Drink } from "../Types/Drink";
import { Details } from "src/Types/Details";

export const cleanRandomDrinkData = (drinkData: Drink[]): RandomDrinkProps[] => {
  return cleanDrinkData(drinkData) 
    .map(({ idDrink, strDrink, strDrinkThumb }: Drink) => ({
      drinkId: idDrink,
      randomImg: strDrinkThumb,
      title: capitalizeTitle(strDrink),
    }));
};

const capitalizeTitle = (title: string): string => {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const cleanDrinkData = (drinkData: Drink[]): Drink[] => {
  return drinkData
    .filter(
      (drink: Drink) => drink.idDrink && drink.strDrink && drink.strDrinkThumb
    );
};

export const cleanDrinkDetailsData = (drinkData: Details): Details => {
    if (drinkData.idDrink && drinkData.strDrink && drinkData.strDrinkThumb && 
      drinkData.strGlass && drinkData.strInstructions){
      return drinkData;
    }
    else {
      return { 
        strDrink: "",
        strDrinkThumb: "",
        idDrink: "",
        strGlass: "",
        strInstructions: "",
        strIngredients: [],
        strMeasures: [],
        id: "",
      }
    }
};


