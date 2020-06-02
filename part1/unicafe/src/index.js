import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) =>  {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    );
}

const Statistics = (props) => {
    if (props.total === 0) {
        return (
            <div id="resultsArea">
                <h1>Statistics</h1>
                <p>No feedback given.</p>
            </div>
        );
    }
    
    const calculateAverage = () => ((props.good - props.bad)/props.total);

    const calculatePercent = () => ((props.good/props.total) * 100);

    return (
        <div id="resultsArea">
            <h1>Statistics</h1>
            <p>Good: {props.good}</p>
            <p>Neutral: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
            <p>Total Responses: {props.total}</p>
            <p>Average Rating: {calculateAverage()}</p>
            <p>Percent Positive: {calculatePercent()}</p>
        </div>
    );
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);

    const handleClick = (stateVariable,stateFunction) => {
        const handler = () => {
            stateFunction(stateVariable + 1)
            setTotal(total + 1)
        }
        return handler;
    }

   
    return (
        <div>
            <div id="inputArea">   
                <h1>Give Feedback </h1>
                <Button text="Good" onClick={handleClick(good, setGood)} />
                <Button text="Neutral" onClick={handleClick(neutral, setNeutral)} />
                <Button text="Bad" onClick={handleClick(bad, setBad)} />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
       </div>
    );
}

ReactDOM.render(<App />, 
    document.getElementById('root')
);
