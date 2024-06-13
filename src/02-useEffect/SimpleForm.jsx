import { useEffect, useState } from "react"

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        userName : 'strider',
        email: 'strider@google.com'
    })
    
    const  { userName, email } = formState;
    
    const onInputChange = ({ target }) => {
        const {name , value} = target;
        setFormState({
            ...formState,
            [ name ] : value
        });
    }
    
    useEffect(() => {
        console.log("UseEffect called!")
    })
    
    
    return (
        <>
            <h1>Formulario simple</h1>
            <hr/>
            
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="userName"
                value={ userName }
                onChange={ onInputChange }
            />
            
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
        </>
    )
}
