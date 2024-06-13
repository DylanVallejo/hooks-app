import { useCounter } from "../hooks/useCounter";


export const CounterWhitCustomHook = () => {
    
    const { counter } = useCounter();
    
    
    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
        
            <button className="btn btn-primary m-2">+1</button>
            <button className="btn btn-danger m-2">Reset</button>
            <button className="btn btn-secondary m-2">-1</button>
            
        </>
    )
}
