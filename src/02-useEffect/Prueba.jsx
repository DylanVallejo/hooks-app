import React, { useEffect, useState } from 'react'
import { items } from  '../hooks/info.js'
// const https = require('https');


export const Prueba = () => {
    
    const mockWeatherData = {
        'New York': { 
            temperature: '22°C', 
            humidity: '56%', 
            windSpeed: '15 km/h'
        },
        'Los Angeles': {
            temperature: '27°C',
            humidity: '45%',
            windSpeed: '10 km/h',
        },
        'London': { 
            temperature: '15°C', 
            humidity: '70%', 
            windSpeed: '20 km/h' 
        },
    };
    
    // object keys permite sacar las llaves 
    const [cityName, setCityName] = useState("");
    const [cityData, setCityData] = useState(null)
    const [found,setFound] = useState(false);
    const [searchCity, setSearchCity] = useState([])
    
    
    const [intialItems, setInitialItems] = useState([]);
    
    useEffect(()=>{
        // console.log(items)
        setInitialItems(items);
    },[])
    // console.log(intialItems)
    
    
    function limpiar(intialItems){
        intialItems.forEach((element, index) => {
            console.log(element)
        });
    }
    limpiar(intialItems)

    const findCity =  ( cityName ) => { 
        const data = mockWeatherData[cityName]
        if(data) {
            setCityName(cityName)
            setCityData(data);
            setFound(true)
            if( searchCity.includes(cityName)){
                setSearchCity([...searchCity])
            }else{
                setSearchCity([cityName,...searchCity])
            }
            // setCityName("")
        }else{
            setCityData(null);
            setFound(false)
            alert("city not found")
            // setCityName("")
        }
        
    }
    const  handleClickCity = (name) =>{
        findCity(name)
    }
    
    
    return (
        <div>
            <input type="text" id="citySearch" placeholder="Search for a city..."  
            value = { cityName } onChange = {(e)=>setCityName(e.target.value)}
            />


                <button id="searchButton" onClick={()=>findCity(cityName)}>Search</button>
                <div id="weatherData">
                    <h3>{cityName}</h3>
                    <div>Temperature: {cityData?.temperature} </div>
                    <div>Humidity:{cityData?.humidity} </div>
                    <div>Wind Speed: {cityData?.windSpeed}</div>
                    
                    {
                        found === true ? <div>City  found . {cityName}</div> : <div>City not found . {cityName}</div>
                    }
                    
                </div> 
            <div id="previousSearches">
                <h3>Citys searched</h3>
                <ul>
                    {
                        searchCity.map((city, index) => (
                            <li onClick={() => handleClickCity(city)} key={index}>
                                {city}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
