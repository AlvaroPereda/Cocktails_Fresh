import { Collection, MongoClient } from "mongodb"
import { CocktailModel } from "./types.ts";

let CocktailCollection:Collection<CocktailModel>

const initMongodb = async() => {
    if(CocktailCollection) return CocktailCollection

    const url = Deno.env.get("MONGO_URL")
    if(!url) throw new Error("Error con MONGO_URL")

    const client = new MongoClient(url)
    await client.connect()
    console.log("Conectado a mongodb")

    const db = client.db("cocktail")
    CocktailCollection = db.collection<CocktailModel>("drinks")

    return CocktailCollection
}

export default initMongodb