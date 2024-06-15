import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState( initialForm );
    
    // userName : '',
    // email: '',
    // password : ""
    
    const onInputChange = ({ target }) => {
        const {name , value} = target;
        setFormState({
            ...formState,
            [ name ] : value
        });
    }
    
    
    return  {
        ...formState,
        formState,
        onInputChange
    };

}
