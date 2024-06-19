import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHooks = () => {
    
    const {decrement, increment, counter } = useCounter();
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    return (
        <>
            <h1>Informacion Pokemon</h1>
            <hr/>
            {   
                isLoading 
                ? <LoadingMessage/> 
                : <PokemonCard id = { counter } name ={data.name} sprites ={[
                    data.sprites.front_default,
                    data.sprites.back_default,
                    data.sprites.front_shiny,
                    data.sprites.back_shiny,                    
                ]}/> 
            }
            <button className="btn btn-primary mt-2" onClick={() => decrement()}>
                Anterior
            </button>
            <button className="btn btn-primary mt-2"  onClick={() => increment()} >
                Siguiente
            </button>
        </>
    )
}
