import React, { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard =  ( { id, name , sprites = [] }) => {
    
    
    const [boxSize, setBoxSize] = useState({width: 0, height:0})
    const pRef = useRef();
    
    useLayoutEffect(() => {
        // uselayout muestra datos cuando el componente a finalizao de cargar completamente 
        // se recomienda usar useffect siempre
        const {height, width} = pRef.current.getBoundingClientRect();
        setBoxSize({
            height, width
        })
        console.log(boxSize)

    }, [id])

    return (
        <section ref={pRef} style={{height:200}}>
            <h2   className='text-capitalize'> #{id} - { name }</h2>
    
            {
                sprites.map((image, index)=>{
                    return(
                        <img  src={image}  key={image} alt={name}/>
                    )
                })
            }
            {/* <img src={ sprites?.front_default } alt='default'/>     */}
            
        </section>
    )
}
