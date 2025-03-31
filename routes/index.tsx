import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CocktailComponent from "../components/CocktailComponent.tsx";
import initMongodb from "../utils/database.ts";
import { Cocktail, CocktailModel } from "../utils/types.ts";

export const handler:Handlers = {
  GET: async(_req:Request, ctx:FreshContext<unknown, Cocktail[]>) => {
    const CocktailCollection = await initMongodb()
    const result:CocktailModel[] = await CocktailCollection.find().toArray()
    return ctx.render(result.map(e => ({
      ...e
    })))
  }
} 


export default function Home(props:PageProps<Cocktail[]>) {
  return (
    <div class="cocktail-almacen">
      <h1>Favorites</h1>
      {
        props.data.length > 0 
        ? props.data.map(e => <CocktailComponent key={e.idDrink} {...e}/>) 
        : <h3>Add your first cocktail to favorites</h3>
      }
    </div>
  )
}
