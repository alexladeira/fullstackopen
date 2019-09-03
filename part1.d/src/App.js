import React, { useState } from "react";
import "./App.css";

const Button = props => {
  return (
    <button type="button" className="button-margin" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incGood = newValue => () => {
    console.log(newValue);
    setGood(newValue);
  };

  const incNeutral = newValue => () => {
    setNeutral(newValue);
  };

  const incBad = newValue => () => {
    setBad(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Unicafe feedback</p>
        <div>
          <Button title="Good" onClick={incGood(good + 1)} />
          <Button title="Neutral" onClick={incNeutral(neutral + 1)} />
          <Button title="Bad" onClick={incBad(bad + 1)} />
        </div>
        <br />
        <p>Statics</p>
        <div>
          <div>good: {good}</div>
          <div>neutral: {neutral}</div>
          <div>bad: {bad}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
