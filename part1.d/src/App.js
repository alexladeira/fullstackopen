import React, { useState } from "react";
import "./App.css";

const Button = props => {
  return (
    <button type="button" className="button-margin" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

const Statics = props => {
  if (props.good + props.neutral + props.bad > 0) {
    return (
      <>
        <p>Statics</p>
        <div>
          <div>good: {props.good}</div>
          <div>neutral: {props.neutral}</div>
          <div>bad: {props.bad}</div>
          <div>all: {props.good + props.neutral + props.bad}</div>
          <div>
            average:
            {(props.good * 1 + props.neutral * 0 + props.bad * -1) /
              (props.good + props.neutral + props.bad)}
          </div>
          <div>
            positive:
            {(props.good / (props.good + props.neutral + props.bad)) * 100}%
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>Statics</p>
        <div>No feedback were given</div>
      </>
    );
  }
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = opinion => () => {
    if ("good" === opinion) {
      setGood(good + 1);
    } else if ("neutral" === opinion) {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Unicafe feedback</p>
        <div>
          <Button title="Good" onClick={increment("good")} />
          <Button title="Neutral" onClick={increment("neutral")} />
          <Button title="Bad" onClick={increment("bad")} />
        </div>
        <br />
        <Statics good={good} neutral={neutral} bad={bad} />
      </header>
    </div>
  );
}

export default App;
