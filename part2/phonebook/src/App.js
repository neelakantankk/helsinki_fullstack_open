import React, { useState } from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import Persons from './components/Persons'

const App = ({personList}) => {
    const [ persons, setPersons ] = useState(personList)
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ search, setSearch ] = useState('')

    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }

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
            <Filter stateVar={search} handleChange={handleSearch} />
            <div>
            <h2>Add new entry</h2>
            <AddPersonForm handleSubmit={handleSubmit}
                    stateVar = {{name: newName, number: newNumber}}
                    handleChange = {{name: handleNewName, number: handleNewNumber}}
            />
            </div>
            <div>
                <h2>Numbers</h2>
                <Persons persons={persons} search={search} />
            </div>
        </div>
    )
    }

export default App
