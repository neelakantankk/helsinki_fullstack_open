import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
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
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ search, setSearch ] = useState('')

    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const personsToShow = (search === '')
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        if (persons.some((person) => {
                return (person.name.toLowerCase() === newPerson.name.toLowerCase())
        })) {
            window.alert(`${newPerson.name} already added to directory!`)
            setNewName('')
            return false
        }

        
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        setSearch('')
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <div>
                Filter names: <input value={search} onChange={handleSearch} />
            </div>
            <div>
            <h2>Add new entry</h2>
                <form onSubmit={handleSubmit} >
                    Name: <input value={newName} onChange={handleNewName} /><br />
                    Number: <input value={newNumber} onChange={handleNewNumber} /><br />
                    <button type="submit">add</button>
                </form>
            </div>
            <div>
                <h2>Numbers</h2>
                {personsToShow.map(person => 
                        <p key={person.id}>{person.name}: {person.number}</p>
                )}
            </div>
        </div>
    )
    }

export default App
