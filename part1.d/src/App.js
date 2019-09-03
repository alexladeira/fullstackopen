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
