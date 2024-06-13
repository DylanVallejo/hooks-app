import { useCounter } from "../hooks/useCounter";


export const CounterWhitCustomHook = () => {
    
    const { counter, decrement, increment, reset } = useCounter();
    
    
    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
        
            <button className="btn btn-primary m-2" onClick={ () => increment(2) }>+2</button>
            <button className="btn btn-danger m-2" onClick={ reset }>Reset</button>
            <button className="btn btn-secondary m-2" onClick={ () =>decrement(2) }>-2</button>
            
        </>
    )
}
