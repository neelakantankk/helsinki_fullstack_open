import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const courses = [
    {
        name: 'Half-stack Application Development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using Props to Pass Data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of A Component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }, 
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
]


ReactDOM.render(
    <App courses={courses} />, 
    document.getElementById('root'))