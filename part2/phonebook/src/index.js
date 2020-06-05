import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const persons = [
    { 
        name: 'Arto Hellas',
        number: '011-32201922',
        id: 1
    },
    {
        name: 'Marty McFly',
        number: '0981231121',
        id: 2
    },
    {
        name: 'God',
        number: '000',
        id:3
    },
    {
        name: 'The Beast',
        number: '666',
        id: 4
    }
]
ReactDOM.render(
    <App  personList={persons} />,
    document.getElementById('root')
)
