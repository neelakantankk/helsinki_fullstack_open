import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) =>  {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
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

    const calculateAverage = () => {
        return ((good - bad)/total);
    }

    const calculatePercent = () => {
        return ((good/total) * 100);
    }
    
    if (total === 0) {
        return (
            <div>
                <div id="inputArea">   
                    <h1>Give Feedback </h1>
                    <Button text="Good" onClick={handleClick(good, setGood)} />
                    <Button text="Neutral" onClick={handleClick(neutral, setNeutral)} />
                    <Button text="Bad" onClick={handleClick(bad, setBad)} />
                </div>
                <div id="resultsArea">
                    <h1>Statistics</h1>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total Responses: {total}</p>
                    <p>Average Rating: 0</p>
                    <p>Percent Positive: 0 %</p>
                </div>
            </div>
        );
    } 
        
    return (
        <div>
            <div id="inputArea">   
                <h1>Give Feedback </h1>
                <Button text="Good" onClick={handleClick(good, setGood)} />
                <Button text="Neutral" onClick={handleClick(neutral, setNeutral)} />
                <Button text="Bad" onClick={handleClick(bad, setBad)} />
            </div>
            <div id="resultsArea">
                <h1>Statistics</h1>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total Responses: {total}</p>
                <p>Average Rating: {calculateAverage()}</p>
                <p>Percent Positive: {calculatePercent()} %</p>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, 
    document.getElementById('root')
);
