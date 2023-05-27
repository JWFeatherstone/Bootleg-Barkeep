import { Drink } from "./Types/Drink";

const fetchRandom = (): Promise<any> => {
  return fetch(`https:www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(res => {
    if(!res.ok){
      throw new Error(`Please try again there is an error. code: ${res.status}`)
    } else {
      return res.json()
    };
  });
};

const fetchCocktails = async (alcohol: string): Promise<Drink[]> => {
  const response = await fetch(`https:www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`);
  if(response.ok){
    return (await response.json()).drinks;
  } else {
    throw new Error(`Please try again there is an error. code: ${response.status}`)
  };
}

export { fetchRandom, fetchCocktails }