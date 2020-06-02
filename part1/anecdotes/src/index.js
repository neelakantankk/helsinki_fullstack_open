import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const createArray = (len) => {
    return (new Array(len).fill(0));
}

const App = (props) => {

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(createArray(props.anecdotes.length));

    const handleClick = () => {
        let random_number = Math.floor(Math.random() * Math.floor(props.anecdotes.length));

        while (random_number === selected) {
            random_number = Math.floor(Math.random() * Math.floor(props.anecdotes.length));
        }

        console.log("Random index is ", random_number);
        setSelected(random_number);
    }

    const handleVote = () => {
        const copy = [...votes];
        copy[selected] = copy[selected] + 1;
        setVotes(copy);
    }

    const mostVotes = () => {
        return votes.indexOf(Math.max(...votes));
    }


    return (
        <div>
            <div id="dailyAnecdote">
                <h1>Anecdote of The Day</h1>
                <p>{props.anecdotes[selected]}<br />
                has {votes[selected]} votes.</p>
                <button onClick={handleVote}>Vote</button>
                <button onClick={handleClick}>Next anecdote</button>
            </div>
            <div id="mostVoted">
                <h1>Anecdote with Most Votes</h1>
                <p>{props.anecdotes[mostVotes()]}<br />
                has {Math.max(...votes)} votes. </p>
            </div>
        </div>
    );
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
