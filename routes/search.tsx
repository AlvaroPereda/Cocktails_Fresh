import { Handlers, PageProps } from "$fresh/server.ts";
import { FreshContext } from "$fresh/src/server/mod.ts";
import CocktailComponent from "../components/CocktailComponent.tsx";
import { getCocktailName } from "../utils/CocktailAPI.ts";
import { Cocktail } from "../utils/types.ts";

export const handler:Handlers = {
    GET:async(req:Request, ctx:FreshContext<unknown,Cocktail[] | null>) => {
        const url = new URL(req.url)
        const name = url.searchParams.get("name")
        if (!name) return ctx.render(null)
        const cocktail = await getCocktailName(name)
        return ctx.render(cocktail)
    }
}

export default (props:PageProps<Cocktail[] | null>) => {
    return (
        <div class="search">
            <form action="/search" method="GET">
                <input type="text" name="name" placeholder="Cocktail name" required/>
                <button type="submit">Find</button>
            </form>
            {
            props.data 
            ? props.data.map(e => <CocktailComponent key={e.idDrink} {...e}/>) 
            : props.data !== null 
            ? <h1>No existe el coctail</h1> 
            : null
            }
        </div>
    )
}