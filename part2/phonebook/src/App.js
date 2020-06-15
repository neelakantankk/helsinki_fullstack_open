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

        const foundPerson =  persons.find((person) => 
                (person.name.toLowerCase() === newName.toLowerCase()))
        
        if (foundPerson !== undefined) 
        {
            const replaceNumber = 
                window.confirm(
                    `${foundPerson.name} is already in the phonebook.`
                    + ' Replace with new number?')

            if (replaceNumber) {
                const newPerson = {
                    ...foundPerson,
                    number: newNumber
                }
                personService
                    .update(foundPerson.id,newPerson)
                    .then(returnedPerson => {
                        setPersons(
                            persons.map(person => person.id !== foundPerson.id
                                ?person
                                :returnedPerson)
                        )
                    })

            } 
            setNewName('')
            setNewNumber('')
            return false
        }
        const newPerson = {
            name: newName,
            number: newNumber,
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

    const deleteEntry = (person) => {
        const confirmDelete = window.confirm(`Delete ${person.name}?`)

        if (!confirmDelete) {
            return false
        }

        personService
            .deleteEntry(person.id)
            .then(isDeleted => {
                if (isDeleted) {
                    setPersons(persons.filter(
                        p => p.id !== person.id))
                } else {
                    console.log("Could not delete!")
                }
            })
            .catch(error => console.log(error))
            
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
                <Persons persons={persons} search={search} delEntry={deleteEntry}/>
            </div>
        </div>
    )
    }

export default App
