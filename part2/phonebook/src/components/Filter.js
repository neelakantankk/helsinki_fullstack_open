import React from 'react'

const Filter = (props) => {
    return (
        <div>
            Filter names: <input value={props.stateVar} onChange={props.handleChange} />
        </div>
    )
}

export default Filter
