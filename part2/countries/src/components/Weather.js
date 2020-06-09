import React, {useEffect}  from 'react'
import axios from 'axios'

const Weather = ({capital, weather, weatherSetter}) => {
    console.log("Rendering Weather component")
    const api_key = process.env.REACT_APP_OWM_KEY
    const params = {
        q:capital,
        appid:api_key,
        units:'metric'

    }


    const hook = () => {
        console.log("Calling Hook...")
        axios
            .get('https://api.openweathermap.org/data/2.5/weather', {params})
            .then(response => {
                console.log("Response is:",response)
                weatherSetter(response.data)
            })
            .catch(error => {
                weatherSetter(false)
            })
        }

    useEffect(hook, [])

    if (weather === false) {
        return(
            <div id="weather">
                <h4>Weather in {capital}</h4>
                <p>Weather data not available.</p>
            </div>
        )
    }

               
    console.log("State of weather is: ",weather)
    console.log("Capital is",capital)
    
    console.log("Rendered Weather component") 
    return (
        <div id="weather">
            <h4>Weather in {capital}</h4>
            <p><b>Temperature</b>: {weather.main.temp} {'\u2103'}</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon" style={{border: "solid 3px"}}/>
            <p><b>Wind speed</b>: {weather.wind.speed} m/s {weather.wind.deg}{'\u00b0'}</p>
        </div>
    )
}

export default Weather


