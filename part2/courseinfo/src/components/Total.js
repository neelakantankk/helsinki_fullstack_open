import React from 'react'

const Total = ({content}) => {
    const total = content.reduce((sum,part) => {
        return (sum + part.exercises)
    },0);



    return (
        <>
            <p><b>Total {total} exercises.</b></p>
        </>
    );
}

export default Total
