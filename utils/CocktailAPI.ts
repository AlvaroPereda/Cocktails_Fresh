import { Cocktail, CocktailAPI } from "./types.ts";

export const getRandomCocktail = async():Promise<Cocktail[]> => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    const data = await fetch(url)
    const result: CocktailAPI = await data.json()
    return result.drinks
}

export const getCocktailID = async(id:string):Promise<Cocktail | undefined> => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const data = await fetch(url)
    const result: CocktailAPI = await data.json()
    if (!result.drinks) return undefined
    return result.drinks[0]
}

export const getCocktailName = async(name:string):Promise<Cocktail[] | undefined> => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    const data = await fetch(url)
    const result: CocktailAPI = await data.json()
    if (!result.drinks) return undefined
    return result.drinks
}