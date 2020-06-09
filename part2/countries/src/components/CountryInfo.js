import React from 'react'
import Weather from './Weather'

const CountryInfo = ({country, weather, weatherSetter }) => {
    
    

    return (
        <div>
            <h3>{country.name}</h3>
            <div id="basicInfo">
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
            </div>
            <div id="languages">
                <h4>Languages</h4>
                <ul>
                    {country.languages.map(language =>
                        <li key={language.iso639_2}>{language.name}</li>
                    )}
                </ul>
            </div>
            <div id="flag">
                <h4>Flag</h4>
                <img src={country.flag} alt="flag" height="216" width="360" />
            </div>
            <Weather capital={country.capital} 
                weather={weather} weatherSetter={weatherSetter}/>
        </div>
    )
}

export default CountryInfo
