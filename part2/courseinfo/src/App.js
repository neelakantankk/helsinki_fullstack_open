import React from 'react'
import Courses from './components/Courses'

const App = ({courses}) => {
        return (
        <>
            <h1>Web Development Curriculum</h1>
            <Courses courses={courses} />
        </>
    );
}

export default App
