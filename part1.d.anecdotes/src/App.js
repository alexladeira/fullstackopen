import React, { useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
  ];
  const [selected, setSelected] = useState(0);
  const [votes, updateVotes] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const next = () =>
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)));

  const vote = () => {
    let v = [...votes];
    v[selected] += 1;
    updateVotes(v);
  };

  return (
    <div className="App">
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button type="button" onClick={vote}>
        vote
      </button>
      <button type="button" onClick={next}>
        next anecdote
      </button>
    </div>
  );
}

export default App;
