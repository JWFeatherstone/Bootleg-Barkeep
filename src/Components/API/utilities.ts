import { Drink } from '../../Types/Drink';

export const cleanDrinkData = (drinkData: Drink[]): { drinkId: string; randomImg: string; title: string }[] => {
  return drinkData
    .filter((drink: Drink) => drink.idDrink && drink.strDrink && drink.strDrinkThumb)
    .map(({ idDrink, strDrink, strDrinkThumb }: Drink) => ({
      drinkId: idDrink,
      randomImg: strDrinkThumb,
      title: strDrink,
    }));
};