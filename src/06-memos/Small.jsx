// import { memo } from "react"
import React from 'react';

export const Small = React.memo(( { value } ) => {
    
    console.log(' me volvi a generar :c ')
    
    return (
        <small>{ value }</small>
    )
})
