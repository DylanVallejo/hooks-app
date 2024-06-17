import { useFetch } from "../hooks"


export const MultipleCustomHooks = () => {
    
    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/2')
    
    return (
        <>
            <h1>Informacion Pokemon</h1>
            <hr/>
            
            { isLoading && <p>Cargando</p> }
            
            <pre> { data?.name } </pre>
        </>
    )
}
