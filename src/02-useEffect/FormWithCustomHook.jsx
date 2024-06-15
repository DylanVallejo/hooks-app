import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
// import { Message } from "./Message";

export const FormWithCustomHook = () => {
    
    const { formState, onInputChange, onResetForm,  userName , email, password } = useForm({
        userName : '',
        email: '',
        password : ""
    })
    
    // const { userName, email, password } = formState

    return (
        <>
            <h1>Formulario con custom Hook</h1>
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
            
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />
            
            <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
            
            {/* { 
                (userName === "strider") && <Message/>
            } */}
            
        </>
    )
}
