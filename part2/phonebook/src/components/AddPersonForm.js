import React from 'react'

const AddPersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                Name: <input 
                        value={props.stateVar.name} 
                        onChange={props.handleChange.name} /><br />
                Number: <input
                         value={props.stateVar.number}
                         onChange={props.handleChange.number} /><br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddPersonForm
