import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Display from './components/Display'

const App = () => {
    console.log("Rendering App component")
    const [countries, setCountries] = useState([])
    const [countryFilter, setFilter] = useState('')
    const [weather, setWeather] = useState(false)

    const hook = () => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                console.log("Fetched",response.data.length,"countries")
                setCountries(response.data)
            })
    }

    useEffect(hook,[])

    const handleFilter = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    if (countries.length === 0) {
        return (
            <div><h1>Countries of The World</h1></div>
        )
    }

    return (
        <div>
            <h1>Countries of The World</h1>
            <Filter stateVar={countryFilter} stateHandler={handleFilter} />
            <Display countries={countries} 
                search={countryFilter} searchStateHandler = {setFilter}
                weather={weather} weatherSetter = {setWeather}
            />
        </div>
    )
}

export default App







