import React from 'react'

export const PokemonCard =  ( { id, name , sprites = [] }) => {

    return (
        <section style={{height:200}}>
            <h2 className='text-capitalize'> #{id} - { name }</h2>
            
            
            {
                sprites.map((image, index)=>{
                    return(
                        <img src={image}  key={image} alt={name}/>
                    )
                })
            }
            {/* <img src={ sprites?.front_default } alt='default'/>     */}
            
        </section>
    )
}
