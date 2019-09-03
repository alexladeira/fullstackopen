import React, { useState } from "react";
import "./App.css";

const Button = props => {
  return (
    <button type="button" className="button-margin" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

const Statistic = props => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = props => {
  if (props.good + props.neutral + props.bad > 0) {
    return (
      <>
        <p>Statics</p>
        <table>
          <tbody>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <Statistic
              text="all"
              value={props.good + props.neutral + props.bad}
            />
            <Statistic
              text="average"
              value={
                (props.good * 1 + props.neutral * 0 + props.bad * -1) /
                (props.good + props.neutral + props.bad)
              }
            />
            <Statistic
              text="positive"
              value={
                (props.good / (props.good + props.neutral + props.bad)) * 100 +
                "%"
              }
            />
          </tbody>
        </table>
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
        <Statistics good={good} neutral={neutral} bad={bad} />
      </header>
    </div>
  );
}

export default App;
