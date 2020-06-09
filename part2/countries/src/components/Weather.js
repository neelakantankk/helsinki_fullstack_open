import React, {useEffect}  from 'react'
import axios from 'axios'

const Weather = ({capital, weather, weatherSetter}) => {
    const api_key = process.env.REACT_APP_WEATHER_API
    const params = {
        access_key:api_key,
        query:capital
    }
    

    const hook = () => {
        console.log("Calling Hook...")
        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => {
                console.log("Response is:",response)
                weatherSetter(response.data)
            })
        }

    useEffect(hook, [])

    if (weather === false) {
        return(
            <div id="weather">
                <h4>Weather in {capital}</h4>
                <p>Getting data...</p>
            </div>
        )
    }
               
    console.log("State of weather is: ",weather)
    console.log(capital)
    if (weather.success===false) {
        return(
            <>
                <p>No data returned.</p>
            </>
        )
    }
    return (
        
        <div id="weather">
            <h4>Weather in {capital}</h4>
            <p><b>Temperature</b>: {weather.current.temperature} {'\u2103'}</p>
            <img src={weather.current.weather_icons} alt="weather icon" />
            <p><b>Wind speed</b>: {weather.current.wind_speed} km/hr {weather.current.wind_dir}</p>
        </div>
    )
}

export default Weather


