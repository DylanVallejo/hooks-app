import { useRef } from "react"


export const FocusScreen = () => {
    
    const inputRef = useRef();
    // console.log(ref)
    
    const onClickBtn = () => {
        // document.querySelector('input').select();
        // console.log(inputRef.current.select)
        inputRef.current.select()
        
    }
    
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>
            <input ref={ inputRef }  type='text' placeholder='Ingrese su nombre:' className="form-control"/>
            
            
            <button 
                className="btn btn-primary mt-2" 
                onClick={onClickBtn}
            >
                Set Focus
            </button>
        </>
    )
}
