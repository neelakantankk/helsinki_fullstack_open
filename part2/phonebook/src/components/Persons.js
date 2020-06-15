import React from 'react'
import Person from './Person'

const Persons = ({persons, search, delEntry}) => {
    const personsToShow = (search === '')
            ? persons
            : persons.filter(
                person => 
                    person.name.toLowerCase().includes(search.toLowerCase())
            )
    return (
        <div>
            {personsToShow.map(person => {
                return (
                        <Person 
                            key={person.id} 
                            person={person} 
                            deleteEntry={delEntry}
                        />
                )
            }
            )}
        </div>
    )
}

export default Persons


