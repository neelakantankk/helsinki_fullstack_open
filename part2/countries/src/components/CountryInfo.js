import React from 'react'

const CountryInfo = ({country}) => {
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
        </div>
    )
}

export default CountryInfo
