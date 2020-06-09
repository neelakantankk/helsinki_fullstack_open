import React from 'react'

const Filter = ({stateVar,stateHandler}) => {
    console.log("Rendering Filter component")
    return (
        <div>
            <h2>Filter</h2>
            <p><input value={stateVar} onChange={stateHandler} /></p>
        </div>
    );
}

export default Filter

