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

    const handleGood = () => setGood(good + 1);
    const handleNeutral = () => setNeutral(neutral + 1);
    const handleBad = () => setBad(bad + 1);
        
    return (
        <div>
            <div id="inputArea">   
                <h1>Give Feedback </h1>
                <Button text="Good" onClick={handleGood} />
                <Button text="Neutral" onClick={handleNeutral} />
                <Button text="Bad" onClick={handleBad} />
            </div>
            <div id="resultsArea">
                <h1>Statistics</h1>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, 
    document.getElementById('root')
);
