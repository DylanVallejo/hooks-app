import { useState } from "react";

export const CounterApp = () => {
    
    const [state,setCounter] = useState({
        counterUno: 10,
        counterDos: 20,
        counterTres: 30
    });
    
    const {counterUno,counterDos,counterTres} = state;
    
    
    return (
        <>
            <h1>Counter: {counterUno }</h1>
            <h1>Counter 2: { counterDos }</h1>
            <h1>Counter 3: { counterTres }</h1>
            
            
            <hr />
            <button className="btn btn-primary m-2" onClick={()=> setCounter( {...state, counterUno: counterUno + 1} )}>+1</button>
            <button className="btn btn-primary m-2" onClick={()=> setCounter( counterDos + 1 )}>+1</button>
            <button className="btn btn-primary m-2" onClick={()=> setCounter( counterTres + 1 )}>+1</button>

            
        </>
    )
}
