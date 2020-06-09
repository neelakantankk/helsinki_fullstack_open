import React from 'react'
import CountryInfo from './CountryInfo'

const Display = ({countries, search, searchStateHandler, weather, weatherSetter}) => {

    console.log("Search:" , typeof(search))
    const countriesToShow =  search === ''
        ?countries
        :countries.filter(country => 
            country.name.toLowerCase().includes(search.toLowerCase())
        )
    

    console.log("Countries to show:\n", countriesToShow)

    if (countriesToShow.length === 0) {
        return (
            <div>
                <h2>Countries</h2>
                <p>No country found. Please use a different filter</p>
            </div>
        )
    } else if (countriesToShow.length === 1) {
        return (
            <div>
                <h2>Countries</h2>
                <CountryInfo country={countriesToShow[0]} weather={weather} 
                    weatherSetter={weatherSetter}/>
            </div>
        )
    } else if (countriesToShow.length > 10 ) {
        return (
            <div>
                <h2>Countries</h2>
                <p>Too many countries. Please filter.</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Countries</h2>
                <ul>
                    {countriesToShow.map(country => 
                        <li key={country.alpha3Code}>
                            {country.name}  
                            <button style={{margin: '5px'}}
                                    onClick={() => searchStateHandler(country.name)}>
                            Show details</button>
                        </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Display
