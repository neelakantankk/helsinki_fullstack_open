import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then(persons => setPersons(persons))
    },[])



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
        if (newName === '' || newNumber ==='') {
            window.alert("Name and number cannot be blank!")
            return false
        }

        const newPerson = {
            name: newName,
            number: newNumber,
        }

        if (persons.some((person) => {
                return (person.name.toLowerCase() === newPerson.name.toLowerCase())
        })) {
            window.alert(`${newPerson.name} already added to directory!`)
            setNewName('')
            return false
        }

        personService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
                setSearch('')
            })

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
