import { Drink } from "../../Types/Drink";

interface RandomResponse {
  drinks: Drink[];
}

const fetchRandom = (): Promise<RandomResponse> => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Please try again there is an error. code: ${res.status}`)
      } else {
        return res.json() as Promise<RandomResponse>
      };
    });
};

const fetchCocktails = async (alcohol: string): Promise<Drink[]> => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`);
  if (response.ok) {
    return (await response.json()).drinks;
  } else {
    throw new Error(`Please try again there is an error. code: ${response.status}`)
  };
}

const fetchDetails = (id: string): Promise<Drink[]> => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Please try again there is an error. code: ${res.status}`)
      } else {
        return res.json()
      }
    })
}



export { fetchRandom, fetchCocktails, fetchDetails }