import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CocktailDetailComponent from "../../components/CocktailDetailComponent.tsx";
import { getCocktailID } from "../../utils/CocktailAPI.ts";
import initMongodb from "../../utils/database.ts";
import { Cocktail } from "../../utils/types.ts";

type Data = {
    cocktail: Cocktail,
    favorite: boolean
}

export const handler:Handlers = {
    GET: async(req:Request, ctx:FreshContext<unknown,Data>) => {
        const url = new URL(req.url)
        const favorites = url.searchParams.get("favorites")
        const {id} = ctx.params
        const cocktail = await getCocktailID(id)
        if(!cocktail) return ctx.render(cocktail)

        const CocktailCollection = await initMongodb()
        const result = await CocktailCollection.findOne({idDrink:cocktail.idDrink})
        //Si existe en la base de datos y favourite === false. Lo borro de la base de datos
        if(result && favorites === "false") {
            await CocktailCollection.deleteOne({idDrink:cocktail.idDrink})
            return ctx.render({cocktail, favorite:true})
        }
        //Si no existe en la base de datos y favourite === true. Lo añado a la base de datos
        if(!result && favorites === "true") {
            await CocktailCollection.insertOne({
                idDrink: cocktail.idDrink,
                strDrink:cocktail.strDrink,
                strDrinkThumb: cocktail.strDrinkThumb
            })
            return ctx.render({cocktail, favorite:false})
        } 
        return ctx.render({cocktail, favorite:!result})
    }
} 

export default (props:PageProps<Data>) => {
    if (!props.data) return (<h1>No existe es Cocktail</h1>)
    return (
        <div class="cocktail-almacen">
            <CocktailDetailComponent key={props.data.cocktail.idDrink} {...props.data}/>
        </div>
    )
} 