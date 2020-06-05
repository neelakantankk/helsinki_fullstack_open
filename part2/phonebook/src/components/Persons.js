import React from 'react'
import Person from './Person'

const Persons = ({persons, search}) => {
    const personsToShow = (search === '')
            ? persons
            : persons.filter(
                person => 
                    person.name.toLowerCase().includes(search.toLowerCase())
            )
    return (
        <div>
            {personsToShow.map(person =>
                <Person person={person} key={person.id} />
            )}
        </div>
    )
}

export default Persons


