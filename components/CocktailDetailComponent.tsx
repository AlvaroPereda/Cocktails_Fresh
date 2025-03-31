import { FunctionalComponent } from "preact/src/index.d.ts";
import { Cocktail } from "../utils/types.ts";

type Data = {
    cocktail: Cocktail,
    favorite: boolean
}


const CocktailDetailComponent:FunctionalComponent<Data> = (props) => {
    const {idDrink,strDrink, strDrinkThumb, strInstructions} = props.cocktail
    const value = props.favorite
    return (
        <div class="cocktail-component">
            <h1>{strDrink}</h1>
            <div class="detail">
                <img src={strDrinkThumb} alt={strDrink} />
                <p>{strInstructions}</p>
            </div>
            <form action={`/cocktail/${idDrink}`}>
                <input type="hidden" name="favorites" value={value.toString()}/>
                {props.favorite ? <button type="submit">Add to favorites</button> : <button type="submit">Eliminate favorites</button>}
                
            </form>
        </div>
    )
}

export default CocktailDetailComponent