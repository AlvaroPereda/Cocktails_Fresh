import { OptionalId } from "mongodb";

export type CocktailAPI = {
    drinks: {
        idDrink: string
        strDrink: string
        strDrinkThumb: string
        strInstructions:string
    }[]

}

export type Cocktail = {
    idDrink: string
    strDrink: string
    strDrinkThumb: string
    strInstructions?:string
}

export type CocktailModel = OptionalId<{
    idDrink: string
    strDrink: string
    strDrinkThumb: string
}>

export type CocktailMongo = {
    id: string
    idDrink: string
    strDrink: string
    strDrinkThumb: string
}