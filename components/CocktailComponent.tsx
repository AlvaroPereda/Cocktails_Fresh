import { FunctionalComponent } from "preact/src/index.d.ts";
import { Cocktail } from "../utils/types.ts";

const CocktailComponent:FunctionalComponent<Cocktail> = (props) => {
    const {idDrink, strDrink, strDrinkThumb} = props
    return(
        <div class="cocktail-component">
            <h2>{strDrink}</h2>
            <a href={`/cocktail/${idDrink}`}>
                <img src={strDrinkThumb} alt={strDrink} />
            </a>
        </div>
    )
}

export default CocktailComponent