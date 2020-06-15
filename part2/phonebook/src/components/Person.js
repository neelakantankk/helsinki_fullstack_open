import React from 'react'

const Person = ({person, deleteEntry}) => {
    return (
        <div>
            <p>
                {person.name}: 
                {person.number} 
                <button onClick={() => deleteEntry(person)}>
                    Delete
                </button>
            </p>
        </div>
    )
}

export default Person
