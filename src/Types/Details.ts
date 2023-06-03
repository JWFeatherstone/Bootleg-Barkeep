export interface Details {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
    strGlass: string;
    strInstructions: string;
    strIngredients: string[];
    strMeasures: string[];
    id: string;
    [key: string]: any;
  }
  
  export type DrinkDetailsProps = {
    id: string;
  };
  
  export type DrinkDetailsState = {
    drink: Details;
  };