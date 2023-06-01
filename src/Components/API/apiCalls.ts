import { Drink } from "../../Types/Drink";
import { Details } from "../../Types/Details"


const fetchRandom = async (): Promise<Drink[]> => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
      if (response.ok) {
        return (await response.json()).drinks;
      } else {
        throw new Error(`Please try again there is an error. code: ${response.status}`)
      };
};

const fetchCocktails = async (alcohol: string): Promise<Drink[]> => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`);
  if (response.ok) {
    return (await response.json()).drinks;
  } else {
    throw new Error(`Please try again there is an error. code: ${response.status}`)
  };
}

const fetchDetails = async (id: string): Promise<Details> => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  if (response.ok) {
    return (await response.json()).drinks[0];
  } else {
    throw new Error(`Please try again there is an error. code: ${response.status}`)
  };
}



export { fetchRandom, fetchCocktails, fetchDetails }