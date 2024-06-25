import { useEffect, useState } from "react";

const localCache = {
    // 'https://pokemon/1': {name: 'Bulbasur', info},
    // 'https://pokemon/1': {name: 'Ivysaur', info},
};


export const useFetch = ( url ) => {
    
    const [state, setState] = useState({
        data: null, 
        isLoading: true,
        hasError: false,
        errorMessage:null
    });
    
    useEffect(() => {
        
        getFetch()
        
    }, [url])
    
    const setLoadingState = () => {
        setState({
            data: null, 
            isLoading: true,
            hasError: false,
            errorMessage:null
        })
    }
    
    const getFetch = async() => {
        
        // tanksTnak query permitir realizar cacheo mini curso disponible
        
        if( localCache[url] ){
            console.log('Usando cache')
            
            setState({
                data: localCache[url],
                isLoading:false,
                hasError: false, 
                errorMessage: null
            })
            
            return;
        }
        
        setLoadingState();
        const response = await fetch(url);
        
        await new Promise( resolve => setTimeout(resolve, 1000));
        
        if(!response.ok){
            setState({
                data:null,
                isLoading: false,
                hasError:true,
                errorMessage: {
                    code: response.status,
                    message: response.statusText,
                }
            })
            return;
        }
        const data = await response.json();
        setState({
            data:data,
            isLoading: false,
            hasError:false,
            errorMessage:null
        })
        
        localCache[url] = data;
    }
    
    
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
