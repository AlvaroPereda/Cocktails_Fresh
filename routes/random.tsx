import CocktailComponent from "../components/CocktailComponent.tsx";
import { getRandomCocktail } from "../utils/CocktailAPI.ts";

export default async() => {
    const cocktail = await getRandomCocktail()
    if (!cocktail) return (<h1>No existe ese cocktail</h1>)
    return (
        <div class="cocktail-almacen">
            {cocktail.map(e => <CocktailComponent key={e.idDrink} {...e}/>)}
        </div>
    )
}